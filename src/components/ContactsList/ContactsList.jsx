import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactItem/ContactItem';
// import { ListUl } from './ContactList.styled';
import { ButtonB } from '../Button/Button.styled';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { useState } from 'react';

// import {selectContactsOptions} from'../../redux/contacts/contacts-selectors'
//* re export
import { contactsSelectors } from 'redux/contacts';

import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export const ContactsList = () => {
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const contacts = useSelector(
    contactsSelectors.selectContactsOptionsWithCreateReduser
  );

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => contactId === id);
    setContactToUpdate(contact);
  };
  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {contacts.map(option => (
          <Grid item xs={2} sm={4} md={4} key={option.id} >
            <Box sx={{bgcolor:' rgb(48, 64, 64)', border:'2px solid red',padding:'5px', color:'rgb(76, 181, 245)', borderRadius:'6px'}}><ContactListItem key={option.id} {...option} />
            <ButtonB onClick={() => showUpdateForm(option.id)}>
              Update User
            </ButtonB>
            {contactToUpdate && contactToUpdate.id === option.id && (
              <UpdateForm
                contactToUpdate={contactToUpdate}
                closeForm={closeForm}
              />
            )}</Box>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

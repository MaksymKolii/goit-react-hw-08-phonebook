import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { selectIsLoading } from '../../redux/contacts/contacts-selectors';
import { Loader } from '../../components/Loader/Loader';
import { Filter } from '../../components/Filter/Filter';
// import { Section } from '../../components/Section/Section';
import Box from '@mui/material/Box';

const UsersPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setFormShown] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const showContactsList = () => {
    setIsListShown(true);
    dispatch(fetchContacts());
  };

  const showForm = () => {
    setFormShown(true);
  };

  const closeForm = () => {
    setFormShown(false);
  };
  return (
    <>
      {/* <Section> */}
      {isListShown ? (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly',mb:'35px', mt:'35px' }}>
          
            {isLoading && <Loader />}
            {!isFormShown && !isLoading && (
              <Button text="Add contact" clickHandler={showForm}></Button>
            )}
            {isFormShown && <ContactForm closeForm={closeForm} />}
            <Filter />
          </Box>

          <ContactsList />
        </>
      ) : (
        <>
          <Button text="Show contacts" clickHandler={showContactsList}></Button>
        </>
      )}
      {/* </Section> */}
    </>
  );
};
export default UsersPage;

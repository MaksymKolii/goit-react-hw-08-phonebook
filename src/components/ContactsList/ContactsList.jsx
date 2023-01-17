import { useSelector} from 'react-redux';
import { ContactListItem } from '../ContactItem/ContactItem';
import { ListUl } from './ContactList.styled';
import { ButtonB } from '../Button/Button.styled';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { useState } from 'react';

// import {selectContactsOptions} from'../../redux/contacts/contacts-selectors'
//* re export
import { contactsSelectors } from 'redux/contacts';


export const ContactsList = () => {
const [contactToUpdate, setContactToUpdate] = useState(null)
const contacts = useSelector(contactsSelectors.selectContactsOptionsWithCreateReduser);

  const showUpdateForm =(contactId)=>{

    const contact=contacts.find(({id})=>contactId===id)
    setContactToUpdate(contact)
  }
 const closeForm =()=>{
  setContactToUpdate(null)
 }
 
  return (
    <ListUl>
      {contacts.map(option => (
        <div key={option.id} >  
        <ContactListItem key={option.id} {...option} />
        <ButtonB onClick={()=>showUpdateForm(option.id)}>Update User</ButtonB>
        {contactToUpdate && contactToUpdate.id===option.id && <UpdateForm contactToUpdate={contactToUpdate} closeForm ={closeForm}/>}
        </div>
      
      ))}
     
    </ListUl>
  );
};

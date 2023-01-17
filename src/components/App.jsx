import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button/Button';
import { ContactForm } from './ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ContactsList } from './ContactsList/ContactsList';
import { selectIsLoading } from '../redux/contacts/contacts-selectors';
import { Loader } from './Loader/Loader';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { GlobalStyle } from './Utils/GlobalStyle';

export const App = () => {
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
      <Section>
        {isListShown ? (
          <>
            {isLoading && <Loader />}
            {!isFormShown && !isLoading && (
              <Button text="Add contact" clickHandler={showForm}></Button>
            )}
            {isFormShown && <ContactForm closeForm={closeForm} />}
            <Filter />
            <ContactsList />
          </>
        ) : (
          <>
            <Button
              text="Show contacts"
              clickHandler={showContactsList}
            ></Button>
          </>
        )}
      </Section>

      <GlobalStyle />
    </>
  );
};

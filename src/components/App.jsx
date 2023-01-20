// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Button } from './Button/Button';
// import { ContactForm } from './ContactForm/ContactForm';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// import { ContactsList } from './ContactsList/ContactsList';
// import { selectIsLoading } from '../redux/contacts/contacts-selectors';
// import { Loader } from './Loader/Loader';
// import { Filter } from './Filter/Filter';
// import { Section } from './Section/Section';
import { GlobalStyle } from '../components/Utils/GlobalStyle';


// import { Registerform } from './RegisterForm/RegisterForm';
// import { Loginform } from './LoginForm/LoginForm';
// import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';

// export const App = () => {
//   const [isListShown, setIsListShown] = useState(false);
//   const [isFormShown, setFormShown] = useState(false);
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   const showContactsList = () => {
//     setIsListShown(true);
//     dispatch(fetchContacts());
//   };

//   const showForm = () => {
//     setFormShown(true);
//   };

//   const closeForm = () => {
//     setFormShown(false);
//   };
//   return (
//     <>
//     <UserAuthMenu/>
//     <Registerform/>
//     <Loginform/>
//       <Section>
//         {isListShown ? (
//           <>
//             {isLoading && <Loader />}
//             {!isFormShown && !isLoading && (
//               <Button text="Add contact" clickHandler={showForm}></Button>
//             )}
//             {isFormShown && <ContactForm closeForm={closeForm} />}
//             <Filter />
//             <ContactsList />
//           </>
//         ) : (
//           <>
//             <Button
//               text="Show contacts"
//               clickHandler={showContactsList}
//             ></Button>
//           </>
//         )}
//       </Section>

//       <GlobalStyle />
//     </>
//   );
// };

import { Routes, Route } from "react-router-dom"
import {HomePage} from 'Pages/HomePage/HomePage'
import { RegisterPage } from "Pages/RegisterPage/RegisterPage"
import { LoginPage } from "Pages/LoginPage/LoginPage"
import { UsersPage } from "Pages/UsersPage/UsersPage"
import { Layout } from 'Pages/Layout/Layout';


export const App =()=>{
return(
  <>  <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='users' element={<UsersPage/>}/>
    <Route path='register' element={<RegisterPage/>}/>
    <Route path='login' element={<LoginPage/>}/>
  </Route>
</Routes>
 <GlobalStyle /></>

  
)
}
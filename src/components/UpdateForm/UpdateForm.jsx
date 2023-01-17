import React from 'react';
// import { useFormik } from 'formik';
import { Form, Label, Input, Button } from './UpdateForm.styled';
import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
// import { selectContacts } from 'redux/contacts/contacts-selectors';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import PropTypes from 'prop-types';
// import * as yup from 'yup';

export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [phone, setPhone] = useState(contactToUpdate.phone);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({
      ...contactToUpdate,
      name,phone
    }))
    closeForm();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'phone':
        setPhone(value);
        break
      default:
        break;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name{' '}
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="Enter name"
        />
      </Label>

      <Label>
        Number
        <Input
          id="phone"
          name="phone"
          type="text"
          onChange={handleChange}
          value={phone}
          placeholder="Enter phone number"
        />
      </Label>

      <Button type="submit">Press to submit</Button>
    </Form>
  );
};

// export const UpdateForm = ({ closeForm }) => {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   const nameTemplates =
//     /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

//   const phoneTemplates =
//     /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       phone: '',
//       // status: '',
//     },

//     validationSchema: yup.object().shape({
//       name: yup
//         .string()
//         .min(3)
//         .matches(nameTemplates, 'Invalid first, or last name')
//         .max(35, 'Must be 35 characters or less')
//         .required('Required'),
//       phone: yup
//         .string()
//         .matches(phoneTemplates, 'Phone number is not valid')
//         .required('Required'),
//     }),

//     onSubmit: async (values, { resetForm }) => {
//       const isNameExist = contacts.find(({ name, phone }) => {
//         return name === values.name || phone === values.phone;
//       });

//       if (isNameExist) {
//         Notify.info(`${values.name} is alredy in contacts!`);
//         return;
//       }
//       // const stat = await getYesNoStatus();
//       // values.status = stat;

//       dispatch(addContact(values));

//       Notify.success(`${values.name} was successfully added to contacts`);
//       // resetForm();
//       closeForm();
//     },
//   });

//   return (
//     <Form onSubmit={formik.handleSubmit}>
//       <Label htmlFor="Name">
//         Name{' '}
//         <Input
//           id="name"
//           name="name"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//           placeholder="Enter name"
//         />
//       </Label>

//       {formik.touched.name && formik.errors.name ? (
//         <Div>{formik.errors.name}</Div>
//       ) : null}
//       <Label htmlFor="Number">
//         Number
//         <Input
//           id="phone"
//           name="phone"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.phone}
//           placeholder="Enter phone number"
//         />
//       </Label>

//       {formik.touched.phone && formik.errors.phone ? (
//         <Div>{formik.errors.phone}</Div>
//       ) : null}
//       <Button type="submit">Press to submit</Button>
//     </Form>
//   );
// };

// UpdateForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onSubmit: PropTypes.func,
// };

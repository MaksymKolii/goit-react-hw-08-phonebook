import React from 'react';
import { useFormik } from 'formik';
import { Form, Label, Input, Div , Button} from './ContactForm.styled';
// import { Button } from 'components/Button/Button';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { getYesNoStatus } from 'components/services/yesNoApl';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

import PropTypes from 'prop-types';
import * as yup from 'yup';

// import { addContact } from 'redux/contacts/contactsSlice';

export const ContactForm = ({ closeForm }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameTemplates =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const phoneTemplates =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      // status: '',
    },

    validationSchema: yup.object().shape({
      name: yup
        .string()
        .min(3)
        .matches(nameTemplates, 'Invalid first, or last name')
        .max(35, 'Must be 35 characters or less')
        .required('Required'),
      number: yup
        .string()
        .matches(phoneTemplates, 'Phone number is not valid')
        .required('Required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      const isNameExist = contacts.find(({ name, number }) => {
        return name === values.name || number === values.number;
      });

      if (isNameExist) {
        Notify.info(`${values.name} is alredy in contacts!`);
        return;
      }
      // const stat = await getYesNoStatus();
      // values.status = stat;

      dispatch(addContact(values));

      Notify.success(`${values.name} was successfully added to contacts`);
      // resetForm();
      closeForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="Name">
        Name{' '}
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter name"
        />
      </Label>

      {formik.touched.name && formik.errors.name ? (
        <Div>{formik.errors.name}</Div>
      ) : null}
      <Label htmlFor="Number">
        Number
        <Input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
          placeholder="Enter phone number"
        />
      </Label>

      {formik.touched.number && formik.errors.number ? (
        <Div>{formik.errors.number}</Div>
      ) : null}
      <Button type="submit">Press to submit</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
};

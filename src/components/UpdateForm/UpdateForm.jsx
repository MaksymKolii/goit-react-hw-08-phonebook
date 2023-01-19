import React from 'react';
// import { useFormik } from 'formik';
import { Form, Label, Input, Button } from './UpdateForm.styled';
import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
// import { selectContacts } from 'redux/contacts/contacts-selectors';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import PropTypes from 'prop-types';
// import * as yup from 'yup';

export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setPhone] = useState(contactToUpdate.number);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({
      ...contactToUpdate,
      name,number
    }))
    closeForm();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
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
          id="number"
          name="number"
          type="text"
          onChange={handleChange}
          value={number}
          placeholder="Enter phone number"
        />
      </Label>

      <Button type="submit">Press to submit</Button>
    </Form>
  );
};


UpdateForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, user);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      //* обязательно передать (return id) в редюсер
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({id, name, number}, { rejectWithValue }) => {

    try {
      const {data} = await axios.patch(`/contacts/${id}`, {name, number});


      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

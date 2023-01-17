import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://63befa7b585bedcb36bc5122.mockapi.io/contacts';
axios.defaults.baseURL =
  'https://63bc57a9d66006238885de67.mockapi.io/my_phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
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
  async (user, { rejectWithValue }) => {
    try {
      const {data} = await axios.put(`/contacts/${user.id}`, user);
  
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

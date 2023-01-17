import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from './contacts-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
   
      .addCase(fetchContacts.fulfilled, (state, action) => {
   
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
      
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
       
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
       const index = state.items.findIndex(contact => contact.id===payload.id)
        state.items[index]=payload;
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending, updateContact.pending),state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled, updateContact.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected, updateContact.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
   
});

export const contactsReducer = contactsSlice.reducer;

//* С оптимизацией но без addMatcher
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = [...state.items, action.payload];
//       })
//       .addCase(addContact.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(({ id }) => id !== payload);
//       })
//       .addCase(deleteContact.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       }),
// });


//* 1 Без оптимизации селекторов
// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     extraReducers: {
//         [fetchContacts.pending]: (state) => {state.isLoading =true},
//         [fetchContacts.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },
//         [fetchContacts.rejected]: (state, {payload}) => {
//             state.isLoading = false;
//       state.error = payload;
//         },
//         [addContact.pending]: (state) => {state.isLoading =true},
//         [addContact.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = [...state.items, action.payload];
//         },
//         [addContact.rejected]: (state, {payload}) => {
//             state.isLoading = false;
//       state.error = payload;
//         },
//         [deleteContact.pending]: (state) => {state.isLoading =true},
//         [deleteContact.fulfilled]: (state, {payload}) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = state.items.filter(({id})=>id !== payload);
//         },
//         [deleteContact.rejected]: (state, {payload}) => {
//             state.isLoading = false;
//       state.error = payload;
//         },
//     },
//   });

// export const contactsReducer = contactsSlice.reducer;


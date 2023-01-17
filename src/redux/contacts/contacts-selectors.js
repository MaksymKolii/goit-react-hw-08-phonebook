import { createSelector } from "@reduxjs/toolkit";

//* contacts идет из store - contacts: contactsReducer, а items идет из contactsSlice -  items: [],
export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filter.filter;

export const selectContactsOptions = state => {
  const contacts = selectContacts(state);
  const filterInput = selectStatusFilter(state);
  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterInput.toLowerCase())
  );
  return filterInput ? getFilteredContacts : contacts;
};

export const selectContactsOptionsWithCreateReduser = createSelector([selectContacts, selectStatusFilter], (contacts, filter) =>
contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

)
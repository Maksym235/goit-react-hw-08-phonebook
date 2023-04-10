import { createSlice } from '@reduxjs/toolkit';

// -----------OPERATION-----------
import { addContact, deleteContact, fetchContacts } from './operations';

//-----------------------------------------
const pendingStatus = state => {
  state.isLoading = true;
};
const rejectedStatus = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
//----------------------------------------

//------------SLICE--------------------
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: bilder =>
    bilder
      //-----------fetch contacts---------------
      .addCase(fetchContacts.pending, pendingStatus)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, rejectedStatus)
      //---------add contacts----------------
      .addCase(addContact.pending, pendingStatus)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, rejectedStatus)
      //--------delete contacts-----------
      .addCase(deleteContact.pending, pendingStatus)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, rejectedStatus),
});

//-------------REDUCER--------------

export const contactsReduser = contactsSlice.reducer;

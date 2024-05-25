import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ContactItem = {
  id: number;
  fname: string;
  lname: string;
  active: boolean;
  avatar: string;
};

const loadContactsFromLocalStorage = (): ContactItem[] => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};

const saveContactsToLocalStorage = (contacts: ContactItem[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const initialState: ContactItem[] = loadContactsFromLocalStorage();

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<ContactItem>) {
      state.push(action.payload);
      saveContactsToLocalStorage(state);
    },
    updateContact(state, action: PayloadAction<ContactItem>) {
      const index = state.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveContactsToLocalStorage(state);
      }
    },
    deleteContact(state, action: PayloadAction<number>) {
      const newState = state.filter(contact => contact.id !== action.payload);
      saveContactsToLocalStorage(newState);
      return newState;
    }
  }
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;

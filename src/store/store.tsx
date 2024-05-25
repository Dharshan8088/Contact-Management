import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: contactReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from '@reduxjs/toolkit';
//----------------OPERATION-------------
import { signUp, logIn, logOut, refreshUser } from './authOperations';

//---------------PERSIST----------------
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: bilder =>
    bilder
      //------------SIGN UP---------
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //------------LOG IN-----------
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //------------LOG OUT---------
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      //-----------REFRESH----------
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReduser = authSlice.reducer;

//---------------PERSIST----------------

export const authPersistReduser = persistReducer(persistConfig, authReduser);

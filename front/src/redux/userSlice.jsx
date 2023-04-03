import { createSlice } from '@reduxjs/toolkit';
import { instance } from '../services/axiosApi';

const options = {
  name: 'user',
  initialState: {
    token: null,
    firstName: '',
    lastName: '',
  },

  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      instance.defaults.headers.common['Authorization'] =
        'Bearer ' + state.token;
    },

    logout: (state) => {
      state.token = null;
    },

    setUserInfos: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
};

export const userSlice = createSlice(options);

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };

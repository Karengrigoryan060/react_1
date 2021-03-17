import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from './user-model';

export interface UserState {
  users: UserModel[];
}

const initialState: UserState = {
  users: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserModel>) {
      state.users.push(action.payload);
    },
    updateUser(state) {
      
    }
  }
});
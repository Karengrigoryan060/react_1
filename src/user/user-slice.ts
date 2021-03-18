import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from './user-model';
import { map } from 'rxjs/operators';

export interface UserState {
  users: UserModel[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserModel>) {
      state.users.push(action.payload);
    },
    updateUser(state, action: PayloadAction<UserModel>) {
      // index should be passed
      state.users[1] = (action.payload);
    },
  },
});

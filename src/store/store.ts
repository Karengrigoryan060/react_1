import { configureStore } from '@reduxjs/toolkit';
import { userSlice, UserState } from 'user/user-slice';

export interface StoreModel {
  user: UserState;
}

export const store = configureStore<StoreModel>({
  reducer: {
    user: userSlice.reducer,
  }
});

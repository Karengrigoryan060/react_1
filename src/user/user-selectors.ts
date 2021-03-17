import { StoreModel } from '../store/store';

export const getUsersSelector = (store: StoreModel) => store.user.users;
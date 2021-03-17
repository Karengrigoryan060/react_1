import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersSelector } from './user-selectors';
import { userSlice } from './user-slice';

type Props = {
};

export const User: FunctionComponent<Props> = props => {
    const usersInStore = useSelector(getUsersSelector);
    const dispatch = useDispatch();

    const onAddUserClick = () => {
        dispatch(userSlice.actions.addUser({
            userName: 'userName',
            name: 'name',
            surnName: 'surName'
        }));
    };

    return (
        <div className="user">
            <button onClick={onAddUserClick}>Add user</button>
            {usersInStore.map((user, i) =>
                <div key={i}>{user.name}</div>
            )}
        </div>
    );
};
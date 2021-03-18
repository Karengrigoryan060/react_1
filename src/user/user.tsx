import React, { FunctionComponent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersSelector } from './user-selectors';
import { userSlice } from './user-slice';
import { UserModel } from 'user/user-model';

type Props = {
};

export const User: FunctionComponent<Props> = props => {
    const usersInStore = useSelector(getUsersSelector);
    const dispatch = useDispatch();

    const  [userModel, setUser]= useState<UserModel>({ id:0, name:"sd", userName:"werdfews", sureName:"erwfdws"});

  const onAddUserClick = () => {
        dispatch(userSlice.actions.addUser({
            id: usersInStore.length + 1,
            userName: 'userName',
            name: 'name',
            sureName: 'sureName'
        }));
    };

  const updateUsername = () => {
    setUser(userModel);
    dispatch(userSlice.actions.updateUser({
      id:userModel.id,
      userName: userModel.userName,
      name: userModel.name,
      sureName: userModel.sureName
    }))
  }

  function usernameOnChange(value: string) {
    console.log(value);
    userModel.userName = value;
    setUser({id: userModel.id, userName: value, sureName: userModel.sureName, name: userModel.name});
  }

  return (
        <div className="user">
            <button onClick={onAddUserClick}>Add user</button>
            {usersInStore.map((user, i) =>
                <div key={i}>
                  <div>{user.id}</div>
                  <div>{user.userName}</div>
                </div>
            )}
            <input onChange={e => usernameOnChange(e.target.value)}
            />
            <button onClick={updateUsername}>Update</button>
        </div>
    );
};

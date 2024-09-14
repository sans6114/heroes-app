import { useReducer } from 'react';

import { types } from '../types/types';
import { UserContext } from './USerContext';
import { AuthReducer } from './userReducer';

const initalState = {
  logged: false
}

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, initalState)


  const login = (name) => {

    const action = {
      type: types.login,
      payload: {
        name: name
      }
    }
    dispatch(action)
  }


  return (
    <UserContext.Provider value={{state, login: login}}>
      {children}
    </UserContext.Provider>
  )
}

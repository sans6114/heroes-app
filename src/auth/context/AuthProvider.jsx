import { useReducer } from 'react';

import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './userReducer';

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {


    const login = (name) => {

        const action = {
            type: types.login,
            payload: {
                name: name
            }
        }
        dispatch(action)
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)
    return (
        <AuthContext.Provider value={{ ...state, login: login }}>
            {children}
        </AuthContext.Provider>
    )
}

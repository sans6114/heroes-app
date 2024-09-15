import { useReducer } from 'react';

import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './userReducer';

const initialState = {
    logged: false
}


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {


    
    const login = (name) => {
        const user = {name}

        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user) )
        dispatch(action)
    }

    const logout = () => {
    const action = {
            type: types.logout,
        }
        localStorage.removeItem('user')
        dispatch(action)
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState, init)
    return (
        <AuthContext.Provider value={{
            //estado
            ...state,
             //methods
            login: login,
            logout: logout }}>
            {children}
        </AuthContext.Provider>
    )
}

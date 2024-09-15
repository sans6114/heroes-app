import { useContext } from 'react';

import {
  Navigate,
  useLocation,
} from 'react-router-dom';

import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {
    const {pathname, search} = useLocation()  
    const lasthPath = pathname + search
    localStorage.setItem('lastPath', lasthPath)
    const { logged } = useContext(AuthContext)
 
        return (logged)
        ? children
        : <Navigate to="/login" />
    }


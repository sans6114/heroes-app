import { useContext } from 'react';

import {
  DarkThemeToggle,
  Navbar,
} from 'flowbite-react';
import { CiUser } from 'react-icons/ci';
import {
  NavLink,
  useNavigate,
} from 'react-router-dom';

import { AuthContext } from '../../auth/context/AuthContext';
import { Btn } from './Btn';

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogOut = () => {
    logout()
    navigate('/')
  }
  const navLink = 'text-center py-2.5 px-1 me-2 mb-2 text-sm font-bold text-gray-900 rounded-xl w-full md:w-32 border-2 border-blue-500 dark:text-white focus:z-10'
  return (
    <Navbar fluid className='fixed top-0 w-full shadow-2xl z-50'>
      <Navbar.Brand>
        <img src="/public/hero.svg" className="mr-3 h-6 sm:h-9" alt="App logo with hero" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Heroes App</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className='flex mx-auto items-center w-2/4 px-5 text-gray-800 dark:text-white'>
          {
            user ? (
              <div className='flex items-center mx-2 gap-x-2'>
                <CiUser />
                <h2 className='font-bold'>{user?.name}</h2>
                <Btn btnText={'LogOut'} handleFunction={handleLogOut} />
              </div>
            ) : (
              <div className='flex mx-4 items-center'>

                <NavLink
                  to="/login"
                  className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
                >
                
                  login
                </NavLink>
              </div>
            )
          }

        </div>
        <DarkThemeToggle className='mx-5' />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
        >
          Presentation
        </NavLink>
        <NavLink
          to="/marvel"
          className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
        >
          Marvel
        </NavLink>

        <NavLink
          to="/dc"
          className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
        >
          DC
        </NavLink>
        <NavLink
          to="/search-hero"
          className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
        >
          Search Hero
        </NavLink>
        {
          user && (<NavLink
            to="/login"
            className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
          >
            login page
          </NavLink>)
        }
        
      </Navbar.Collapse>
    </Navbar>
  );
}
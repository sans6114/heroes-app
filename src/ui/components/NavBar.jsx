import {
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from 'flowbite-react';
import {
  NavLink,
  useNavigate,
} from 'react-router-dom';

import { Btn } from './Btn';

export const NavBar = () => {

const navigate = useNavigate()

const handleLogOut = () => {
  console.log('logout')
  navigate('/login')
}



  const navLink = 'text-center py-2.5 px-5 me-2 mb-2 text-md font-bold text-gray-900 rounded-xl w-full md:w-32  border-2 border-blue-500 dark:text-white focus:z-10'
  return (
    <Navbar fluid className='fixed top-0 w-full shadow-2xl z-50'>
      <Navbar.Brand>
        <img src="/public/hero.svg" className="mr-3 h-6 sm:h-9" alt="App logo with hero" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Heroes App</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
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
          to="/search-hero"
          className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
        >
          Search Hero
        </NavLink>
        <Dropdown
          arrowIcon={true}
          inline={true}
        >
          <div className='w-full md:max-w-sm flex flex-col gap-y-4 px-2 py-1 mt-2 rounded-3xl'>
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
          </div>
        </Dropdown>
        <NavLink
          to="/login"
          className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
        >
          login
        </NavLink>
        <Btn btnText={'LogOut'} className={'h-10'} handleFunction={handleLogOut}/>
      </Navbar.Collapse>
    </Navbar>
  );
}
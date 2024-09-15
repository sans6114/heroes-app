import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Btn } from '../../ui/components/Btn';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
const {user ,login, logout} = useContext(AuthContext)

  const navigate = useNavigate()
  
  
  //logout
  const handleLogOut = () => {
    logout()
    navigate('/')
  }


  //login
  const handleLogIn = () => {

const lastPath = localStorage.getItem('lastPath') || '/'
console.log(lastPath)
    login('santiago')
    navigate('/', { replace: true })
  }

  const isLogged = user
  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto p-5">
      <h2 className="font-bold text-center text-4xl md:tex-8xl text-gray-800 dark:text-white">
        Login Page
      </h2>
      <div className='border  my-4 w-full border-gray-800 dark:border-white'></div>
      <div>
        {
          isLogged ? (
            <Btn btnText={'Log Out'} handleFunction={handleLogOut} />
          ) : (
            <Btn btnText={'Log In'} handleFunction={handleLogIn} />
          )
        }
      </div>

    </div>
  )
}

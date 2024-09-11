import { useNavigate } from 'react-router-dom';

import { Btn } from '../../ui/components/Btn';

export const LoginPage = () => {

  const navigate = useNavigate()
  const handleLogOut = () => {
    navigate('/login')
  }
  const handleLogIn = () => {
    navigate('/', { replace: true })
  }

  const isLogged = false
  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto p-5">
      <h2 className="font-bold text-center text-4xl md:tex-8xl">
        Login Page
      </h2>
      <div className='border border-black my-4 w-full'></div>
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

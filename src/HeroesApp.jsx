import { Outlet } from 'react-router-dom';

import { UserProvider } from './auth/context/userProvider';
import { FooterApp } from './ui/components/Footer';
import { NavBar } from './ui/components/NavBar';

export const HeroesApp = () => {


  return (
   
<UserProvider>
  <main className="bg-white dark:bg-black">
    {/* navbar */}
    <NavBar  />
    {/* my pages */}
    <section className='flex flex-col items-center justify-center md:flex-wrap min-h-screen py-[100px]'>
      <Outlet />
    </section>
    {/* Footer */}
    <FooterApp/>
  </main>

</UserProvider>
    
  )
}

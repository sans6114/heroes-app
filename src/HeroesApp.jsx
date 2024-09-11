import { Outlet } from 'react-router-dom';

import { FooterApp } from './ui/components/Footer';
import { NavBar } from './ui/components/NavBar';

export const HeroesApp = () => {
  return (
  <main>
    {/* navbar */}
    <NavBar  />
    {/* my pages */}
    <section className='flex flex-col items-center justify-center md:flex-wrap min-h-screen py-[100px]'>
      <Outlet />
    </section>
    {/* Footer */}
    <FooterApp/>
  </main>
  )
}

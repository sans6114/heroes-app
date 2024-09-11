import { Footer } from 'flowbite-react';
//route imports
import { NavLink } from 'react-router-dom';

export const FooterApp = () => {

    //styles:
    const navLink = 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  rounded-full border border-gray-200 dark:text-white focus:z-10'

    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        src="/public/hero.svg"
                        alt="App Logo"
                        name="Heroes App"
                    />
                    <Footer.LinkGroup>
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
                            to="/login"
                            className={({ isActive }) => `${navLink} ${isActive ? 'bg-blue-500 text-white font-bold' : ''}`}
                        >
                            login
                        </NavLink>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="https://github.com/sans6114" by="@sans6114™" year={2024} />
            </div>
        </Footer>
    );
}

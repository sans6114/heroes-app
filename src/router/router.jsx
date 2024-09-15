import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../auth/pages/LoginPage';
import { ErrorPage } from '../ErrorPage';
import { DcPage } from '../heroes/pages/DcPage';
import { HeroPage } from '../heroes/pages/HeroPage';
import { HomePage } from '../heroes/pages/HomePage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { SearchPage } from '../heroes/pages/SearchPage';
import { HeroesApp } from '../HeroesApp';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/search-hero',
                element: <SearchPage/>,
            },
            {
                path: "marvel",
                element: <MarvelPage />,
            },
            {
                path: "dc",
                element: <DcPage />,
            },
            {
                path: "hero/:id",
                element: <HeroPage />,
            },
            {
                path: 'login',
                element: <LoginPage/>
            }
        ]
    },
]);
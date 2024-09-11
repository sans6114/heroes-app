import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../auth/pages/LoginPage';
import { ErrorPage } from '../ErrorPage';
import { DcPage } from '../heroes/pages/DcPage';
import { HomePage } from '../heroes/pages/HomePage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
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
                path: "marvel",
                element: <MarvelPage />,
            },
            {
                path: "dc",
                element: <DcPage />,
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
]);
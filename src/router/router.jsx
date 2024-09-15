import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../auth/pages/LoginPage';
import { ErrorPage } from '../ErrorPage';
import { DcPage } from '../heroes/pages/DcPage';
import { HeroPage } from '../heroes/pages/HeroPage';
import { HomePage } from '../heroes/pages/HomePage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { SearchPage } from '../heroes/pages/SearchPage';
import { HeroesApp } from '../HeroesApp';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element:
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
            },
            {
                path: '/search-hero',
                element:
                    <PrivateRoute>
                        <SearchPage />
                    </PrivateRoute>
            },
            {
                path: "marvel",
                element:
                    <PrivateRoute>

                        <MarvelPage />
                    </PrivateRoute>
            },
            {
                path: "dc",
                element:
                    <PrivateRoute>

                        <DcPage />
                    </PrivateRoute>
            },
            {
                path: "hero/:id",
                element:
                    <PrivateRoute>
                        <HeroPage />
                    </PrivateRoute>
            },
            {
                path: 'login',
                element:
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
            }
        ]
    },
]);
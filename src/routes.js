import { lazy } from 'react';
import endPoints from './endPoints';

const routes = [
    {
        path: endPoints.home,
        component: lazy(() => import('./container/Home/Home.jsx')),
        exact: true,
    },
    {
        path: endPoints.email,
        component: lazy(() => import('./container/Home/Home.jsx')),
        exact: true,
    },
    {
        path: endPoints.home,
        component: lazy(() => import('./container/Home/Home.jsx')),
        exact: true,
    },
    {
        path: endPoints.home,
        component: lazy(() => import('./container/Home/Home.jsx')),
        exact: true,
    },
];

export default routes;
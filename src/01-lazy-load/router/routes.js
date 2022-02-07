import { lazy } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const routes = [
    {
        id: 1,
        path: '/lazy1',
        component: lazy(() => import(/* webpackChunkName:"LazyPage1" */'../pages/LazyPage1')),
        //component: LazyPage1,
        name: 'Dashboard-lazy1',
    },
    {
        id: 2,
        path: '/lazy2',
        component: lazy(() => import(/* webpackChunkName:"LazyPage2" */'../pages/LazyPage2')),
        //component: LazyPage2,
        name: 'Dashboard-lazy2',
    },
    {
        id: 3,
        path: '/lazy3',
        component: lazy(() => import(/* webpackChunkName:"LazyPage3" */'../pages/LazyPage3')),
        //component: LazyPage3,
        name: 'Dashboard-lazy3',
    }
]
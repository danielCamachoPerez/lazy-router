import { lazy } from 'react';
import { NoLazy } from '../01-lazy-load/pages';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const routes = [
    {
        id: 1,
        path: '/lazyload',
        component: lazy(() => import(/* webpackChunkName:"LazyLoadNested" */'../01-lazy-load/layout/LazyLayout')),
        //component: LazyPage1,
        name: 'LazyLoading Nested Page 1',
    },
    {
        id: 2,
        path: '/no-lazy',
        component: NoLazy,
        //component: LazyPage1,
        name: 'No Lazy Page',
    },
]
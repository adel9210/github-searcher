import {lazy} from 'react';

const SearchPage = lazy(() => import('../pages/SearchPage'));

const routes = [
    {
        path: '',
        element: <SearchPage/>,
    },
];

export default routes;

import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './routes';

function AppRoutes() {
    const renderedRoutes = useRoutes(routes);
    return <Suspense fallback="...">{renderedRoutes}</Suspense>;
}

export default AppRoutes;

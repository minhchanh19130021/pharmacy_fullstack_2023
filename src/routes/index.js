import config from '~/config';
import Cart from '~/pages/Cart';
import Detail from '~/pages/Detail';
import { Home } from '~/pages/Home';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.cart, component: Cart },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

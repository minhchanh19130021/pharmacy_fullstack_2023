import config from '~/config';
import Cart from '~/pages/Cart';
import Detail from '~/pages/Detail';
import { Home } from '~/pages/Home';
import Order from '~/pages/Order/Order';
import { SignIn } from '~/pages/SignIn';
import { SignUp } from '~/pages/SignUp';
import { ConfirmEmail } from '~/pages/ConfirmEmail';
import { ForgotPassword } from '~/pages/ForgotPassword';
import Filter from '~/pages/Filter';
import User from '~/pages/User';
import ServerError from '~/pages/Error/ServerError/ServerError';
import NotFound from '~/pages/Error/NotFound';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.order, component: Order },
    { path: config.routes.signIn, component: SignIn },
    { path: config.routes.signUp, component: SignUp },
    { path: config.routes.confirmEmail, component: ConfirmEmail },
    { path: config.routes.forgotPassword, component: ForgotPassword },
    { path: config.routes.filter, component: Filter },
    { path: config.routes.user, component: User },
    { path: config.routes.filter, component: Filter },
    { path: config.routes.serverError, component: ServerError },
    { path: config.routes.notFound, component: NotFound },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

import config from "~/config";
import Detail from "~/pages/Detail";
import { Home } from "~/pages/Home";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  { path: config.routes.detail, component: Detail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

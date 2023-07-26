import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Heroes from '../pages/Heroes';
// import { ReactNode } from 'react'; // Import ReactNode type

interface RouteType {
  path: string,
  component: () => JSX.Element,
  name: string
}


const routes: RouteType[] = [
  {
    path: '/',
    component: Home,
    name: 'Home Screen',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
  {
    path: '/heroes',
    component: Heroes,
    name: 'Heroes',
  },
];

export default routes;

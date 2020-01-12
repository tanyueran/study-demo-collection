import {lazy} from 'react'

const Login = lazy(() => import('../pages/login.js'));
const Index = lazy(() => import('../pages/index.js'));

const User = lazy(() => import('../pages/home/user.js'));
const Home = lazy(() => import('../pages/home/home.js'));
const About = lazy(() => import('../pages/home/About.js'));

/*
* 嵌套路由
* */
export default [
  {
    path: '/index',
    component: Index,
    routes: [
      {
        path: '/index/home',
        component: Home,
      },
      {
        path: '/index/user',
        component: User,
      },
      {
        path: '/index/about',
        component: About,
      },
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Login,
  },
]

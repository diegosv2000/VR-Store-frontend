import React from 'react';
import {
  Home,
  LogIn,
  SignIn,
  EditProfile,
  RegisterCompany,
  Admin,
} from 'views';

const routes = [
  // {
  //   path: '/',
  //   component: () => <Home />,
  //   exact: true,
  // },
  {
    path: '/log-in',
    component: () => <LogIn />,
    exact: true,
  },
  {
    path: '/sign-in',
    component: () => <SignIn />,
    exact: true,
  },
  {
    path: '/edit-profile',
    component: () => <EditProfile />,
    exact: true,
  },
  {
    path: '/register-company',
    component: () => <RegisterCompany />,
    exact: true,
  },
  {
    path: '/admin',
    component: () => <Admin />,
    exact: true,
  },
  {
    path: '*',
    component: () => <Home />,
    exact: true,
  },
];

export default routes;

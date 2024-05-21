import { createBrowserRouter } from "react-router-dom";
import { AuthComponents } from "./components/auth/components";
import { ReactElement } from "react";
import App from "./components/App";
import Error from "./components/Error";

export const baseRoute = import.meta.env.VITE_BASE_ROUTE

console.log(baseRoute)

export const routes = {
  auth:{
    auth:'auth',
    login:'login',
    register: 'register',
    password: 'reset-pass',
    message: 'message/:message',
    confirm: 'confirm/:token'
  }
}

export const fullRoute = {
  auth: (route:string)=>`/auth/${route}`,
}


const authRoute = {
  path: routes.auth.auth,
  element: AuthComponents.auth,
  children:[
    routeTemplate(routes.auth.login,    AuthComponents.login),
    routeTemplate(routes.auth.register, AuthComponents.register),
    routeTemplate(routes.auth.password, AuthComponents.password),
    routeTemplate(routes.auth.message,  AuthComponents.message),
    routeTemplate(routes.auth.confirm,  AuthComponents.confirm),
  ]
}

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children:[
      authRoute,
    ],
    errorElement: <Error />
  }
])


//________________helpers

function routeTemplate(path:string,element:ReactElement){
  return {
    path,
    element
  }
}


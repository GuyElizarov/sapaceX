import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { MainLayout } from './pages/main-layout.jsx'
import { About } from './pages/about.jsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },

])

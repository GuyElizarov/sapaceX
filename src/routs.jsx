import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home'
import { MainLayout } from './pages/main-layout.jsx'
import { LandingDetailsPage } from "./pages/landingDetails.jsx";

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
        path: "/details/:id",
    element: <LandingDetailsPage />,
      },
    ]
  },

])

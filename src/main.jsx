import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./routes/Login";
import Register from "./routes/Register";
import AuthProvider from "./contexts/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./routes/Home";
import ServiceDetails from "./pages/ServiceDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element:<Home/>
      }
      ,{
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"profile",
        element:<ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
      },
      {
        path:"forgot-password",
        element:<ForgetPassword/>
      },
      {
        path: "service-details/:serviceId", // New route for service details
        element: (
          <ProtectedRoute>
            <ServiceDetails />
          </ProtectedRoute>
        ),
      },
    
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

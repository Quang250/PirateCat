import { useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { AuthContext } from "src/contexts/auth.context";
import AuthenticationLayout from "src/layouts/AuthenticationLayout";
import MainLayout from "src/layouts/MainLayout";
import Login from "src/pages/Login";
import Profile from "src/pages/Profile";
import Register from "src/pages/Register";
import ProductList from "../pages/ProductList";
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Outlet></Outlet> : <Navigate to="/"></Navigate>;
}

export default function useRoutesElement() {
  const routeElements = useRoutes([
    {
      path: "/",
      index: true,
      element: (
        <MainLayout>
          <ProductList></ProductList>
        </MainLayout>
      ),
    },
    {
      path: "",
      element: <ProtectedRoute></ProtectedRoute>,
      children: [
        {
          path: "/profile",
          element: (
            <MainLayout>
              <Profile></Profile>
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: <RejectedRoute></RejectedRoute>,
      children: [
        {
          path: "/login",
          element: (
            <AuthenticationLayout>
              <Login></Login>
            </AuthenticationLayout>
          ),
        },
        {
          path: "/register",
          element: (
            <AuthenticationLayout>
              <Register></Register>
            </AuthenticationLayout>
          ),
        },
      ],
    },
  ]);
  return routeElements;
}

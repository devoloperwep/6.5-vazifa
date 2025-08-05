import { RouterProvider, createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";
import MainLayout from "./layout/MainLayout";
import { About, Contact, Home, SingleProduct } from "./pages";
import Basket from "./pages/Basket";

function App() {
  const { user } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/SingleProduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

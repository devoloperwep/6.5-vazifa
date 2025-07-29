import { RouterProvider, createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  let user = false;
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

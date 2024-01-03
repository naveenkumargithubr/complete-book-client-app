import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import SingleBook from "../components/SingleBook/SingleBook";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Dashboard } from "../components/Dashboard/Dashboard";
import UploadBooks from "../components/Dashboard/UploadBooks";
import ManageBooks from "../components/Dashboard/ManageBooks";
import EditBooks from "../components/Dashboard/EditBooks";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/books/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:3005/books/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBooks />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/editbooks/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:3005/books/${params.id}`),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

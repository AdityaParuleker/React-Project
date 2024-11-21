import ReactDOM from "react-dom/client";

import "./index.css";
import "./Components/style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Error from "./Components/Error";

import { useLocation } from "react-router-dom";

import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";

import Home from "./Components/Home.js";
import EmployeeDashboard from "./Components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./Components/DashBoard/AdminDashboard.js";
import AuthProvider from "./Context/AuthProvider.js";
import Logincontext from "./Context/Logincontext.js";
function AppLayout() {
  let location = useLocation();
  return (
    <>
      <AuthProvider>
        <Outlet />
        <Toaster />
      </AuthProvider>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/employee",
        element: <EmployeeDashboard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

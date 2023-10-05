import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import Subscription from "./pages/Subscription";
import Pricing from "./pages/Pricing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/subscription-plan",
          element: <Subscription />
        },
        {
          path: "/pricing",
          element: <Pricing />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

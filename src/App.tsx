import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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

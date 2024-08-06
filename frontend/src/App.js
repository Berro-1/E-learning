import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Navbar from "./components/navbar/Navbar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Route>
    )
  );

  return (
    <div className="App">
      {/* Ensure RouterProvider wraps all components that need router context */}
      <RouterProvider router={router}>
        <Navbar />  {/* Navbar is now inside RouterProvider */}
      </RouterProvider>
    </div>
  );
}

export default App;

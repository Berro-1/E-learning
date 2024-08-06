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
import Enroll from "./pages/Enroll/Enroll";
import File from "./pages/File/File";

const MainLayout = () => (
  <div>
    <Navbar />
    <div className="content">
      <Outlet />
    </div>
  </div>
);

const AuthLayout = () => (
  <div>
    <div className="content">
      <Outlet />
    </div>
  </div>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="files" element={
            <PrivateRoute>
            <File />
            </PrivateRoute>
            } />

          <Route path="enroll" element={<Enroll />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

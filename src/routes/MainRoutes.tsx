import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../app/views/auth/Login";
import Dashboard from "../app/views/main/Dashboard";
import { MainLayout } from "../layouts";
import CameraPage from "../app/views/main/CameraPage";
import Users from "../app/views/main/Users";
import Events from "../app/views/main/Events";
import AddNewCameraPage from "../app/views/main/camera pages/AddNewCameraPage";
import CameraSettings from "../app/views/main/camera pages/CameraSettings";
import { AuthContextProvider } from "../shared/contexts";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/camera-page" element={<CameraPage />} />
          <Route path="/add-new-camera" element={<AddNewCameraPage />} />
          <Route path="/camera-settings" element={<CameraSettings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../app/views/auth/Login";
import Dashboard from "../app/views/main/Dashboard";
import { AuthContextProvider } from "../shared/contexts";

export const AuthRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

import React, { useState } from "react";
import { AuthRoutes } from "./routes";
import MainRoutes from "./routes/MainRoutes";
import { AuthContextProvider, useAuthContext } from "./shared/contexts";

function App() {
  const authContext = useAuthContext();

  return (
    <div className="App  bg-[#F8F8F8]">
      {authContext.isAuthenticated ? <MainRoutes /> : <AuthRoutes />}
    </div>
  );
}

export default App;

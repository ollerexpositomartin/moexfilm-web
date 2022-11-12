import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./customHooks/useAuth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const ProtectedRoute = ({children}:any) => {
  const {isAuthenticated} = useAuth();
  if(!isAuthenticated)
    return <Navigate to={'/login'}></Navigate>
  return children;
}


function App() {
  
  return (
      <Routes>
        <Route path="/login" element={<AuthProvider><LoginPage /></AuthProvider>} />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}/>
      </Routes>
  );
}

export default App;

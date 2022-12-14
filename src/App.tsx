import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./customHooks/useAuth";
import { IndexProvider } from "./customHooks/useIndex";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";


const ProtectedRoute = ({children}:any) => {
  const {isAuthenticated} = useAuth();
  if(!isAuthenticated)
    return <Navigate to={'/login'}></Navigate>
  return children;
}

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute><IndexProvider><HomePage /></IndexProvider></ProtectedRoute>}/>
      </Routes>
  );
}

export default App;

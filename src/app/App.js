import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchSquares } from "../components/optionsCard/square/squareSlice";
import { fetchRequiredWorks } from "../components/optionsCard/requiredWorks/requiredWorksSlice";
import { fetchCurrency } from "../components/optionsCard/totalCard/totalCardSlice";

import FirstPage from "../components/pages/firstPage/FirstPage";
import LoginPage from "../components/pages/loginPage/LoginPage";
import AdminPage from "../components/pages/adminPage/AdminPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSquares());
    dispatch(fetchRequiredWorks());
    dispatch(fetchCurrency());

    const currencyInterval = setInterval(() => {
      dispatch(fetchCurrency());
    }, 300000);
    return () => clearInterval(currencyInterval);
  }, [dispatch]);

  const ProtectedRoute = ({ children }) => {
    const loginIn = localStorage.getItem("login");
    if (!loginIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

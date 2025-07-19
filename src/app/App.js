import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchSquares } from "../components/optionsCard/square/squareSlice";
import { fetchRequiredWorks } from "../components/optionsCard/requiredWorks/requiredWorksSlice";

import FirstPage from "../components/pages/firstPage/FirstPage";
import LoginPage from "../components/pages/loginPage/LoginPage";
import AdminPage from "../components/pages/adminPage/AdminPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSquares());
    dispatch(fetchRequiredWorks());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

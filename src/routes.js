import React from "react";
import home from "./home";
import contato from "./contato"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
               <Route path="/"element={home}></Route>
               <Route path="./contato" element={contato}></Route>
                </Routes>
            </Router>
    )
}

export default AppRoutes;


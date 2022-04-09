import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/Start";
import Last from "../pages/Last";

function Router() {
    return (
        <Routes>
            <Route path="start" element={<Start/>} />
            <Route path="last" element={<Last/>} />
        </Routes>
    )
}

export default Router;
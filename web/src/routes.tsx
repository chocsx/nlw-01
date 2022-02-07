import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CreatePoint />} path="/create-point" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

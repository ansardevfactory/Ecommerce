import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path="/" ></Route>
      </Routes>
    </BrowserRouter>
  );
}

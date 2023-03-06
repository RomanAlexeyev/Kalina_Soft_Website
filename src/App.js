import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { Home } from "./components/pages/Home";
import { AboutCompany } from "./components/pages/AboutCompany";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about_company" element={<AboutCompany />} />
      </Route>
    </Routes>
  );
}

export default App;

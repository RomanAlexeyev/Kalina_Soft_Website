import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { Home } from "./components/pages/Home";
import { AboutCompany } from "./components/pages/AboutCompany";
import { Services } from "./components/pages/Services";
import { Cases } from "./components/pages/Cases";

import { Web3SpaceBot } from "./components/pages/Cases/pages/Web3SpaceBot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about_company" element={<AboutCompany />} />
        <Route path="services" element={<Services />} />

        <Route path="cases" element={<Cases isPage={true} />} />
        <Route path="cases/web3space_bot" element={<Web3SpaceBot />} />

        <Route path="phone" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;

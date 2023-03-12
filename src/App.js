import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { Home } from "./components/pages/Home";
import { AboutCompany } from "./components/pages/AboutCompany";
import { Services } from "./components/pages/Services";
import { Cases } from "./components/pages/Cases";

import { Web3SpaceBot } from "./components/pages/Cases/pages/Web3SpaceBot";
import { SportivityBot } from "./components/pages/Cases/pages/SportivityBot";
import { Maranbet } from "./components/pages/Cases/pages/Maranbet";
import { MPBro } from "./components/pages/Cases/pages/MPBro";
import { Mosaic } from "./components/pages/Cases/pages/Mosaic";
import { Questionnaire } from "./components/pages/Cases/pages/Questionnaire";
import { Beahero } from "./components/pages/Cases/pages/Beahero";
import { OncoBot } from "./components/pages/Cases/pages/OncoBot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about_company" element={<AboutCompany />} />
        <Route path="services" element={<Services />} />

        <Route path="cases" element={<Cases isPage={true} />} />
        <Route path="cases/web3space_bot" element={<Web3SpaceBot />} />
        <Route path="cases/sportivity_bot" element={<SportivityBot />} />
        <Route path="cases/maranbet" element={<Maranbet />} />
        <Route path="cases/mpbro" element={<MPBro />} />
        <Route path="cases/mosaic" element={<Mosaic />} />
        <Route path="cases/questionnaire" element={<Questionnaire />} />
        <Route path="cases/beahero" element={<Beahero />} />
        <Route path="cases/oncobot" element={<OncoBot />} />

        <Route path="phone" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;

import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/AdminPage/Dashboard/Dashboard";
import VaccinationCenter from "./pages/AdminPage/VaccinationCenter/VaccinationCenter";
import RendezVous from "./pages/AdminPage/RendezVous/RendezVous";
import AdminSideBar from "./pages/AdminPage/Vaccin/Vaccin";
import Jpo from "./pages/AdminPage/JPO/Jpo";
import AddCenter from "./pages/AdminPage/VaccinationCenter/AddCenter/AddCenter";
import AddVolontaire from "./pages/AdminPage/Volontaire//AddVolontaire/AddVolontaire";
import AddVaccin from "./pages/AdminPage/Vaccin/AddCenter/AddCenter";
import AddCenterVaccin from "./pages/AdminPage/VaccinationCenter/AddCenter/AddCenterVaccin";

import CenterDetail from "./pages/AdminPage/VaccinationCenter/CenterDetail/CenterDetail";
import VaccinDetail from "./pages/AdminPage/Vaccin/CenterDetail/CenterDetail";

import Home from "./pages/Visitor/Home/Home";
import Contact from "./pages/Visitor/Contact/Contact";
import Inscription from "./pages/Authentication/Inscription/Inscription";
import Login from "./pages/Authentication/Login/Login";
import Citoyen from "./components/Citoyen/Citoyen";

import { Provider } from "react-redux";
import JpoDetail from "./pages/AdminPage/JPO/JpoDetail/JpoDetail";
import Volontaire from "./pages/AdminPage/Volontaire/VolontaireList";
import VolontaireDetail from "./pages/AdminPage/Volontaire/VolantaireDetail/VolontaireDetail";
import AddPharmacie from "./pages/AdminPage/VaccinationCenter/AddCenter/AddPharmacie";
import CenterDescription from "./components/Vaccination/VaccinDescription/CenterDescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vaccinationCenter" element={<VaccinationCenter />} />
        <Route path="/rendezvous" element={<RendezVous />} />
        <Route path="/vaccin" element={<AdminSideBar />} />
        <Route path="/jpo" element={<Jpo />} />
        <Route path="/addCenter" element={<AddCenter />} />
        <Route path="/addVolontaire" element={<AddVolontaire />} />

        <Route path="/centerDetail" element={<CenterDetail />} />
        <Route path="/volontaireDetail" element={<VolontaireDetail />} />
        <Route path="/accueil" element={<Home />} />

        <Route path="/addPharmacie/:type" element={<AddPharmacie />} />

        <Route path="/addCenter/:id" element={<AddCenterVaccin />} />

        <Route path="/addVaccin" element={<AddVaccin />} />
        <Route path="/vaccinDetail/:id" element={<VaccinDetail />} />

        <Route path="/centerDetail/:id" element={<CenterDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/citoyen" element={<Citoyen />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jpoDetail" element={<JpoDetail />} />
        <Route path="/volontaire" element={<Volontaire />} />
        <Route path="/volontaireDetail/:id" element={<VolontaireDetail />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Da" element={<CenterDescription />} />
      </Routes>
    </Router>
  );
}

export default App;

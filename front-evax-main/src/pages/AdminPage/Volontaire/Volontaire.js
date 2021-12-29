import React, { useState, useEffect } from "react";
import AdminSideBar from "../../../components/AdminSideBar/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import AddVolantaire from "../../../components/Volontaire/AddVolontaire/AddVolantaire";
import VolontaireList from "../../../components/Volontaire/VolontaireList";
import "./Volontaire.css";
import * as volActions from "../../../redux/actions/Voluntaries/index";
import * as govActions from "../../../redux/actions/Gouvernorat/index";

function Volontaire() {
    const volountaries = useSelector((state) => state.volountaries)
    
    useEffect(() => {
        dispatch(volActions.fetchVol())
      }, [])


  const gouvernorat = useSelector((state) => state.gouvernorat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(govActions.fetchGov());
  }, []);
  return (
    <div className="volantaire-content">
      <AdminSideBar />
      <VolontaireList gouvernorat={gouvernorat.listGovs}  />
      <div className="form"></div>
    </div>
  );
}

export default Volontaire;

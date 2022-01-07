import React, { useEffect } from "react";
import AdminSideBar from "../../../../components/AdminSideBar/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";

import "./AddVolontaire.css";
import * as volActions from "../../../../redux/actions/Voluntaries/index";
import * as govActions from "../../../../redux/actions/Gouvernorat/index";
import * as centerActions from "../../../../redux/actions/Centres/index";
import AddVolantaireForm from "../../../../components/Volontaire/AddVolontaireForm/AddVolantaireForm";

function AddVolontaire() {
    const volountaries = useSelector((state) => state.volountaries)
    
    useEffect(() => {
        dispatch(volActions.fetchVol())
      }, [])


  const gouvernorat = useSelector((state) => state.gouvernorat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(govActions.fetchGov());
  }, []);

  const centers = useSelector((state) => state.centers);
  
  useEffect(() => {
    dispatch(govActions.fetchGov());
  }, []);

  useEffect(() => {
    dispatch(centerActions.fetchCenters());
  }, []);
  return (
    
    <div className="volantaire-content">
      <AdminSideBar />
      <AddVolantaireForm gouv1={gouvernorat} gouv={gouvernorat} centers={centers} volountaries={volountaries} />
      
     
      <div className="form"></div>
        </div>
    
  );
}

export default AddVolontaire;

import React, { useEffect } from "react";
import AdminSideBar from "../../../components/AdminSideBar/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import VolontaireList from "../../../components/Volontaire/VolontaireList";
import "./Volontaire.css";
import * as volActions from "../../../redux/actions/Voluntaries/index";
import * as govActions from "../../../redux/actions/Gouvernorat/index";
import * as centerActions from '../../../redux/actions/Centres/index'

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
      <VolontaireList gouvernorat={gouvernorat.listGovs} gouv={gouvernorat.listVille} centers={centers.list} />
      
     
      <div className="form"></div>
        </div>
    
  );
}

export default Volontaire;

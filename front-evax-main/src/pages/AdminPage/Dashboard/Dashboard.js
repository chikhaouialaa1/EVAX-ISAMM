import React, { useState, useEffect } from "react";
import AdminSideBar from "../../../components/AdminSideBar/AdminSideBar";
import Statistcs from "../../../components/Statistcs/Statistcs";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/Vaccin/index";
import * as StatActions from "../../../redux/actions/VacStat/index";
function Dashboard() {
 

  const vaccinStat = useSelector((state) => state.vaccinStat);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(StatActions.fetchVacStat());
  }, []);

  return (
    <div>
      <AdminSideBar />
      <Statistcs stat={vaccinStat.list} />
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import AdminSideBar from "../../../components/AdminSideBar/AdminSideBar";
import Statistcs from "../../../components/Statistcs/Statistcs";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/Stat/index";
import * as StatActions from "../../../redux/actions/VacStat/index";

function Dashboard() {
  const vaccinStat = useSelector((state) => state.vaccinStat);
  const statistique = useSelector((state) => state.statistic);
  const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StatActions.fetchVacStat());
  }, []);

  useEffect(() => {
    dispatch(actions.statistic());
  }, []);

  return (
    <div>
      <AdminSideBar />
      {statistique.loading  && <div>Loading ... </div>}
      {!statistique.loading && isVisible &&(
      <Statistcs stat={vaccinStat.list} stat2={statistique} />)}
    </div>
  );
}

export default Dashboard;

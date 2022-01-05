import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import CenterDescription from '../../../../components/VacciationCenters/CenterDescription/CenterDescription'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/Centres/index'

function CenterDetail() {

    const reloadCount = localStorage.getItem('reloadCount');
    if(reloadCount < 2) {
        localStorage.setItem("reloadCount", 3)
      window.location.reload();
    } else {
    }
    const  {id}  = useParams();
    const centers = useSelector((state) => state.centers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchCenterById(id))
    }, [])
    useEffect(() => {
        dispatch(actions.fetchCenterVaccinById(id))
    }, [])

    const updateCenter= async (id, name, manager, capacity) => {
        dispatch(actions.updateCenter(id, { name, manager, capacity }))
    }    
    console.log("oooooooooooooooo",centers)
    var centerDescription = centers.selectedCenter[0]
    console.log(centerDescription )
  

    return (
        <div>
            <AdminSideBar/>
            <div className="content">

                <AdminHeader/>
                {centerDescription && (
                <CenterDescription centerDescription={centerDescription} vaccins={centers.list} updateCenter={updateCenter}/>)}
            </div>
        </div>
    )
}

export default CenterDetail

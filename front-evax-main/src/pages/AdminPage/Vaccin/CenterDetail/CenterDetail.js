import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import VaccinDescription from '../../../../components/Vaccination/VaccinDescription/CenterDescription'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/Vaccin/index'

function VaccinDetail() {
    const  {id}  = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchVaccinById(id))
    }, [])
    const vaccins = useSelector((state) => state.vaccins)

    const updateVaccin= async (id, vaccineName) => {
        dispatch(actions.updateVaccin(id, { vaccineName }))
    }  
   
    var vaccinDescription = vaccins.selectedVaccin[0]
    console.log(vaccinDescription )
    return (
        <div>
            <AdminSideBar/>
            <div className="content">

                <AdminHeader/>
                {vaccinDescription && (
                <VaccinDescription centerDescription={vaccinDescription} updateVaccin={updateVaccin}/>)}
            </div>
        </div>
    )
}

export default VaccinDetail

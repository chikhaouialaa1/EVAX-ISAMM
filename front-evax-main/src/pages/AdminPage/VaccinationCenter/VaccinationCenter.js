import React from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import VaccinationCenters from '../../../components/VacciationCenters/VaccinationCenters'
import './VaccinationCenter.css'
function VaccinationCenter() {
    return (
        <div className="vaccinationCenter">
            <AdminSideBar/>
            <VaccinationCenters/>
        </div>
    )
}

export default VaccinationCenter

import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import VaccinationCenters from '../../../components/Vaccination/Vaccination'
import '../VaccinationCenter/VaccinationCenter.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Vaccin/index'

function Vaccin() {
    const vaccins = useSelector((state) => state.vaccins)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
      useEffect(() => {
        dispatch(actions.fetchVaccins())
      }, [])
   console.log(vaccins)
    const deleteVaccin =  (id) => {
        dispatch(actions.deleteVaccin(id))}
    return (
        <div className="vaccinationCenter">
            <AdminSideBar/>
            {vaccins.loading  && <div>Loading ... </div>}
            {!vaccins.loading && isVisible &&(
                <VaccinationCenters vaccins ={vaccins.list} deleteVaccin={deleteVaccin}/>
            )}
            
        </div>
    )
}

export default Vaccin

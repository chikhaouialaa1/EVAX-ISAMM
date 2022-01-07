import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import VaccinationCenters from '../../../components/VacciationCenters/VaccinationCenters'
import './VaccinationCenter.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Centres/index'

import {getCenter} from '../../../services/center.service'

function VaccinationCenter() {
    const centers = useSelector((state) => state.centers)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
    
    useEffect(() => {
        
        dispatch(actions.fetchCenters())
      }, [])
    const deleteCenter =  (id) => {
        dispatch(actions.deleteCenter(id))}
    return (
        <div className="vaccinationCenter">
            <AdminSideBar/>
            {centers.loading  && <div>Loading ... </div>}
            {!centers.loading && isVisible &&(
            <VaccinationCenters centers ={centers.listCenter} pharmacie ={centers.listPharmacie} deleteCenter={deleteCenter}/>
            )}
            
        </div>
    )
}

export default VaccinationCenter

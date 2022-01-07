import React, { useEffect,useState }from 'react'
import './AddCenter.css'

import { useParams } from "react-router-dom";
import { Table, Button} from 'antd';

import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/VacciationCenters/AddCenterForm/AddCenterForm';
import { useDispatch, useSelector } from "react-redux"
import * as govActions from '../../../../redux/actions/Gouvernorat/index'



import {getGouvernorat} from '../../../../services/center.service'
import AddPharmacieFrom from '../../../../components/VacciationCenters/AddCenterForm/AddPharmacieFrom';


function AddCenter() {

    const gouvernorat = useSelector((state) => state.gouvernorat)
    const dispatch = useDispatch()

  

    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
    

    
    useEffect(() => {
        dispatch(govActions.fetchGov())
      }, [])
    return (
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader title={"Ajouter centre"}/>
                <div className="form">
                <AddCenterForm gouvernorat ={gouvernorat}/>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default AddCenter

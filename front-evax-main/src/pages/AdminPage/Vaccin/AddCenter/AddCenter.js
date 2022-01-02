import React, { useState, useEffect }from 'react'
import './AddCenter.css'
import { Table, Button} from 'antd';
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/Vaccination/AddVaccinForm/AddVaccinForm';
import { useDispatch, useSelector } from "react-redux"
import * as govActions from '../../../../redux/actions/Gouvernorat/index'
import {getGouvernorat} from '../../../../services/center.service'

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
                <AdminHeader/>
                <div className="form">
                    <AddCenterForm gouvernorat ={gouvernorat}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default AddCenter

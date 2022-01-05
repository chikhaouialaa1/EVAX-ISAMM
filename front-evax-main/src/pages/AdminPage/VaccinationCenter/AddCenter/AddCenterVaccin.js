import React, { useState, useEffect }from 'react'
import './AddCenter.css'
import { Table, Button} from 'antd';
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/VacciationCenters/AddCenterForm/AddCenterFormVaccin';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/Vaccin/index'
import {getGouvernorat} from '../../../../services/center.service'

function AddCenter() {

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
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader/>
                <div className="form">
                    <AddCenterForm gouvernorat ={vaccins}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default AddCenter

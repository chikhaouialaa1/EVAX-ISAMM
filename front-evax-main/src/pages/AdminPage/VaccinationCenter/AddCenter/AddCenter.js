import React, { useEffect }from 'react'
import './AddCenter.css'

import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/VacciationCenters/AddCenterForm/AddCenterForm';
import { useDispatch, useSelector } from "react-redux"
import * as govActions from '../../../../redux/actions/Gouvernorat/index'


function AddCenter() {

    const gouvernorat = useSelector((state) => state.gouvernorat)
    const dispatch = useDispatch()
  
    
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

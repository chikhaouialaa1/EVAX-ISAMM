import React, { useState, useEffect } from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import VolontaireList from '../../../components/Volontaire/VolontaireList'
import './Volontaire.css'
import { useDispatch, useSelector } from "react-redux"
import * as govActions from '../../../redux/actions/Gouvernorat/index'

function Volontaire() {
    return (
        <div className='volantaire-content'>
            <AdminSideBar/>
            <VolontaireList/>
        </div>
    )
}

export default Volontaire

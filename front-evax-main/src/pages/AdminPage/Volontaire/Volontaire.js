import React from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import VolontaireList from '../../../components/Volontaire/VolontaireList'
import './Volontaire.css'
function Volontaire() {
    return (
        <div className='volantaire-content'>
            <AdminSideBar/>
            <VolontaireList/>
        </div>
    )
}

export default Volontaire

import React from 'react'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import CenterDescription from '../../../../components/VacciationCenters/CenterDescription/CenterDescription'

function CenterDetail() {
    return (
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader/>
                <CenterDescription/>
            </div>
        </div>
    )
}

export default CenterDetail

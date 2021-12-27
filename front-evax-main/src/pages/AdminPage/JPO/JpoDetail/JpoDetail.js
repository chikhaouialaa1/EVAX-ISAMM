import React from 'react'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import JpoDescription from '../../../../components/JPO/JpoDescription/JpoDescription'
import './JpoDetail.css'
function JpoDetail() {
    return (
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader/>
                <JpoDescription/>
            </div>
        </div>
    )
}

export default JpoDetail

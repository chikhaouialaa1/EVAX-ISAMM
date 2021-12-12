import React from 'react'
import './AddCenter.css'
import { Table, Button} from 'antd';
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/VacciationCenters/AddCenterForm/AddCenterForm';
function AddCenter() {
    return (
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader/>
                <div className="form">
                    <AddCenterForm/>
                </div>
            </div>
        </div>
    )
}

export default AddCenter

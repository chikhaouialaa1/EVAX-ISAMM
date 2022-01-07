import React from 'react'
import './AdminHeader.css'
import { Table, Button} from 'antd';
function AdminHeader({title}) {
    return (
        <div className="header">
                <h7>{title}</h7>
                <Button>Logout</Button>
        </div>
    )
}

export default AdminHeader

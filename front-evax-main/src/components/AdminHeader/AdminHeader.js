import React from 'react'
import './AdminHeader.css'
import { Table, Button} from 'antd';
function AdminHeader() {
    return (
        <div className="header">
                <h7>Centre de vaccination</h7>
                <Button>Logout</Button>
        </div>
    )
}

export default AdminHeader

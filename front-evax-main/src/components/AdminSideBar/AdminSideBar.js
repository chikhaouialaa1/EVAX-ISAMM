import React from 'react'
import {Link} from 'react-router-dom'
import {HomeOutlined} from '@ant-design/icons';
import {SideBarData} from './SideBarData'
import './AdminSideBar.css'
function AdminSideBar() {
    return (
        <div className="navbar">
            <div >
                <Link to="/" className="menu-bars">
                    <div className="logo">
                    <img src="/logo.png" alt="logo"/>
                    <h1>Evax</h1>
                    </div>
                    
                </Link>
            </div>
            <div className="items">
                <ul className="nav-menu-items">
                    {SideBarData.map((item, index)=>{
                        return(
                            <li key="index" className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default AdminSideBar

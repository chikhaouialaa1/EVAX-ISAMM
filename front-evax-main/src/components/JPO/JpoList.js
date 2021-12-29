import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import './JpoList.css'
import 'antd/dist/antd.css';
import { Table, Button, Anchor} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import AddJPO from './AddJPO/AddJPO';
const { LinkA } = Anchor;
const columns = [
    {
      title: 'JPO',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Stock en vaccin',
      dataIndex: 'stockV',
      key: 'stockV',
    },
    {
        title: 'Nombre de volontaire',
        dataIndex: 'nbrVolontaire',
        key: 'nbrVolontaire',
      },
    {
      title: 'Action',
      key: 'action',
      render:()=>{
        return(
          <>
          <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }}/>
          <EditOutlined style={{ fontSize: '16px', color: '#ABABFD' }}/>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}/>

          </>
        )
      }

    },
  ];
function JpoList() {
    return (
        <div className='Jpos'>
            <AdminHeader/>
            <h5>Liste Jpo</h5>
            <Table columns={columns} style={{width:"100%", marginTop:"20px"}}> </Table>
            <h5>Créer JPO</h5>
            <AddJPO/>
            
        </div>
    )
}

export default JpoList

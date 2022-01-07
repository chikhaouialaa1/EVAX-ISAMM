import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import {Link} from 'react-router-dom'
import './JpoList.css'
import 'antd/dist/antd.css';
import { Table, Button, Anchor} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import AddJPO from './AddJPO/AddJPO';
const { LinkA } = Anchor;

function JpoList({jpos , deleteJpo}) {
  const columns = [
    {
      title: 'JPO',
      dataIndex: 'titre',
      key: 'titre',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render:(text, record, index)=>{
        const id = record._id
        return(
          <>
          <Link to={"/jpoDetail/"+id}>
            <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }}/>
          </Link>
          
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          onClick = {
            (e) => {
              deleteJpo(record._id)
              console.log("corresponding id is :", record._id)
            }}/>

          </>
        )
      }

    },
  ];
    return (
        <div className='Jpos'>
            <AdminHeader/>
            <h5>Liste Jpo</h5>
            <Table columns={columns} dataSource={jpos} style={{width:"100%", marginTop:"20px"}}> </Table>
            <h5>Créer JPO</h5>
            <AddJPO/>
            
        </div>
    )
}

export default JpoList

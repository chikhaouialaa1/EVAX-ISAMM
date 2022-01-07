import React, {useState} from 'react'

import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Table, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';

function Volontaires({volData}) {
  
  localStorage.setItem("reloadCount", 1)
  const type = false
  const columns = [
    {
      title: 'Nom et prenom',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Gouvenorat',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Ville',
      dataIndex: 'ville',
      key: 'ville',
    },
    {
      title: 'Centre',
      dataIndex: 'centre',
      key: 'centre',
    },
    {
      title: 'Action',
      key: 'action',
      render:()=>{
       
        return(
          <>
          
         
            <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }} />
          
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          />

          </>
        )
      }

    },
  ];
    return (
      <>
        <div className="table">
          <Link to={"/addVolontaire"}>
            <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter un volontaire</Button>
          </Link>
          
          <Table dataSource={volData} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>
        
        </div>
        
        
        </>
    )
}

export default Volontaires

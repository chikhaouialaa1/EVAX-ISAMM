import React, {useState} from 'react'

import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Table, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';

function Volontaires({volData,deleteVol}) {
  
  localStorage.setItem("reloadCount", 1)
  const type = false
  const columns = [
    {
      title: 'Nom et prenom',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gouvernorat',
      dataIndex: 'gouv_name',
      key: 'ville',
    },
    {
      title: 'Ville',
      dataIndex: 'ville_name',
      key: 'ville',
    },

    {
      title: 'Centre',
      dataIndex: 'center_name',
      key: 'centre',
    },
    {
      title: 'Action',
      key: 'action',
      render:(text, record, index)=>{
        const id = record._id
        return(
         
          <>
          
          <Link to={"/volontaireDetail/"+id}>
        
          <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }} />
          </Link>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          onClick = {
            (e) => {
              deleteVol(record._id)
              console.log("corresponding id is :", record._id)
            }}
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
            <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}} >Ajouter un volontaire</Button>
          </Link>
          
          <Table dataSource={volData} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>
        
        </div>
        
        
        </>
    )
}

export default Volontaires

import React, {useState} from 'react'
import './Centers.css'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Table, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import CenterDescription from '../CenterDescription/CenterDescription';
/*const dataSource = [
    {
      key: '1',
      center: 'Maison jeune',
      capacity: 10,
      location:'Tunis'
    },
    {
      key: '2',
      center: 'Maison jeune',
      capacity: 10,
      location:'Tunis'
    },
    {
      key: '3',
      center: 'Maison jeune',
      capacity: 10,
      location:'Tunis'
    },
    {
      key: '4',
      center: 'Maison jeune',
      capacity: 10,
      location:'Tunis'
    },
  ];*/
  
  
function Centers({centersData, delCenter}) {
  localStorage.setItem("reloadCount", 1)
  const type = false
  const columns = [
    {
      title: 'Centre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Localisation',
      dataIndex: 'ville',
      key: 'ville',
    },
    {
      title: 'Nombre max 1/2',
      dataIndex: 'capacity',
      key: 'capacity',
    },
    {
      title: 'Responsable',
      dataIndex: 'manager',
      key: 'manager',
    },
    {
      title: 'Action',
      key: 'action',
      render:(text, record, index)=>{
        const id = record._id
        return(
          <>
          
          <Link to={"/centerDetail/"+id}>
            <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }} />
          </Link>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          onClick = {
            (e) => {
              delCenter(record._id)
              console.log("corresponding id is :", record._id)
            }}/>

          </>
        )
      }

    },
  ];
    return (
      <>
        <div className="table">
          <Link to={"/addCenter"}>
            <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter centre</Button>
          </Link>
          
          <Table dataSource={centersData} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>
        </div>
        
        
        </>
    )
}

export default Centers

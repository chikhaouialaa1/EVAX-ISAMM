import React,{ useState } from 'react'
import './JpoDescription.css'
import {Link} from 'react-router-dom'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import AffectCenter from './AffectCenter'
import CenterListJpo from './CenterListJpo';


const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const columnsCentre = [
    {
      title: 'Centre',
      dataIndex: 'vaccin',
      key: 'vaccin',
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
              //delCenter(record._id)
              console.log("corresponding id is :", record._id)
            }}/>

          </>
        )
      }}
    
  ];
const columnsVolonatire = [
    {
      title: 'Volontaire',
      dataIndex: 'volontaire',
      key: 'volontaire',
    }
    
  ];

function JpoDescription({jpoDescription}) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            
            <h5 style={{color:"#ABABFD", marginTop:"25px", fontSize:'20px'}}>Détails</h5>
            <Descriptions layout="vertical" labelStyle={{color:"#2E4765", fontWeight:'bold'}} >
                <Descriptions.Item label="Titre" >{jpoDescription.titre}</Descriptions.Item>
                <Descriptions.Item label="Date">{jpoDescription.date}</Descriptions.Item>
            </Descriptions>
            <div className="moreinfo">
                <div style={{display:"flex"}}>
                    <AffectCenter jpoId={jpoDescription._id}/>
                    <CenterListJpo jpoId={jpoDescription._id}/>
                </div>
                </div>
            
            </div>
        
    )
}


export default JpoDescription

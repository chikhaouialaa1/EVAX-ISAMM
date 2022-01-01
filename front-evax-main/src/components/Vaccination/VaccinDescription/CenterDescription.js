import React , { useState, useEffect }from 'react'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import './CenterDescription.css'
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Vaccin/index'
import { useParams } from "react-router-dom";

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
 
function CenterDescription({centerDescription, updateCenter}) {
  
const dataSource = [
  {
    key: '1',
    vaccin: centerDescription.vaccineName,
    total:10
  }
];

  const columns = [
    {
      title: 'Vaccin',
      dataIndex: 'vaccin',
      key: 'vaccin',
    }
    
  ];
  console.log(centerDescription)
  const [visible, setVisible] = useState(false);
  const  {id}  = useParams();
  const dispatch = useDispatch()

  const [vaccineName, setVaccineName] = useState(centerDescription.vaccineName,);
  //setVaccineName(centerDescription.vaccineName)
  const [manager, setManager] = useState("");
  const [capacity, setCapacity] = useState("");
 
  const updateVaccin= async (id, vaccineName) => {
    dispatch(actions.updateVaccin(id, { vaccineName }))
    window.location.reload();

}  

  const handleAddVaccin = () => {
    updateVaccin(id,vaccineName)
    setVisible(false)
   
  }

    return (
        <div>
            <Button type="dashed" ghost danger style={{position:'absolute', top:'60px', right:'10px', paddingRight:'20px'}} onClick={() => setVisible(true)}><EditOutlined style={{ fontSize: '16px'}} danger/>Editer</Button>
            <Drawer
              title="Editer centre"
              width={520}
              onClose={() => setVisible(false)}
              visible={visible}
              bodyStyle={{ paddingBottom: 80 }}
              extra={
                <Space>
                  <Button onClick={() => setVisible(false)} className="cancel">Cancel</Button>
                  <Button onClick={() => handleAddVaccin()} type="primary" className="submit">
                    Submit
                  </Button>
                </Space>
              }
            >
              <h6>Nom Vaccin</h6>
              <Input placeholder="Entrer vaccin" className="input"
              value={vaccineName}
              onChange={(e) => setVaccineName(e.target.value)}/>
             
            </Drawer>
           
            <div className="moreinfo">
                <div>
                    <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Stock en vaccin</h5>
                    <Table dataSource={dataSource} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>;
                </div>
                <div>
                    <h5 style={{color:"#84E0BE", marginTop:"25px", fontSize:'20px'}}>Nombre des rendez-vous aujourd'hui</h5>
                    <div>
                        <h6 style={{fontSize:'20px'}}>22/03/2021</h6>
                        <h6 style={{fontSize:'18px'}}>30</h6>
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}

export default CenterDescription

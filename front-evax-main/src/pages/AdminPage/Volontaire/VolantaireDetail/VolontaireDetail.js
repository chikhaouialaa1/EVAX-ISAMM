import React, { useState } from 'react'
import './VolontaireDetail.css'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
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
function VolontaireDetail() {
    const [visible, setVisible] = useState(false);
    return (
        <div className='volantaire-content'>
            <AdminSideBar/>
            <div className='vaccinationCenters'>
            <AdminHeader/>
            <Button type="dashed" ghost danger style={{position:'absolute', top:'60px', right:'10px', paddingRight:'20px'}} onClick={() => setVisible(true)}><EditOutlined style={{ fontSize: '16px'}} danger/>Editer</Button>
            <Drawer
              title="Editer volontaire"
              width={520}
              onClose={() => setVisible(false)}
              visible={visible}
              bodyStyle={{ paddingBottom: 80 }}
              extra={
                <Space>
                  <Button onClick={() => setVisible(false)} className="cancel">Cancel</Button>
                  <Button onClick={() => setVisible(false)} type="primary" className="submit">
                    Submit
                  </Button>
                </Space>
              }
            >
              <h6>Nom et prénom</h6>
              <Input placeholder="Entrer centre" className="input"/>
              <h6>Gouvernorat</h6>
              <Select
                  className="input"
                  showSearch
                  placeholder="choisir gouvernorat"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
              >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
              </Select>
              <h6>Ville</h6>
              <Select
                  className="input"
                  showSearch
                  placeholder="choisir ville"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
              >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
              </Select>
              <h6>Email</h6>
              <Input placeholder="Email" className="input"/>
              <h6>Mot de passe</h6>
              <Input placeholder="Entrer mot de passe" className="input"/>
              
            </Drawer>
            <h5 style={{color:"#ABABFD", marginTop:"25px", fontSize:'20px'}}>Détails</h5>
            <Descriptions layout="vertical" labelStyle={{color:"#2E4765", fontWeight:'bold'}} >
                <Descriptions.Item label="Nom et prénom" >Mohamed Salah</Descriptions.Item>
                <Descriptions.Item label="Gouvernorat">Tunis</Descriptions.Item>
                <Descriptions.Item label="Ville">Tunis</Descriptions.Item>
                <Descriptions.Item label="Email">Mohamedsalah@gmail.com</Descriptions.Item>
                
            </Descriptions>
        </div>
        </div>
        
    )
}

export default VolontaireDetail

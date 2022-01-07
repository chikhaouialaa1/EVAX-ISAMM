import React from 'react'
import './VolontaireLists.css'
import { Button, Input , Tooltip, Tabs} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Volontaires from './Volontaires/Vontaires';
import AdminHeader from '../AdminHeader/AdminHeader';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function VolontairesLists({vol}) {
    
    return (
        <div className="volontaireslists">
            <AdminHeader/>
            <div className="search">
                <Input size="large" placeholder="Rechercher un volontaire"/>
                <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
            </div>
            <div className="volontairess">
            <Tabs defaultActiveKey="1" onChange={callback} className="tabs-center" centered="true" size="large" tabBarStyle={{backgroundColor:'transparent', color:"#2E4765"}}>
                <TabPane tab="Les volontaires " key="1" className="centre"> 
                        <Volontaires volData = {vol.list} />
                        
                </TabPane>
                
            </Tabs>
                
            </div>
        </div>
    )
}

export default VolontairesLists
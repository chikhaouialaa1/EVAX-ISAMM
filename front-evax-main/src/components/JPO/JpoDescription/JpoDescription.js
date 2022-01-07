import React,{ useState } from 'react'
import './JpoDescription.css'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
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

const columnsVaccin = [
    {
      title: 'Vaccin',
      dataIndex: 'vaccin',
      key: 'vaccin',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    
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
            <Button type="dashed" ghost danger style={{position:'absolute', top:'60px', right:'10px', paddingRight:'20px'}} onClick={() => setVisible(true)}><EditOutlined style={{ fontSize: '16px'}} danger/>Editer</Button>
            <Drawer
              title="Editer JPO"
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
              <h6>Nom Centre</h6>
              <Input placeholder="Entrer centre" className="input"/>
              <h6>Gouvernorat</h6>
              <Select
                  className="input"
                  showSearch
                  placeholder="Select a person"
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
                  placeholder="Select a person"
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
              <h6>Centre</h6>
              <Select
                  className="input"
                  showSearch
                  placeholder="Select a person"
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
              <h6>Vaccin</h6>
              <div className='input-doub'>
                <Input placeholder="Entrer centre" className="input"/>
                <Button>Modifier</Button>
                <Button>Supprimer</Button>
              </div>
              <h6>Volontaire</h6>
              <div className='input-doub'>
                <Input placeholder="Entrer centre" className="input"/>
                <Button>Modifier</Button>
                <Button>Supprimer</Button>
              </div>
              
              
            </Drawer>
            <h5 style={{color:"#ABABFD", marginTop:"25px", fontSize:'20px'}}>Détails</h5>
            <Descriptions layout="vertical" labelStyle={{color:"#2E4765", fontWeight:'bold'}} >
                <Descriptions.Item label="Titre" >{jpoDescription.titre}</Descriptions.Item>
                <Descriptions.Item label="Date">{jpoDescription.date}</Descriptions.Item>
                <Descriptions.Item label="Stock en vaccin">100</Descriptions.Item>
                <Descriptions.Item label="Nombre volontaire">50</Descriptions.Item>
            </Descriptions>
            <div className="moreinfo">
                <div>
                    <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Stock en vaccin</h5>
                    <Table columns={columnsVaccin} style={{width:'100%', borderRadius:'25px'}}> </Table>;
                </div>
                <div>
                <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Volontaire</h5>
                    <Table columns={columnsVolonatire} style={{width:'100%', borderRadius:'25px'}}> </Table>;
                </div>
            </div>
        </div>
    )
}


export default JpoDescription

import React from 'react'
import {Input, Button, Select , DatePicker} from 'antd';
import 'antd/dist/antd.css';
import './AddJPO.css'
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
function AddJPO() {
    return (
        <>
        <div className='add-JPO'>
            <div className='form-JPO'>
                <h6>Titre</h6>
                <Input placeholder="Entrer centre" className="input-jpo"/>
                <h6>Date</h6>
                <DatePicker className="input-jpo"/>
                <h6>Gouvernorat</h6>
                <Select
                    className="input-jpo"
                    showSearch
                    placeholder="Choisir gouvernorat"
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
                    className="input-jpo"
                    showSearch
                    placeholder="Choisir ville"
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
                <h6>centre</h6>
                <Select
                    className="input-jpo"
                    showSearch
                    placeholder="Choisir centre"
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
            </div>
            <div className='form-JPO'>
                <h6>Vaccin</h6>
                <div className='input-detail'>
                    <Select
                        className="input-jpo"
                        showSearch
                        placeholder="Choisir vaccin"
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
                    <Input placeholder="Nombre" style={{marginRight:"5px"}}/>
                    <Button type="dashed" ghost danger>Ajouter</Button>

                </div>
            </div>
            <div className='form-JPO'>
                <h6>Volantaire</h6>
                <div className='input-detail'>
                    <Select
                        className="input-jpo"
                        showSearch
                        placeholder="Choisir volantaire"
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
                    <Button type="dashed" ghost danger>Ajouter</Button>

                </div>
            </div>
            
        </div>
        <Button className='add-jpo-btn'>Céer JPO</Button>
        </>
    )
}

export default AddJPO

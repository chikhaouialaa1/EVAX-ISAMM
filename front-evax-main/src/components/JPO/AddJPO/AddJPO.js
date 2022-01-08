import React, { useState, useEffect }  from 'react'
import {Input, Button, Select , DatePicker} from 'antd';
import 'antd/dist/antd.css';
import './AddJPO.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Jpo/Jpo'


function AddJPO() {
    
  const dispatch = useDispatch() 
  const [titre, setTitre] = useState("")
  const [date, setDate] = useState("")

  function onChange( dateString) {
    setDate(dateString) 
  }
  const addJpo =  (titre, date) => {

    dispatch(actions.addJpo({titre, date}))
  }
  const handleAddJpo = () => { 
    addJpo(titre, date)
    setTitre("")
    setDate("") 
    window.location.reload(false);
  }
    return (
        <>
        <div className='add-JPO'>
            <div className='form-JPO'>
                <h6>Titre</h6>
                <Input placeholder="Entrer titre jpo" className="input-jpo"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}/>
                <h6>Date</h6>
                
                <DatePicker dateFormat="YYYY/MM/DD" onChange={onChange}/>
                
            </div>
            
        </div>
        <Button className='add-jpo-btn' onClick={handleAddJpo}>Céer JPO</Button>
        </>
    )
}

export default AddJPO

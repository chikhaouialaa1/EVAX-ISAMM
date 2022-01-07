import {Input, Button, Select } from 'antd';
import { Image } from "antd";
import Navbar from "../Navar/Navbar";
import "./Citoyen.css";
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import * as centerActions from '../../redux/actions/Centres/index'
import * as userAction from '../../redux/actions/Citoyen/index'

const { Option } = Select;

function Citoyen() {
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(centerActions.fetchCenters())
    }, [])
    let [center_id, setCenter_id] = useState("")
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkOGMyMjk1MTM4ZDIxNmNiZTgzMDRlIiwiZW1haWwiOiJheW1AZ21haWwuY28iLCJhY3RpdmF0aW9uIjpmYWxzZSwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDE1OTU0MzMsImV4cCI6MTY0MTYwMjYzM30.Dr11MeMIscr8kwijDc3mHgfWDSzGpP-B06Wy8xmuB4c"
    const centers = useSelector((state) => state.centers)
    const options = centers.list.map((item, index)=>{
      console.log(item);
      return(
        <Option value={item._id}>{item.name}</Option>
      )
    })

    const handleAddCenter = () => {
      addCenter(center_id,token)
    }
    const addCenter =  (center_id,token) => {
      dispatch(userAction.rdv({center_id,token}))
    }
  return (
    <div className="citoyen">
      <Navbar />
      <div className="contentInscri">
        <div className="choicePage">
          <div className="choiceButton">
            <h2> Connexion Espace citoyen </h2>
            <Select
                className="input"
                placeholder="choisir Center"
                onChange={(value)=>{
                  center_id = value
                  setCenter_id(value)
                }}
            >
               {options}
            </Select>
           
            <div style={{ margin: "auto" }}>
              <h6>RendezVous </h6>
              <Button className="suivant"  onClick={handleAddCenter} >
              RendezVous
                    </Button>
                  <Button
                type="primary"
                shape="round"
                style={{
                  background: "#FFBC6E",
                  borderColor: "#FFBC6E",
                  paddingLeft: 5,
                  marginLeft: 130,
                }}
              >
                Envoyer
              </Button>
          
            </div>
            
          </div>

          <img src="/meter.png" alt="inscription" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Citoyen;

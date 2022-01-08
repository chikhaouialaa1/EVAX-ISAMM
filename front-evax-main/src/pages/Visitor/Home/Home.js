import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import Navbar from "../../../components/Navar/Navbar";
import Questions from "../../../components/Questions/Questions";
import backI from "../../../image/header.png";
import * as actions from "../../../redux/actions/Messages/index";
import centers from "../../../redux/reducers/Centers";
import "./Home.css";
import { List, Avatar } from 'antd';
const data = [
  {
    title: 'Inscription',
  },
  {
    title: 'Affectation RDV',
  },
  {
    title: 'Vaccination',
  },
  {
    title: 'Suivi',
  },
];
function Home() {
  const messages = useSelector((state) => state.messages)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchMessages())
      }, [])



  return (
    <div className="home-container">
      <div
        className="header-accueil"
        style={{
          backgroundImage: "url(" + backI + ")",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <Navbar />
        <h1
          style={{
            color: "white",
            alignSelf: "center",
            justifySelf: "center",
            marginTop: "200px",
          }}
        >
          Bienvenu au portail de Vaccination contre la COVID-19
        </h1>
        <Button className="button-inscri" href="/inscription">Inscrivez-vous</Button>
      </div>
      <div className="numero-vert">
        <img src="/num.png" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifySelf: "center",
            alignSelf: "center",
            marginTop: "10px",
            marginLeft: "5px",
          }}
        >
          <h4 style={{ color: "white" }}>Numéro vert</h4>
          <h3 style={{ color: "white" }}>80102021</h3>
        </div>
      </div>
      <h1>Etape de vaccination contre le covid 19</h1>

      <div className="etape-container" style={{display:"flex" ,alignItems:"flex-start"}}>
        
        <img src="/etape.png"  style={{width:500,heigth:500, marginLeft:100 , borderRadius:"50%"}}/>
        <List style={{width:500,heigth:500, marginLeft:100, marginTop:50 }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="./images.png" />}
          title={<a href="inscription">{item.title}</a>}
          description=""
        />
      </List.Item>
    )}
  />,
      </div>
      
      <Questions msg={messages.list}></Questions>
      <div className="footer" >
  
      </div>
    </div>
  );
}

export default Home;

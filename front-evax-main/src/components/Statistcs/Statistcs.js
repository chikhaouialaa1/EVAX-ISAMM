import React from "react";
import "./statistics.css";
import { Statistic, Card, Row, Col } from 'antd';
import { CheckCircleTwoTone, ArrowDownOutlined } from '@ant-design/icons';
import { PieChart } from "react-minimal-pie-chart";
import { Icon } from '@iconify/react';



function Statistcs({stat}) {
  const statList = stat.map((item, index) => {
    console.log(item.vaccineName);
    return(
      <div className="list">
      <li key={item._id} style={{marginRight:"200", color:"black"}}>fffffffff{item.vaccineName}</li>
      </div>
    )
    
  });

  return (
    
      <div className="site-statistic-demo-card">
        <Row  style={{marginLeft:400 }} gutter={12}>
          <Col span={6} style={{marginTop:30}}>
            <Card>
              <Statistic
                title="Inscrits"
                value={1.2}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<CheckCircleTwoTone twoToneColor="#52c41a" />}
                
              />
            </Card>
          </Col>
          <Col span={6} style={{marginTop:30}}>
            <Card>
              <Statistic
                title="Vacciné : Première dose" 
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<Icon icon="la:syringe" /> }
                suffix=""
              />
            </Card>
          </Col>
          <Col  span={6} style={{marginTop:30}}>
            <Card>
              <Statistic
                title="Vacciné : Deuxième dose"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<Icon icon="la:syringe" />}
               
              />
            </Card>
          </Col>
        </Row>
        <div className="statvac">{statList}</div>
        <PieChart
          animation
          animationDuration={500}
          animationEasing="ease-out"
          center={[50, 50]}
          style={{
            height: 200,
            width: 200,
            borderRadius: 30,
            position: "absolute",
            marginLeft: "500px",
            marginTop: "200px",
          }}
          data={[
            { title: "One", value: 10, color: "#DAF7A6" },
            { title: "Two", value: 15, color: "#ABEBC6" },
            { title: "Three", value: 20, color: "#F7BA68" },
          ]}
        />
        
      </div>
    )

}

export default Statistcs;

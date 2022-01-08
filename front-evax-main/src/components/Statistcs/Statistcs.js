import React from "react";
import "./statistics.css";
import { Statistic, Card, Row, Col } from "antd";
import { CheckCircleTwoTone, ArrowDownOutlined } from "@ant-design/icons";

import { Icon } from "@iconify/react";
import { Table } from "antd";

function Statistcs({ stat, stat2 }) {


  const columns = [
    {
      title: "Nom Vaccin",
      dataIndex: "vaccineName",
      key: "name",
    },
    {
      title: "Quantité",
      dataIndex: "quantity",
      key: "name",
    },
    {
      title: "Centre",
      dataIndex: "centerName",
      key: "name",
    },
  ];
  return (
    <div className="site-statistic-demo-card">
      <Row style={{ marginLeft: 400 }} gutter={12}>
        <Col span={6} style={{ marginTop: 30 }}>
          <Card>
            <Statistic
              title="Inscrits"
              value={1}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CheckCircleTwoTone twoToneColor="#52c41a" />}
            />
          </Card>
        </Col>
        <Col span={6} style={{ marginTop: 30 }}>
          <Card>
            <Statistic
              title="Vacciné :Première dose"
              value={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<Icon icon="la:syringe" />}
              suffix=""
            />
          </Card>
        </Col>
        <Col span={6} style={{ marginTop: 30 }}>
          <Card>
            <Statistic
              title="Vacciné : Deuxième dose"
              value={4}
              valueStyle={{ color: "#cf1322" }}
              prefix={<Icon icon="la:syringe" />}
            />
          </Card>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={stat}
        style={{
          width: 700,
          marginTop: 100,
          marginLeft: 400,
          borderRadius: "25px",
        }}
      >
        {" "}
      </Table>
    </div>
  );
}

export default Statistcs;

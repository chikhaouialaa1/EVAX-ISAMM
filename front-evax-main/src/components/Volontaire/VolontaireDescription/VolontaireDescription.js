import React, { useState } from "react";
import {
  Button,
  Descriptions,
  Table,
  Drawer,
  SpaceInput,
  Select,
  Input,
  Space,
} from "antd";
import "antd/dist/antd.css";
import "./VolontaireDescription.css";
import * as actions from "../../../redux/actions/Voluntaries/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditOutlined } from "@ant-design/icons";

function VolontaireDescription({ VolDescription, voluntaries }) {
  console.log(VolDescription.email);
  const [username, setUsername] = useState(VolDescription.username);
  const [email, setEmail] = useState(VolDescription.email);
  const [center_name, setCenterName] = useState(VolDescription.center_name);
  const [gouv_name, setGouvName] = useState(VolDescription.gouv_name);
  const [ville_name, setVilleName] = useState(VolDescription.ville_name);
  const { id } = useParams();

  const dispatch = useDispatch();
  const updateVol = async (vol) => {
    dispatch(actions.updateVol(vol));
    window.location.reload();
  };
  const [visible, setVisible] = useState(false);
  const handleUpdateVol = () => {
    const vol = { id, username, email, gouv_name, center_name, ville_name };
    updateVol(vol);

    setVisible(false);
  };
  return (
    <div>
      <Button
        type="dashed"
        ghost
        danger
        style={{
          position: "absolute",
          top: "60px",
          right: "10px",
          paddingRight: "20px",
        }}
        onClick={() => setVisible(true)}
      >
        <EditOutlined style={{ fontSize: "16px" }} danger />
        Editer
      </Button>

      <Drawer
        title="Editer volontaire"
        width={520}
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={() => setVisible(false)} className="cancel">
              Cancel
            </Button>
            <Button
              type="primary"
              className="submit"
              onClick={() => handleUpdateVol()}
            >
              Submit
            </Button>
          </Space>
        }
      >
        <h6>Nom Volontaire</h6>
        <Input
          placeholder="Entrer nom volontaire"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h6>Email</h6>
        <Input
          placeholder="Entrer Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h6>Centre</h6>
        <Input
          placeholder="Entrer capacité"
          className="input"
          onChange={(e) => setCenterName(e.target.value)}
          value={center_name}
        />
        <h6>Gouvernorat</h6>
        <Input
          placeholder="Entrer capacité"
          className="input"
          onChange={(e) => setGouvName(e.target.value)}
          value={gouv_name}
        />
        <h6>Ville</h6>
        <Input
          placeholder="Entrer capacité"
          className="input"
          onChange={(e) => setVilleName(e.target.value)}
          value={ville_name}
        />
      </Drawer>
      <h5 style={{ color: "#ABABFD", marginTop: "25px", fontSize: "20px" }}>
        Détails
      </h5>
      <Descriptions
        layout="vertical"
        labelStyle={{ color: "#2E4765", fontWeight: "bold" }}
      >
        <Descriptions.Item label="Nom Volontaire">
          {VolDescription.username}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {VolDescription.email}
        </Descriptions.Item>
        <Descriptions.Item label="Centre">
          {VolDescription.center_name}
        </Descriptions.Item>
        <Descriptions.Item label="Ville">
          {VolDescription.ville_name}
        </Descriptions.Item>
        <Descriptions.Item label="Gouvernorat">
          {VolDescription.gouv_name}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default VolontaireDescription;

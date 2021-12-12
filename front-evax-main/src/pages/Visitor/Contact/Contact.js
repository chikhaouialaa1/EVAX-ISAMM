
import React from "react";
import { Card, Button, Input } from "antd";
import { Image } from "antd";
import Navbar from "../../../components/Navar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="box-contact">
        <Card
          title="Avez-vous des questions ?"
          style={{
            height: 400,
            width: 400,
            borderRadius: 30,
            position: "absolute",
            top: 200,
            left: 200,
            background: "#F0F8FF",
          }}
        >
          <Input
            style={{
              paddingBottom: 200,
              width: 300,
              borderRadius: 30,
              position: "absolute",
              top: 100,
              left: 60,
              background: "#FFFFF",
            }}
          />
          <Button
            type="primary"
            shape="round"
            style={{
              background: "#FFBC6E",
              borderColor: "#FFBC6E",
              paddingLeft: 5,
              marginTop: 270,
            }}
          >
            Envoyer
          </Button>
        </Card>

        <Image
          style={{ position: "absolute", top: 180, left: 280 }}
          width={350}
          height={350}
          src="error"
          fallback="Group 2.png"
        />
      </div>
    </div>
  );
}

export default Contact;

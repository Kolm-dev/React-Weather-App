import React, {useState} from "react";
import {Input, Button, Typography} from "antd";
import {LoginOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import "../App.css";
import Weather from "./Weather";

import "./Login.css";

const inputStyle = {width: "450px", margin: "25px 0"};

const Login = () => {
  const [key, setKey] = useState("94675306e5964c77ad7195436232101");
  const [city, setCity] = React.useState("");

  const inputHandler = (e) => {
    setKey(e.target.value);
  };

  return (
    <div className="app login">
      <Typography.Title>Введите свой API ключ</Typography.Title>
      <Input value={key} onChange={inputHandler} placeholder="Ключ..." style={inputStyle} className="input" />
      <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Город на английском языке... (Kiev, London)" style={inputStyle} className="input" />
      <Link to={"/app"} state={{key, city}} element={<Weather />}>
        <Button type={"primary"} style={{marginBottom: "20px"}} icon={<LoginOutlined />}>
          Ввойти в систему
        </Button>
      </Link>
    </div>
  );
};

export default Login;

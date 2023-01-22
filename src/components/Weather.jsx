import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Loading3QuartersOutlined} from "@ant-design/icons";
import "./Weather.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {Typography, Spin, Button} from "antd";

const spinStyle = {
  margin: "25% 50%",
  transform: "scale(3)",
};

const antIcon = (
  <Loading3QuartersOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const tempStyle = {
  color: "#ff4d4f",
  fontSize: "18px",
};
const cityStyle = {
  color: "#ff4d4f",
  fontSize: "18px",
};

const Weather = () => {
  const key = useLocation();
  const city = useLocation();
  const [data, setData] = React.useState({});

  const URL = `http://api.weatherapi.com/v1/current.json?key=${key.state.key}&q=${city.state.city}`;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        const r = response.data;
        setData({...data, country: r.location?.country, time: r.location.localtime, temp: r.current.temp_c, city: r.location.name});
      })
      .catch(() => alert("Проверьте данные!"));
  }, []);
  return (
    <div className="background">
      {data.city && data.temp ? (
        <>
          <div className="info">
            <Typography.Text style={tempStyle} strong color="green">
              Время: {data.time}
            </Typography.Text>
            <Typography.Text style={cityStyle} strong color="blue">
              Город: {`${data.city}/${data.country}`}
            </Typography.Text>
            <Typography.Text style={tempStyle} strong color="green">
              Температура: {parseInt(data.temp)}°C
            </Typography.Text>
          </div>

          <div className="goHome">
            <Link to="/">
              <Button type="primary">Посмотреть в другом городе</Button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Spin indicator={antIcon} style={spinStyle} />
          <div className="goHome">
            <Link to="/">
              <Button type="primary">Посмотреть в другом городе</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;

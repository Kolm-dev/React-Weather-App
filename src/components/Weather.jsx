import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Loading3QuartersOutlined, FieldTimeOutlined, HomeOutlined} from "@ant-design/icons";
import "./Weather.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {Typography, Spin, Button, Divider} from "antd";

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
    <div>
      <Divider />
      {data.city && data.temp ? (
        <>
          <div className="info">
            <Typography.Text className="properties" strong color="green">
              <span className="label">Время</span> <FieldTimeOutlined size={"15"} /> {data.time}
            </Typography.Text>
            <Typography.Text className="properties" strong color="blue">
              <span className="label">Город</span> <HomeOutlined /> {`${data.city}/${data.country}`}
            </Typography.Text>
            <Typography.Text className="properties" strong color="green">
              <span className="label">Температура</span> {parseInt(data.temp)}°C
            </Typography.Text>
          </div>
          <Divider />
          <div className="goHome">
            <Link to="/">
              <Button className="goHome" type="primary">
                Посмотреть в другом городе
              </Button>
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

import "./App.css";
import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";
import Weather from "./components/Weather";
import {Typography} from "antd";

function App() {
  return (
    <div className="app">
      <Typography.Title style={{color: "#fa8c16"}}>Weather APP</Typography.Title>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";
import Weather from "./components/Weather";
import {ProPageHeader} from "@ant-design/pro-layout";
import "antd/dist/reset.css";

function App() {
  return (
    <div className="app">
      <ProPageHeader title="Weather App" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;

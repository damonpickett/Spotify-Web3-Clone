import Spotify from "./images/Spotify.png";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Layout } from "antd";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;


const App = () => {
  return (
    <Layout>
      <Sider width={300} className="sideBar">
        <img src={Spotify} alt="logo" className="logo"></img>
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined style={{ fontSize: "30px" }}/>
        </div>
      </Sider>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;

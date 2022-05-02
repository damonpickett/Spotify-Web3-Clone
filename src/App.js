import Spotify from "./images/Spotify.png";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;


const App = () => {
  return (
    <Layout>
      <Sider width={300}>
        <img src={Spotify} alt="logo" className="logo"></img>
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

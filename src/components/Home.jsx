import React from "react";
import Slider from "./Slider";
import Service from "./Service";
import Achievement from "./Achievement";
import Project from "./Project";
import Clients from "./Clients";
import Footer from "./Footer";
import { Header } from "./Header";

function Home() {
  return (
    <>
      <Header/>
      <Slider />
      <Service />
      <Achievement />
      <Project />
      <Clients />
      <Footer />
    </>
  );
}

export default Home;

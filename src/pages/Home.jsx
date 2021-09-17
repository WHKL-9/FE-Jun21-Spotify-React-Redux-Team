import React from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { Col } from "react-bootstrap";
import GoodMorning from "../components/GoodMorning";


const Home = () => {
    return (
      <>
        <GoodMorning artistName="Grimes" />
        <RecentlyPlayed />
      </>
    )
  }
  
  export default Home
  

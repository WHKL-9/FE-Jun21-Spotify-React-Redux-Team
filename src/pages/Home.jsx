import React from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";
import GoodMorning from "../components/GoodMorning";
// import Favourites from "../components/Favourites"


const Home = () => {
    return (
      <>
        <GoodMorning artistName="Grimes" />
        <RecentlyPlayed artistName="Folamour"/>
      </>
    )
  }
  
  export default Home
  

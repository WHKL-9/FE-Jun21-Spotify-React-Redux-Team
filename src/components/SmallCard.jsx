import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap";
import "../components/SmallCard.css";
import { Link } from "react-router-dom";

const SmallCard = ({ songObj }) => {
    return (
        <Col sm={5} md={3} lg={2}>
          <Card className="rounded border text-white bg-dark" id="smallCard">
        <div className="smallCard">
          <Link className="text-white" to={"/Album/" + songObj.album.id}>
          <img id="smallCardImg" src={songObj.album.cover_medium} alt="" />
          <h5 className="smallCardText">{songObj.artist.name}</h5>
          <p className="smallCardText">{songObj.title}</p>
          </Link>
       </div>
        </Card>
       </Col>
    )
  }
  
  export default SmallCard
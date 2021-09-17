import React, { Component } from "react"
import { Col, Card } from "react-bootstrap";
import "../components/LargeCard.css";
import { Link } from "react-router-dom";

const LargeCard = ({ songObj }) => {
  return (
      <Col sm={6} md={3} lg={2}>
        <Card className="bg-dark px-0 mt-3" id="largeCard">
        <div className="largeCard">
        <Link className="text-white" to={`/Album/${songObj.album.id}`}>
        <img id="largeCardImg" src={songObj.album.cover_medium} alt="" />
          <h5 className="largeCardTitle">{songObj.artist.name}</h5>
          <p className="largeCardText">{songObj.title}</p>
        </Link>
        </div>
      </Card>
     </Col>
  )
}

export default LargeCard



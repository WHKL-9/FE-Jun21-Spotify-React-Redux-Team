import React, { Component } from "react"
import { Col, Card } from "react-bootstrap";
import "../components/LargeCard.css";

export default class LargeCard extends Component {

    render() {
        return (
            <Col sm={6} md={3} lg={2}>
                
            <Card className="bg-dark border-dark mt-3" id="largeCard">
            
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
              <Card.Text>{this.props.title}</Card.Text>
              <Card.Text>{this.props.artist}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )
      }

}

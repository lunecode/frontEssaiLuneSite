import React from 'react';
import { Card, Container, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Footer.css';
import { FaAndroid, FaCalendarAlt,FaAmbulance, FaAddressCard } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <Container className="container">
      <Row>
        <Col sm="3">
          <Card body className="leftCard card">
            <CardTitle className="cardTitle"><FaAndroid className="icons"/>Service</CardTitle>
            <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</CardText>
          </Card>
        </Col>

        <Col sm="3">
          <Card body className="leftMiddleCard card">
            <CardTitle className="cardTitle"><FaCalendarAlt className="icons"/>Foundation</CardTitle>
            <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</CardText>
          </Card>
        </Col>

        <Col sm="3">
          <Card body className="rightMiddleCard card">
            <CardTitle className="cardTitle"> <FaAmbulance className="icons"/>Products</CardTitle>
            <CardText className="cardText">Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. </CardText>
          </Card>
        </Col>

        <Col sm="3">
          <Card body className="rightCard card">
            <CardTitle className="cardTitle"><FaAddressCard className="icons"/>Expo</CardTitle>
            <CardText className="cardText">Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

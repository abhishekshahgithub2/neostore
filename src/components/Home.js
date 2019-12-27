import React, { Component } from 'react'
import '../App.css'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <h3 className="center">Popular Products</h3>
                <p className="center">View All</p>
                <Container>
                    <Row>
                        <Col xs="3">
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Add To Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="3">
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Add To Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="3">
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Add To Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="3">
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Add To Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home

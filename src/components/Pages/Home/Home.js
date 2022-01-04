import React from 'react';
import { Button, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="carousel-slider">
                <Carousel>
                    <Carousel.Item>
                        <img src="https://ifdea.org/sites/default/files/carousel_images/slide-advice%402x-80_0.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>Do You Love React?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias dolorum asperiores voluptatum veniam non.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://media.istockphoto.com/photos/teenage-girl-in-front-of-computer-late-at-night-picture-id1197373346?k=20&m=1197373346&s=170667a&w=0&h=jxmTvSWT1pQ41qinHzizbtr8AKMKu63Cpp-zzdTyQ2g=" alt="" />
                        <Carousel.Caption>
                            <h3>Do You Love React?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias dolorum asperiores voluptatum veniam non.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://media.gettyimages.com/photos/young-girl-playing-computer-game-on-laptop-at-night-picture-id1249868546" alt="" />
                        <Carousel.Caption>
                            <h3>Do You Love React?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias dolorum asperiores voluptatum veniam non.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://media.gettyimages.com/photos/young-woman-using-laptop-picture-id476877457?s=612x612" alt="" />
                        <Carousel.Caption>
                            <h3>Do You Love React?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestias dolorum asperiores voluptatum veniam non.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="services">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={5}>
                                    <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/solid_1.png" alt="" />
                                </Col>
                                <Col md={7}>
                                    <h3>Pro Marketing Ads</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Col>
                            </Row>
                        </Col>                        
                        <Col md={4}>
                            <Row>
                                <Col md={5}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRHNeAuFl4wWATs6uO8PGIPMdoTgxL1ghP0Qao-qDIxpp-Q0goAe4PsPBPuUOJjOtrb4&usqp=CAU" alt="" />
                                </Col>
                                <Col md={7}>
                                    <h3>Secure Support</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Col>
                            </Row>
                        </Col>                        
                        <Col md={4}>
                            <Row>
                                <Col md={5}>
                                    <img src="https://logopond.com/logos/a3f82c83f22148eb62e52870fd34f2fc.png" alt="" />
                                </Col>
                                <Col md={7}>
                                    <h3>SEO Optimization</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Col>
                            </Row>
                        </Col>                        
                    </Row>
                </Container>
            </section>
            <section className="our-team">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="our-team__image">
                                <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/06/team-3-1-367x367.jpg" alt="" />
                                <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/06/team-2-367x367.jpg" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="our-team__info">
                                <h3><span>Meet</span> Our Team</h3>
                                <p className='desc-one'>Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim. Nullam id varius nunc.</p>
                                <p className='desc-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna ex, et faucibus lacus venenatis eget</p>
                                <Button>Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Home;

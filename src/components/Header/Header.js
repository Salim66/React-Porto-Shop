import React from 'react';
import { faFacebookF, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({progress}) => {
    return (
        <>
            <section className="top-header">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="top-header__breadcrum">
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> AboutUs </a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> ContatUs </a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="top-header__social">                    
                                <ul className='top-header__social'>
                                    <li><a href="#"><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faLinkedinIn }></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="header-logo">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="logo">
                                <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/themes/porto/images/logo/logo.png" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <address className="logo-info">
                                <ul>
                                    <li>SEND US AN EMAIL</li>
                                    <li>IAMSALIM@GMAIL.COM</li>
                                </ul>
                                <ul>
                                    <li>CALL US NOW</li>
                                    <li>01773980593</li>
                                </ul>
                            </address>
                        </Col>
                    </Row>
                </Container>
            </section>
            <header className="header">
                <Container>
                    <Row>
                        <Col>
                            <div className="menu">
                                <ul>
                                    <li><NavLink onClick={() => progress(100)} to="/">Home</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/about">About Us</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/blog">Blog</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/team">Out Team</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/shop">Shop</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/contact">Contact Us</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/dashboard">Dashboard</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
};

export default Header;

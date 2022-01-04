import React from 'react';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-top">
                    <Row>
                        <Col md={3}>
                            <div className="contact-details">
                                <h3>Contact Details</h3>
                                <ul>
                                    <li>Porto Template 123</li>
                                    <li>Porto Blvd, Suite</li>
                                    <li>New York</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="opening-hours">
                                <h3>Opening Hours</h3>
                                <ul>
                                    <li>Mon-Fri: <strong>8:30 am to 5:00 pm</strong></li>
                                    <li>Saturday: <strong>9:30 am to 1:00 pm</strong></li>
                                    <li>Sunday: <strong>Closed</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="call-us-now">
                                <h3>Call Us Now</h3>
                                <ul>
                                    <li>(800) 123 4567</li>
                                    <li>Sales: <strong>(800) 123 4568</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="social-media">
                                <h3>Social Media</h3>
                                <ul>
                                    <li><a title='Facebook' href="#"><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></a></li>
                                    <li><a title='Twitter' href="#"><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></a></li>
                                    <li><a title='Linkedin' href="#"><FontAwesomeIcon icon={ faLinkedinIn }></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <Row>
                    <Col>
                        <div className="copy-right">&copy; copyright 2021, All Right Reserved.</div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;

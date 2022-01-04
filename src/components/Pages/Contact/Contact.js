import React from 'react';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faClock, faLocationArrow, faMailBulk, faPhone, faSearchLocation, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="section-contact">
                <div className="contact-header">
                    <img src="https://cdn.paisawapas.com/blog/wp-content/uploads/2017/02/Laptop-Wallpaper-HD-Desktop.jpg" alt="" />
                    <div className="contact-info">
                        <div className="contact-info__left">
                            <h2>Contact Us</h2>
                            <p>Get in touch with us</p>
                        </div>
                        <div className="contact-info__right">
                            <ul>
                                <li><a className='home' href="">Home</a></li>
                                <li>></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-container">
                <Container>
                    <Row>
                       <Col md={6}>
                            <h3 className="contact-us__title">Contact Us</h3>
                            <Form>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label>Your name *</Form.Label>
                                            <Form.Control type="text"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label>Your email address *</Form.Label>
                                            <Form.Control type="text"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Select type="">
                                                <option></option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label className="d-block">Checkboxes</Form.Label>
                                            <Form.Check inline label={1} name="group1" type="checkbox" id="inline-1" />
                                            <Form.Check inline label={2} name="group2" type="checkbox" id="inline-2" />
                                            <Form.Check inline label={3} name="group3" type="checkbox" id="inline-3" />
                                            <Form.Check inline label={4} name="group4" type="checkbox" id="inline-4" />
                                            <Form.Check inline label={5} name="group5" type="checkbox" id="inline-5" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label className="d-block">Radios</Form.Label>
                                            <Form.Check inline label={1} name="group1" type="radio" id={`inline-radio-1`} />
                                            <Form.Check inline label={2} name="group1" type="radio" id={`inline-radio-2`} />
                                            <Form.Check inline label={3} name="group1" type="radio" id={`inline-radio-3`} />
                                            <Form.Check inline label={4} name="group1" type="radio" id={`inline-radio-4`} />
                                            <Form.Check inline label={5} name="group1" type="radio" id={`inline-radio-5`} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label className="d-block">Attachment</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label className="d-block">Message *</Form.Label>
                                            <Form.Control as="textarea" rows={9} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={8} className='mb-3'>
                                        <Form.Group>
                                            <Form.Label className="d-block">Human Verification *</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <hr />
                                    <Col md={12}>
                                        <Form.Group>
                                            <Button>Send Message</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col> 
                        <Col md={6}>
                            <Row>
                                <Col md={12}>
                                    <div className="contact-info__one">
                                        <h3>Get in touch</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </Col>
                                <hr />
                                <Col md={12}>
                                    <div className="contact-info__two">
                                        <h3>The Office</h3>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={ faLocationArrow }></FontAwesomeIcon></a> <strong>Address:</strong> 1234 Street Name, City Name, United States</li>
                                            <li><a href="#"><FontAwesomeIcon icon={ faPhone }></FontAwesomeIcon></a> <strong>Phone:</strong> (123) 456-7890</li>
                                            <li><a href="#"><FontAwesomeIcon icon={ faMailBulk }></FontAwesomeIcon></a><strong>Email:</strong> mail@example.com</li>
                                        </ul>
                                        <div className="contact-info__imgs">
                                            <img className='img-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHNLYVAmejknDjz9C94eHV4q2KNwT5M-WWQ&usqp=CAU" alt="" />
                                            <img className='img-thumbnail' src="https://media.istockphoto.com/photos/laptop-computer-education-mother-children-daughter-girl-familiy-picture-id1206877888?b=1&k=20&m=1206877888&s=170667a&w=0&h=aFq2zoVp3tb2riLLx-XcEnaS68iUdl-r7eSYfCvQHmY=" alt="" />
                                            <img className='img-thumbnail' src="https://media.istockphoto.com/photos/little-student-girl-with-laptop-pc-at-home-picture-id991200516?b=1&k=20&m=991200516&s=170667a&w=0&h=FNaLHetUKPXANHpfWldKpWKwWZRx3aPyHFKuVBSfOMY=" alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <hr />
                                <Col md={12}>
                                    <div className="contact-info__two">
                                        <h3>Business Hours</h3>
                                        <ul>
                                            <li><FontAwesomeIcon icon={ faClock }></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;Monday - Friday 9am to 5pm</li>
                                            <li><FontAwesomeIcon icon={ faClock }></FontAwesomeIcon>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Saturday - 9am to 2pm</li>
                                            <li><FontAwesomeIcon icon={ faClock }></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;Sunday - Closed</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Contact;

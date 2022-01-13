import { faGreaterThan, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogSidebar from '../../Sidebar/BlogSidebar/BlogSidebar';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog">
            <div className="blog-title">
                <div className="blog-title__details">
                    <p><a href='#'>Home</a> > <a href='#'>Blog</a> > <span>Blog Page</span> </p>
                    <h2>Blog Page</h2>
                    <h3>Check out our Latest News!</h3>
                </div>
                <Container>
                    <Row>
                        <Col md={9}>
                            <Row>
                                <Col md={6} className='blog-card'>
                                    <Card className="shadow-sm">
                                        <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                        <Card.Body>
                                            <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                            <Card.Text className="blog-info__text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                <Button><Link to="/blog/single" className='read-more'>Read More</Link></Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className='blog-card'>
                                    <Card className="shadow-sm">
                                        <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                        <Card.Body>
                                            <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                            <Card.Text className="blog-info__text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                <Button><a href="#" className='read-more'>Read More</a></Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className='blog-card'>
                                    <Card className="shadow-sm">
                                        <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                        <Card.Body>
                                            <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                            <Card.Text className="blog-info__text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                <Button><a href="#" className='read-more'>Read More</a></Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className='blog-card'>
                                    <Card className="shadow-sm">
                                        <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                        <Card.Body>
                                            <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                            <Card.Text className="blog-info__text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                <Button><a href="#" className='read-more'>Read More</a></Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className='blog-card'>
                                    <Card className="shadow-sm">
                                        <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                        <Card.Body>
                                            <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                            <Card.Text className="blog-info__text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                <Button><a href="#" className='read-more'>Read More</a></Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className='blog-card'>
                                    <Card className="shadow-sm">
                                        <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                        <Card.Body>
                                            <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                            <Card.Text className="blog-info__text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                <Button><a href="#" className='read-more'>Read More</a></Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <BlogSidebar></BlogSidebar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
};

export default Blog;

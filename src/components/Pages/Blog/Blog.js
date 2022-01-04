import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog">
            <div className="blog-title">
                <h2>Blog Page</h2>
                <Container>
                    <Row>
                        <Col md={4} className='blog-card'>
                            <Card className="shadow-sm">
                                <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                <Card.Body>
                                    <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                    <Card.Text className="blog-info__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                        <Button>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='blog-card'>
                            <Card className="shadow-sm">
                                <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                <Card.Body>
                                    <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                    <Card.Text className="blog-info__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                        <Button>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='blog-card'>
                            <Card className="shadow-sm">
                                <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                <Card.Body>
                                    <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                    <Card.Text className="blog-info__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                        <Button>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='blog-card'>
                            <Card className="shadow-sm">
                                <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                <Card.Body>
                                    <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                    <Card.Text className="blog-info__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                        <Button>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='blog-card'>
                            <Card className="shadow-sm">
                                <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                <Card.Body>
                                    <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                    <Card.Text className="blog-info__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                        <Button>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='blog-card'>
                            <Card className="shadow-sm">
                                <Card.Img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Card.Img>
                                <Card.Body>
                                    <Card.Title className="blog-info__title">This is a stardard post with preview image</Card.Title>
                                    <Card.Text className="blog-info__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                        <Button>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
};

export default Blog;

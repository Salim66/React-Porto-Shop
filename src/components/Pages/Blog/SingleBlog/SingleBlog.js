import React, { useState, useEffect } from 'react';
import { faGreaterThan, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './SingleBlog.css';
import BlogSidebar from '../../../Sidebar/BlogSidebar/BlogSidebar';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const SingleBlog = () => {

    let { blogId } = useParams();

    const [single, setSingle] = useState([]);

    useEffect(() => {
       
        setInterval(() => {
            fetch('http://localhost:5050/blogs/' + blogId)
            .then(data => data.json())
            .then(data => setSingle(data));    
        }, 2000);
       
    }, []);

    return (
        <>
            <section className="blog">
                <div className="blog-title">
                    <div className="blog-title__details">
                        <p><a href='#'>Home</a> > <a href='#'>Blog</a> > <span>Single Blog Page</span> </p>
                        <h2>Single Blog Page</h2>
                        <h3>Check out our Latest News!</h3>
                    </div>
                    <Container>
                        <Row>
                            <Col md={9}>
                                <Row>
                                    {
                                        single.title ?
                                            <Col md={12} className='blog-single'>
                                                <img src={ single.image } alt="" />
                                                <h3>{ single.title }</h3>
                                                <p>{ single.desc }</p>
                                            </Col>
                                        :
                                            <Col md={12} className='blog-single'>
                                                <Skeleton width='100%' height="400px" />
                                                <Skeleton width='100%' height="20px" />
                                                <Skeleton width='100%' height="20px" />
                                            </Col>
                                    }
                                    
                                </Row>
                            </Col>
                            <Col md={3}>
                                <BlogSidebar></BlogSidebar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
};

export default SingleBlog;

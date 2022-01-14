import React, { useState, useEffect } from 'react';
import { faGreaterThan, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogSidebar from '../../Sidebar/BlogSidebar/BlogSidebar';
import './Blog.css';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';

const Blog = () => {

    const [blog, setBlog] = useState([]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        setInterval(() => {
            fetch('http://localhost:5050/blogs?_page=1&_limit=4')
            .then(data => {
                let total_post = data.headers.get('x-total-count');
                setTotal(total_post / 4);

                return data.json();
            })
            .then(data => setBlog(data));
        }, 3000);

    }, [])

    function updatePost(current_page){
        let page = current_page.selected + 1;
        
        fetch('http://localhost:5050/blogs?_page='+page+'&_limit=4')
        .then(data => data.json())
        .then(data => setBlog(data));

    }

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

                                {
                                    
                                    blog.length > 0 ? 
                                    blog.map(data => 
                                        <Col md={6} className='blog-card'>
                                            <Card className="shadow-sm">
                                                <Card.Img src={ data.image }></Card.Img>
                                                <Card.Body>
                                                    <Card.Title className="blog-info__title">{ data.title }</Card.Title>
                                                    <Card.Text className="blog-info__text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at dolores voluptatem magni consectetur velit optio, veritatis dolore odit quibusdam...
                                                        <Button><Link to={ data.id } className='read-more'>Read More</Link></Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>                                        
                                    )
                                    :
                                    <>
                                        <Col md={6} className='blog-card'>
                                            <Card className="shadow-sm">
                                                <Skeleton height='230px' width='400px' />
                                                <Card.Body>
                                                    <Skeleton height='30px' width='280px' />
                                                    <Card.Text className="blog-info__text">
                                                        <Skeleton height='20px' width='280px' />
                                                        <Skeleton height='35px' width='100px' />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} className='blog-card'>
                                            <Card className="shadow-sm">
                                                <Skeleton height='230px' width='400px' />
                                                <Card.Body>
                                                    <Skeleton height='30px' width='280px' />
                                                    <Card.Text className="blog-info__text">
                                                        <Skeleton height='20px' width='280px' />
                                                        <Skeleton height='35px' width='100px' />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} className='blog-card'>
                                            <Card className="shadow-sm">
                                                <Skeleton height='230px' width='400px' />
                                                <Card.Body>
                                                    <Skeleton height='30px' width='280px' />
                                                    <Card.Text className="blog-info__text">
                                                        <Skeleton height='20px' width='280px' />
                                                        <Skeleton height='35px' width='100px' />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} className='blog-card'>
                                            <Card className="shadow-sm">
                                                <Skeleton height='230px' width='400px' />
                                                <Card.Body>
                                                    <Skeleton height='30px' width='280px' />
                                                    <Card.Text className="blog-info__text">
                                                        <Skeleton height='20px' width='280px' />
                                                        <Skeleton height='35px' width='100px' />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </>

                                }
                                
                            </Row>
                            <Row>

                                <ReactPaginate
                                    pageCount={ total }
                                    containerClassName={'pagination justify-content-center my-4'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    previousLabel={'<<'}
                                    nextLabel={'>>'}
                                    breakLabel={' . . . '}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                    onPageChange={ updatePost }
                                />

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

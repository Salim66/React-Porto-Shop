import React, { useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ShopSidebar from '../../Sidebar/ShopSidebar/ShopSidebar';
import './Shop.css';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        setInterval(() => {
       
            fetch('http://localhost:5050/products')
            .then(data => data.json())
            .then(data => setProducts(data));

        }, 2000);        

    }, [])   
    
    return (
        <>
            <section className="section-shop">
                <h2>Shop Page</h2>
                <Container>
                    <Row>
                        <Col md={3}>
                            <ShopSidebar></ShopSidebar>
                        </Col>
                        <Col md={9}>
                            <Row>
                                {
                                    products.length > 0 ? 

                                    products.map(data => 
                                        <Col md={3}>
                                            <div className="product-item">
                                                <Link to={ data.id }>
                                                    <Card className="card-main">
                                                        <Card.Img className="product-image" src={ data.image }></Card.Img>
                                                        <Card.Body>
                                                            <Card.Title className="product-name">{ data.name }</Card.Title>
                                                            <Card.Text>
                                                                <ul>
                                                                    <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                                                    <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                                                    <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                                                    <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                                                    <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                                                </ul>
                                                                
                                                                {
                                                                    data.sell_price == "" ?
                                                                        <span className='sale'>${data.price}</span>
                                                                    :
                                                                    <>
                                                                        <span className='regular'>${data.price}</span>
                                                                        <span className='sale'>${data.sell_price}</span> 
                                                                    </>
                                                                }
        
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
                                    :
                                    <>
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                        <Col md={3}>
                                            <div className="product-item">
                                                <a href='#'>
                                                    <Card className="card-main text-center">
                                                        <Skeleton width="165px" height="150px" className='skeleton-product__img' />
                                                        <Card.Body>
                                                            <Skeleton width="100px" height="20px" className='skeleton-product__name' />
                                                            <Card.Text>
                                                                <Skeleton width="120px" height="20px" className='skeleton-product__star' />
                                                                <Skeleton width="130px" height="22px" className='skeleton-product__price' />
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>                                    
                                    </>

                                }
                                
       
                  
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Shop;

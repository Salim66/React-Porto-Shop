import React, { useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ShopSidebar from '../../Sidebar/ShopSidebar/ShopSidebar';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:5050/products')
        .then(data => data.json())
        .then(data => setProducts(data));

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
                                                                <span className='regular'>$200</span>
                                                                <span className='sale'>$120</span>         
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
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

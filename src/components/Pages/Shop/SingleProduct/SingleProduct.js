import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {

    let { productId } = useParams();

    const [single, setSingle] = useState([]);
    const [related, setReletad] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:5050/products/' + productId)
        .then(data => data.json())
        .then(data => {
            
            setSingle(data)

            fetch('http://localhost:5050/category/'+productId+'/products')
            .then(data => data.json())
            .then(data => setReletad(data));

        });

    }, [])

    function setQuantity( stock ){
       
        if( stock !== "" ){

            if( stock >= 20 ){
                return <h3 className="single-product__stock">
                            {stock} In Stock
                        </h3>;
            }else if( stock < 20 && stock > 5 ){
                return <h3 className="single-product__stock out">
                            {stock} In Stock
                        </h3>;
            }else if( stock <= 5 && stock > 0 ){
                return <h3 className="single-product__stock out">
                            Low In Stock
                        </h3>;
            }else {
                return <h3 className="single-product__stock out">
                    Out Of Stock
                </h3>;
            }

        }

    }
 
    return (
        <>
            <section className="section-single-product">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={ single.image } alt="" />
                        </Col>
                        <Col md={6}>
                            <h2 className="single-product__name">{ single.name }</h2>
                            <ul>
                                <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                <li><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon></li>
                                <p>( There are no reviews yet. )</p>
                            </ul>
                            <div className="pricing">

                                    {
                                        single.sell_price == "" ?
                                        <span className="sale">${ single.price }</span>
                                        :
                                        <>
                                            <span className="regular">${ single.price }</span>
                                            <span className="sale">${ single.sell_price }</span>
                                        </>
                                    }

                            </div>
                            <div className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem vero ex odit iste voluptatum repellat. Sapiente quis reiciendis consectetur.
                            </div>

                            {
                                setQuantity( single.stock )
                            }

                            {/* <h3 className="single-product__stock out">
                                10 In Stock
                            </h3> */}
                            <Button>Add to card</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-related">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>Related Product</h2>
                            <Row>

                                {

                                    related.map(data => 
                                      
                                        data.id !== single.id ?
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
                                                                <span className='regular'>${ data.price }</span>
                                                                <span className='sale'>${ data.sell_price }</span>         
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </Col>
                                        :
                                        <></>
                                        
                                      
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

export default SingleProduct;

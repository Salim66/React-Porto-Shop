import React, { useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Card, Col, Container, Pagination, Row } from 'react-bootstrap';
import ShopSidebar from '../../Sidebar/ShopSidebar/ShopSidebar';
import './Shop.css';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState([]);

    useEffect(() => {

        setInterval(() => {
       
            fetch('http://localhost:5050/products?_page=1&_limit=8')
            .then(data => {
                
                let total_product = data.headers.get('x-total-count');
                setPage(total_product / 8);

                return data.json();
            })
            .then(data => setProducts(data));

        }, 2000);        

    }, []) 
    
    function updateProduct(current_page){
        let page = current_page.selected + 1;
        
        fetch('http://localhost:5050/products?_page='+ page +'&_limit=8')
        .then(data => data.json())
        .then(data => setProducts(data));
    }
    
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
                    <Row>
                        
                       <ReactPaginate
                            pageCount={ page }
                            containerClassName={ 'pagination justify-content-center py-4' }
                            pageClassName={ 'page-item' }
                            pageLinkClassName={ 'page-link' }
                            previousClassName={ 'page-item' }
                            previousLinkClassName={ 'page-link' }
                            nextClassName={ 'page-item' }
                            nextLinkClassName={ 'page-link' }
                            previousLabel={ ' << ' }
                            nextLabel={ ' >> ' }
                            breakLabel={ ' . . . ' }
                            breakClassName={ 'page-item' }
                            breakLinkClassName={ 'page-link' }
                            activeClassName={ 'active' }
                            onPageChange={ updateProduct }
                       />

                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Shop;

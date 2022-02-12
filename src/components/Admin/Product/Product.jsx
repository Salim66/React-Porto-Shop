import React, { useState } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import ProductModal from './ProductModal/ProductModal';
import { useEffect } from 'react';
import axios from 'axios';


const Product = () => {

    const [product, setProduct] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('product-form');
    const [dataId, setDataId] = useState([]);
    const [singleData, setSingleData] = useState([]);

    let modalShow = () => setModal(true);
    let modalHide =  () => setModal(false);

    let handleProductModal = () => {
        modalShow()
        setModalType('product-form');
    }

    let handleModalDelete = (id) => {
        setDataId(id);
        modalShow()
        setModalType('product-delete');
    }

    const handleModalEdit = (id) => {
        axios.get('http://localhost:5050/products/' + id).then(res => setSingleData(res.data));
        modalShow()
        setModalType('product-edit');
    }

    let handleModalShow = (id) => {
        
        axios.get('http://localhost:5050/products/' + id).then(res => setSingleData(res.data));

        modalShow()
        setModalType('product-show');
    }

    useEffect(() => {

        axios.get('http://localhost:5050/products').then(res => setProduct(res.data));

    }, []);


    return (
        <>
            <Card.Body>
                <ProductModal show={modal} hide={modalHide} updateProduct={setProduct} type={modalType} dataId={dataId} singleData={singleData}></ProductModal>
                <h2>All Products</h2>
                <hr />
                <Button onClick={ handleProductModal } variant='primary'>Add new product</Button>
                <br />
                <br />
                <div className="content-product">
                    <Table className='table-striped table-hover table-responsive tabl_c'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                product.map((data, index) => 
                                
                                    (
                                        <tr>
                                            <td>{ index + 1 }</td>
                                            <td>{ data.name }</td>
                                            <td>{ data.price }$</td>
                                            <td>{ data.categoryId }</td>
                                            <td><img src={ data.photo }></img></td>
                                            <td>
                                                <Button onClick={() => handleModalShow(data.id)} title='Shoe' variant='info'> <FontAwesomeIcon icon={ faEye }></FontAwesomeIcon> </Button>
                                                <Button onClick={() => handleModalEdit(data.id)} title='Edit' variant='warning'> <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon> </Button>
                                                <Button onClick={() => handleModalDelete(data.id)} title='Delete' variant='danger'> <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon> </Button>
                                            </td>
                                        </tr>
                                    )

                                )

                            }
                            
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </>
    )
};

export default Product;

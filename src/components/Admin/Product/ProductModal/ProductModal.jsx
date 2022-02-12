import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, CloseButton, Form, Modal } from 'react-bootstrap';
import "./ProductModal.css";
import axios from 'axios';

const ProductModal = (props) => {

    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [msg, setMessgae] = useState({
        name : '',
        type: '',
        status: false
    });

    let handleAlertClose = () => {
        setMessgae({
            name : '',
            type: '',
            status: false
        });
    }

    let handleFormSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());

        if(data.name == '' || data.price == '' || data.photo == ''){

            setMessgae({
                name : 'All field are required !',
                type: 'danger',
                status: true
            });

        }else {

            axios.post("http://localhost:5050/products", {
                id: null,
                name: data.name,
                price: data.price,
                sprice: data.sprice,
                stock: data.stock,
                photo: data.photo,
                categoryId: data.cat,
                brandId: data.brand
            }).then(res => {

                axios.get('http://localhost:5050/products').then(res => props.updateProduct(res.data));
                props.hide();

                setMessgae({
                    name : 'Product added successfully !',
                    type: 'success',
                    status: true
                });
            
            });

        }

    }

    const handleFormUpdate = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());

        if(data.name == '' || data.price == '' || data.photo == ''){

            setMessgae({
                name : 'All field are required !',
                type: 'danger',
                status: true
            });

        }else {

            axios.patch("http://localhost:5050/products/" + props.dataId, {
                name: data.name,
                price: data.price,
                sprice: data.sprice,
                stock: data.stock,
                photo: data.photo,
                categoryId: data.cat,
                brandId: data.brand
            }).then(res => {

                axios.get('http://localhost:5050/products').then(res => props.updateProduct(res.data));
                props.hide();

                setMessgae({
                    name : 'Product updated successfully !',
                    type: 'info',
                    status: true
                });
            
            });

        }

    }

    useEffect(()=> {

        axios.get('http://localhost:5050/categories').then(res => setCategory(res.data));
        axios.get('http://localhost:5050/brands').then(res => setBrand(res.data));


    }, []);


    const handleProductDelete = () => {

        axios.delete('http://localhost:5050/products/' + props.dataId).then(res => {

            axios.get('http://localhost:5050/products/').then(res => props.updateProduct(res.data));

            props.hide();

        });

    }

    if(props.type == 'product-form'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h2>Add New Product</h2>
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                {msg.status == true? <Alert variant={msg.type} className='d-flex justify-content-between'>{msg.name} <CloseButton onClick={handleAlertClose}></CloseButton></Alert> : ''}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sale Price</Form.Label>
                            <Form.Control name="sprice"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control name="stock"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Photo</Form.Label>
                            <Form.Control name="photo"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select name="cat">
                                <option selected disabled>- Select -</option>
                                {
                                    category.map(data =>
                                    
                                        <option value={data.id}>{data.name}</option>
        
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brands</Form.Label>
                            <Form.Select name="brand">
                                <option selected disabled>- Select -</option>
                                {
                                    brand.map(data =>
                                    
                                        <option value={data.id}>{data.name}</option>
        
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Button variant='primary' type="submit">Add now</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
          );

    }else if(props.type == 'product-delete'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h2>Are you sure?</h2>
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <p>You want to delete this data!</p>
                    <div className='d-flex justify-content-end'>
                        <Button onClick={props.hide} variant='success'>No</Button> &nbsp;
                        <Button onClick={handleProductDelete} variant='danger'>Delete</Button>
                    </div>
                </Modal.Body>
            </Modal>
          );

    }else if(props.type == 'product-show'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h2>{ props.singleData.name }</h2>
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.singleData.photo} height="100px" width="100px"></img>
                </Modal.Body>
            </Modal>
          );

    }else if(props.type == 'product-edit'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h2>Edit Product</h2>
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                {msg.status == true? <Alert variant={msg.type} className='d-flex justify-content-between'>{msg.name} <CloseButton onClick={handleAlertClose}></CloseButton></Alert> : ''}
                    <Form onSubmit={handleFormUpdate}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={ props.singleData.name }></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" value={ props.singleData.price }></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sale Price</Form.Label>
                            <Form.Control name="sprice" value={ props.singleData.sprice }></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control name="stock" value={ props.singleData.stock }></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Photo</Form.Label>
                            <Form.Control name="photo" value={ props.singleData.photo }></Form.Control>
                            <img src={props.singleData.photo} height="100px" width="100px"></img>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select name="cat">
                                <option disabled>- Select -</option>
                                {
                                    category.map(data =>
                                        
                                        props.singleData.categoryId == data.id ?
                                        <option value={data.id} selected>{data.name}</option>
                                        :
                                        <option value={data.id}>{data.name}</option>
        
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brands</Form.Label>
                            <Form.Select name="brand">
                                <option disabled>- Select -</option>
                                {
                                    brand.map(data =>
                                    
                                        props.singleData.brandId == data.id ?
                                        <option value={data.id} selected>{data.name}</option>
                                        :
                                        <option value={data.id}>{data.name}</option>
        
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Button variant='primary' type="submit">Update</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        );

    }

  
};

export default ProductModal;

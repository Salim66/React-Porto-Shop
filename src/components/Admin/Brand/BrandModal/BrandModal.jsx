import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, CloseButton, Form, Modal } from 'react-bootstrap';
import axios from 'axios';


const BrandModal = (props) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());
        
        if( data.name == '' ){

            props.setMessgae({
                name : 'All field are required !',
                type: 'danger',
                status: true
            });

        }else {

            axios.post("http://localhost:5050/brands", {
                id: null,
                name: data.name
            }).then(res => {

                axios.get('http://localhost:5050/brands').then(res => props.updateBrand(res.data));
                props.hide();

                props.setMessgae({
                    name : 'Brand added successfully !',
                    type: 'success',
                    status: true
                });
            
            });

        }


    }

    const handleProductDelete = () => {
        axios.delete('http://localhost:5050/brands/' + props.dataId).then(res => {
            axios.get('http://localhost:5050/brands').then(res => props.updateBrand(res.data));
            props.hide();

            props.setMessgae({
                name : 'Brand deleted successfully !',
                type: 'success',
                status: true
            });
        });
    }

    const handleFormUpdate = (e) => {
        e.preventDefault();

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());
        
        if( data.name == '' ){

            props.setMessgae({
                name : 'All field are required !',
                type: 'danger',
                status: true
            });

        }else {

            axios.patch("http://localhost:5050/brands/" + props.dataId.id, {
                name: data.name
            }).then(res => {

                axios.get('http://localhost:5050/brands').then(res => props.updateBrand(res.data));
                props.hide();

                props.setMessgae({
                    name : 'Brand updated successfully !',
                    type: 'info',
                    status: true
                });
            
            });

        }
    }

    if(props.type == 'brand-form'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h2>Add New Brand</h2>
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name"></Form.Control>
                        </Form.Group><br />
                        <Form.Group>
                            <Button variant='primary' type="submit">Add now</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        );

    } else if(props.type == 'brand-show'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header> 
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='mx-auto'>{ props.dataId.name }</h2>
                </Modal.Body>
            </Modal>
        );

    } else if(props.type == 'brand-delete'){

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

    } else if(props.type == 'brand-edit'){

        return (
            <Modal type={props.type} show={props.show} onHide={props.hide} centered>
                <Modal.Header>
                    <h2>Edit Brand</h2>
                    <CloseButton onClick={props.hide}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormUpdate}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={props.dataId.name}></Form.Control>
                        </Form.Group><br />
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

export default BrandModal;


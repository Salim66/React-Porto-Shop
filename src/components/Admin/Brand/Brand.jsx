import React, { useState, useEffect } from 'react';
import './Brand.css';
import axios from 'axios';
import { Alert, CloseButton, Button, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import BrandModal from './BrandModal/BrandModal';

const Brand = () => {

    
    const [brand, setBrand] = useState([]);
    const [modalType, setModalType] = useState('brand-form');
    const [modal, setModal] = useState(false);
    const [msg, setMessgae] = useState({
        name : '',
        type: '',
        status: false
    });
    const [dataId, setDataId] = useState([]);

    let handleAlertClose = () => {
        setMessgae({
            name : '',
            type: '',
            status: false
        });
    }

    const modalShow = () => setModal(true);
    const modalHide = () => setModal(false);
    
    useEffect(() => {

        axios.get('http://localhost:5050/brands').then(res => setBrand(res.data));

    }, []);

    const handleBrandModal = (e) => {
        e.preventDefault();
        modalShow();
        setModalType('brand-form');
    }

    const handleModalShow = (id) => {

        axios.get('http://localhost:5050/brands/' + id).then(res => setDataId(res.data));
        modalShow();
        setModalType('brand-show');


    }

    const handleModalEdit = (id) => {

        axios.get('http://localhost:5050/brands/' + id).then(res => setDataId(res.data));
        modalShow();
        setModalType('brand-edit');

    }

    const handleModalDelete = (id) => {
        setDataId(id);
        modalShow();
        setModalType('brand-delete');
    }


  return (
    <Card.Body>
    <BrandModal type={modalType} show={modal} hide={modalHide} updateBrand={setBrand} setMessgae={setMessgae} dataId={dataId}></BrandModal>
        <h2>All Brand</h2>
        <hr />
        <Button onClick={ handleBrandModal } variant='primary'>Add new brand</Button>
        <br />
        <br />
        {msg.status == true? <Alert variant={msg.type} className='d-flex justify-content-between'>{msg.name} <CloseButton onClick={handleAlertClose}></CloseButton></Alert> : ''}
        <div className="content-product">
            <Table className='table-striped table-hover table-responsive tabl_c'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brand Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        brand.map((data, index) => 
                        
                            (
                                <tr>
                                    <td>{ index + 1 }</td>
                                    <td>{ data.name }</td>
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
  );
};

export default Brand;

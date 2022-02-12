import React, { useEffect } from 'react';
import { useState } from 'react';
import './Category.css';
import CategoryModal from './CategoryModal/CategoryModal';
import axios from 'axios';
import { Alert, CloseButton, Button, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'

const Category = () => {

    const [category, setCategory] = useState([]);
    const [modalType, setModalType] = useState('category-form');
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

        axios.get('http://localhost:5050/categories').then(res => setCategory(res.data));

    }, []);

    const handleCategoryModal = (e) => {
        e.preventDefault();
        modalShow()
        setModalType('category-form');
    }

    const handleModalShow = (id) => {

        axios.get('http://localhost:5050/categories/' + id).then(res => setDataId(res.data));
        modalShow();
        setModalType('category-show');


    }

    const handleModalEdit = (id) => {

        axios.get('http://localhost:5050/categories/' + id).then(res => setDataId(res.data));
        modalShow();
        setModalType('category-edit');

    }

    const handleModalDelete = (id) => {
        setDataId(id);
        modalShow();
        setModalType('category-delete');
    }

  return (
    <>

    <Card.Body>
    <CategoryModal type={modalType} show={modal} hide={modalHide} updateCategory={setCategory} setMessgae={setMessgae} dataId={dataId}></CategoryModal>
        <h2>All Products</h2>
        <hr />
        <Button onClick={ handleCategoryModal } variant='primary'>Add new category</Button>
        <br />
        <br />
        {msg.status == true? <Alert variant={msg.type} className='d-flex justify-content-between'>{msg.name} <CloseButton onClick={handleAlertClose}></CloseButton></Alert> : ''}
        <div className="content-product">
            <Table className='table-striped table-hover table-responsive tabl_c'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        category.map((data, index) => 
                        
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

    </>
  )
};

export default Category;

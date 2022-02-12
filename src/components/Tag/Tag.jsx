import React, { useState, useEffect } from 'react';
import './Tag.css';
import axios from 'axios';
import { Alert, CloseButton, Button, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import TagModal from './TagModal/TagModal';

const Tag = () => {

    
    const [tag, setTag] = useState([]);
    const [modalType, setModalType] = useState('tag-form');
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

        axios.get('http://localhost:5050/tags').then(res => setTag(res.data));

    }, []);

    const handleTagModal = (e) => {
        e.preventDefault();
        modalShow();
        setModalType('tag-form');
    }

    const handleModalShow = (id) => {

        axios.get('http://localhost:5050/tags/' + id).then(res => setDataId(res.data));
        modalShow();
        setModalType('tag-show');


    }

    const handleModalEdit = (id) => {

        axios.get('http://localhost:5050/tags/' + id).then(res => setDataId(res.data));
        modalShow();
        setModalType('tag-edit');

    }

    const handleModalDelete = (id) => {
        setDataId(id);
        modalShow();
        setModalType('tag-delete');
    }


  return (
    <Card.Body>
    <TagModal type={modalType} show={modal} hide={modalHide} updateTag={setTag} setMessgae={setMessgae} dataId={dataId}></TagModal>
        <h2>All Tag</h2>
        <hr />
        <Button onClick={ handleTagModal } variant='primary'>Add new Tag</Button>
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

                        tag.map((data, index) => 
                        
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

export default Tag;

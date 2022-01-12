import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import "./Student.css";

const Student = () => {
    return (
        <>
            <Card.Body>
                <h2>Students</h2>
                <hr />
                <div className="content-student">
                    <Row>
                        <Col md={12}>
                            <Card className='student-child shadow-sm'>
                                <Card.Body>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Name</th>
                                                <th>Roll</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Salim Hasan</td>
                                                <td>17181203011</td>
                                                <td>salimhasanriad@gmail.com</td>
                                                <td>
                                                    <a href="#" className='btn btn-info btn-sm'><FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon></a>
                                                    <a href="#" className='btn btn-danger btn-sm'><FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Shihab Ahamed</td>
                                                <td>17181203012</td>
                                                <td>shihab@gmail.com</td>
                                                <td>
                                                    <a href="#" className='btn btn-info btn-sm'><FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon></a>
                                                    <a href="#" className='btn btn-danger btn-sm'><FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Shoukhin Khan</td>
                                                <td>17181203013</td>
                                                <td>shoukhin@gmail.com</td>
                                                <td>
                                                    <a href="#" className='btn btn-info btn-sm'><FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon></a>
                                                    <a href="#" className='btn btn-danger btn-sm'><FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </>
    )
};

export default Student;

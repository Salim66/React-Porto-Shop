import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import './ChangePassword.css';

const ChangePassword = () => {
    return (
        <>
            <Card.Body>
                <h2>Change Password</h2>
                <hr />
                <div className="content-changepass">
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Card className='changepass-child shadow-sm'>
                                <Card.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Old Password</Form.Label>
                                            <Form.Control type="password" placeholder="********" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control type="password" placeholder="********" />
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </>
    )
};

export default ChangePassword;

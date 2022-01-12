import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <Card.Body>
                <h2>Dashboard</h2>
                <hr />
                <div className="content-dash">
                    <Row>
                        <Col md={4}>
                            <Card className='dash-child shadow-sm'>
                                <Card.Body>
                                    <a href="#">8 Products</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='dash-child shadow-sm'>
                                <Card.Body>
                                    <a href="#">12 Posts</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='dash-child shadow-sm'>
                                <Card.Body>
                                    <a href="#">30 Orders</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </>
    )
};

export default Dashboard;

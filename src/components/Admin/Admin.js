import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css';
import ChangePassword from './ChangePassword/ChangePassword';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';
import Staff from './Staff/Staff';
import Student from './Student/Student';

const Admin = () => {
    return (
        <>
            <section className="section-dashboard">
                <Container>
                    <Card>
                        <Card.Body className="dashboard-body">
                            <Row>
                                <Card className="top-header-card shadow-lg">
                                    <Card.Body>
                                        <div className="profile-top-info">
                                            <h4>Salim Hasan</h4>
                                            <img className='shadow' src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/cp0/p40x40/270215733_3169984863238159_8299662076591110375_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFmScv5H0RYwKL5MKPFWkM0AiMd2x6SbsYCIx3bHpJuxkhGNkI9-11UFYsJz7pqLE_4aN0VC8bzUT28Q9ienMdB&_nc_ohc=HpenoWorcFgAX87x8AK&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_eKtSgPCPITEZVWI4IkG8jdHWlH1WCdn6oPJxrrQHFBg&oe=61DF013E" alt="" />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className="dashboard-sidebar">
                                        <Card className='shadow-sm sidebar-card'>
                                            <Card.Body className="sidebar-body">
                                                <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/themes/porto/images/logo/logo.png" alt="" />
                                                <ul className='list-group'>
                                                    <li className='list-group-item'><Link to="/dashboard">Dashboard</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/product">Products</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/category">Category</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/brand">Brand</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/Tag">Tag</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/profile">Profile</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/password-change">Password Change</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/student">Student</Link></li>
                                                    <li className='list-group-item'><Link to="/dashboard/staff">Staff</Link></li>
                                                    <li className='list-group-item'><Link to="/settings">Settings</Link></li>
                                                    <li className='list-group-item'><Link to="/">Logout</Link></li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className="dasboard-content__body">
                                        <Card className="dashboard-content__card shadow-sm">
                                            
                                            <Outlet></Outlet>

                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </>
    )
};

export default Admin;

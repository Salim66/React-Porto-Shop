import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <Card.Body>
                <h2>Profile</h2>
                <hr />
                <div className="content-profile">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Card className='profile-child shadow-sm'>
                                <Card.Body>
                                    <img src="https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/118485018_2811808255722490_7830059663591955810_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeGcUT_vNKbXO76LLPCLohpUKaTIMM9hU2gppMgwz2FTaPYRiUCGEZlHWgqNweKflQT59jdKMq2jwU2-LqMQ0yRp&_nc_ohc=f-jjK-rcwt4AX-KFFXA&tn=TSBP_rOwRCmKfURM&_nc_ht=scontent-sin6-4.xx&oh=00_AT-rg8hF7FPmaJdqaVFsEZ5GjvBI58n3TY70cEeahQ9kag&oe=6200A773" alt="" />
                                    <h4>Salim Hasan</h4>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </>
    )
};

export default Profile;

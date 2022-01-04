import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './Team.css';

const Team = () => {

    const [users, setUsers] = useState([]);

  
    useEffect(() => {

            setInterval(() => {
                fetch('https://api.github.com/users')
                .then(data => data.json())
                .then(data => setUsers(data));
            }, 3000);

    }, [])


    return (
        <>
            <section className='team-header'>
                <ul>
                    <li><a className='home' href="">Home</a></li>
                    <li>></li>
                    <li><a href="">Members</a></li>
                </ul>
                <h2>Members</h2>
            </section>
            <section className="team">
                <Container>
                    <h2 className="team-main__title">Meet the <span>Team</span></h2>
                    <Row>

                        {
                            users.length > 0 ?
                            users.map(data => 
                                <Col md={3}>
                                    <a href='#' className="team-info">
                                        <img className='team-img' src={ data.avatar_url } alt="" />
                                        <h3 className='team-name'>{ data.login }</h3>
                                        <h5 className='team-title'>{ data.node_id }</h5>
                                        <p className="team-desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nisi doloremque cumque nobis non eius.
                                        </p>
                                    </a>
                                </Col>
                            )
                            : 
                            <>
                                <Col md={3}>
                                    <a href="#" className='team-info'>
                                        <Skeleton width="260px" height="260px" ></Skeleton>
                                        <Skeleton width="120px" height="30px" ></Skeleton>
                                        <Skeleton width="120px" height="25px" ></Skeleton>
                                        <Skeleton width="260px" height="80px" ></Skeleton>
                                    </a>
                                </Col>
                                <Col md={3}>
                                    <a href="#" className='team-info'>
                                        <Skeleton width="260px" height="260px" ></Skeleton>
                                        <Skeleton width="120px" height="30px" ></Skeleton>
                                        <Skeleton width="120px" height="25px" ></Skeleton>
                                        <Skeleton width="260px" height="80px" ></Skeleton>
                                    </a>
                                </Col>
                                <Col md={3}>
                                    <a href="#" className='team-info'>
                                        <Skeleton width="260px" height="260px" ></Skeleton>
                                        <Skeleton width="120px" height="30px" ></Skeleton>
                                        <Skeleton width="120px" height="25px" ></Skeleton>
                                        <Skeleton width="260px" height="80px" ></Skeleton>
                                    </a>
                                </Col>
                                <Col md={3}>
                                    <a href="#" className='team-info'>
                                        <Skeleton width="260px" height="260px" ></Skeleton>
                                        <Skeleton width="120px" height="30px" ></Skeleton>
                                        <Skeleton width="120px" height="25px" ></Skeleton>
                                        <Skeleton width="260px" height="80px" ></Skeleton>
                                    </a>
                                </Col>
                            </>
                        }
                        
       
                       
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Team;

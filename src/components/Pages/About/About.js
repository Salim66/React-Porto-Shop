import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src="https://c4.wallpaperflare.com/wallpaper/147/145/216/child-computer-cute-girl-wallpaper-preview.jpg" alt="" />
                    </Col>
                    <Col md={6}>
                        <h3>About for Business</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio, omnis dolorem cupiditate adipisci laborum facilis qui necessitatibus fugit eum ipsum voluptates, laudantium quae enim. Voluptates voluptatem temporibus consequatur quo nostrum! In consectetur quaerat eos aspernatur eaque perspiciatis expedita facere nam tenetur? Dolor cum quia quidem quae laboriosam est aliquam corporis tenetur, ex ea, fugit assumenda natus vero alias eligendi deleniti temporibus, adipisci sit.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default About;

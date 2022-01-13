import React from 'react';
import { faGreaterThan, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './SingleBlog.css';
import BlogSidebar from '../../../Sidebar/BlogSidebar/BlogSidebar';

const SingleBlog = () => {
    return (
        <>
            <section className="blog">
                <div className="blog-title">
                    <div className="blog-title__details">
                        <p><a href='#'>Home</a> > <a href='#'>Blog</a> > <span>Single Blog Page</span> </p>
                        <h2>Single Blog Page</h2>
                        <h3>Check out our Latest News!</h3>
                    </div>
                    <Container>
                        <Row>
                            <Col md={9}>
                                <Row>
                                    <Col md={12} className='blog-single'>
                                        <img src="https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam.</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates iure labore perferendis natus ab nemo animi, optio veritatis quod est fugit ad doloremque maxime assumenda harum magnam iusto quas dolor ducimus enim! Saepe sed earum laborum doloribus illum adipisci nihil delectus incidunt ipsam provident maiores distinctio modi nemo fugiat ea, soluta minima fuga neque error, ducimus hic ullam? Temporibus nemo nam sint amet id accusantium, delectus, natus libero nobis reiciendis aut possimus eius veritatis omnis, facere optio at rerum quia? Praesentium facilis nulla quis qui cumque sapiente, labore cum pariatur eligendi molestias itaque, rerum doloremque, quam blanditiis porro? Blanditiis omnis libero quo maxime. Sint tenetur accusamus illo similique, quis dignissimos exercitationem in culpa delectus voluptas repellat optio placeat maxime blanditiis obcaecati officiis, nulla debitis et nostrum quaerat est quisquam. Itaque eaque mollitia, totam illum id reiciendis sed repellendus iure sapiente libero odit rem enim eum nobis ut! Quos pariatur aperiam debitis. Veritatis, facere quod rem, minima repellat mollitia perspiciatis assumenda, adipisci recusandae exercitationem maiores illum sequi dolores voluptates obcaecati aliquam excepturi provident officia ipsa quis? Dolore accusamus sunt recusandae? Officiis velit, odit esse assumenda reprehenderit incidunt ipsum qui tempora nihil fugit suscipit. Odio eos magnam quam! Sunt, voluptate quidem cupiditate maiores dicta saepe ipsam inventore, et, illum libero id! Sapiente explicabo omnis illum, odit similique placeat cumque nostrum dolorum, hic, a incidunt architecto distinctio ea magni obcaecati suscipit laudantium enim voluptatem ipsa. Laudantium voluptate repellendus natus asperiores mollitia dolore ex explicabo fugiat aliquid minima iusto praesentium id in, eligendi unde quam nostrum doloremque molestias. Praesentium placeat eum provident obcaecati qui minima molestias dolor suscipit numquam commodi doloribus voluptatibus voluptas illo, quidem vero, illum atque omnis
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <BlogSidebar></BlogSidebar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
};

export default SingleBlog;

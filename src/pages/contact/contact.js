import "./contact.css"
import React from 'react';
import Layout from '../../components/layout/layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {useNavigate} from 'react-router-dom';

const Contact = () => {

    return (
        <Layout >
            <Container className="ContactBodyContainer">
                <Row className="ContactUnderlay">
                    <Col></Col>
                </Row>
                <Row className="ContactUnderlay ContactLowerUnderlay">
                    <Col></Col>
                </Row>
                <Row className="ContactCenterLayer">
                    <Col xl={{ order: 'first' }}>
                        <Container>
                            <Row>
                                <Col>Reach out to Me</Col>
                            </Row>
                            <Row>
                                <Col>Phone</Col>
                                <Col>(+91) 9980883236</Col>
                            </Row>
                            <Row>
                                <Col>sahilrao6799@gmail.com</Col>
                            </Row>
                            <Row>
                                <Col>Phase 4-309, Golden Park, Bangalore, India</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
    </Container>
        </Layout>
    );
}

export default Contact;
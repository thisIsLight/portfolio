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
                    <Col xs={{ order: 'first' }}></Col>
                </Row>
                <Row className="ContactUnderlay ContactLowerUnderlay">
                    <Col xs={{ order: 'first' }}></Col>
                </Row>
                <Row className="ContactCenterLayer">
                    <Col xl={{ order: 'first' }}></Col>
                </Row>
    </Container>
        </Layout>
    );
}

export default Contact;
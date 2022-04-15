import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <div >
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand >
                        <p className='' >copy right @{year}</p>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;
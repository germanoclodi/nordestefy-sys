import React, { Component } from 'react';
import axios from "axios";
import MapContainer from "./lib/GoogleApi";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default class App extends Component {

    state = {
        locations: []
    }

    componentDidMount() {
        this.getLocations();
    }

    getLocations = async () => {
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://nordestefy-api.herokuapp.com/api/get");
        var arr = [];
        response.data.forEach(item => {
            arr.push(['', item.longitude, item.latitude]);
        });
        this.setState({ locations: arr });
    }

    render() {
        const locations = this.state.locations;

        return (
            <>
                <Navbar bg="danger" className="mb-5">
                    <Navbar.Brand className="text-white">Nordestefy</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => this.getLocations()} className="btn font-weight-bold">Atualizar Dados</Nav.Link>
                        
                    </Nav>
                </Navbar>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <MapContainer locations={locations} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}


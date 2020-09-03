import React, { Component } from 'react'
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import axios from 'axios';

export class ComoLohacemos extends Component {

    componentDidUpdate() {
        axios.get('http://localhost:3000/ComoLohacemos/')
            .then(response => {
                console.log("response.data: " + response.data);
                this.setState({ todos: response.data });
        })
        .catch(function (error){
            console.log("error: " + error);
        })
    }

    render() {
        return (
            <Jumbotron className="col mb-0">
                <h1 className="text-center">
                Como lo hacemos
                </h1>
            </Jumbotron>
        )
    }
}

export default ComoLohacemos

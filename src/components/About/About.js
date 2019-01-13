import React, { Component } from 'react';
import {
    Container, } from 'reactstrap';
import './About.css';

export default class About extends Component {


    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return (
            <Container>
                
                Test

            </Container>
        );
    }
}
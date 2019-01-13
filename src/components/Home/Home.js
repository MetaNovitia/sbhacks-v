import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Project from './Project/Project';
import './Home.css';

export default class Home extends Component {

    constructor(props){
        super(props);

        // x = window.innerWidth || 
        //     document.documentElement.clientWidth || 
        //     document.getElementsByTagName('body')[0].clientWidth;

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;
    }

    render() {
        return (
            <Container 
                    fluid 
                    className="center homep"
                    style={{
                        height: this.y.toString() + "px"
                    }}
            >
                <Row></Row>
                <div
                    style={{
                        marginTop: ((this.y-100)/2-80).toString() + "px",
                        marginBottom: ((this.y/3*2)-100).toString() + "px"
                    }}>
                    <Row    className="title center"
                    >[Project Name]</Row>
                    <br/>
                    <Row    className="subtitle center"
                    >
                        by [Team Name]
                    
                    </Row>
                </div>


                <Row
                    style={{
                        marginBottom: "50px"
                    }}
                >
                    <Project></Project>
                    
                </Row>

                
                                

                <Footer></Footer>


            </Container>
        );
    }
}
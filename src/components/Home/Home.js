import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import Footer from '../Footer/Footer';
import Project from './Project/Project';
import './Home.css';
import logo from "./logo.png";

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
                    className="homep"
                    style={{
                        height: this.y.toString() + "px"
                    }}
            >
                <div><img className="logo" src={logo} alt=""/></div>
                <div
                    style={{
                        marginTop: ((this.y-120)/2-140).toString() + "px",
                        marginBottom: ((this.y/3*2)-120).toString() + "px"
                    }}>
                    <Row    className="title center"
                    >[ SBAM detector ]</Row>
                    <br/>
                    <Row    className="subtitle center"
                    >
                        by TheNewRandom
                    
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
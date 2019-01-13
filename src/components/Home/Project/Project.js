import React, { Component } from 'react';
import {
    Button,
    Container, 
    InputGroup,
    InputGroupAddon,
    Input,
    Row,
    Col,
    TabContent,
    TabPane} from 'reactstrap';
import './Project.css';
import Report from "./Report/Report";
import Cloud from "./Cloud/Cloud";
import $ from 'jquery';


export default class Project extends Component {

    


    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            collapse: false,
            activeTab: "1"
        };
        this.toggled = this.toggled.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.setData = this.setData.bind(this);
        this.processURL = this.processURL.bind(this);
        this.notspam = this.notspam.bind(this);
        this.spam = this.spam.bind(this);
        this.data = [];
        this.cloudData = [];


    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
        
    }

    toggled() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleTab(tab){
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    processURL(){
        if( this.state.inputValue.startsWith("https://www.youtube.com/watch?v=") ||
            this.state.inputValue.startsWith("www.youtube.com/watch?v=")){
                $.ajax({
                    url: "https://35.247.16.191:5000/comments/"+this.state.inputValue.split("v=")[1],        // link to data request
                    context: document.body,
                    crossDomain: true
                }).done(this.setData);
        }else{
            alert("Please enter a valid YouTube url!");
        }
    }

    setData(input){
        this.data=[];
        var data = input.items;
        
        this.cloudData = input.wordcloud;

        for(var i=0; i<data.length; i++){

            if(data[i].spam===1){
                var color = [221,113,113];

                color[1] = 255-112*(data[i].spamprob-0.4)*2;

                this.data.push(
                    <Row    key={data[i].id} 
                            id={data[i].id} 
                            className="comment"
                            style={{
                                backgroundColor:    "rgb("+
                                                    color[0].toString()+","+
                                                    color[1].toString()+","+
                                                    color[2].toString()+
                                                    ")"
                            }}>
                        <Col className="photo cen">
                        <img  
                                alt="user img" 
                                className='userpic' 
                                src={data[i].author.picture}/>
                        </Col>
                        <Col className="bodyuser cen">
                            <div className="author">
                                {data[i].author.name}
                            </div>
                            <div>
                                {data[i].text}
                            </div>
                        </Col>
                        <Col className="spam cen">
                            <div><Button id={data[i].id} className="spambtn" onClick={this.spam}>Spam</Button></div>
                            <div><Button id={data[i].id} className="spambtn" onClick={this.notspam}>Not Spam</Button></div>
                        </Col>
                        <Col className="rating cen">
                            {Math.floor(data[i].spamprob*100).toString()+"%"}
                        </Col>
                    </Row>
                );
            }
        }
            

        this.toggled();
    }

    spam(e){
        var rem = e.target.id;
        for(var i=0; i<this.data.length; i++){
            if(this.data[i].key===null){
                this.data.splice(i, 1);
            }
        }
        for(i=0; i<this.data.length; i++){
            if(this.data[i].key===rem){
                // send post to python
                if(false){
                    this.data.splice(i, 1, <Report key={i.toString()+rem}  c="success"></Report>);
                }else{
                    this.data.splice(i, 0, <Report key={i.toString()+rem}  c="danger"></Report>);
                }
                break;
            }
        }
        this.toggled();
    }

    notspam(e){
        var rem = e.target.id;
        for(var i=0; i<this.data.length; i++){
            if(this.data[i].key===null){
                this.data.splice(i, 1);
            }
        }
        for(i=0; i<this.data.length; i++){
            if(this.data[i].key===rem){
                // send post to python
                this.data.splice(i, 1, <Report key={i.toString()+rem}  c="info"></Report>);
                break;
            }
        }
        this.toggled();
    }

    

    

    render() {
        if (this.data.length===0){
            return(
                <Container>
                
                <InputGroup>
                <Input 
                    value={this.state.inputValue} 
                    onChange={evt => this.updateInputValue(evt)}
                    placeholder="Please enter a YouTube url!"/>
                <InputGroupAddon addonType="append">
                    <Button color="secondary" 
                            onClick={this.processURL}>Check Spam
                    </Button>
                </InputGroupAddon>
                </InputGroup>
                </Container>
            )
        }
        return (
            <Container>
                
                <InputGroup>
                <Input 
                    value={this.state.inputValue} 
                    onChange={evt => this.updateInputValue(evt)}
                    placeholder="Please enter a YouTube url!"/>
                <InputGroupAddon addonType="append">
                    <Button color="secondary" 
                            onClick={this.processURL}>Check Spam
                    </Button>
                </InputGroupAddon>
            </InputGroup>

            <Container>
                <Col>
                    <Button key = {"1"}
                            id = {"1"}
                            onClick={() => { this.toggleTab('1'); }}
                            className="topicbtn">
                    Comments
                    </Button>;
                    <Button key = {"2"}
                            id = {"2"}
                            onClick={() => { this.toggleTab('2'); }}
                            className="topicbtn">
                    Word Cloud
                    </Button>;
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            {this.data}
                        </TabPane>
                        <TabPane tabId="2">
                            <Cloud data={this.cloudData}></Cloud>
                        </TabPane>
                    </TabContent>
                </Col>
            </Container>
                
            </Container>
        );
    }
}
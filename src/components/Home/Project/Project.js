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


export default class Project extends Component {

    


    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            collapse: false,
            activeTab: "1"
        };
        this.toggle = this.toggle.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.setData = this.setData.bind(this);
        this.processURL = this.processURL.bind(this);
        this.notspam = this.notspam.bind(this);
        this.spam = this.spam.bind(this);
        this.data = [];


    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
        
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleTab(tab){
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    setData(data){
        this.data=[];
        data = [
            {
                "id": "100",
                "text": "It sounds so good, I can smell it!",
                "author": {
                    "name": "1Blake Grigsby",
                    "image": "https://yt3.ggpht.com/a-/AAuE7mC1PH30ZNyLXgE4SaHkTRY5saAR584q-i-J-w=s288-mo-c-c0xffffffff-rj-k-no",
                    "url" : ""
                }
            },
            {
                "id": "101",
                "text": "It sounds so good, I can smell it!",
                "author": {
                    "name": "2Blake Grigsby",
                    "image": "https://yt3.ggpht.com/a-/AAuE7mC1PH30ZNyLXgE4SaHkTRY5saAR584q-i-J-w=s288-mo-c-c0xffffffff-rj-k-no",
                    "url" : ""
                }
            },
            {
                "id": "102",
                "text": "It sounds so good, I can smell it!",
                "author": {
                    "name": "3Blake Grigsby",
                    "image": "https://yt3.ggpht.com/a-/AAuE7mC1PH30ZNyLXgE4SaHkTRY5saAR584q-i-J-w=s288-mo-c-c0xffffffff-rj-k-no",
                    "url" : ""
                }
            },
            {
                "id": "103",
                "text": "It sounds so good, I can smell it!",
                "author": {
                    "name": "4Blake Grigsby",
                    "image": "https://yt3.ggpht.com/a-/AAuE7mC1PH30ZNyLXgE4SaHkTRY5saAR584q-i-J-w=s288-mo-c-c0xffffffff-rj-k-no",
                    "url" : ""
                }
            }
    
        ];
        for(var i=0; i<data.length; i++){
            this.data.push(
                <Row key={data[i].id} id={data[i].id} className="comment">
                    <Col className="photo">
                    <img  
                            alt="user img" 
                            className='userpic' 
                            src={data[i].author.image}/>
                    </Col>
                    <Col className="bodyuser">
                        <div className="author">
                            {data[i].author.name}
                        </div>
                        <div>
                            {data[i].text}
                        </div>
                    </Col>
                    <Col className="spam">
                        <div><Button id={data[i].id} className="spambtn" onClick={this.spam}>Spam</Button></div>
                        <div><Button id={data[i].id} className="spambtn" onClick={this.notspam}>Not Spam</Button></div>
                    </Col>
                </Row>
            );
        }
            

        this.toggle();
    }

    spam(e){
        var rem = e.target.id;
        console.log(rem);
        for(var i=0; i<this.data.length; i++){
            if(this.data[i].state!==undefined){
                this.data.splice(i, 0);
            }
        }
        for(i=0; i<this.data.length; i++){
            if(this.data[i].key===rem){
                // send post to python
                if(false){
                    this.data.splice(i, 1, <Report success={true}></Report>);
                }else{
                    this.data.splice(i, 0, <Report success={false}></Report>);
                }
                break;
            }
        }
        this.toggle();
    }

    notspam(e){
        var rem = e.target.id;
        for(var i=0; i<this.data.length; i++){
            if(this.data[i].key===rem){
                this.data.splice(i, 1);
                break;
            }
        }
        this.toggle();
    }

    processURL(){
        if( this.state.inputValue.startsWith("https://www.youtube.com/watch?v=") ||
            this.state.inputValue.startsWith("www.youtube.com/watch?v=")){
                this.setData("test");
                // $.ajax({
                //     url: "",        // link to data request
                //     context: document.body
                // }).done(this.setData);
        }else{
            alert("Please enter a valid YouTube url!");
        }
    }

    

    render() {
        console.log(this.state.activeTab);
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
                            Word Cloud
                        </TabPane>
                    </TabContent>
                </Col>
            </Container>
                
            </Container>
        );
    }
}
import React from 'react';
import { Alert } from 'reactstrap';

export default class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.show = this.show.bind(this);

    if(props.c==="success"){
        this.msg="Successfully marked message as spam!";
    }else if(props.c==="danger"){
        this.msg="Sorry! You are not authorized to do this!";
    }else{
        this.msg="Successfully marked message as not spam!";
    }


    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  show(){
    this.setState({ visible: true });
  }

  render() {
    return (
      <Alert className="rep" color={this.props.c} isOpen={this.state.visible} toggle={this.onDismiss}>
        {this.msg}
      </Alert>
    );
  }
}
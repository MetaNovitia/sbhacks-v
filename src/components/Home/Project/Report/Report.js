import React from 'react';
import { Alert } from 'reactstrap';

export default class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.show = this.show.bind(this);

    if(props.success){
        this.msg="Successfully marked message as spam!";
        this.c = "success";
    }else{
        this.msg="Sorry! You are not authorized to do this!";
        this.c = "danger";
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
      <Alert className="rep" color={this.c} isOpen={this.state.visible} toggle={this.onDismiss}>
        {this.msg}
      </Alert>
    );
  }
}
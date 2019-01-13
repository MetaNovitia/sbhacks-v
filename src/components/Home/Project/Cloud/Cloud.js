import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import './Cloud.css';


const fontSizeMapper = word => Math.log2(word.value) * 30;

export default class Cloud extends Component {

  render() {
    return (
      <WordCloud
        data={this.props.data}
        fontSizeMapper={fontSizeMapper}
        width={1000}
        height={1000}
      />
    );
  }
}
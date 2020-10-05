import React from 'react';
import DisplayBooks from '../DisplayBooks/DisplayBooks'

export default class Bookmarks extends React.Component {
  
  componentDidMount() {

  }
  render() {

    return (
      <ul>
        <DisplayBooks state={this.props.state}/>
      </ul>
    )
  }
}

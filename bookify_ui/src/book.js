import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.authors[0]}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.image} alt="Picture of the book"/>
      </div>
    )
  }
}

export default Book;

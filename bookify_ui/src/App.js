import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  handleClick(e) {
    if (e.keyCode === 13) {
      let query = e.target.value;
      fetch("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then((response) => {
          var contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json()
          }
          throw new TypeError("Oops, we havent got JSON!");
        }).then((booksArray) => {
          console.log(booksArray.items);
          console.log(this)
          this.setState({books: booksArray});
        }).catch((error) => {
          console.error(error);
        })
      e.target.value = ""
    }
  }
  render() {
    return (
      <header>
        <h1>Bookify</h1>
        <input type="text" onKeyUp={this.handleClick.bind(this)} />
      </header>

    )
  }
}

export default App

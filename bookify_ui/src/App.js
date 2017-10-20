import React from 'react'
import Book from './book'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }
// Using fetch API to request json from googleapis
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
          this.setState({books: booksArray.items});
        }).catch((error) => {
          console.error(error);
        })
      e.target.value = ""
    }
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__inner">
            <img className="header__logo" src="../images/city.png" alt="iconic view of a cityscape" />
            <h1 className="header__title">Bookify</h1>
            {/* Binding handleClick to instances of App. */}
            <input className="author_query" type="text" onKeyUp={this.handleClick.bind(this)} />
          </div>
        </header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="/auth/logout">Logout</a></li>
            <li className="nav__item"><a href="/auth/login">Login</a></li>
            <li className="nav__item" ><a href="/home"></a>Home</li>
          </ul>
        </nav>
        <main>
          {this.state.books.map(function(book, i) {
            return <Book title={book.volumeInfo.title} key={i}/>
          })}
        </main>
      </div>
    )
  }
}

export default App

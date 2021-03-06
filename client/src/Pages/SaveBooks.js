    
import React, { Component } from "react";
import API from "../Utilities/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";

class SaveBooks extends Component {
  state = {
    results: []
  };

  getBooks = () => {
    API.getBooks()
      .then((data) => {
        return this.setState({ results: data.data });
      })
      .catch(err => console.log(err));
  };

  removeBook = (id) => {
    API.deleteBook(id)
      .then(() => { this.getBooks() })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBooks();
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="text-white">React Google Book Search</h1>
          <h2 className="text-white">Your Saved Books</h2>
        </Jumbotron>
        <Container>
          <SavedBooks saved={this.state.results} removeBook={this.removeBook} />
        </Container>
      </Container>
    );
  };
};

export default SaveBooks;
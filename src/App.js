import React from 'react';
import Form from './components/Form';
import BookList from './components/BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      books: [],
      error: null
    }
  }
  componentDidMount() {
    this.fetchData(this.state.url);
  }
  fetchData(url) {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong!');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  handleAdd(url) {
    this.setState({
      url
    });
    this.fetchData(url);
  }
  render() {
    return (
      <main className='App'>
        <div className='header'>
          <h1>Google Book Search</h1>
        </div>
        <Form handleAdd={url => this.handleAdd(url)} />
        <BookList books={this.state.books} />
      </main>
    );
  }
}

export default App;
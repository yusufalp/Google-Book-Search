import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEntry: ''
    };
  }
  handleChange = e => {
    this.setState({
      userEntry: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.userEntry}`
    this.props.handleAdd(url);
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='search'>Search </label>
          <input
            type='text'
            name='search'
            id='search'
            value={this.state.userEntry}
            onChange={this.handleChange}
          />
          <button type='submit'>Go!</button>
        </form>
      </div>
    );
  }
}

export default Form;
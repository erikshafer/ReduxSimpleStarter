import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyC4z84LUAjS63TYpMiSfOWOeeYVZwYN8kY';

// This class will start, and the constructor will be called.
// State will be updated with an array.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }; // A list of objects. Not pre-populated.

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); // Update state. V: videos, K: data.
      // this.setState({ videos: videos }); // ONLY uses in ES6 when key and var are same.
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

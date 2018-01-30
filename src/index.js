import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC4z84LUAjS63TYpMiSfOWOeeYVZwYN8kY';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML.
// When creating a Component, we are creating a Class of a Component. Not an instance.
// We need to instantiate before we put it in the DOM.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated HTML and put it on the page (in the DOM).
// Wrapping something with tags will instantiate it. From `App` to <App />`, etc.
// Second argument is stating where it will be inserted in the DOM
//  e.g.    document.querySelector('.container')

ReactDOM.render(<App />, document.querySelector('.container'));

// All code we write in separate files, is siloed in other files we produce,
// will have 0% access to other files unless we explicitly list we need
// access to it. That includes needing access to React itself. This is
// due to JavaScript Modules.
import React from 'react';
// We need ReactDOM to be able to interact and render to the DOM.
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.
// When creating a Component, we are creating a Class of a Component. Not an instance.
// We need to instantiate before we put it in the DOM.
// const App = function () {
//     return <div>Hi!</div>;
// }
// ES6: More or less, using a fat arrow is identical-ish to using the function keyword.
const App = () => {
    return <div>Hi!</div>;
}


// Take this component's generated HTML and put it on the page (in the DOM).
// Wrapping something with tags will instantiate it. From `App` to <App />`, etc.
// Second argument is stating where it will be inserted in the DOM
//  e.g.    document.querySelector('.container')

ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';

// This is a Functional Component, because it's a function().
// There's also a Class Component. When we want there to be
// internal record keeping; what's happening to it, etc. To be aware.
// "Oh hey, the user typed something into my input."
// const SearchBar = () => {
//     // When transpiled, this will become React.createElement, which is why we need the import statement.
//     return <input />    
// };

// Create a new class called SearchBar, and give it all the functionality
// from React.Component class. Every React Component that is class based must
// have a render() method. Methods in JS Objects don't have a colon (like JSON).
class SearchBar extends React.Component {
    render() {
        return <input />;
    }
}

// PROBLEM: index.js will need to be able to access SearchBar. But
// every file is a "silo". So how can index access this function?
// The answer is exporting the function! I.E.:
export default SearchBar;

// It's critical we export the right thing!
import React from 'react';

const SearchBar = () => {
    // When transpiled, this will become React.createElement, which
    // is why we need the import statement.
    return <input />    
};

// PROBLEM: index.js will need to be able to access SearchBar. But
// every file is a "silo". So how can index access this function?
// The answer is exporting the function! I.E.:
export default SearchBar;

// It's critical we export the right thing!
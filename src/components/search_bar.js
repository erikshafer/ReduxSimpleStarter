import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Need to initialize a new State object, as well as props.
        // term is short for "search term". We want to be updating term when
        // the user is updating the input box.
        // Again, state is just a plain PS object. We need to initialize it.
        // The properties in state are not pre-defined, we figure it out as devs.
        this.state = { term: '' }; // state = object; // learn how to manipulate state
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
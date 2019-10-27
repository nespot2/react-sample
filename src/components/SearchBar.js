import React from 'react';
import {pipe,debounce} from 'fxjs';

class SearchBar extends React.Component {

    state = {
        term: 'hi there!'
    };

    onFormSubmit = pipe(
        event => event.preventDefault(),
        debounce(() => this.props.onSubmit(this.state.term),200)
    )

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );

    }


}

export default SearchBar;
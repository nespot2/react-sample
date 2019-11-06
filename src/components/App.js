import React from 'react';
import axios from 'axios';
import {go} from 'fxjs';
import SearchBar from "./SearchBar";


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            images: []
        };
    }

    onSearchSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }

}

export default App;
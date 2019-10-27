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
        const self = this;

        go(
            axios({
                method: "post",
                url: "/v1/cars",
                data: {
                    name: term
                }
            }),
            ({data}) => {
                self.setState({images: data})
            }
        );
    }

    render() {
        return (
            <div className="ui container" style={{margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found : {this.state.images.length} images
            </div>
        )
    }

}

export default App;
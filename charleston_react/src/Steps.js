import React, { Component } from 'react';
import Axios from 'axios';
import Step from './Step';

class Steps extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        };
    }

    componentDidMount() {
        Axios
            .get('http://localhost:3000/')
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch(function (error) { // Fonctionne pas
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => <Step id={item.id} name={item.name} description={item.description} image={item.image} video={item.video} />)}
            </div>
        );
    }
}
export default Steps;
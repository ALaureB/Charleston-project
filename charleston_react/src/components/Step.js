import React, { Component } from 'react';
import Axios from 'axios';
import UpdateStep from './UpdateStep';


class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    Axios
      .post(`http://localhost:3000/delete/${this.state.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
        <div className = "step">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
            <p>{this.props.id}</p>
            <img src={`./img/{this.props.image}`} alt= {this.props.image}/>
            <p>{this.props.video}</p>
            <form onSubmit={this.handleDelete}>        
              <input type="submit" value="Delete" />
            </form>

            <UpdateStep />
        </div>
    );
  }
}

export default Step;
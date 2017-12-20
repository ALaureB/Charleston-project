import React, { Component } from 'react';
import Axios from 'axios';


class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
    this.deleteStep = this.deleteStep.bind(this);
  }


  deleteStep(step){
    Axios
      .post('http://localhost:3000/delete/' + this.state.id )
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

              <input type="submit" value="Delete" onSubmit={this.deleteStep} />



          </div>
      );
    }
}
export default Step;
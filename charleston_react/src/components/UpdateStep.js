import React, { Component } from 'react';
import Axios from 'axios';

class UpdateStep extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: '',
      description: '',
      image: '',
      video: '',
      items:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios
      .get('http://localhost:3000/2')
      .then(result => {
        console.log(result);
        this.setState({
          items: result.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    Axios
      .post('http://localhost:3000/update/2', {
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
        video : this.state.video
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const step = this.state.items;
    return (
      <form onSubmit={this.handleSubmit}>

        <label>Nom : </label>
        <input type="text" name="name" value={step.name} onChange={(value) => this.handleChange(value)} />
        <br/>

        <label>Description : </label>
        <input type="text" name="description" onChange={this.handleChange} />
        <br/>

        <label>Image : </label>
        <input type="text" name="image" value={step.image} onChange={this.handleChange} />
        <br/>

        <label>Vidéo : </label>
        <input type="text" name="video" defaultValue={step.video} onChange={this.handleChange} />
        <br/>
        
        <input type="submit" value="Update" />
      </form>
    );
  }

}

export default UpdateStep;
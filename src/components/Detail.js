import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class Detail extends Component {
  state = {
    loading: true,
    user: [],
    repos: [],
  }
  componentWillMount(){
    this.getUser();
    this.getUserRepos();
  }
  getUser(){
    return fetch('https://api.github.com/users/' + this.props.username).then(response => {
      return response.json();
    }).then( result => {
      this.setState({
        user: result,
      });
    })
  }
  getUserRepos(){
    return fetch('https://api.github.com/users/' + this.props.username + '/repos').then(response => {
      return response.json();
    }).then( result => {
      this.setState({
        repos: result,
        loading: false
      });
    })
  }
  render(){
    var repos = this.state.repos.map((repo, i)=>{
      return <ListGroupItem><a href={repo.url}>{repo.name}</a></ListGroupItem>
    });
    var readableDate = new Date(this.state.user.created_at);
    if(this.state.loading === true){
      return(
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    return(
    <div>
      <h1>{this.state.user.name}</h1>
      <img src={this.state.user.avatar_url} alt={this.state.user.name} />
      <h4>{this.state.user.location}</h4>
      <a href="{this.state.email}">{this.state.user.email}</a>
      <p>Joined Github: {readableDate.getMonth()+1}-{readableDate.getDate()}-{readableDate.getFullYear()}</p>
      <h2>Repositories:</h2>
      <Col xs={8}>
      <ListGroup>
        {repos}
      </ListGroup>
      <Link to="/"><Button bsSize="large" bStyle="primary">Back</Button></Link>
      </Col>

    </div>
    )
  }
}

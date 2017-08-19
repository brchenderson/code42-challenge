import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';

export default class List extends Component {
  state = {
    list: []
  };
  componentDidMount(){
    this.getAllUsers();
  }
  getAllUsers(){
    return fetch('https://api.github.com/orgs/code42/members').then(response => {
      return response.json();
    }).then( result => {
      this.setState({
        list: result,
      });
    })
  }
  render(){
    var users = this.state.list.map((user, i)=>{
      return <NavItem><NavLink to={`/user/${user.login}`} activeClassName="active">{user.login}</NavLink></NavItem>
    });
    return(
      <Nav bsStyle="pills" stacked>{users}</Nav>

    )
  }
}

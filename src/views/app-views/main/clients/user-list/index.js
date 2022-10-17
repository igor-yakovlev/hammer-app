import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import UserList from './UserList';
import EditProfile from './EditProfile';


const UserListContent = ({match}) => {
	return (
	  <Switch>
		<Route path={`${match.url}/:id`} component={EditProfile} />
		<Route path={`${match.url}`} component={UserList} />
	  </Switch>
	)
  }


  export default UserListContent
import React from 'react'
import { Route, Switch, } from 'react-router-dom';
import ClientsList from './ClientsList';
import EditProfile from './EditProfile';


const UserListContent = ({match}) => {
	return (
	  <Switch>
		<Route path={`${match.url}/:id`} component={EditProfile} />
		<Route path={`${match.url}`} component={ClientsList} />
	  </Switch>
	)
  }


  export default UserListContent

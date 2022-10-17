import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import UserList from './user-list'

const Clients = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
			<Route path={`${match.url}/list`} component={UserList} />
		</Switch>
	)
}

export default Clients


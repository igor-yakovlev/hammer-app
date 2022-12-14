import React, {lazy} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import UserList from './clients-list'

const Clients = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
			<Route path={`${match.url}/list`} component={UserList} />
			<Route path={`${match.url}/group`} component={lazy(() => import(`./clients-group`))} />
		</Switch>
	)
}

export default Clients


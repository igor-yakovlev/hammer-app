import React, {lazy} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const Clients = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
			<Route path={`${match.url}/addresses`} component={lazy(() => import(`./addresses`))} />
			<Route path={`${match.url}/geozones`} component={lazy(() => import(`./geozones`))} />
		</Switch>
	)
}

export default Clients


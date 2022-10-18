import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
      <Route path={`${match.url}/planner`} component={lazy(() => import(`./planner`))} />
      <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
      <Route path={`${match.url}/offpicks`} component={lazy(() => import(`./offpicks`))} />
      <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
      <Route path={`${match.url}/mailingLists`} component={lazy(() => import(`./mailingLists`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
    </Switch>
  </Suspense>
)};

export default Main;

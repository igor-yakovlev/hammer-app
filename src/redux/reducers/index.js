import { combineReducers } from 'redux';
import Auth from './Auth';
import Planner from './Planner';
import Theme from './Theme';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    planner: Planner
});

export default reducers;
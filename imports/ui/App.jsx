import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Main from './layouts/Main.jsx';
import Home from './components/Home.jsx';
import { LandingRoutes } from '../../landing/imports/ui/Landing.jsx';

const Routes = (
	<Route>
		<Route component={Main}>
			<Route path='/' component={Home} />
		</Route>
		<Route path='landing'>
			{ LandingRoutes }
		</Route>
	</Route>
);

class App extends Component {
	render() {
		return (<Router history={browserHistory} routes={Routes} />);
	}
}

export default App;
export { Routes };

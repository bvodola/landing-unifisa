import { Meteor } from 'meteor/meteor';
import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Loading from './layouts/Loading.jsx';
import Confirmation from './layouts/Confirmation.jsx';

import Page from './containers/Page.jsx';
import AddPage from './containers/admin/AddPage.jsx';
import AddTemplate from './components/admin/AddTemplate.jsx';
import EditPage from './containers/admin/EditPage.jsx';

// ====================
// Main Pages Component
// ====================
class Landing extends Component {

	render() {
		console.log(this.props);
		return(
			<Page brand={this.props.params['brand']} slug={this.props.params['slug']} />
		);
	}
}

// ================
// Routes Component
// ================
const LandingRoutes = (
	<Route>
		<Route path='admin'>
			<Route path='add-page' component={AddPage} />
			<Route path='add-template' component={AddTemplate} />
			<Route path='edit-page/:id' component={EditPage} />
		</Route>
		<Route path='page'>
			<Route path='confirmation/(:id)' component={Confirmation} />
			<Route path='(:brand/:slug)' component={Landing} />
		</Route>
	</Route>
);

// =================
// Wrapper Component
// =================
class LandingApp extends Component {
	render() {
		return(
			<Router history={browserHistory}>
				{ LandingRoutes }
			</Router>
		);
	}
}

export { Landing, LandingRoutes, LandingApp };

import 'react-hot-loader/patch';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App, { Routes } from '../imports/ui/App.jsx';
import { AppContainer } from 'react-hot-loader';
import FastClick from 'fastclick';
// import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

Meteor.startup(() => {

	let enableSSR = false;
	let enableHMR = !enableSSR;

	// Applying FastClick
	if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
	}

	// ======================
	// Rendering the main APP
	// ======================

	// If the Hot Module Replacement is enabled
	// if(enableHMR) {
		render(<AppContainer><App enableSSR={enableSSR} /></AppContainer>, document.getElementById('app'));

		if (module.hot) {
			module.hot.accept('../imports/ui/App.jsx', () => {
				const NextApp = require('../imports/ui/App.jsx').default;
				render(
					<AppContainer>
						<NextApp />
					</AppContainer>,
					document.getElementById('app')
				);
			});
		}
	// }

	// If the Hot Module Replacement is not enabled
	// else {
	// 	ReactRouterSSR.Run(Routes, {rootElement: 'app'});
	// 	render(<App enableSSR={enableSSR} />, document.getElementById('app'));
	// }

});

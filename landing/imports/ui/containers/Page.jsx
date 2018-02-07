import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Page from '../components/Page.jsx';

import { Pages } from '../../models/pages.js';
import { Templates } from '../../models/templates.js';

function composer(props, onData) {

	const pagesHandle = Meteor.subscribe('pages');
	const templatesHandle = Meteor.subscribe('templates');

	if(pagesHandle.ready() && templatesHandle.ready()) {
		let page = Pages.findOne({ $and: [ { 'brand': props.brand }, { 'slug': props.slug } ] });
		let template = Templates.findOne({'_id': page.template_id});

		onData(null, {page, template});
	}
}

export default composeWithTracker(composer)(Page);

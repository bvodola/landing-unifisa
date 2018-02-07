import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import AddPage from '../../components/admin/AddPage.jsx';

import { Templates } from '../../../models/templates.js';

function composer(props, onData) {

	const templatesHandle = Meteor.subscribe('templates');

	if(templatesHandle.ready()) {
		let templates = Templates.find().fetch();
		onData(null, {templates});
	}
}

export default composeWithTracker(composer)(AddPage);

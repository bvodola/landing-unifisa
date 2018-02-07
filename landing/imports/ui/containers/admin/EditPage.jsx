import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import EditPage from '../../components/admin/EditPage.jsx';

import { Pages } from '../../../models/pages.js';
import { Templates } from '../../../models/templates.js';

function composer(props, onData) {

	const pagesHandle = Meteor.subscribe('pages');
  const templatesHandle = Meteor.subscribe('templates');

	if(pagesHandle.ready() && templatesHandle.ready()) {
		let page = Pages.findOne(props.params['id']);
    let template = Templates.findOne(page.template_id);
		onData(null, {page, template});
	}
}

export default composeWithTracker(composer)(EditPage);

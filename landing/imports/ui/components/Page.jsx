import React, { Component } from 'react';
import Template1 from '../templates/Template1.jsx';
import Basic1 from '../templates/Basic1.jsx';
import ThreeSteps from '../templates/ThreeSteps.jsx';

class Page extends Component {

	render() {
		console.log(this.props);
		switch(this.props.template.component_name) {
			case 'Template1':
				return <Template1 template={this.props.template} page={this.props.page} />
				break;
			case 'Basic1':
				return <Basic1 template={this.props.template} page={this.props.page} />
				break;
			case 'ThreeSteps':
				return <ThreeSteps template={this.props.template} page={this.props.page} />
				break;
		}
	}	
}

export default Page;
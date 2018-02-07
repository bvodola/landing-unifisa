import React, { Component } from 'react';
import { Helpers } from '../default/Helpers.jsx';
import FileUploader from '../default/FileUploader.jsx';

import { Pages } from '../../../models/pages.js';

// ===========
// ContentForm
// ===========
class ContentForm extends Component {

	renderElement(content) {
		let element;

		switch(content.type) {
			case('text'):
				element = <input type="text" ref={content.name} />;
				break;
			case('img'):
				element = <FileUploader elementDataState='uploadedFiles' ref={content.name} maxFiles={1} />
				break;
			default:
				element = <input type="text" ref={content.name} />;
		}

		return(
			<div key={content.name}>
				<p>{content.name}</p>
				<p>{content.description}</p>
				{element}
			</div>
		);
	}

	render() {
		let self = this;

		// First, we look-up for the selected template within the
		// templates object and set the contents object
		if(this.props.selected_template_id !== 'select') {
			let contents = $.grep(self.props.templates, function(e){ return e._id == self.props.selected_template_id; })[0].contents;

			return(
				<div>
					{Object.keys(contents).map((key, i) => (
						this.renderElement(contents[key])
					))}
				</div>
			)

		} else {
			return(
				<div>
					Nenhum
				</div>
			)
		}
	}
};

// =======
// AddPage
// =======
class AddPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selected_template_id: 'select'
		}
	}

	handleSubmit() {
		let query = Helpers.getRefValues(this.refs);
		query.template_id = this.state.selected_template_id;
		query.contents = Helpers.getRefValues(this.refs.ContentForm.refs);

		Pages.insert(query, function(e,r) {
			if(e)
				console.log(e);
			else
				console.log(r);
		});
	}

	// Sets the state variable selected_template_id when the Template Select box is changed
	handleTemplateSelectChange(event) {
		this.setState({selected_template_id: event.target.value});
	}

	// Render a SELECT element with the templates options fetched from the Database
	renderTemplateOptions() {
		return this.props.templates.map((template) => (
			<option key={template._id} value={template._id}>{template.name}</option>
		));
	}

	render() {
		return(
			<div className="admin-add-page">
				<input type="text" ref="brand" placeholder="Marca" />
				<input type="text" ref="slug" placeholder="Slug" />
				<FileUploader ref="hero_shot" maxFiles={1} />

				<select value={this.state.selected_template_id} onChange={this.handleTemplateSelectChange.bind(this)}>
					<option disabled value='select'>Selecione</option>
					{this.renderTemplateOptions()}
				</select>
				<ContentForm ref='ContentForm' selected_template_id={this.state.selected_template_id} templates={this.props.templates} />
				<button onClick={this.handleSubmit.bind(this)}>Salvar Página</button>
			</div>
		);
	}
}

export default AddPage;

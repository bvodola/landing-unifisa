import React, { Component } from 'react';
import AddContent from './AddContent.jsx';
import AddField from './AddField.jsx';
import { Helpers, Repeatable } from '../default/Helpers.jsx';
import { Templates } from '../../../models/templates.js';



class AddTemplate extends Component {

	// Handling the submission a new template
	handleSubmit() {

		// Setting the Query initial objects
		let query = Helpers.getRefValues(this.refs);

		// Fetching data from the AddContent Components (ref='components')
		query.contents = {};
		for(let key in this.refs.contents.refs) {
			let content = Helpers.getRefValues(this.refs.contents.refs[key].refs)
			query.contents[content.name] = content;
		}

		// Fetching data from the AddField Components (ref='fields')
		query.fields = {};
		for(let key in this.refs.fields.refs) {
			let field = Helpers.getRefValues(this.refs.fields.refs[key].refs)
			query.fields[field.name] = field;
			delete query.fields[field.name].name;
		}

		Templates.insert(query, function(e,r) {
			if(e)
				console.log(e);
			else
				console.log(r);
		});
	}

	render() {
		return(
			<div className="admin-add-template">
				<h1>Cadastrar Novo Template</h1>
				<input type="text" placeholder='Nome do Template' ref='name' />
				<input type="text" placeholder='Nome do Componente' ref='component_name' />

				<h2>Conteúdo do Template</h2>
				<Repeatable ref='contents'>
					<AddContent />
				</Repeatable>

				<h2>Campos de Formulário do Template</h2>
				<Repeatable ref='fields'>
					<AddField />
				</Repeatable>

				<button onClick={this.handleSubmit.bind(this)}>Cadastrar Template</button>
			</div>
		);
	}
}

export default AddTemplate;

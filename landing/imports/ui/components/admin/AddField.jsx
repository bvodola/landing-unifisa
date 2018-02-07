import React, { Component } from 'react';

class AddField extends Component {

	render() {
		return(
			<div className='admin-add-field'>
				<input type="text" placeholder='Nome' ref='name' />
				<input type="text" placeholder='Nome de Exibição' ref='display_name' />
				<select ref='type'>
					<option value="input">Texto Livre</option>
					<option value="select">Múltipla Escolha</option>
					<option value="email">Email</option>
					<option value="phone">Telefone</option>
				</select>
			</div>
		);
	}
}

export default AddField;
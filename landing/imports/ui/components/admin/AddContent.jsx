import React, { Component } from 'react';

class AddContent extends Component {

	render() {
		return(
			<div className='admin-add-content'>
				<input type="text" placeholder='Nome' ref='name' />
				<input type="text" placeholder='Descrição' ref='description' />
				<select ref='type'>
					<option value="text">Texto</option>
					<option value="html">HTML</option>
					<option value="js">JavaScript</option>
					<option value="img">Imagem</option>
				</select>
			</div>
		);
	}
}

export default AddContent;
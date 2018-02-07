import React, { Component } from 'react';
import { Helpers } from '../default/Helpers.jsx';
import FileUploader from '../default/FileUploader.jsx';

import { Pages } from '../../../models/pages.js';

class ContentForm extends Component {

  renderElement(content, data = {}) {
    let element;

    switch(content.type) {
      case('text'):
        element = <input type="text" ref={content.name} defaultValue={data} />;
        break;
      case('img'):
        element = <FileUploader elementDataState='uploadedFiles' defaultValue={data} ref={content.name} maxFiles={1} />
        break;
      default:
        element = <input type="text" ref={content.name} defaultValue={data} />;
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
    let contents = this.props.contents;
    let data = this.props.data;

    return(
      <div>
          {Object.keys(contents).map((key, i) => (
            this.renderElement(contents[key],data[key])
          ))}
      </div>
    );
  }

};

class EditPage extends Component {

  renderElement(content, data = {}) {
		let element;

		switch(content.type) {
			case('text'):
				element = <input type="text" ref={content.name} defaultValue={data} />;
				break;
			case('img'):
				element = <FileUploader elementDataState='uploadedFiles' defaultValue={data} ref={content.name} maxFiles={1} />
				break;
			default:
				element = <input type="text" ref={content.name} defaultValue={data} />;
		}

		return(
			<div key={content.name}>
				<p>{content.name}</p>
				<p>{content.description}</p>
				{element}
			</div>
		);
	}

  handleSubmit(event) {
    event.preventDefault();
    let query = Helpers.getRefValues(this.refs);
		query.contents = Helpers.getRefValues(this.refs.ContentForm.refs);
    Pages.update({"_id": this.props.page._id}, {$set: query });
	}

  render() {
    // The Contents of the page being edited
    let contents = this.props.template.contents;
    let contentsData = this.props.page.contents;

    return(
      <div>
        <h1>Edit Page</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="">Brand</label>
          <input type="text" defaultValue={this.props.page.brand} ref='brand'/>

          <label htmlFor="">Slug</label>
          <input type="text" defaultValue={this.props.page.slug} ref='slug'/>

          <ContentForm ref='ContentForm' contents={contents} data={contentsData} />
          <input type="submit"/>
        </form>
      </div>
    );
  }

}

export default EditPage;

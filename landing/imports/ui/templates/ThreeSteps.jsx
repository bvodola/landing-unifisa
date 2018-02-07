import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, withRouter } from 'react-router'
import { Helpers } from '../components/default/Helpers.jsx';
import { Leads } from '../../models/leads.js';

if(Meteor.isClient) {
	require('./sass/three-steps.sass');
}


class ThreeSteps extends Component {

	constructor(props) {
		super(props);

		// Initial State
		this.state = {
			numberOfMonths: '36'
		}
	}

	componentDidMount() {

		// Setting the Title Tag for the page
		document.title = 'Simulação de Consórcio Nacional Unifisa Audi';
		$('.phone-mask').mask('(00) 00000-0000');
	}

	handleSubmit(event) {
		event.preventDefault();
		let query = Helpers.getRefValues(this.refs);
		let self = this;
		Leads.insert(query, function(e,id) {
			if(e) console.log(e);
			else {
				self.props.router.push('/landing/page/confirmation');
			}
		});

	}

	handleMonthsChange(event) {
		this.setState({'numberOfMonths': event.target.value});
	}

	render() {
		// Setting the page and template props in a less verbose way
		let {page, template} = this.props;

		return(
			<div className='three-steps'>

				<div className="top">
					<h1>{page.contents.title}</h1>
					<p>
						<img className='logo' src={page.contents.logo[0]} alt="Logo"/>
					</p>
				</div>


				<header>
					<div className="container">
						<div className='hero-shot'>
							<img src={page.contents.hero_shot[0]} alt="Hero Shot"/>
						</div>
						<h2 dangerouslySetInnerHTML={{__html: page.contents.header}}></h2>

						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className='box row'>

								<div className="col-lg-8 col-md-6">
									<div className="row">
										<div className='col-lg-6 step1'>
											<b className='number'>1.</b>
											<p>
												{template.fields.vehicle_price.display_name}
											</p>
											<div>
												<select className='price-select' ref='price'>
													<option value="30000">R$ 30.000</option>
													<option value="60000">R$ 60.000</option>
													<option value="90000">R$ 90.000</option>
													<option value="120000">R$ 120.000</option>
													<option value="180000">R$ 180.000</option>
												</select>
											</div>
										</div>


										<div className='col-lg-6 step2'>
											<b className='number'>2.</b>
											<p>
												{template.fields.number_of_months.display_name}
											</p>

											<div className='number-of-months-wrapper'>

												<input type="hidden" ref='number_of_months' value={this.state.numberOfMonths} />
												<div className='number-of-months-option'>
													<label>
														<input defaultChecked onChange={this.handleMonthsChange.bind(this)} type="radio" value={36} name='number_of_months'/>
														<span>36</span>
													</label>
												</div>
												<div className='number-of-months-option'>
													<label>
														<input onChange={this.handleMonthsChange.bind(this)} type="radio" value={50} name='number_of_months'/>
														<span>50</span>
													</label>
												</div>
												<div className='number-of-months-option'>
													<label>
														<input onChange={this.handleMonthsChange.bind(this)} type="radio" value={60} name='number_of_months'/>
														<span>60</span>
													</label>
												</div>
												<div className='number-of-months-option'>
													<label>
														<input onChange={this.handleMonthsChange.bind(this)} type="radio" value={70} name='number_of_months'/>
														<span>70</span>
													</label>
												</div>
												<div className='number-of-months-option'>
													<label>
														<input onChange={this.handleMonthsChange.bind(this)} type="radio" value={80} name='number_of_months'/>
														<span>80</span>
													</label>
												</div>
												<span className="bar"></span>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 cta-form step3'>
									<div className="row">
										<b className='number'>3.</b>
										<p>
											<span className="cta-form-title">
												{page.contents.cta_form_title}

											</span>
											<span className="cta-form-subtitle">
												{page.contents.cta_form_subtitle}
											</span>
										</p>
									</div>

									<input required type="text" ref='name' placeholder={template.fields.name.display_name}/>
									<input required type="email" ref='email' placeholder={template.fields.emai.display_name}/>
									<input required type="text" ref='phone' placeholder={template.fields.phone.display_name} className='phone-mask' />

									<button type='submit' className='cta-button'>{page.contents.cta_text}</button>
								</div>
							</div>
						</form>
					</div>
				</header>
			</div>
		);
	}
}



export default withRouter(ThreeSteps);

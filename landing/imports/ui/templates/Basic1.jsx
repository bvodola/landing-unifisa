import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router'

import Slider from 'rc-slider';

import { Helpers } from '../components/default/Helpers.jsx';
import { Leads } from '../../models/leads.js';

if(Meteor.isClient) {
	require('rc-slider/assets/index.css');
}

const validateCPF = function(cpf) {
  cpf = cpf.replace(/[^\d]+/g,'');
  if(cpf == '') return false;
  // Elimina CPFs invalidos conhecidos
  if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
          return false;
  // Valida 1o digito
  add = 0;
  for (i=0; i < 9; i ++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
          rev = 0;
      if (rev != parseInt(cpf.charAt(9)))
          return false;
  // Valida 2o digito
  add = 0;
  for (i = 0; i < 10; i ++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
      rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
      return false;
  return true;
}


class CustomHandle extends Component {

	componentDidMount() {
		$('.money-mask').mask('000.000.000.000.000,00', {reverse: true});
	}

	render(){
		const handleStyle = {
		  position: 'absolute',
		  transform: 'translate(-50%, -50%)',
		  cursor: 'pointer',
		  padding: '2px',
		  border: '2px solid #abe2fb',
		  borderRadius: '100%',
		  background: '#fff',
		  fontSize: '13px',
		  textAlign: 'center',
			width: '15px',
			height: '15px',
		};

		const tipStyle = {
			textAlign: 'left',
			top: '-35px',
			left: '-30px',
			background: '#00ace4',
			borderRadius: '3px',
			color: '#fff',
			padding: '2px',
			display: 'inline-block',
			position: 'relative',
			fontWeight: 'bold'
		}

		let props = this.props;

		const style = Object.assign({ left: `${props.offset}%` }, handleStyle);
		return(
				<div style={style}>
					<div style={tipStyle}>
						R$
						{props.value.toLocaleString()}
					</div>
				</div>
		);
	}
}

class Basic1 extends Component {

	constructor(props){
		super(props);

		this.funding_types = [
			{
				name: 'imovel',
				label: 'Imóvel',
				bg: '/img/bg/bg1.jpg',
				max: 400000,
				min: 40000,
				step: 10000,
				installments: [
					{ quantity: 180, ratio: 138.7443635 },
					{ quantity: 160, ratio: 123.9925604 },
					{ quantity: 140, ratio: 109.9807534 },
					{ quantity: 120, ratio: 95.5566173 },
					{ quantity: 100, ratio: 81.4000814 },
				]
			},

			{
				name: 'carro',
				label: 'Carro',
				bg: '/img/bg/bg-carro.jpg',
				max: 300000,
				min: 30000,
				step: 2500,
				installments: [
					{ quantity: 100, ratio: 75.46844502 },
					{ quantity: 80, ratio: 62.3293928 },
					{ quantity: 60, ratio: 48.26086957 },
					{ quantity: 50, ratio: 40.86489343 },
					{ quantity: 36, ratio: 30.00776096 },
				]
			},

			{
				name: 'moto',
				label: 'Moto',
				bg: '/img/bg/bg-moto.jpg',
				max: 100000,
				min: 25000,
				step: 2500,
				installments: [
					{ quantity: 80, ratio: 62.34482759 },
					{ quantity: 70, ratio: 55.39215686 },
					{ quantity: 60, ratio: 48.26086957 },
					{ quantity: 50, ratio: 40.86489343 },
					{ quantity: 36, ratio: 30.00776096 },
				]
			},

			{
				name: 'quadriciclo',
				label: 'Quadriciclo',
				bg: '/img/bg/bg-quadri.jpg',
				max: 120000,
				min: 10000,
				step: 2500,
				installments: [
					{ quantity: 80, ratio: 62.34482759 },
					{ quantity: 70, ratio: 55.39215686 },
					{ quantity: 60, ratio: 48.26086957 },
					{ quantity: 50, ratio: 40.86489343 },
					{ quantity: 36, ratio: 30.00776096 },
				]
			},

			{
				name: 'spyder',
				label: 'Spyder',
				bg: '/img/bg/bg-spider.jpg',
				max: 120000,
				min: 90000,
				step: 5000,
				installments: [
					{ quantity: 80, ratio: 62.34482759 },
					{ quantity: 70, ratio: 55.39215686 },
					{ quantity: 60, ratio: 48.26086957 },
					{ quantity: 50, ratio: 40.86489343 },
					{ quantity: 36, ratio: 30.00776096 },
				]
			},

			{
				name: 'jetsky',
				label: 'JetSky',
				bg: '/img/bg/bg-jetsky.jpg',
				max: 100000,
				min: 30000,
				step: 2500,
				installments: [
					{ quantity: 80, ratio: 62.34482759 },
					{ quantity: 70, ratio: 55.39215686 },
					{ quantity: 60, ratio: 48.26086957 },
					{ quantity: 50, ratio: 40.86489343 },
					{ quantity: 36, ratio: 30.00776096 },
				]
			},

			{
				name: 'popa',
				label: 'Motor de Popa',
				bg: '/img/bg/bg-popa.jpg',
				max: 90000,
				min: 70000,
				step: 2500,
				installments: [
					{ quantity: 80, ratio: 62.34482759 },
					{ quantity: 70, ratio: 55.39215686 },
					{ quantity: 60, ratio: 48.26086957 },
					{ quantity: 50, ratio: 40.86489343 },
					{ quantity: 36, ratio: 30.00776096 },
				]
			},

		];

		let initial_funding_type = 'imovel';

		this.funding_types.forEach((v,i,a) => {
			if(v.name == initial_funding_type) {
				initial_funding_type = v;
			}
		})

		this.state = {
			simulation_step: 1,
			funding_value: initial_funding_type.min+initial_funding_type.step*5,
			selected_funding_type: initial_funding_type,
			selected_plan: {
				quantity: 0,
				value: 0
			}
		}



	}

	componentDidMount() {

		// Setting the Title Tag for the page
		document.title = 'Simulação de Consórcio Nacional Unifisa Audi';

		// Setting the Phone Mask for the .phone-mask class
		$('.phone-mask').mask('(00) 00000-0000');
		$('.cpf-mask').mask('000.000.000-00');
	}

	handleSubmit(event) {
		event.preventDefault();

		// Validation
		var ref = $(event.target).find("[required]");
    $(ref).each(function(){
	    if ( $(this).val() == '' )
	    {
	        alert("Todos os campos são obrigatórios");

	        $(this).focus();

	        e.preventDefault();
	        return false;
	    }
    });

		let query = Helpers.getRefValues(this.refs);
		let self = this;

		let confirmationString =
			`Por favor, confirme as informações abaixo:`+
			`\n\n=== SEUS DADOS ===`+
			`\nNome: ${query.name}`+
			`\nCPF: ${query.cpf}`+
			`\nTelefone: ${query.phone}`+
			`\nEmail: ${query.email}`+
			`\nCidade: ${query.city}`+
			`\nBairro: ${query.neighborhood}`+
			`\nHorário de Contato: ${query.contact_time}`+
			`\n\n=== PLANO ===`+
			`\n${this.state.selected_funding_type.label} de R$ ${this.state.funding_value}`+
			`\nem ${this.state.selected_plan.quantity} x R$ ${this.state.selected_plan.value}`

		if(confirm(confirmationString)) {

			Leads.insert(query, function(e,id) {
				if(e) console.log(e);
				else {
					$.ajax({
				    type: "POST",
				    url: "http://lm.mediaplanning.com.br/api/leads/",
				    dataType: 'json',
				    async: false,
				    data: {
							name: query.name,
							client: 'http://localhost:8000/api/users/25/',
							cpf: query.cpf,
							phone1: query.phone,
							email: query.email,
							best_period: query.contact_time,
							obs: `Cidade: ${query.city}, \nBairro: ${query.neighborhood}, \nConsórcio para: ${query.funding_type}, \nValor: ${query.funding_value}, \nPlano: ${self.state.selected_funding_type.label} de R$ ${self.state.funding_value} \nCódigo: ${id}`
						},
						headers: {
							'Authorization': 'Token 81acf001fe50dd8a73eecade2225be6fc786eec0',
							'Content-Type': 'application/x-www-form-urlencoded',
							'X-CSRFToken': '81acf001fe50dd8a73eecade2225be6fc786eec0'
						},
				    // beforeSend: function (xhr){
				    //     xhr.setRequestHeader();
						// 		xhr.setRequestHeader();
						// 		xhr.setRequestHeader();
				    // },
				    success: function (){
				        self.props.router.push('/landing/page/confirmation/?id='+id);
				    }
					});
				}
			});

		}

	}

	handleChangeStep(current_step,forward) {
		let next_step = (forward?current_step+1:current_step-1);
		this.setState({simulation_step: next_step}, function() {
			document.getElementById('step'+current_step).style.display='none';
			$("#step"+next_step).fadeIn();
		});
	}

	handleChangeFundingType(event) {
		this.funding_types.forEach((v,i,a) => {
			if(v.name == event.target.value) {
				this.setState({
					selected_funding_type: v
				});
			}
		})
	}

	handleChangeFundingValue(value) {
		this.setState({funding_value: value});
	}

	handleChangePlan(quantity, value) {
		this.setState({
			selected_plan: { quantity, value }
		})

		this.handleChangeStep(2,true);
	};

	render() {
		let page = this.props.page;
		let template = this.props.template;

		return(
			<div className='basic1'>
				<header style={{
						color: '#000',
						backgroundImage: 'url('+this.state.selected_funding_type.bg+')',
						backgroundSize: 'auto 700px',
						height: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundPositionX: 'right',
						transition: 'background 0.3s ease 0.5s'
					}}>
					<div className="container">
						<div className="row">
							<div className="box col-lg-6 col-md-12">
								<img style={{width: '140px'}} className={template.contents.logo.class} src={page.contents.logo[0]} alt=""/>
								<h1 className={template.contents.header.class}>{page.contents.header}</h1>


								<form className="form" onSubmit={(ev) => this.handleSubmit(ev)}>

									{/* ****** */}
									{/* Step 1 */}
									{/* ****** */}
									<div id="step1">
										<h2 className={template.contents.subheader.class}>{page.contents.subheader}</h2>
										{/* ************ */}
										{/* Funding Type */}
										{/* ************ */}
										<div className="form-group">
											<div className="row">
												<label style={{marginBottom: '10px', fontWeight: 'bold'}} className='col-xs-12'>
													{'O que você deseja comprar?'}
												</label>
											</div>
											<select ref='funding_type' className='form-control' defaultValue='auto' onChange={this.handleChangeFundingType.bind(this)}>
												{this.funding_types.map((v,i,a) => (
													<option key={i} value={v.name}>{v.label}</option>
												))}
											</select>
										</div>

										{/* ************* */}
										{/* Funding Value */}
										{/* ************* */}
										<div className="form-group" style={{marginBottom: '40px'}}>
											<div className="row">
												<label style={{marginTop: '30px' ,marginBottom: '40px'}} className='col-xs-12'><b>Valor do Bem</b></label>
											</div>
											<div className="row">
												<div className="col-xs-12">
													<Slider
														onChange={this.handleChangeFundingValue.bind(this)}
														defaultValue={this.state.funding_value}
														step={this.state.selected_funding_type.step}
														min={this.state.selected_funding_type.min}
														max={this.state.selected_funding_type.max}
														handle={<CustomHandle />}
													/>
													<input type="hidden" ref="funding_value" value={this.state.funding_value} />
												</div>
											</div>
										</div>

										<div className="form-group">
											<span onClick={() => this.handleChangeStep(1, true)} className="btn btn-primary full">Continuar Simulação</span>
										</div>
									</div>

									{/* ****** */}
									{/* Step 2 */}
									{/* ****** */}
									<div id="step2" style={{display:'none'}}>
										<a href="#" onClick={(ev) => {ev.preventDefault(); this.handleChangeStep(2, false)}}>&#10094; Voltar para o passo anterior</a>
										<h2 className={template.contents.subheader.class}>
											Escolha um dos planos abaixo
										</h2>
										<h3 style={{fontSize: '20px', marginBottom: '20px'}} >Opções para <b>{this.state.selected_funding_type.label} de R$ {this.state.funding_value}</b></h3>
										<div className="form-group">
											<div className="list-group">

												{this.state.selected_funding_type.installments.map((v,i,a) => (
													<button key={i} type='button' className="list-group-item" onClick={() => this.handleChangePlan(v.quantity,Math.ceil(this.state.funding_value/v.ratio))}>
														{v.quantity} x R$ {Math.ceil(this.state.funding_value/v.ratio)},00
														<span className="badge">Escolher este</span>
													</button>
												))}
											</div>
										</div>
									</div>

									{/* ****** */}
									{/* Step 3 */}
									{/* ****** */}
									<div id="step3" style={{display:'none'}}>
										<a href="#" onClick={(ev) => { ev.preventDefault(); this.handleChangeStep(3, false)}}>&#10094; Voltar para o passo anterior</a>
										<div style={{
												background: '#00ABE4',
												color: '#fff',
												padding: '10px',
												margin: '10px 5%',
												borderRadius: '5px'
											}}>
											<b>Plano escolhido</b><br />
											{this.state.selected_funding_type.label} de R$ {this.state.funding_value}<br />
											{this.state.selected_plan.quantity} x R$ {this.state.selected_plan.value}
										</div>
										<h2 className={template.contents.subheader.class}>Preencha os dados abaixo para continuar</h2>
										<div className="form-group">
											<input type='text' ref='name' placeholder='Nome' className='form-control' required />
										</div>
										<div className="form-group">
											<input type='text' ref='cpf' placeholder='CPF' className='form-control cpf-mask' required />
										</div>
										<div className="form-group">
											<input type='email' ref='email' placeholder='Email' className='form-control' required />
										</div>
										<div className="form-group">
											<input type='text' ref='phone' placeholder='Telefone' className='form-control phone-mask' required />
										</div>
										<div className="form-group">
											<input type='text' ref='city' placeholder='Cidade' className='form-control' defaultValue='São Paulo' required />
										</div>
										<div className="form-group">
											<input type='text' ref='neighborhood' placeholder='Bairro' className='form-control' required />
										</div>
										<div className="form-group">
											<select ref='contact_time' className='form-control' defaultValue=''>
												<option value="" disabled>Melhor horário para contato</option>
												<option value="09h até 12h">09h até 12h</option>
												<option value="12h até 14h">12h até 14h</option>
												<option value="14h até 18h">14h até 18h</option>
												<option value="18h até 21h">18h até 21h</option>
											</select>
										</div>
										<div className="form-group">
											<button className="btn btn-primary full">Confirmar e Solicitar Ligação</button>
										</div>
									</div>



								</form>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}

}

export default withRouter(Basic1);

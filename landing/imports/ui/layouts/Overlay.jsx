class Overlay extends Component {

	constructor(props) {
		super(props);
	}

	closeNav() {
		document.getElementById("myNav").style.width = "0%";
	}

	openNav() {
		// document.getElementById("myNav").style.width = "100%";
		this.props.router.push('/landing/page/confirmation');
	}
	
	render() {

		return(
			<div>
			<div id="myNav" className="overlay">

			  <a href="#" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>

			  <div className="overlay-content">
			    <a href="#">About</a>
			    <a href="#">Services</a>
			    <a href="#">Clients</a>
			    <a href="#">Contact</a>
			  </div>

			</div>
		
			<span onClick={this.openNav.bind(this)}>open</span>
			</div>
		);
	}
}
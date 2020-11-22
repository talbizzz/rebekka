import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Appointments from './Appointments/Appointments';
import Contact from './Contact/Contact';

class App extends React.Component {
	constructor() {
		super();
		this.state ={
			about:false,
			gallery: false,
			appointments: false,
			contact: false
		}
	}

	onClickAbout = (e) => {
		e.preventDefault()
		this.setState({about:true});
	}
	onClickGallery = (e) => {
		e.preventDefault()
		this.setState({about:true, gallery: true, appointments:false, contact: false});
	}
	onClickAppointments = (e) => {
		e.preventDefault()
		this.setState({about:true, gallery:true, appointments: true, contact: false});
	}
	onClickContact = (e) => {
		e.preventDefault()
		this.setState({about:true, gallery: true, appointments:true, contact: true});
	}


  	render(){
    	return(
			<div>
			
				{
					!(this.state.about)?
					<Welcome 
						About={this.onClickAbout}
						Gallery={this.onClickGallery}
						Appointments={this.onClickAppointments}
						Contact={this.onClickContact}
					/>
					:(
					<div>
						<Navbar
							About={this.onClickAbout}
							Gallery={this.onClickGallery}
							Appointments={this.onClickAppointments}
							Contact={this.onClickContact}
						/>
						{
							!(this.state.gallery)? 
							<About/>
							:(
								!(this.state.appointments)? 
								<Gallery/>
								:(
									!(this.state.contact) ? 
									<Appointments/>
									:<Contact/>
								)		
							)
						} 
						</div>
						)
				}
			</div>
    	)
  	}
}

export default App;

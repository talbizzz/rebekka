import React from 'react';
import Scenes from './Scenes/Scenes';
import Portraits from './Portraits/Portraits';
import {portraits} from './Portraits'; 
import {scenes} from './Scenes'; 

class Gallery extends React.Component {
	constructor(){
		super();
		this.state= {
			portraits: false,
			scenes:false
		}
	}

	onClickScenes = (e) => {
		e.preventDefault();
		this.setState({scenes:true, portraits: false})
	}

	onClickPortraits = (e) => {
		e.preventDefault();
		this.setState({scenes:false, portraits: true})
	}

	render() {
		return(
			<div>
					{
						(!this.state.portraits && !this.state.scenes) ?
						<div className="pt6 mt6-ns">
							<a href="/" className="grow no-underline dib ml6-ns fl w-100 w-40-ns pa3 mr2">
								<img 
									src="https://static.wixstatic.com/media/879330_6220169e34bc48d686b8f8d4fa311de2~mv2.jpg/v1/fill/w_1686,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_6220169e34bc48d686b8f8d4fa311de2~mv2.webp" 
									alt="Portrait" 
									onClick={this.onClickPortraits}/>
								<div className="mt1 tc baskerville f3 washed-red" style={{fontFamily:"Mak"}}>Portraits</div>
							</a>
							<a href="/" className="grow no-underline dib fl w-100 w-40-ns pa3 mr2">
								<img 
									src="https://static.wixstatic.com/media/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.jpg/v1/fill/w_1686,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.webp" 
									alt="Scenes" 
									onClick={this.onClickScenes}/>
								<div className="mt1 tc baskerville f3 washed-red" style={{fontFamily:"Mak"}}>Scenes</div>
							</a>
						</div>
						:(
							(this.state.portraits && !this.state.scenes)?
							<Portraits portraits={portraits}/>
							:(
								(!this.state.portraits && this.state.scenes)?
								<Scenes scenes={scenes}/>
								:(<p/>)
							)

						)
					}
			</div>
		)
	}
}

export default Gallery
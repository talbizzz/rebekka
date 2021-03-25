import React from 'react';
import Scenes from './Scenes/Scenes';
import Portraits from './Portraits/Portraits';
import {portraits} from './Portraits'; 
import {scenes} from './Scenes';
import imagePort from './fotos/image2.jpeg';
import imageScenes from './fotos/image6.jpeg';

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
									src={imagePort}
									alt="Portrait"
									onClick={this.onClickPortraits}/>
								<div className="mt1 tc baskerville f3 washed-red" style={{fontFamily:"Mak"}}>Portraits</div>
							</a>
							<a href="/" className="grow no-underline dib fl w-100 w-40-ns pa3 mr2">
								<img 
									src={imageScenes}
									alt="Scenes" 
									onClick={this.onClickScenes}
								/>
								<div className="mt1 tc baskerville f3 washed-red" style={{fontFamily:"Mak"}}>Audios & Videos</div>
							</a>
						</div>
						:(
							(this.state.portraits && !this.state.scenes)?
								<div>
									<Portraits portraits={portraits} />
									<div className={"tc"}>
										<a href="/" className="grow no-underline dib fl w-100 f1 baskerville washed-yellow" onClick={this.onClickScenes}>Videos & Audios</a>
									</div>
								</div>
							:(
								(!this.state.portraits && this.state.scenes)?
									<div>
										<Scenes scenes={scenes}/>
										<div className={"tc"}>
											<a href="/" className="grow no-underline dib fl w-100 f1 baskerville washed-yellow" onClick={this.onClickPortraits}>Portraits</a>
										</div>
									</div>
								:(<p/>)
							)

						)
					}
			</div>
		)
	}
}

export default Gallery
import React from 'react'; 
import OpenableImage from '../OpenableImage/OpenableImage'


const Scenes = ({scenes}) => { 
	return (
		<div>
			<div className="mt6 flex">
				<div className="fl w-25"><OpenableImage image={scenes[1].url} caption={scenes[0].caption}/></div>
				<div className="fl w-25"><OpenableImage image={scenes[6].url} caption={scenes[0].caption}/></div>		
				<div className="fl w-25"><OpenableImage image={scenes[7].url} caption={scenes[0].caption}/></div>
				<div className="fl w-25"><OpenableImage image={scenes[12].url} caption={scenes[0].caption}/></div>
			</div>
			<div className="flex">	
				<div className="fl w-25"><OpenableImage image={scenes[4].url} caption={scenes[0].caption}/></div>				
				<div className="fl w-25"><OpenableImage image={scenes[11].url} caption={scenes[0].caption}/></div>	
				<div className="fl w-25"><OpenableImage image={scenes[14].url} caption={scenes[0].caption}/></div>		
			    <div className="fl w-25"><OpenableImage image={scenes[2].url} caption={scenes[0].caption}/></div>	
			</div>	
			<div className="flex">
				<div className="fl w-20 pa2"><OpenableImage image={scenes[3].url} caption={scenes[0].caption}/></div>
				<div className="fl w-20 pa2"><OpenableImage image={scenes[5].url} caption={scenes[0].caption}/></div>		
				<div className="fl w-20 pa2"><OpenableImage image={scenes[8].url} caption={scenes[0].caption}/></div>		
				<div className="fl w-20 pa2"><OpenableImage image={scenes[9].url} caption={scenes[0].caption}/></div>	
				<div className="fl w-20 pa2"><OpenableImage image={scenes[0].url} caption={scenes[0].caption}/></div>
			</div>
			

		</div>
	);
}

export default Scenes


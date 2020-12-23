import React from 'react'; 
import OpenableImage from '../OpenableImage/OpenableImage'


const Portraits = ({portraits}) => {
	return (
		<div>
			<div className="mt6 flex">
				<div className="fl w-50 pa2 "><OpenableImage image={portraits[0].url} caption={portraits[0].caption}/></div>
				<div className="fl w-50 pa2"><OpenableImage image={portraits[4].url} caption={portraits[0].caption}/></div>
			</div>
			<div className="flex">
			</div>	
			<div className="flex">
				<div className="fl w-third pa2"><OpenableImage image={portraits[1].url} caption={portraits[0].caption}/></div>
				<div className="fl w-third pa2"><OpenableImage image={portraits[2].url} caption={portraits[0].caption}/></div>
				<div className="fl w-third pa2"><OpenableImage image={portraits[3].url} caption={portraits[0].caption}/></div>
			</div>
		</div>
	);
}

export default Portraits


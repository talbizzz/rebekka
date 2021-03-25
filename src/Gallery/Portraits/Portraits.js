import React from 'react'; 
import OpenableImage from '../OpenableImage/OpenableImage'


const Portraits = ({portraits}) => {
	return (
		<div>
			<div className="">
				<div className="fl-ns w-100 w-50-ns pa2"><OpenableImage image={portraits[2].url} caption={portraits[0].caption}/></div>
				<div className="fl-ns w-100 w-50-ns pa2"><OpenableImage image={portraits[1].url} caption={portraits[0].caption}/></div>
			</div>
			<div className="mt6">
				<div className="fl-ns w-100 w-third-ns pa2"><OpenableImage image={portraits[6].url} caption={portraits[0].caption}/></div>
				<div className="fl-ns w-100 w-third-ns pa2"><OpenableImage image={portraits[5].url} caption={portraits[0].caption}/></div>
				<div className="fl-ns w-100 w-third-ns pa2"><OpenableImage image={portraits[7].url} caption={portraits[0].caption}/></div>
			</div>
			<div className="mt6">
				<div className="fl-ns w-100 w-third-ns pa2"><OpenableImage image={portraits[3].url} caption={portraits[0].caption}/></div>
				<div className="fl-ns w-100 w-third-ns pa2"><OpenableImage image={portraits[0].url} caption={portraits[0].caption}/></div>
				<div className="fl-ns w-100 w-third-ns pa2"><OpenableImage image={portraits[4].url} caption={portraits[0].caption}/></div>
			</div>
		</div>
	);
}

export default Portraits


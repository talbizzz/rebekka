import React from 'react'; 
import './Navbar.css';


const Navbar = ({About, Gallery, Appointments, Contact}) => {
	return(
		<div>
			<nav class="db dt-l w-100 border-box pa3 ph5-l sticky  baskerville" style={{zIndex:"20", backgroundColor:"black"}}>
				<a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/rebekka" title="Home">
					<img 
						src="https://static.wixstatic.com/media/879330_6220169e34bc48d686b8f8d4fa311de2~mv2.jpg/v1/fill/w_1686,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_6220169e34bc48d686b8f8d4fa311de2~mv2.webp" 
						class="dib w2 h2 br-100" 
						alt="Home"/>
				</a>
				<div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
					<a class="link dim white f5 f4-l dib mr3 mr4-l" href="/rebekka" title="Home">Home</a>
					<a class="link dim white f5 f4-l dib mr3 mr4-l" href="/" title="About" onClick={About}>About</a>
					<a class="link dim white f5 f4-l dib mr3 mr4-l" href="/" title="Gallery" onClick={Gallery}>Gallery</a>
					<a class="link dim white f5 f4-l dib mr3 mr4-l" href="/" title="Appointments" onClick={Appointments}>Appointments</a>
					<a class="link dim white f5 f4-l dib" href="/" title="Contact" onClick={Contact}>Contact</a>
				</div>
			</nav>
		</div>
	)
}
export default Navbar;
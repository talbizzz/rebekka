import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Welcome.css';

AOS.init();
const Welcome = ({About, Gallery, Appointments, Contact}) => {
    return (
		<div className="welcome">
			<div className='welcomebg'>
				<div className ="tc tr-ns mt5 mv5-ns f3 f1-ns"style={{fontFamily:"Mak", color:"white"}}>
					<div 
						className="mr7-ns"
						data-aos="fade-down" 
						data-aos-duration="2000" 
					>
						Celine Akcag
					</div>
					<div 
						className="mr6-ns"
						data-aos="fade-up" 
						data-aos-duration="2000" 
					>
						lyrischer Mezzosopran				
					</div>
				</div>
				<div className ="pl3 pt1 mv6-ns ml6-ns f3-ns .aosAnchor "style={{color:"white", fontFamily:"Mak"}}>
					<div 
						data-aos="fade-up-right" 
						data-aos-duration="2100" 
						data-aos-anchor=".aosAnchor" 
					>
						<a href="/" className="grow no-underline dib white fl pa2 pa2-ns w-100-ns" onClick={About}>About</a>
					</div>
					<div 
						className=""
						data-aos="fade-up-right" 
						data-aos-duration="2300" 
						data-aos-anchor=".aosAnchor" 
					>
						<a href="/" className="grow no-underline dib white fl pa2 pa2-ns w-100-ns" onClick={Gallery}>Gallery</a>
					</div>
					<div 
						className=""
						data-aos="fade-up-right" 
						data-aos-duration="2600" 
						data-aos-anchor=".aosAnchor" 
					>
						<a href="/" className="grow no-underline dib white fl pa2 pa2-ns w-100-ns" onClick={Appointments}>Appointments</a>
					</div>
					<div 
						className=""
						data-aos="fade-up-right" 
						data-aos-duration="2900"
						data-aos-anchor=".aosAnchor" 
					>
						<a href="/" className="grow no-underline dib white fl pa2 pa2-ns w-100-ns" onClick={Contact}>Contact</a>
					</div>
				</div>
			</div>
		</div>
    );

}

export default Welcome;
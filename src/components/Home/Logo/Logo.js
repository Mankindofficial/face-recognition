import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {

	return(
		<div style={{margin: '20px'}}>
			<Tilt className="Tilt" options={{ max : 45 }} style={{ height: 120, width: 120 }} >
			 <div className="Tilt-inner"><img alt='logo.img' src={brain} width='80px' height='auto'/></div>
			</Tilt>
		</div>
	);
}

export default Logo;
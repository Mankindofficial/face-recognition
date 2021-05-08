import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return(
		<nav className='end'>
			<h3 
				className='dim'
				style={{textDecoration:'underline', paddingRight:'10px', cursor: 'pointer'}}
				onClick={() => onRouteChange('signIn')}>Sign Out</h3>
		</nav>
	);
}

export default Navigation;
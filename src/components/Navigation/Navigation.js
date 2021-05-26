import React from 'react';

const Navigation = ({ onRouteChange }) => {
	
	const signOutUser = () => {
		if(window.confirm("Are you sure?")) {
			onRouteChange('signIn')
		}
	}

	return(
		<nav className='end'>
			<h3 
				className='dim'
				style={{textDecoration:'underline', paddingRight:'10px', cursor: 'pointer'}}
				onClick={signOutUser}>Sign Out</h3>
		</nav>
	);
}

export default Navigation;
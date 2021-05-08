import React from 'react';

const Rank = ({ name, entries }) => {
	return(
		<div style={{color:'#f4f4f4'}}>
			<div style={{margin:'10px'}}>{`${name}, your entry count is ...`}</div>
			<div style={{fontSize:'1.5em'}}>{entries}</div>
		</div>
	);
}

export default Rank;
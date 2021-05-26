import React from 'react';

const Rank = ({ name, entries, rank }) => {
	return(
		<div style={{color:'#f4f4f4'}}>
			<div style={{fontWeight:"bold", fontSize:"18px", maxWidth:"300px", margin:"0 auto"}}>{`${name}, your entry count is `}<span style={{color:"yellow", fontSize:'1.2em',}}>{entries}</span></div>
			{rank && <div style={{margin:'10px'}}>And your global rank is <span style={{color:"yellow", fontSize:'1.2em'}}>{rank}</span></div>}
			{rank === 1 && <div style={{margin:'10px', color:"red", fontWeight:"bold"}}>You're the boss <span role="img" aria-label="jubilation-emojis" >🎉 🙌</span> </div>}
		</div>
	);
}

export default Rank;
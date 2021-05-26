import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return(
		<div className='center'>
			<div style={{position:'relative', margin:"1rem 0 5rem 0"}}>
				<img id='inputimage'
					alt='' 
					src={imageUrl}
				/>
				<div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;
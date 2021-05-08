import React from 'react';

const ImageRecognitionForm = ({ onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p>{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
			<div className='center'>
				<div className='center form shadow' style={{padding:'20px'}}>
					<input 
					type='text' 
					style={{padding:'5px',  width:'75%'}}
					onChange={onInputChange}/>
					<button 
					className='grow'
					style={{width:'25%', background:'#fe5eee'}}
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageRecognitionForm;
import React from 'react';

const ImageRecognitionForm = ({ onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p style={{marginTop:"40px", fontWeight:"bold", fontSize:"15px"}}>This Magic Brain will detect faces in your pictures. Give it a try!</p>
			<div className='center'>
				<form onClick={onButtonSubmit} className='center form shadow' style={{padding:'20px'}}>
					<input 
					type='text'
					placeholder="Paste image link here"
					style={{padding:'5px',  width:'75%', flex:'1'}}
					onChange={onInputChange}/>
					<input 
					type="submit"
					className='grow'
					style={{width:'25%', maxWidth:'100px', background:'#fe5eee', border:"none"}}
					value="Detect"/>
				</form>
			</div>
		</div>
	);
}

export default ImageRecognitionForm;
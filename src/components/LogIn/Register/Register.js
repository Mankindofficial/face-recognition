import React from 'react';
import '.././SignIn/SignIn.css';

class Register extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			username: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onUsernameChange = (event) => {
		this.setState({username: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onRegister = (e) => {
		e.preventDefault()
		if (this.state.name === "" || this.state.password === "" || this.state.username === "") {
			alert("Fill in your details!")
		} else {
			fetch('https://pacific-savannah-26623.herokuapp.com/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body:JSON.stringify({
					name:this.state.name,
					username:this.state.username,
					password: this.state.password
				})
			})
			.then(response => response.json())
			.then(user => {
				if(user){
					this.props.loadUser(user);
					this.props.onRouteChange('home');
					alert("Account created successfully")
				} else {
					alert("Error. Try again")
				}
			})
		}
	}

	render(){
		const { onRouteChange } = this.props;
		return(
			<div>
				<nav className='end'>
					<h3 className='dim' onClick={() => onRouteChange('signIn')} style={{textDecoration:'underline', paddingRight:'10px', cursor: 'pointer'}}>Sign In</h3>
				</nav>
				<div  className='center'>
					<form onSubmit={this.onRegister} className='shadow' style={{padding:'15px 50px'}}>
						<p className="head">Register</p>
						<div>
							<label>Name</label>
							<input onChange={this.onNameChange} type="text" className='input'/>
						</div>
						<div>
							<label>Username</label>
							<input onChange={this.onUsernameChange} type="text" className='input'/>
						</div>
						<div>
							<label>Password</label>
							<input onChange={this.onPasswordChange} type="password" className='input'/>
						</div>
						<div className='center'>
							<input onClick={this.onRegister} type="submit" className="signIn" value="Register"/>
						</div>
						<div className='register'>
							<span>Already have an account? </span><span className='link' onClick={() => onRouteChange('signIn')}>Sign In</span>
						</div>
					</form>	
				</div>
			</div>
		);
	}
}

export default Register;
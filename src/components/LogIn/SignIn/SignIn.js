import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			signInUsername: '',
			signInPassword: ''
		}
	}

	onUsernameChange = (event) => {
		this.setState({signInUsername: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSignIn = (e) => {
		e.preventDefault()
		if (this.state.signInPassword === "" || this.state.signInUsername === "") {
			alert("Fill in your details!")
		} else {
			fetch('https://pacific-savannah-26623.herokuapp.com/signin', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body:JSON.stringify({
					username:this.state.signInUsername,
					password: this.state.signInPassword
				})
			})
			.then(response => response.json())
			.then(user => {
				if(user.name){
					this.props.loadUser(user);
					this.props.onRouteChange('home');
					alert("Sign in successful")
				} else {
					alert(user)
				}
			})
		}
	}

	render(){
		const { onRouteChange } = this.props;
		return(
			<div>
				<nav className='end'>
					<h3 className='dim' onClick={() => onRouteChange('register')} style={{textDecoration:'underline', paddingRight:'10px', cursor: 'pointer'}}>Register</h3>
				</nav>
				<div  className='center'>
					<form onSubmit={this.onSignIn} className='shadow' style={{padding:'15px 50px'}}>
						<p className="head">Sign In</p>
						<div> 
							<label>Username</label>
							<input onChange={this.onUsernameChange} type="text" className='input'/>
						</div>
						<div>
							<label>Password</label>
							<input onChange={this.onPasswordChange} type="password" className='input'/>
						</div>
						<div className='center'>
							<input onClick={this.onSignIn} type="submit" className="signIn" value="Sign In"/>
						</div>
						<div className='register'>
							<span>No Account Yet? </span><div className='link' onClick={() => onRouteChange('register')}>Register</div>
						</div>
					</form>	
				</div>
			</div>
		);
	}
}

export default SignIn;
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particle from './components//Particles/Particles';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/LogIn/SignIn/SignIn';
import Register from './components/LogIn/Register/Register';
import Logo from './components/Home/Logo/Logo';
import Rank from './components/Home/Rank/Rank';
import ImageRecognitionForm from './components/Home/ImageRecognitionForm/ImageRecognitionForm';
import FaceRecognition from './components/Home/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
 apiKey: '4df0766a8b9644ca95cd8de3d256678d'
});

class App extends Component {
	constructor(){
		super();
		this.state = {
	    	input: '',
			imageUrl: '',
			box: {},
			route: window.localStorage.getItem('route') || 'signIn',
			user: JSON.parse(window.localStorage.getItem('user')) || {
			  _id: '60ba5c9eb672137e0af7161',
			  name: 'Jack Sparrow',
			  username: 'Captain Jack',
			  entries: 0,
			  joined: '2021-05-23T18:58:17.430Z'
			}
		}
	}

	loadUser = (data) => {
		this.setState({ user: data})
	    window.localStorage.setItem('user', JSON.stringify(data))
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage')
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow:clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height)
		}
	}

	displayFaceBox = (box) => {
		this.setState({box: box});
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value});
	}

	onButtonSubmit = (e) => {
		e.preventDefault()
		this.setState({ imageUrl: this.state.input });
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then(response => {
			if(response){
				fetch('https://pacific-savannah-26623.herokuapp.com/imageEntry', {
					method:'put',
					headers: {'Content-Type':'application/json'},
					body:JSON.stringify({username:this.state.user.username})
				}).then(response => response.json())
				.then(data => {
					const newUser = Object.assign(this.state.user, {entries: data.entries, rank: data.rank} )
					this.loadUser(newUser)
				});
			}
			this.displayFaceBox(this.calculateFaceLocation(response))
		})
		.catch(err => console.log(err));
	}

	onRouteChange = (route) => {
		this.setState({route})
	    window.localStorage.setItem('route', route);
	}

	render(){
	  return (
	    <div>
	      <Particle/>
	      {this.state.route === 'home'
	      ? <div>
	      		<Navigation onRouteChange={this.onRouteChange}/>
	      		<Logo/>
			    <Rank name={this.state.user.name} entries={this.state.user.entries} rank={this.state.user.rank}/>
			    <ImageRecognitionForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
			   	<FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
     		</div>
	      : ( this.state.route === 'signIn'
	      	? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
	      	: <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
	      	)
	      }
	    </div>
	  );	
	}
}

export default App;
import React, { Component } from 'react';
import Particles from 'react-particles-js';
 
class Particle extends Component{
  render(){
    return (
      <Particles 
        className='particles'
        params={{
          particles: {
            number: {
              value:80,
              density: {
                enable:true,
                value_area: 1000
              }
            }
          }
        }}
       />
    );
  };
}
export default Particle;
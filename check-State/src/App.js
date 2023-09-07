import React from 'react';
import './App.css';
import Person from './Components/Person';

class App extends React.Component{
  // Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.

state={
      person : { 
        fullName : "med yassine hbiri",
        bio : "Student", 
        imgSrc : "yassine.png",
        profession : "Student at GOMYCODE"
      },
      show : false
    }
  
  render(){
    return(
      <div>
        <h1>Correction checkpoint State</h1>
        <button onClick={()=> this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show &&  <Person person={this.state.person}/>
        }
        
      </div>
    )
  }
}

export default App;
import React from 'react';
import './App.css';
//import Photo from './components.js';
//import Title from './components.js';


const Wrapper = props => {
  return <div style={{textAlign:"center"}}>
  title warraper
 </div>;
};

const Photo = (props) => {
  return <div>title</div>;
};

const Title = props => {
  return <div>
   <h1 small>photo</h1>
 </div>;
};


function App() {
  return (
  <Wrapper>

    <Photo src="/profile.png"></Photo>

    <Title style={{color:"red"}}>My Name is Narimene Ouhida</Title>

    <Title small>Front-End developper</Title>
 
  </Wrapper>
  );
}

export default App;

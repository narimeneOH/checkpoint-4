import React from 'react';
import './App.css';
//import Photo from './components.js';
//import Title from './components.js';


const Wrapper = props => {
  return <div style={{textAlign:"center"}}>
  {props.children}
  </div>;
};

const Photo = (props) => {
  return <img src={props.src} alt=""></img>;
};

const Title = props => {
  return(<h1 style={props.style}>{props.children}</h1>)
    
};

const MyButton = (props) => {
  return (
    <button onClick={props.OnSimpleClick} style={{backgroundColor:"blue", color:"white", padding:"20px", border:0, margin:"30px 15px"}} target="_blank"
   >{props.children}</button>
  );
}

function App() {
  return (
  <Wrapper>
    <Photo src="/profile.png" />
    <Title>Narimene Ouhida</Title>
    <div>
    <MyButton  OnSimpleClick={()=>{window.location="https://facebook.com"}} > My Facebook</MyButton>
    <MyButton  OnSimpleClick={()=>{window.location="https://www.linkedin.com/in/narimene-ouhida-b39895114/"}}>My LinkedIn</MyButton>   

    


    </div>
  </Wrapper>

  );
}

export default App;

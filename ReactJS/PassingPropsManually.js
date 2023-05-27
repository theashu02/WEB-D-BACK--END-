import logo from './logo.svg';
import React from 'react';
import './App.css';

const Person = (props)=> {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Last: {props.lastName}</h1>
      <h1>Age: {props.age}</h1>
    </>
  )
}

const App = ()=> {
  return(
    <div className="App">
      <Person name='riya' lastName='ashu' age='20'/>
      <Person name='ashutosh' lastName='riya' age='20'/>
      <Person name='ash' lastName='riyu' age='21'/>
      <Person name='down' lastName='to' age='21'/>
    </div>
  )
}

export default App;import logo from './logo.svg';
import './App.css';

const Person = (props)=> {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Last: {props.lastName}</h1>
      <h1>Age: {props.age}</h1>
    </>
  )
}

const App = ()=> {
  return(
    <div className="App">
      <Person name='riya' lastName='ashu' age='20'/>
      <Person name='ashutosh' lastName='riya' age='20'/>
      <Person name='ash' lastName='riyu' age='21'/>
      <Person name='down' lastName='to' age='21'/>
    </div>
  )
}

export default App;


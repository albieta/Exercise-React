import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';
import Exercici from './components/Exercici';
import NameComponent from './components/NameComponent';
import API from './components/API';


interface AppState{
  subs: Array<Sub>
  newSubsNumber: number

}



function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("http:localhost:3001/subs")
    .then(res => res.json())
    .then(subs =>{
      console.log(subs)
      setSubs(subs)
    })
  }, [])

  const handleNewSub = (newSub: Sub):void =>{
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }
  
  return (
    <div className="App" ref={divRef}>
        <h1 className="header">Subscribers' list</h1>      
      <List subs={subs}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
      {subs.map((sub) => (
        <Exercici key={sub.nick} sub={sub} />
      ))}
      {subs.map((sub) => (
        <NameComponent key={sub.nick} sub={sub}/>
      ))}
      <API />
    </div>
    
    
  );
}

export default App;

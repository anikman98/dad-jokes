import React, {useState, useEffect} from 'react';
import Joke from './Joke';
import githubIcon from './github.png';

function App() {

  const [joke, setJoke] = useState("null");

  const getJoke = async () => {
    try{
      const response = await fetch('https://icanhazdadjoke.com/',
      { 
        headers: {
          Accept: "application/json",
      }});
      const joke = await response.json();
      setJoke(joke)
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    getJoke();
  },[]);

  return (
    <>
      <div className="container">
        <h1>Dad Jokes</h1>
        <small>Cause daddy is always the best</small>
        <Joke joke={joke} />
        <button className='btn shadow-lg' onClick={getJoke}>New joke</button>
        <span><a href="https://github.com/anikman98/dad-jokes" target="_blank"><img className='github' src={githubIcon} alt="github link" width={20} /></a></span>
      </div>
    </>
  );
}

export default App;
import React, {useState, useEffect} from 'react';
import Joke from './Joke';

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
    <main>
      <section className='container h-20'></section>
      <div className="d-flex justify-content-center w-100 h-100">
        <div className="container">
        <h1>Dad Jokes</h1>
        <small>Cause daddy is always the best</small>
        <Joke joke={joke} />
        <button className='btn btn-success shadow-lg' onClick={getJoke}>new joke</button>
        </div>
      </div>
    </main>
  );
}

export default App;
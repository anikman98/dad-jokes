import React from 'react';


const Joke = ({joke}) => {
    return (
        <section>
            <div className="card">
                <div className="card-body ">
                    <h2 className="card-text">{joke.joke}</h2>
                </div>
            </div>
        </section>
    );
};

export default Joke;
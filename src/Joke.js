import React from 'react';


const Joke = ({joke}) => {
    return (
        <section>
            <div className="card text-center position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body">
                <div className="card-body ">
                    <h2 className="card-text">{joke.joke}</h2>
                </div>
            </div>
        </section>
    );
};

export default Joke;
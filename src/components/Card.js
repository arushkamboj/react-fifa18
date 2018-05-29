import React from 'react';

const Card = ({name, image, rating}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
            <img alt='players' src={`${image}`} />
            <div>
                <h2> {name} </h2>
                <h3> Rating: {rating} </h3>
            </div>
        </div>
    );
}


export default Card;
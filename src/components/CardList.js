import React from 'react';
import Card from '../components/Card';

const CardList = ({ players }) => {
    return(
        <div>
            {
                players.map((player, i) => {
                   return <Card 
                        key={i} 
                        name={players[i].name}
                        image={players[i].headshotImgUrl} 
                        rating={players[i].rating} 
                    /> 
                })
            }
        </div>
    );
}

export default CardList;
import React from 'react';

const GameDetails = ({ game, onLaunch }) => {
    if (!game) {
        return <div className="game-details">Select a game to see details</div>;
    }

    return (
        <div className="game-details">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            {game.path && (
                <button onClick={() => onLaunch(game.path)}>Launch Game</button>
            )}
        </div>
    );
};

export default GameDetails;




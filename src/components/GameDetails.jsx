import React from 'react';

const GameDetails = ({ game, onLaunch }) => {
    if (!game) {
        return <div className="game-details">Select a game or application to see details</div>;
    }

    const isSoftware = game.path && (game.name === 'Visual Studio' || game.name === 'VS Code');

    return (
        <div className="game-details">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            {game.path && (
                <button onClick={() => onLaunch(game.path)}>
                    {isSoftware ? 'Run Software' : 'Launch Game'}
                </button>
            )}
        </div>
    );
};

export default GameDetails;

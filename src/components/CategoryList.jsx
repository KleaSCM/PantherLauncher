import React from 'react';
import { shell } from 'electron';

const GameList = ({ games, onSelect }) => {
    const handleClick = (game) => {
        if (game.url) {
            shell.openExternal(game.url); // This will open the URL in the default browser
        } else if (game.path && game.name === 'Spotify') {
            // Logic to open Spotify app
            shell.openExternal('spotify:');
        } else {
            onSelect(game.name);
        }
    };

    return (
        <div className="game-list">
            <div className={`game-icons ${games.length > 0 && games[0].url ? 'grid' : ''}`}>
                {games.map(game => (
                    <div key={game.name} onClick={() => handleClick(game)} className="game-icon-container">
                        <img src={game.icon} alt={game.name} className="game-icon" />
                        <span>{game.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameList;

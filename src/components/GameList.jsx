import React from 'react';
import { shell } from 'electron';

const GameList = ({ games, onSelect, onWebClick }) => {
    const handleClick = (game) => {
        if (game.url) {
            onWebClick(game.url);
        } else if (game.path && game.name === 'Spotify') {
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















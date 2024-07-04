import React from 'react';

const GameList = ({ games, onSelect }) => {
    return (
        <div className="game-list">
            <h2>{games.length > 0 && games[0].url ? 'Web Applications' : 'Games'}</h2>
            <div className={`game-icons ${games.length > 0 && games[0].url ? 'horizontal' : ''}`}>
                {games.map(game => (
                    <div key={game.name} onClick={() => onSelect(game.name)} className="game-icon-container">
                        <img src={game.icon} alt={game.name} className="game-icon" />
                        <span>{game.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameList;

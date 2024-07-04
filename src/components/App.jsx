import React, { useState } from 'react';
import { ipcRenderer } from 'electron';
import GameList from './GameList';
import GameDetails from './GameDetails';
import CategoryList from './CategoryList';

const App = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Games');

    const launchGame = (gamePath) => {
        ipcRenderer.send('launch-game', gamePath);
    };

    const data = {
        'Games': [
            { name: 'Overwatch 2', path: 'path/to/Overwatch2.exe', description: 'Description for Overwatch 2', icon: 'icons/Overwatch2.png' },
            { name: 'Battle.net', path: 'path/to/BattleNet.exe', description: 'Description for Battle.net', icon: 'icons/BattleNet.png' },
            { name: 'World of Warcraft', path: 'path/to/WoW.exe', description: 'Description for World of Warcraft', icon: 'icons/WoW.png' },
        ],
        'Music': [
            { name: 'Spotify', path: 'path/to/spotify.exe', description: 'Description for Spotify', icon: 'icons/spotify.png' },
        ],
        'Web': [
            { name: 'GitHub', url: 'https://github.com', description: 'GitHub', icon: 'icons/github.png' },
            { name: 'LinkedIn', url: 'https://linkedin.com', description: 'LinkedIn', icon: 'icons/linkedin.png' },
            { name: 'CurseForge', url: 'https://curseforge.com', description: 'CurseForge', icon: 'icons/curseforge.jpg' },
            { name: 'YouTube', url: 'https://youtube.com', description: 'YouTube', icon: 'icons/youtube.png' },
            { name: 'Google', url: 'https://google.com', description: 'Google', icon: 'icons/google.png' },
            { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'ChatGPT', icon: 'icons/chatgpt.png' },
        ],
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>Welcome to PantherLauncher</h1>
            </header>
            <div className="container">
                <CategoryList categories={Object.keys(data)} onSelect={setSelectedCategory} />
                <GameList games={data[selectedCategory]} onSelect={setSelectedGame} />
                <GameDetails game={data[selectedCategory].find(game => game.name === selectedGame)} onLaunch={launchGame} />
            </div>
        </div>
    );
};

export default App;






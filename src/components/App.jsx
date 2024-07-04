import React, { useState } from 'react';
import { ipcRenderer, shell } from 'electron';
import GameList from './GameList';
import GameDetails from './GameDetails';

const App = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const launchGame = (gamePath) => {
        ipcRenderer.send('launch-game', gamePath);
    };

    const games = [
        { name: 'Overwatch 2', path: 'path/to/Overwatch2.exe', description: 'Overwatch 2 game', icon: '../public/icons/Overwatch2.png' },
        { name: 'BattleNet', path: 'path/to/BattleNet.exe', description: 'Battle.net launcher', icon: '../public/icons/BattleNet.png' },
        { name: 'WoW', path: 'path/to/WoW.exe', description: 'World of Warcraft', icon: '../public/icons/WoW.png' },
    ];

    const music = [
        { name: 'Spotify', path: 'spotify:', description: 'Spotify music streaming', icon: '../public/icons/spotify.png' }
    ];

    const webApps = [
        { name: 'YouTube', url: 'https://www.youtube.com', description: 'YouTube streaming platform', icon: '../public/icons/youtube.png' },
        { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'ChatGPT by OpenAI', icon: '../public/icons/chatgpt.png' },
        { name: 'GitHub', url: 'https://github.com', description: 'GitHub code hosting platform', icon: '../public/icons/github.png' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com', description: 'LinkedIn professional networking', icon: '../public/icons/linkedin.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com', description: 'CurseForge modding platform', icon: '../public/icons/curseforge.jpg' },
        { name: 'Google', url: 'https://www.google.com', description: 'Google search engine', icon: '../public/icons/google.png' }
    ];

    const software = [
        { name: 'Visual Studio', path: 'path/to/VisualStudio.exe', description: 'Visual Studio IDE', icon: '../public/icons/Visual_Studio_Icon_2022.svg' },
        { name: 'VS Code', path: 'path/to/VSCode.exe', description: 'Visual Studio Code editor', icon: '../public/icons/Visual_Studio_Code_1.35_icon.svg' },
    ];

    const categories = [
        { name: 'Games', items: games },
        { name: 'Music', items: music },
        { name: 'Web Applications', items: webApps },
        { name: 'Software', items: software },
    ];

    const toggleCategory = (category) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const handleWebClick = (url) => {
        shell.openExternal(url);
    };

    const filteredCategories = categories.map(category => ({
        ...category,
        items: category.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }));

    return (
        <div className="app">
            <header className="app-header">
                <h1>Welcome to PantherLauncher</h1>
            </header>
            <div className="container">
                <div className="category-list">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {filteredCategories.map(category => (
                        <div key={category.name}>
                            <h2 onClick={() => toggleCategory(category.name)} className="category-title">{category.name}</h2>
                            {expandedCategories[category.name] && (
                                <GameList games={category.items} onSelect={setSelectedGame} onWebClick={handleWebClick} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="details-and-browser">
                    <GameDetails game={[...games, ...music, ...webApps, ...software].find(game => game.name === selectedGame)} onLaunch={launchGame} />
                </div>
            </div>
        </div>
    );
};

export default App;

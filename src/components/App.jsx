import React, { useState } from 'react';
import { ipcRenderer, shell } from 'electron';
import GameList from './GameList';
import GameDetails from './GameDetails';

const App = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [games, setGames] = useState([
        { name: 'Overwatch 2', path: 'path/to/Overwatch2.exe', description: 'Join the fray in Overwatch 2, the highly anticipated sequel to Blizzard\'s acclaimed team-based shooter, featuring new heroes, maps, and game modes.', icon: '../public/icons/Overwatch2.png' },
        { name: 'BattleNet', path: 'path/to/BattleNet.exe', description: 'Battle.net is Blizzard\'s game launcher and social hub, providing access to a vast library of Blizzard games and a thriving community.', icon: '../public/icons/BattleNet.png' },
        { name: 'WoW', path: 'path/to/WoW.exe', description: 'Dive into the World of Warcraft, a massive multiplayer online role-playing game set in the rich fantasy universe of Azeroth.', icon: '../public/icons/WoW.png' },
    ]);

    const [music, setMusic] = useState([
        { name: 'Spotify', path: 'spotify:', description: 'Spotify is a leading music streaming service offering millions of songs, podcasts, and curated playlists for every mood and moment.', icon: '../public/icons/spotify.png' }
    ]);

    const [webApps, setWebApps] = useState([
        { name: 'YouTube', url: 'https://www.youtube.com', description: 'YouTube is the world\'s largest video-sharing platform, offering a vast array of content from music videos to educational tutorials.', icon: '../public/icons/youtube.png' },
        { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'ChatGPT is OpenAI\'s state-of-the-art conversational AI, capable of engaging in meaningful and intelligent dialogue across a wide range of topics.', icon: '../public/icons/chatgpt.png' },
        { name: 'GitHub', url: 'https://github.com', description: 'GitHub is the world\'s leading software development platform, hosting millions of repositories and fostering collaborative coding.', icon: '../public/icons/github.png' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com', description: 'LinkedIn is a professional networking platform that connects job seekers, employers, and professionals from various industries.', icon: '../public/icons/linkedin.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com', description: 'CurseForge is a modding platform that offers a wide variety of mods and add-ons for popular games like World of Warcraft and Minecraft.', icon: '../public/icons/curseforge.jpg' },
        { name: 'Google', url: 'https://www.google.com', description: 'Google is the world\'s leading search engine, providing quick and easy access to information, services, and resources on the web.', icon: '../public/icons/google.png' },
    ]);

    const [software, setSoftware] = useState([
        { name: 'Visual Studio', path: 'path/to/VisualStudio.exe', description: 'Visual Studio is a comprehensive integrated development environment (IDE) from Microsoft for building modern web, cloud, and desktop applications.', icon: '../public/icons/Visual_Studio_Icon_2022.png' },
        { name: 'VS Code', path: 'path/to/VSCode.exe', description: 'Visual Studio Code is a lightweight but powerful source code editor from Microsoft, available for Windows, macOS, and Linux.', icon: '../public/icons/VSCODE.png' },
    ]);

    const toggleCategory = (category) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const handleWebClick = (url) => {
        shell.openExternal(url);
    };

    const launchGame = (path) => {
        ipcRenderer.send('launch-game', path);
    };

    const categories = [
        { name: 'Games', items: games },
        { name: 'Music', items: music },
        { name: 'Web Applications', items: webApps },
        { name: 'Software', items: software },
    ];

    return (
        <div className="app">
            <header className="app-header">
                <h1>Welcome to PantherLauncher</h1>
            </header>
            <div className="container">
                <div className="category-list">
                    <input type="text" className="search-input" placeholder="Search..." />
                    {categories.map(category => (
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

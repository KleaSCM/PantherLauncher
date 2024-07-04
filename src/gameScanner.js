const fs = require('fs');
const path = require('path');

function scanDirectory(directoryPath, gameExtensions = ['.exe']) {
    const games = [];

    const scan = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                scan(filePath);
            } else if (gameExtensions.includes(path.extname(file))) {
                games.push({ name: path.basename(file, path.extname(file)), path: filePath });
            }
        });
    };

    scan(directoryPath);
    return games;
}

function getSteamGames() {
    const steamPath = 'C:\\Program Files (x86)\\Steam\\steamapps\\common';
    return scanDirectory(steamPath);
}

function getBlizzardGames() {
    const blizzardPath = 'C:\\Program Files (x86)';
    const blizzardGames = ['Battle.net', 'Overwatch', 'World of Warcraft']; // Add more Blizzard game folder names as needed

    return blizzardGames.reduce((games, gameFolder) => {
        const gamePath = path.join(blizzardPath, gameFolder);
        if (fs.existsSync(gamePath)) {
            games.push(...scanDirectory(gamePath));
        }
        return games;
    }, []);
}

module.exports = {
    getSteamGames,
    getBlizzardGames
};

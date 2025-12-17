// Immediately Invoked Async Function Expression to allow async/await
(async function() {
    // Load the game list JSON
    const response = await fetch('/path/to/gameList.json'); // adjust path if needed
    const gameList = await response.json();

    // Get the current page path
    const currentPath = window.location.pathname.split("/").pop(); // e.g., "polytrack.html"

    // Find the game in the JSON
    const currentGame = gameList.games.find(game => game.path.endsWith(currentPath));
    if (!currentGame) return; // Exit if game not found

    const gameID = currentGame.gameID;
    const storageKey = `timePlayed_${gameID}`;

    // Get previously saved time
    let timePlayed = parseInt(localStorage.getItem(storageKey)) || 0;

    // Track start time
    const startTime = Date.now();

    // Save time periodically (every 5 seconds) and on page unload
    const saveTime = () => {
        const now = Date.now();
        timePlayed += Math.floor((now - startTime) / 1000); // time in seconds
        localStorage.setItem(storageKey, timePlayed);
    };

    // Periodic save every 5 seconds
    const interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        localStorage.setItem(storageKey, timePlayed + elapsed);
    }, 5000);

    // Save on page unload
    window.addEventListener('beforeunload', () => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        timePlayed += elapsed;
        localStorage.setItem(storageKey, timePlayed);
        clearInterval(interval);
    });
})();
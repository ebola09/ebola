(function () {
    const GAME_LIST_URL = "/gameList.json";   // adjust if needed
    const SAVE_INTERVAL_MS = 60 * 1000;       // save every 1 minute

    let currentGame = null;
    let timer = null;

    async function loadGameList() {
        try {
            const res = await fetch(GAME_LIST_URL);
            if (!res.ok) throw new Error("Failed to load gameList.json");
            return await res.json();
        } catch (e) {
            console.error("[GameTime] Could not load gameList.json:", e);
            return null;
        }
    }

    function findGameForCurrentPath(games) {
        const currentPath = window.location.pathname.replace(/^\//, "");
        return games.find(game => game.path === currentPath) || null;
    }

    function loadSavedMinutes(gameID) {
        return parseInt(localStorage.getItem(`gameTime_${gameID}`)) || 0;
    }

    function saveMinutes(gameID, minutes) {
        localStorage.setItem(`gameTime_${gameID}`, minutes.toString());
    }

    async function init() {
        const gameList = await loadGameList();
        if (!gameList) return;

        currentGame = findGameForCurrentPath(gameList.games);

        if (!currentGame) {
            console.warn("[GameTime] No game matched for path:", window.location.pathname);
            return;
        }

        let minutesPlayed = loadSavedMinutes(currentGame.gameID);

console.log(`[GameTime] Tracking game ID ${currentGame.gameID} (${currentGame.name}).`);
console.log(`[GameTime] Minutes already played: ${minutesPlayed}`);

timer = setInterval(() => {
    minutesPlayed++;
    saveMinutes(currentGame.gameID, minutesPlayed);
    console.log(`[GameTime] +1 minute played - total minutes played: ${minutesPlayed}`);
}, SAVE_INTERVAL_MS);

    }

    window.addEventListener("beforeunload", () => {
        if (timer) clearInterval(timer);
    });

    init();
})();

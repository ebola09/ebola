export default async function handler(req, res) {
    const { endpoint, query } = req.query;

    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'TMDB API key not configured' });
    }

    let url = `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}`;

    if (query) {
        url += `&query=${encodeURIComponent(query)}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch TMDB data' });
    }
}

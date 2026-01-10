export default async function handler(req, res) {
    const { endpoint, query } = req.query;
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'TMDB API key missing' });
    }

    let url = `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}`;
    if (query) url += `&query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ error: 'TMDB API returned an error' });
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error(err); // log the real error to Vercel
        res.status(500).json({ error: 'Failed to fetch TMDB' });
    }
}

export default async function handler(req, res) {
    const { endpoint, query, ...otherParams } = req.query;
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'TMDB API key missing' });
    }

    try {
        // Build URL with api_key + query + any extra params
        const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);
        url.searchParams.set('api_key', apiKey);

        if (query) url.searchParams.set('query', query);

        // Add any extra query parameters (like external_source)
        for (const [key, value] of Object.entries(otherParams)) {
            url.searchParams.set(key, value);
        }

        const response = await fetch(url.toString());
        if (!response.ok) {
            return res.status(response.status).json({ error: 'TMDB API returned an error' });
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch TMDB' });
    }
}

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing query" });
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(q)}&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}

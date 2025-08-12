import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your GitHub username
const GITHUB_USERNAME = "shiwani08";

app.get("/api/projects", async (req, res) => {
  try {
    const githubRes = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        params: { sort: "updated", per_page: 10 },
        headers: { "User-Agent": "portfolio-app" },
      }
    );

    // Simplify repo data for frontend
    const projects = githubRes.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      updated_at: repo.updated_at,
    }));

    res.json({ projects });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error.message);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

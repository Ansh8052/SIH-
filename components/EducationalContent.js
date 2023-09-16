import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EducationalContent() {
  const [articles, setArticles] = useState([]);
  const mediumApiKey = 'https://api.medium.com/v1'; // Replace with your Medium API key
  const mediumPublicationId = 'b45573563f5a'; // Replace with your Medium publication ID

  useEffect(() => {
    // Fetch educational articles from Medium API
    axios
      .get(`https://api.medium.com/v1/publications/${mediumPublicationId}/posts`, {
        headers: {
          Authorization: `Bearer ${mediumApiKey}`,
        },
      })
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Medium articles:', error);
      });
  }, [mediumApiKey, mediumPublicationId]);

  return (
    <div>
      <h2>Educational Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationalContent;

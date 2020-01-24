import fetch from 'isomorphic-unfetch';

const getArticles = () =>
  fetch('https://rethink.software/api/v2/jobs.backend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: 'tech' })
  });

export default async (req, res) => {
  const articlesRes = await getArticles();
  const articles = await articlesRes.json();

  res.status(200).json(articles.data);
};

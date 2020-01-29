import fetch from 'isomorphic-unfetch';

const getArticle = async (id) => {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();

  return articles.find((article) => article.id === id);
};

export default async (req, res) => {
  const id = req.query.id;
  const article = await getArticle(id);

  res.status(200).json(article);
};

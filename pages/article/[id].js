import fetch from 'isomorphic-unfetch';

const Article = article => {
  return <h1> {article.title} </h1>;
};

Article.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/article/${id}`);
  const article = await res.json();

  return { ...article };
};

export default Article;

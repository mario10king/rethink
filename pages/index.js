import fetch from 'isomorphic-unfetch';

const Articles = props => props.articles.map(article => <h3 key={article.id}>{article.title}</h3>);

Articles.getInitialProps = async function() {
  const res = await fetch('https://rethink.software/api/v2/jobs.backend', {
    method: 'POST',
    headers: {
      'COntent-Type': 'application/json'
    },
    body: JSON.stringify({ query: 'tech' })
  });
  const data = await res.json();
  console.log(data);

  return {
    articles: data.data
  };
};

export default Articles;

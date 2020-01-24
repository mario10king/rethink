import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Articles = props => (
  <ul>
    {props.articles.map(article => (
      <ArticleSummary article={article} />
    ))}
  </ul>
);

const ArticleSummary = props => (
  <li key={props.article.id}>
    <Link href={`/article/${props.article.id}`}>{props.article.title}</Link>
  </li>
);

Articles.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();

  return { articles };
};

export default Articles;

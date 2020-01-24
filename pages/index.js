import Link from 'next/link';
import { getArticles } from '../api/articles'

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
  const res = await getArticles();
  const data = await res.json();

  return {
    articles: data.data
  };
};

export default Articles;

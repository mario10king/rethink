import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import PreviewBox from '../components/articles/PreviewBox';

const Articles = props => (
  <Layout>
    <div>
      {props.articles.map(article => (
        <PreviewBox article={article} />
      ))}
    </div>
  </Layout>
);

Articles.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();

  return { articles };
};

export default Articles;

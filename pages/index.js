import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PreviewBox from '../components/articles/PreviewBox';

const Articles = (props) => (
  <Layout>
    <div>
      {props.articles.map((article) => (
        <PreviewBox key={article.id} article={article} />
      ))}
    </div>
  </Layout>
);

Articles.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();

  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
};

export default Articles;

import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import InfoBox from '../../components/article/InfoBox';

const Article = article => {
  const { title, description, image_url, ...rest } = article;

  return (
    <Layout>
      <div className="root">
        <img src={image_url} />
        <InfoBox {...rest} />
        <div className="content">
          <h1> {title} </h1>
          <p> {description} </p>
        </div>
        <style jsx>{`
          .root {
            width: 80%;
            margin: auto;
          }

          img {
            width: 100%;
            max-height: 300px;
          }
        `}</style>
      </div>
    </Layout>
  );
};

Article.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/article/${id}`);
  const article = await res.json();

  return { ...article };
};

export default Article;

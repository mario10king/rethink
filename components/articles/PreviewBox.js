import Link from 'next/link';
import PropTypes from 'prop-types';

const PreviewBox = (props) => (
  <Link href={'/article/[id]'} as={`/article/${props.article.id}`}>
    <a>
      <div className="container" key={props.article.id}>
        <div className="contents">
          <h3>{props.article.title}</h3>
          <h6>{props.article.description}</h6>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: inline-block;
          margin: 10px;
          width: 30%;
          border: 5px solid #1f53f1;
          vertical-align: top;
          height: 200px;
          overflow: hidden;
          background-color: white;
        }
        a,
        a:visited {
          text-decoration: none;
          color: black;
        }
        .contents {
          padding: 10px;
        }
      `}</style>
    </a>
  </Link>
);

PreviewBox.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default PreviewBox;

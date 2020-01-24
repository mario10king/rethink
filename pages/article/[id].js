const Article = (props) => {
  return <h1> {props.id} </h1>;
};

Article.getInitialProps = async function(context) {
  const { id } = context.query 
  return{ id }
}
export default Article;

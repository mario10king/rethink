import PropTypes from 'prop-types';

const InfoBox = (article) => {
  const { authors, published_at, word_count, read_time } = article;
  const readTimeMinutes = Math.round(read_time / 60);

  return (
    <div className="info">
      <p id="authors"> By {formatAuthors(authors)} </p>
      <p id="date"> Published on {formatDate(published_at)} </p>
      <p id="words"> {word_count} words </p>
      <p id="time"> {readTimeMinutes} minute read </p>
      <style jsx>{`
        .info {
          border-bottom: solid 1px black;
          text-align: center;
        }

        p {
          margin-bottom: 0px;
          display: inline-block;
          color: white;
        }

        #authors {
          width: 25%;
        }

        #date {
          width: 35%;
        }

        #words,
        #time {
          width: 10%;
        }
      `}</style>
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate} at ${formattedTime}`;
};

const formatAuthors = (authors) => {
  if (authors === null) {
    return '';
  }

  const authorsLength = authors.length;

  return authors.map(function(author, index) {
    if (authorsLength - 1 === index) {
      return author;
    }
    return `${author} and `;
  });
};

InfoBox.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    published_at: PropTypes.string,
    word_count: PropTypes.number,
    read_time: PropTypes.number
  })
};

export default InfoBox;

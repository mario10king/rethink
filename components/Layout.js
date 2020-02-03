import Header from './Header';
import PropTypes from 'prop-types';

const Layout = (props) => (
  <div className="root">
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        background-image: linear-gradient(
          to bottom,
          #0c3483 0%,
          #a2b6df 100%,
          #6b8cce 100%,
          #a2b6df 100%
        );
        min-height: 100vh;
      }
    `}</style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;

import Header from './Header';

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

export default Layout;

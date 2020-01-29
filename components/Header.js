import Link from 'next/link';

const Header = () => (
  <h1>
    <Link href={`/`}>
      <a>Rethink Coding Challenge</a>
    </Link>
    <style jsx>{`
      a,
      a:visited {
        text-decoration: none;
        color: white;
      }

      h1 {
        text-align: center;
      }
    `}</style>
  </h1>
);

export default Header;

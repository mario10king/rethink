import Header from './Header'

const Layout = props => (
  <div className="root">
    <Header />
    {props.children}
  </div>
)

export default Layout;

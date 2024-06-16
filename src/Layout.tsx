// list sorting
// bubble
// insertion
// merge
// quick
// radix
// others...
import Nav from "./components/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default Layout;

// list sorting
// bubble
// insertion
// merge
// quick
// radix
// others...

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>Nav list here</nav>
      </header>
      <main>{children}</main>
      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default Layout;

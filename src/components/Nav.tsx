// list sorting
// bubble
// insertion
// merge
// quick
// radix
// others...
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"bubble"}>Bubble</Link>
          <Link to={"insertion"}>Insertion</Link>
          <Link to={"merge"}>merge</Link>
          <Link to={"quick"}>quick</Link>
          <Link to={"radix"}>radix</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

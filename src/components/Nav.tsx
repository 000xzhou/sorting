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
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"bubble"}>Bubble</Link>
        </li>
        <li>
          <Link to={"insertion"}>Insertion</Link>
        </li>
        <li>
          <Link to={"merge"}>merge</Link>
        </li>
        <li>
          <Link to={"quick"}>quick</Link>
        </li>
        <li>
          <Link to={"radix"}>radix</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

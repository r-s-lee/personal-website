import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-center space-x-5 h-12 font-sans">
      <Link to="/"> Home </Link>
      <Link to="/resume"> Resume </Link>
      <Link to="/about"> About </Link>
      {/* <Link to="/contact"> Contact </Link> */}
      <Link to="/random"> Random </Link>
    </div>
  );
}

export default NavBar;

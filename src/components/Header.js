import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <b>
        <Link to="/">home</Link>
      </b>
      <b>
        {" "}
        <Link to="/login">login</Link>
      </b>
    </div>
  );
}
export default Header;

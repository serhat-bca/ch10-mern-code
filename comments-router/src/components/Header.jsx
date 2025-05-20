import { Link } from "react-router-dom";

const Header = () => {
  const menuStyle = {
    display: "flex",
    gap: "10px",
  };
  return (
    <div>
      <h1>Comments App</h1>
      <div style={menuStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItems logos">
          <img
            src="https://live.staticflickr.com/65535/52030381501_03ca77b1a6_b.jpg"
            alt=""
            className="logo"
          />
          <h1 className="title">Tabi.com</h1>
        </div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

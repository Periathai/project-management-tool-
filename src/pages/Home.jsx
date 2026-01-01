import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Project Management Tool</h1>

      <div className="nav">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Home;

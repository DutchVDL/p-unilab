import { useNavigate } from "react-router-dom";
import "./error.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Not Found</h1>
      <p className="not-found-text">
        Sorry, the page you are looking for does not exist.
      </p>
      <button onClick={() => navigate("/")} className="not-found-button">
        Home
      </button>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">GO HOME</Link>
    </>
  );
}

export default NotFound;

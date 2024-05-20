import { Link } from "react-router-dom";

export default function BooksPage() {
  return (
    <>
      <h1>Books page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}

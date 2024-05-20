import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* <p>This is a protected page</p> */}
        <p>Powered by Chattyfiles</p>
        <div className="dashboard-menu">
          <ul>
            <li>
              <Link to="/dashboard/videochat">Videochat</Link>
            </li>
            <li>
              <Link to="/dashboard/docschat">Docschat</Link>
            </li>
            <li>
              <Link to="/dashboard/websummary">Websummary</Link>
            </li>
            <li>
              <Link to="/dashboard/files">ShareFiles</Link>
            </li>
            <li>
              <Link to="/dashboard/messages">Messages</Link>
            </li>
            <li>
              <Link to="/dashboard/books">Books and Resources</Link>
            </li>
            <li>
              <Link to="/">Return to Index</Link>
            </li>
          </ul>
        </div>
        <div className="menu-content">
          <h2>This is the menu content</h2>
        </div>
      </div>
    </>
  );
}

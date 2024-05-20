import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import "./homepage.css";
import "./dashboardCss/dashboard.css";
//import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Import the layouts
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";

// Import the components
//import IndexPage from "./routes";
import ContactPage from "./routes/contact";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import DashboardPage from "./routes/dashboard";
import InvoicesPage from "./routes/dashboard.invoices";
import DocschatPage from "./routes/dashboard.docschat";
import VideochatPage from "./routes/dashboard.videochat";
import MessagesPage from "./routes/dashboard.messages";
import FilesPage from "./routes/dashboard.files";
import WebsummaryPage from "./routes/dashboard.websummary";
import BooksPage from "./routes/dashboard.books";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> },
          { path: "/dashboard/docschat", element: <DocschatPage /> },
          { path: "/dashboard/videochat", element: <VideochatPage /> },
          { path: "/dashboard/websummary", element: <WebsummaryPage /> },
          { path: "/dashboard/messages", element: <MessagesPage /> },
          { path: "/dashboard/files", element: <FilesPage /> },
          { path: "/dashboard/books", element: <BooksPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
); */

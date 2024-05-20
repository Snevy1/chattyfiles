import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <header className="header">
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <div className="login">
              <ul>
                <li>
                  <Link to="/sign-up" className="link-styles">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/sign-in" className="link-styles">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link-styles">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link to="/sign-in">Sign In</Link> */}
          </SignedOut>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}

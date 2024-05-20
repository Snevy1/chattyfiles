import "./App.css";
import "./homepage.css";
//import SignIn from "./Auth/signIn";
//import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

/* const [sign, setSign] = useState(false);
  const handleUpload = () => {
    setSign(true);
  };

  if (sign === false) {
    return (
      <>
        <div className="home_container">
          <h2>Chat with any PDF</h2>
          <p>
            Join millions of students, researchers and professionals to
            instantly answer questions and understand research with AI
          </p>
          <div className="drop-box-container">
            <div className="drop-box" onClick={handleUpload}>
              <h2>Drop PDF here</h2>
            </div>
          </div>
          <div className="testimonials">
            <h2>Going Viral all over the World</h2>
            <p>
              Across borders, beyond languages: AI is revolutionizing the
              understanding of research worldwide
            </p>
            <div className="test-videos">
              <article className="testimonial-container">
                I really love how Chattyfiles help me prepare for exams
                seamlessly.I really love how Chattyfiles help me prepare for
                exams seamlessly.I really love how Chattyfiles help me prepare
                for exams seamlessly.I really love how Chattyfiles help me
                prepare for exams seamlessly.
              </article>
              <article className="testimonial-container">
                I really love how Chattyfiles help me prepare for exams
                seamlessly.I really love how Chattyfiles help me prepare for
                exams seamlessly.I really love how Chattyfiles help me prepare
                for exams seamlessly.I really love how Chattyfiles help me
                prepare for exams seamlessly.
              </article>
              <article className="testimonial-container">
                I really love how Chattyfiles help me prepare for exams
                seamlessly.I really love how Chattyfiles help me prepare for
                exams seamlessly.I really love how Chattyfiles help me prepare
                for exams seamlessly.I really love how Chattyfiles help me
                prepare for exams seamlessly.
              </article>
              <article className="testimonial-container">
                I really love how Chattyfiles help me prepare for exams
                seamlessly.I really love how Chattyfiles help me prepare for
                exams seamlessly.I really love how Chattyfiles help me prepare
                for exams seamlessly.I really love how Chattyfiles help me
                prepare for exams seamlessly.
              </article>
            </div>
          </div>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  } else {
    return <SignIn />;
  } */

export default App;

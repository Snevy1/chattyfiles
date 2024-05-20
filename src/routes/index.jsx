//import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div>
      {/*       <h1>This is the index page</h1> */}
      <div className="home_container">
        <h2>Chat with any PDF</h2>
        <p>
          Join millions of students, researchers and professionals to instantly
          answer questions and understand research with AI
        </p>
        <div className="drop-box-container">
          <div className="drop-box" /* onClick={handleUpload} */>
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
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.
            </article>
            <article className="testimonial-container">
              I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.
            </article>
            <article className="testimonial-container">
              I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.
            </article>
            <article className="testimonial-container">
              I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.I really love how Chattyfiles help me prepare for exams
              seamlessly.
            </article>
          </div>
        </div>
      </div>

      {/* <div>
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
function App() {
  const [quote, setQuote] = useState("");
  const data = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content));
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="address">Quote generator</h1>
        <div className="container">
          <p>{quote}</p>
          <button className="btn" onClick={() => data()}>
            <i class="fa-solid fa-dice"></i>
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <FacebookShareButton
              url={"https://www.example.com"}
              quote={quote}
              hashtag="#quotes">
              <FacebookIcon size={40} round />
            </FacebookShareButton>
          </div>
          <div>
            <LinkedinShareButton
              url={"https://www.example.com"}
              title=""
              summary={quote}
              source="quote generator">
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
          </div>
          <div>
            <TwitterShareButton
              url={"https://www.example.com"}
              title=""
              summary={quote}
              source="quote generator">
              <TwitterIcon size={40} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

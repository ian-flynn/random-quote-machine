import './index.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();

        setQuotes(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex]);
    }
  fetchData();
}, []);

const newQuote = () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
}

return (
  <div id="wrapper">
    <div className="background-box"></div>
    <div id="quote-box">
      <div className="quote-area">
        <div className="shape"></div>
        <div id="text">{randomQuote.text}</div>
        <div id="author">{randomQuote.author || 'No Author'}</div> 
      </div>
      <div className="button-area">
        <button className="button shift" id='new-quote' onClick={ newQuote }>New</button>
        <a
          className="button"
          href={`https://twitter.com/intent/tweet?text=\"${randomQuote.text}\" \- ${randomQuote.author}`}
          target="_blank"
          id='tweet-quote'><FontAwesomeIcon icon={faTwitter} className="bird" /></a>
          
      </div>
    </div> 
  </div>
    
);
}

export default App;
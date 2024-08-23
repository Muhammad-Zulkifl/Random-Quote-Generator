import ReloadLogo from "./assets/rotate.png";
import XLogo from "./assets/social-media.png";
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({
    quote: "If you miss a habit one day, it is a mistake but if you miss it twice, it is the beginning of a new habit",
    author: "James Clear",
  });

  const loadQuotes = async () => {
    try {
      let response = await fetch("https://api.api-ninjas.com/v1/quotes?category=success", {
        headers: {
          'X-Api-Key': 'Ospvp9ShcxpYzea8aOJ1bg==fMrQNnesyUff9dON'
        }
      });
      let quotes = await response.json();
      if (quotes.length > 0) {
        setData({
          quote: quotes[0].quote,
          author: quotes[0].author
        });
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const twitter = () =>{
    window.open(`https://twitter.com/intent/tweet?text=${data.quote} - ${data.author}`)

  }

  return (
    <div className="container">
      <div className="content">
        <div className="upper">
          <p>{data.quote}</p>
        </div>
        <hr />
        <div className="bottom">
          <div className="author">- {data.author}</div>
          <div className="icons">
            <img src={ReloadLogo} alt="Reload_img" onClick={loadQuotes} />
            <img src={XLogo} alt="X_image" onClick={() =>{twitter()}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

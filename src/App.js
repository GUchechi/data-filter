import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
  }

  const companies = [
    "Google",
    "Facebook",
    "Youtube",
    "Twitter",
    "Linkedin",
    "Twitch",
    "Instagram",
    "Whatsapp",
  ];

  return (
    <div className="container">
      <input value={searchTerm} onChange={handleChange} />
      <div className='data'>
      {
        searchResults.map((company, index) => (
          <div key={index} className='row'></div>
        ))
      }
      </div>
    </div>
  );
}

export default App;

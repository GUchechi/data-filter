import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const results = companies.filter(company => 
      company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm])

  return (
    <div className="container">
      <input value={searchTerm} onChange={handleChange} />
      <div className='data'>
      {
        searchResults.map((company, index) => (
          <div key={index} className='row'>
            {company}
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;

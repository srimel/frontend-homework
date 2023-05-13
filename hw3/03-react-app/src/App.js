import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './navbar';
import axios from 'axios';

function App() {
  const url = 'https://thronesapi.com/api/v2/Characters';
  const [characters, setCharacters] = useState([]);

  async function getAPIData(endPoint) {
    try {
      const response = await axios.get(endPoint);
      const charactersData = response.data;
      setCharacters(charactersData);
    } catch (error) {
      console.error('Request failed', error);
    }
  }

  useEffect(() => {
    getAPIData(url);
  }, []);

  if (characters.length === 0 || characters === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar data={characters} />
    </div>
  );
}

export default App;

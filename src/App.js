import './App.css';
import { useEffect, useState } from 'react';
import MemeGenerator from './MemeGenerator';
import TopAndBottomInput from './TopAndBottomInput';

function App() {
  const [templates, setTemplates] = useState([]);
  const [memes, setMemes] = useState('[]');

  // Fetch all templates from API:

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates/');
        const json = await response.json();
        setTemplates(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchTemplates().catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <div>
        <header className="App-header">
          <h1>Meme Generator</h1>
        </header>
      </div>
      <div>
        <TopAndBottomInput />
      </div>
      <button>Download</button>
    </div>
  );
}

export default App;

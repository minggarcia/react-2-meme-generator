import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import MemeGenerator from './MemeGenerator';

// import MemeGenerator from './MemeGenerator';
// import TopAndBottomInput from './TopAndBottomInput';

function App() {
  return (
    <div>
      <MemeGenerator />
    </div>
  );
}
//   const [templates, setTemplates] = useState(null);
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const url = `https://api.memegen.link/images/${templates}/${topText}/${bottomText}.png`;
//   const saveFile = () => {
//     saveAs(url);
//   };
//   // FETCH ALL TEMPLATES FROM API:

//   return (
//     <div>
//       <h1>Meme Generator</h1>
//       <img
//         src={`https://api.memegen.link/images/${templates}/${topText}/${bottomText}.png`}
//         alt="meme"
//         data-test-id="meme-image"
//       />
//       <div>Meme template</div>
//       <input
//         value={templates}
//         onInput={(event) => setTemplates(event.currentTarget.value)}
//       />

//       <div>
//         <input
//           placeholder="TOP TEXT"
//           value={topText}
//           onChange={(event) => setTopText(event.currentTarget.value)}
//         />
//       </div>
//       <div>
//         <input
//           placeholder="BOTTOM TEXT"
//           value={bottomText}
//           onChange={(event) => setBottomText(event.currentTarget.value)}
//         />
//       </div>
//       <div>
//         <button onClick={saveFile}>Download</button>
//       </div>
//     </div>
//   );
// }
//   const [templates, setTemplates] = useState(null);
//   const [memes, setMemes] = useState('what is happening');

//   // Fetch all templates from API:

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.memegen.link/templates/');
//         const json = await response.json();
//         setTemplates(json);
//       } catch (e) {
//         console.error(e);
//       }
//     };
//     fetchData().catch((err) => {
//       console.error(err);
//     });
//   }, []);

//   // const fetchData = () => {
//   //   return fetch('https://api.memegen.link/templates/')
//   //     .then((response) => response.json())
//   //     .then((data) => console.log(data));
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // this.state = {
//   //   topText:'',
//   //   bottomText: '',
//   //   randomImg: 'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif',
//   //   allMemeImgs: []
//   // };

//   // componentDidMount(){
//   //   fetch('https://api.memegen.link/templates/').then(respone => response.json()).then(response => {const {memes} = response.data this.setState ({allMemeImgs: memes})})}}

//   //   // use async/await to fetch data:
//   //   async function getTemplates() {
//   //     const response = await fetch('');
//   //     const data = await response.json();
//   //     // store the data into setTemplates variable:
//   //     setTemplates(data
//   //   }
//   // }
//   // useEffect(() => {
//   //   getTemplates();
//   // }, []);

//   // function fetchTemplates() {
//   //   fetch('')
//   //     .then((res) => res.json())
//   //     .then((data) => setTemplates(data))
//   //     .catch((error) => console.log(error));
//   // }

//   // useEffect(() => {
//   //   fetchTemplates();
//   // }, []);

//   // useEffect(() => {
//   //   fetch('').then((x) =>
//   //     x
//   //       .json()
//   //       .then((response) => setTemplates(response.data))
//   //       .catch((error) => console.log(error)),
//   //   );
//   // }, []);

//   return (
//     <div>
//       <div>
//         <header className="App-header">
//           <h1>Meme Generator</h1>
//         </header>
//       </div>
//       <div>
//         <TopAndBottomInput />
//       </div>

//       <div>
//         {templates.map((template) => {
//           return <img key={template.id} src={template.url} alt={template.id} />;
//         })}
//       </div>

//       <button>Download</button>
//     </div>
//   );
// }
export default App;

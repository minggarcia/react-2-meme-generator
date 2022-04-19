// import { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';
import TopAndBottomInput from './TopAndBottomInput';

// export default function MemeGenerator() {
// const [templates, setTemplates] = useState([])

// // Fetch all templates from api:
// useEffect(() => {
//   fetch('https://api.memegen.link/templates/').then((res) => res.json().then((res) ))
// })

// // useEffect(() => {
// //   fetch('https://api.memegen.link/templates/').then((res) =>
// //     res
// //       .json()
// //       .then((res) => {
// //         const memes = res.data.memes;
// //         setMemes(memes);
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       }),
// //   );
// // }, []);

// function fetchMemes() {
//   return fetch('https://api.memegen.link/templates/')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// useEffect(() => {
//   fetchMemes();
// }, []);

export default function MemeGenerator() {
  const [template, setTemplate] = useState([]);

  // fetch all templates api

  useEffect(() => {
    const templateToFetch = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates/');
        const json = await response.json();
        setTemplate(json);
      } catch (e) {
        console.error(e);
      }
    };
    templateToFetch().catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <div>
      <h1>Meme Generator</h1>
      <TopAndBottomInput />
    </div>
  );
}

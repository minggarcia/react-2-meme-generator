// import { useEffect, useState } from 'react';

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

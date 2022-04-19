import { useEffect, useState } from 'react';

export default function MemeGenerator() {
  const [template, setTemplate] = useState([]);
  const [memeImage, setMemeImage] = useState('');
  const [topText, setTopText] = useState('top text');
  const [bottomText, setBottomText] = useState('bottom text');
  const [url, setUrl] = useState('https://api.memegen.link/images/ds.png');

  // fetch all templates api
  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((data) => {
        const response = data.map((meme) => {
          return meme.id;
        });
        setTemplate(response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // download handler

  function handleDownloadClick() {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    void fetch(setUrl).then((response) => {
      response
        .arrayBuffer()
        .then((buffer) => {
          const element = document.createElement('a');
          const file = new Blob([buffer], { type: 'image/jpeg' });
          element.href = URL.createObjectURL(file);
          element.download = 'image.jpg';
          element.click();
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  return (
    <div>
      <h1>Meme Generator</h1>
      <div>
        <div>
          <label>
            Top Text:
            <br />
            <input
              onChange={(event) => {
                setTopText(event.currentTarget.value);
              }}
              value={topText}
            />
          </label>
          <br />
          <div>
            <label>
              Bottom Text:
              <br />
              <input
                onChange={(event) => {
                  setBottomText(event.currentTarget.value);
                }}
                value={bottomText}
              />
            </label>
          </div>
        </div>
      </div>

      <label>
        Meme Templates
        <select
          onChange={(event) => {
            setMemeImage(event.currentTarget.value);
          }}
        >
          {template.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </label>
      <div css={url}>
        <img
          width="200px"
          height="200px"
          data-test-id="meme-image"
          src={`https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg`}
          alt="meme"
        />
      </div>
      <div>
        <button onClick={handleDownloadClick}>Download</button>
      </div>
    </div>
  );
}

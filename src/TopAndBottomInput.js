import { useState } from 'react';

export default function TopAndBottomInput() {
  const [template, setTemplate] = useState([]);
  const [topText, setTopText] = useState('top text');
  const [bottomText, setBottomText] = useState('bottom text');
  const [url, setUrl] = useState('https://api.memegen.link/images/ds.png');

  return (
    <div>
      <div>
        <label>
          Meme Template
          <br />
          <input
            onChange={(event) => {
              setTemplate(event.currentTarget.value);
              setUrl(
                `https://api.memegen.link/images/${template}/${event.target.value}/${topText}.jpg`,
              );
            }}
            value={topText}
          />
        </label>

        <label>
          Top Text:
          <br />
          <input
            onChange={(event) => {
              setTopText(event.currentTarget.value);
              setUrl(
                `https://api.memegen.link/images/${template}/${event.target.value}/${topText}.jpg`,
              );
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
  );
}

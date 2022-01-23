import { useState } from 'react';

export default function TopAndBottomInput() {
  const [topText, setTopText] = useState('I finally');
  const [bottomText, setBottomText] = useState('get this');

  return (
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
  );
}

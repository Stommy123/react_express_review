import React, { useState } from 'react';

const LIGHT_URL =
  'https://raw.githubusercontent.com/wyncode/gitpitch_react_hooks/master/assets/image/lightbulb.png';

const Room = _ => {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = _ => setLightOn(!lightOn);

  return (
    <main id='room' className={lightOn ? 'light' : 'dark'}>
      <img src={LIGHT_URL} id='lightbulb' alt='bulb' className={lightOn ? 'on' : 'off'} />
      <button onClick={toggleLight} id='lightswitch'>
        Turn Light Off
      </button>
    </main>
  );
};

export default Room;

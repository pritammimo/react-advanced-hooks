import { useRef } from 'react';

import TextInput from './textInput';

function Demo() {
  const inputRef = useRef(null);

  return (
    <div className='tutorial'>
      <div className='mb-2'>
        <TextInput ref={inputRef} />
      </div>
      <button onClick={() => inputRef.current?.reset()}>
        Reset From Parent
      </button>
    </div>
  );
}

export default Demo;
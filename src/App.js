import React from 'react';
import ComposedInput from './ComposedInput';

function App() {
  return (
    <div>
      <ComposedInput className="test" label="Name">
        <input type="text" id="composed-input" placeholder=" " />
      </ComposedInput>
    </div>
  );
}

export default App;

# react-typing-text-effect

react-typing-text-effect is a react base component with zero dependencies, use to add the typing effect.

codesandbox demo -> [Demo](https://hdw4h.csb.app/)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-typing-text-effect) to install .

```bash
npm i react-typing-text-effect
```

## Usage

```jsx
import React from "react";
import { TypingEffect } from "react-typing-text-effect";

export default function App() {
  return (
    <div className="App">
      <h1>react-text-explode</h1>
      <TypingEffect texts={["This is a typewriter effect.", "Using react and simple css"]} />
    </div>
  );
}
```

props| type | default value| info
--- | --- | --- | ---
texts | string[] | [''] | list of text to show
initialTypingDelayMs | number | 1000 | delay before start typing in ms
charTypingDelayMs | number | 120 | delay between letters
containerClassName | string | '' | additional class name for customize the texts
cursorClassName | string | '' | additional class name for customize the cursor


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
# react-typing-effect

react-typing-effect is a react base component that ...

codesandbox demo -> [Demo]()
## Installation

Use the package manager [npm]() to install .

```bash
npm install 
```

## Usage

```jsx
import React from "react";
import { TypingEffect } from "react-typing-effect";

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
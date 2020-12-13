import React from 'react'
import './style.css';

interface Props {
  texts?: string[];
  initialTypingDelayMs?: number;
  charTypingDelayMs?: number;
  containerClassName?: string;
  cursorClassName?: string;
}

export const TypingEffect: React.FC<Props> = ({
  texts = [''],
  initialTypingDelayMs: initialTypingDelayMs = 1000,
  charTypingDelayMs: charTypingDelayMs = 120,
  containerClassName = '',
  cursorClassName = '',
}) => {
  const [textToDisplay, setTextToDisplay] = React.useState('');
  const [index, setIndex] = React.useState(1);
  const [lineIndex, setLineIndex] = React.useState(0);
  const indexRef =  React.useRef(index);
  const lineIndexRef =  React.useRef(lineIndex);
  indexRef.current = index;
  lineIndexRef.current = lineIndex;
  React.useEffect(() => {
    setTimeout(type, initialTypingDelayMs);
  },[]);
  function type() {
    if(!texts[lineIndexRef.current]) {
      return;
    }
    const temp = texts[lineIndexRef.current].slice(0, indexRef.current);
    setIndex(prevIndex => prevIndex + 1);
    setTextToDisplay(temp);
    if (texts[lineIndexRef.current] === temp) {
      setIndex(0);
      setLineIndex(prevIndex => prevIndex + 1);
      setTimeout(type, initialTypingDelayMs);
      return;
    }
    setTimeout(type, charTypingDelayMs);
  }
  return (
    <div className={`react-hacker-typing-console-container ${containerClassName}`}>
      <span>{textToDisplay}</span><span className={`react-hacker-typing-console-cursor ${cursorClassName}`}>&nbsp;​</span>
    </div>
  )
}

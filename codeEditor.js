import React,{useState} from 'react';
import Highlight,{Prism} from 'prism-react-renderer';
import {css} from  '@emotion/react';
import theme from 'prism-react-renderer/themes/nightOwl';


(typeof window !== 'undefined' ? window : global).Prism = Prism;
require('prismjs/components/prism-javascript');
const editorStyles = css`
  font-family: 'Fira Code', 'Fira Mono', monospace;
  font-size: 16px;
  background-color: #011627;
  color: white;
  padding: 20px;
  border-radius: 5px;
  overflow: auto;
`;

const textareaStyles = css`
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  height: 100%;
  width: 100%;
  line-height: 1.5;
  outline: none;
  padding: 0;
  caret-color: white;
  white-space: pre;
  resize: none;
`;

const CodeEditor = () => {
  const [code, setCode] = useState('function helloWorld() { console.log("Hello, world!");}');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div css={editorStyles}>
      <Highlight Prism={Prism} code={code} language="javascript" theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '0', margin: '0' }}>
            <textarea
              css={textareaStyles}
              value={code}
              onChange={handleChange}
              spellCheck="false"
            />
            <code>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
import "./App.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisibilityIcon from "@material-ui/icons/Visibility";

function App() {
  const [input, setInput] = useState();
  return (
    <div className="App">
      <div className="cont">
        <div className="nav">
          <VisibilityIcon />
          MARKDOWN
        </div>
        <textarea
          className="textarea"
          value={input}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <div className="cont">
        <div className="nav">
          <VisibilityIcon />
          PREIVEW
        </div>
        <ReactMarkdown
          source={input}
          renderers={{
            code: Component,
          }}
          className="markdown"
        />
      </div>
    </div>
  );
}
const Component = ({ value, language }) => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};
export default App;

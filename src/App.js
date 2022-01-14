import "./App.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from '@material-ui/icons/Edit';
import DarkModeToggle from "react-dark-mode-toggle";


function App() {
  const [input, setInput] = useState();
  const [isDarkMode, setIsDarkMode] = useState("App");
  const [isDarkBtn, setIsDarkBtn] = useState(false);
  function toggleTheme(){
    if(isDarkMode=="App"){
      setIsDarkMode("dark")
      setIsDarkBtn(true)
    } else {
      setIsDarkMode("App")
      setIsDarkBtn(false)
    }
  }
  return (
  
    <div className={isDarkMode}>
        <DarkModeToggle
      onChange={toggleTheme}
      checked={isDarkBtn}
      size={80}
    />
      <div className="cont">
        <div className="nav">
          <EditIcon />
          Edit Markdown File
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
          Preview
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

import React, { useRef, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { CODE_SNIPPETS } from "./constants";

interface CodeSnippets {
  [key: string]: string;
}

const CodeEditor: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue((CODE_SNIPPETS as CodeSnippets)[language]);
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="mb-4">
        <LanguageSelector language={language} onSelect={onSelect} />
      </div>
      <div className="flex-1 mb-4">
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="20vh"
          theme="vs-dark"
          
          language={language}
          defaultValue={(CODE_SNIPPETS as CodeSnippets)[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value || "")}
        />
      </div>
      <div>
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;

import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector"
import Output from "./Output";
import { CODE_SNIPPETS } from "../Constants";

const CodeEditor = () => {
  const editorref = useRef();
  console.log(editorref);
  
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const onMount = (editor) => {
    editorref.current = editor;
    editor.focus();
  };
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };
  return (
    <Box>
      <HStack spacing={4}>
        <Box width={"50%"}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
          
            height="75vh"
            defaultLanguage="javascript"
            language={language}
            theme="vs-light"
            value={value}
            onChange={(value) => setValue(value)}
            onMount={onMount}
            defaultValue={CODE_SNIPPETS[language]}
          />
        </Box>
        <Output editorref={editorref} language={language}/>
      </HStack>
    </Box>
  );
};

export default CodeEditor;

import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorref, language }) => {
  const toast = useToast()
  const [output, setOutput] = useState(null);
  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(false)
  const runCode = async () => {
    const sourceCode = editorref.current.getValue();
    if (!sourceCode) return;
    try {
      setisLoading(true)
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? isError(true): isError(false)
      console.log(result.output);
      

    } catch (error) {
      console.log(error);
     
      
    }
    finally{
      setisLoading(false)
    }
  };

  return (
    <Box w={"50%"}>
      <Text mb={2} fontSize={"lg"}>
        <Button
          variant={"outline"}
          colorScheme="green"
          position={"absolute"}
          onClick={runCode}
          top={40}
          right={10}
          isLoading={isLoading}
        >
          Run Code
        </Button>
        <Box
          height={"70vh"}
          mt={20}
          p={2}
          border={"1px solid"}
          borderRadius={4}
          borderColor={
            isError ? "red.500" : "#333"
          }
          color={
            isError ? "red.400" : ""
          }
        >
          {output? 
            output.map((line,index)=>{
              return <Text key={index}>{line}</Text>
            })
          : 'Press Run Code To Execute The Program'}
        </Box>
      </Text>
      
    </Box>
  );
};

export default Output;

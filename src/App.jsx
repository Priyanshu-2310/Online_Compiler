import { Box } from '@chakra-ui/react'
import React from 'react'
import theme from './theme'
import CodeEditor from './components/CodeEditor'

const App = () => {
  return (
    <Box minH={'100vh'} bgColor={'#1E1E1E'} px={6} py={8}>
      <CodeEditor />
    </Box>
  )
}

export default App
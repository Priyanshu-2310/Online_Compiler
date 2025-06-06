import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </StrictMode>,
)

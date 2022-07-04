import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ScrapForm from '../src/components/form.js'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" >
          <ColorModeSwitcher justifySelf="flex-end" />
          <ScrapForm/>
      </Box>
    </ChakraProvider>
  );
}

export default App;

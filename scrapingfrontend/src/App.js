import React from 'react';
import {
  ChakraProvider,
  Heading,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ScrapForm from '../src/components/form.js'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex mt={4} justifyContent='center'>
           <Heading size='lg'>Web Scraping</Heading>
         <ColorModeSwitcher />
      </Flex> 
          <ScrapForm/>
    </ChakraProvider>
  );
}

export default App;

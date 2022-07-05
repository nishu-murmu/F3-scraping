import { Stack,FormControl,Button, NumberInput,Input, FormLabel,  NumberInputField, Heading, Flex} from '@chakra-ui/react'
import { useState } from 'react'

const Form = () => {

  const [isticket, setIsTicket] = useState(false)
  return (
  <Stack spacing={4} w={'400px'} pt={20} mx='auto'>
      <Flex mx='auto' justifyContent={'space-around'} w='200px'>
        <Button onClick={() => setIsTicket(true)}>Ticket</Button>
        <Button onClick={() => setIsTicket(false)}>Orders</Button>
      </Flex>
      <Heading size={'md'} textAlign='center'>{isticket ? 'Ticket': 'Orders'} Section</Heading>
      <FormControl isRequired spacing={1}>
          <FormLabel htmlFor={'url'}>Enter UserName:</FormLabel>
        <Input required id='email' type='text' />
      </FormControl> 
      <FormControl isRequired spacing={1}>
          <FormLabel htmlFor={'url'}>Enter Password:</FormLabel>
        <Input required id='email' type='password' />
      </FormControl>
      <FormControl isRequired spacing={1}>
        <FormLabel htmlFor={'percentage'}>Enter {isticket ? 'percentage': 'number'}:</FormLabel>
      <NumberInput required  id='percentage'>
          <NumberInputField/>
        </NumberInput>
      </FormControl> 
      <Button>Submit</Button>
    </Stack>
  )
}

export default Form

// ticket percentage
// order number

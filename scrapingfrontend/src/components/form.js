import { Stack,FormControl,Button, NumberInput,Input, FormLabel,  NumberInputField} from '@chakra-ui/react'

const Form = () => {
  return (
  <Stack spacing={4} w={'400px'} pt={20} mx='auto'>
      <FormControl isRequired spacing={1}>
          <FormLabel htmlFor={'url'}>Enter Email:</FormLabel>
        <Input required id='email' type='email' />
      </FormControl> 
      <FormControl isRequired spacing={1}>
          <FormLabel htmlFor={'url'}>Enter Password:</FormLabel>
        <Input required id='email' type='password' />
      </FormControl>
      <FormControl isRequired spacing={1}>
        <FormLabel htmlFor={'percentage'}>Enter Percentage:</FormLabel>
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

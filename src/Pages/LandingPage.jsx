import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Link,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
  Image,
  Grid,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import logo from '../Assets/img/meal.png'

const LandingPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight='bold'>PrestoVotes</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={toggleColorMode}>
                    Go To Account
              </Button>


              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      {/* Hero */}
        <Box bgGradient='linear(to-r, #326afc, #1c5afa)' d="flex" h="100vh" flexDirection="row" m='auto' maxW="100%">
          <Container  d="flex" flexDirection='column' alignItems='center'  maxW="container.xl">
            <Box maxW="70%" align="center" mx="auto">
              <Image boxSize='200px' objectFit='cover' src={logo}/>
            <Heading pb="10" fontFamily="SF-Black"  color="white" maxW="100%" as="h1" fontSize='6xl' fontWeight='extrabold'>
              Make your voice clear and heard, you matter!
            </Heading>
            <Text pb="10" color="white" fontFamily="SF-Medium" fontSize="25px">
              You deserve a say in the matter. Cast your vote and make your voice heard! You deserve a say in the matter. 
            </Text>
            <button style={{backgroundColor:"white" ,fontFamily:'SF-Medium', paddingTop:20, paddingBottom:20, paddingLeft:50, paddingRight:50, borderRadius:20}}>
              Join Now
            </button>
            </Box>
          </Container>
        </Box>
        {/* About Us */}

        <Container my={20} maxW="container.xl" >
        <Box>
          <Heading textAlign="center" as="h1" fontSize="70px">About Us</Heading>
          <Grid>
          </Grid>
        </Box>
        </Container>
    </>
  )
}

export default LandingPage
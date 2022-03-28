import {Box, Image, Button, Grid, Container, Heading, GridItem, Badge, FormControl, Input} from '@chakra-ui/react'
import brandLogo from '../../Assets/img/meal.png'
import image from '../../Assets/img/adumatta.JPG'

function Banner(){
    return <>
        <header>
            <Box d="flex" align-items="center" justifyContent="space-between" ml={6} mr={6}>
                <Box>
                    <Image boxSize="90px" src={brandLogo} />
                </Box>
                <Box>
                    <Button pr={3} colorScheme="grey.100" fontSize="sm" variant="link">
                        Log In
                    </Button>
                    <Button pr={3} colorScheme="grey.100" fontSize="sm" variant="link">
                        Sign Up
                    </Button>
                </Box>

            </Box>
        </header>

        <Box>
            <Container maxWidth="container.xl">
                <Box d="flex" alignItems="center" py="20" flexDirection="row">
                    <Box>
                        <Heading>
                            <Box>
                                Dive in! There are so many things to do in Meetup!
                            </Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            Join a group to meet people, make friends, find support, grow a business and explore your interests. Thousands of events are happening everyday, both online and in person.
                        </Box>
                    </Box>
                    <Box w='100%'>
                        <Image w='100%' src={brandLogo} alt="illustrate" />
                    </Box>
                </Box>
            </Container>
        </Box>

        {/* Three Boxes */}
        <Container maxW="container.xl"  mt={10}>
            <Grid gap={6} templateColumns="repeat(3, 1fr)">
                <GridItem>
                    Make New Friends
                    <Image w="90%" borderRadius="lg" src={image} alt="An Image"/>
                </GridItem>
                <GridItem>
                    Make New Friends
                    <Image w="90%" borderRadius="lg" src={image} alt="An Image"/>
                </GridItem>
                <GridItem>
                    Make New Friends
                    <Image w="90%" borderRadius="lg" src={image} alt="An Image"/>
                </GridItem>
            </Grid>           
        </Container>

        {/* pills */}
        <Container maxW="container.xl">
            <Box direction="row" display="flex" my="10" flexWrap="wrap" justifyContent="space-between">
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
            </Box>
        </Container>

        <Container maxW="container.xl" mt="20">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box>
                    <Heading display={{sm:"none", md:"block", lg:"block", xl:"block", base:"none"}} as="h3" size="lg" mb="7">
                        What do you want to do?
                    </Heading>

                        <Box d="flex" alignItems="center" flexDirection="row" w="100%">
                            <Box flexBasis="50%" w="100%" mr="2">
                                <FormControl>
                                    <Box pos="relative">
                                        <Input pl={'8'} placeholder="Search for tennis" type="text"/>
                                    </Box>
                                </FormControl>
                            </Box>
                            <Box flexBasis="50%" w="100%" mr="2">
                                <FormControl>
                                    <Box pos="relative">
                                        <Input pl={'8'} placeholder="Search for tennis" type="text"/>
                                    </Box>
                                </FormControl>
                            </Box>
                        </Box>
                        <Button _hover={{opacity:"0.8"}} mt="5" pt="6" pb="6" w="100%" color="#ffffff" bg="red.200" fontSize="lg">
                            <Box fontWeight="black"> Search</Box>
                        </Button>
                </Box>
                <Box>
                    <Heading display={{sm:"none", md:"block", lg:"block", xl:"block", base:"none"}} as="h3" size="lg" mb="7">
                        What do you want to do?
                    </Heading>

                    <Box display="flex" flexWrap="wrap" justifyContent="flex-start">


                    <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                <Badge 
                    borderRadius="20" 
                    px={4}
                    py={2}
                    mr="4" 
                    mb="4"
                    textTransform='normal'
                    color='#ffffff'
                    bg="blue.100">
                        Boost your career
                </Badge>
                </Box>


                        
                      
                </Box>
            </Grid>
        </Container>
    </>
}


export default Banner;
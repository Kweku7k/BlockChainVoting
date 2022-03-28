import { Heading, Box, Grid, Container, GridItem, Image, Link, Button } from "@chakra-ui/react";
import picture from '../../Assets/img/meal.png'

function ItWorks(){
    return <>
    {/* <Container > */}

    <Container maxW="container.xl">

    <Box textAlign="center">
        <Heading as="h3" mt={10} >
            How Meet Up Works
        </Heading>
        <Box maxW="700px" pb="20" mx="auto">
            Some plenty P tag text sha
        </Box>
    </Box>
    <Grid templateColumns="repeat(3, 1fr)" gap="6" mb='10'>
        <GridItem>
            <Box mx="auto" align="center">
                <Image w="100%" boxSize="160px" src={picture} alt="brand" />
                <Heading as="h5" size="md">
                    <Link>
                        <Box color="blue.100" pb="4">
                            Join a group
                        </Box>
                    </Link>
                </Heading>
                <p>Do what you love, meet others who love it too, find your community, the rest is history</p>
            </Box>
        </GridItem>
        <GridItem>
            <Box mx="auto" align="center">
                <Image w="100%" boxSize="160px" src={picture} alt="brand" />
                <Heading as="h5" size="md">
                    <Link>
                        <Box color="blue.100" pb="4">
                            Join a group
                        </Box>
                    </Link>
                </Heading>
                <p>Do what you love, meet others who love it too, find your community, the rest is history</p>
            </Box>
        </GridItem>
        <GridItem>
            <Box mx="auto" align="center">
                <Image w="100%" boxSize="160px" src={picture} alt="brand" />
                <Heading as="h5" size="md">
                    <Link>
                        <Box color="blue.100" pb="4">
                            Join a group
                        </Box>
                    </Link>
                </Heading>
                <p>Do what you love, meet others who love it too, find your community, the rest is history</p>
            </Box>
        </GridItem>
    </Grid>
    <Box maxW="100%" align="center">
        <Button colorScheme="blue">
            Join Now
        </Button>
    </Box>
    </Container>

    </>


}

export default ItWorks;
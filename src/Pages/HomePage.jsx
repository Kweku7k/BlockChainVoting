import React from 'react';
import { Box, Heading, Icon, SimpleGrid, Container } from '@chakra-ui/react'
import Votingcard from '../Components/VotingCard';
import Custombutton from '../Components/CustomButton';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <Box w={'100%'} px={2} >
            <Container maxW='container.md'>

            <Box my={10} display={'flex'} justifyContent={'space-between'}>
                <Heading className='heading'>Alpha House 🚩 </Heading>
                <Icon />
            </Box>
            <SimpleGrid columns={2} spacing={5} >
                <Box>
                    <Link to={'/category'}><Votingcard title={'🎯'} heading={'Business Influencers Ghana Edition'} candidate={'9 candidate 1 category'} /></Link>  
                </Box>
                <Votingcard title={'🏆'} heading={'Akosombo Secondary Popularity'} candidate={'9 candidate 1 category'} />
                <Votingcard title={'🌮'} heading={'Chop Life Entertainment Awards'} candidate={'9 candidate 1 category'} />
            </SimpleGrid>
            <Box w={'98%'} mx={'auto'} display={'block'} marginTop={200} marginBottom={10}>
                <Custombutton buttonText={'Create a new election'} />
            </Box>
            </Container>

        </Box>
    );
}

export default Homepage;

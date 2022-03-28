import { Box } from '@chakra-ui/react';
import React from 'react';
import random from '../Assets/img/me.jpeg'
import Custombutton from '../Components/CustomButton';
import adumatta from '../Assets/img/adumatta.JPG'
import Selectedcandidatecard from '../Components/SelectedCandidateCard';

const Selectedcandidate = () => {
    return (
        <Box w={'95%'} mx={'auto'} my={5}>
            <Selectedcandidatecard candidateName={'Adumatta Nana Kweku'} img={adumatta} aboutCandindate={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."} numberOfVotes={'180'} amount={'Ghc 30.00'}  phone={'0542656207'}/>
            <Custombutton buttonText={'Vote now'}/>
        </Box>
    );
}

export default Selectedcandidate;

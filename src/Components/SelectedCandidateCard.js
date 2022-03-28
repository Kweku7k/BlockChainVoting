import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../Constants/Colors';
import { Input } from '@chakra-ui/react'

const Selectedcandidatecard = ({ candidateName, img, aboutCandindate, numberOfVotes, amount, phone }) => {
    return (
        <Box>
            <Heading>{candidateName}</Heading>
            <Box my={8} borderRadius={20} boxShadow={'dark-lg'}>
                <Image style={{objectFit:'cover'}} src={img} w={'100%'} height={'400px'} borderRadius={20} />
            </Box>
            <Box my={5}>
                <Text> {aboutCandindate}</Text>
            </Box>
            <Box py={5} borderBottomWidth={2}>
                <Text>Number of votes</Text>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Input style={{border:'none'}} value={numberOfVotes} />
                    <Button backgroundColor={Colors.white} outlineColor={Colors.lightPrimary} h={8} color={Colors.lightPrimary}> {amount} </Button>
                </Box>
            </Box>
            <Box my={8}>
                <Text>Mobile money phone number</Text>
                <Text> {phone}</Text>
                
            </Box>
        </Box>
    );
}

export default Selectedcandidatecard;

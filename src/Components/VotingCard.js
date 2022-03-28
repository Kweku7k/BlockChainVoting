import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../Constants/Colors';

const Votingcard = ({ title, heading, candidate, candidates, categories }) => {

    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 15) + "..." : str;
      }
    return (
        <Box className="box" w={'100%'} borderRadius={20} padding={6} marginBottom={3}>
            <Text style={{paddingTop:0, marginTop:0}} fontSize={40}>{title}</Text>
            <h4 className="heading">{heading}</h4>
            {/* <br/> */}
            <h6 style={{color:'grey', paddingTop:10}}><b>50</b> candidates</h6>
            {/* {truncate(name)} / */}
            {/* <Text color={Colors.ash} fontSize={12} fontWeight={'extrabold'} marginTop={3}>{candidate}</Text> */}
            {/* <h6>{candidates} candidates {categories} category</h6> */}


        </Box>
    );
}

export default Votingcard;

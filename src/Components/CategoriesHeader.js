import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Categoriesheader = ({ currentRoute, headerName, subtitle }) => {
    return (
        <Box my={8}>
            <Text>{currentRoute}</Text>
            <Heading>{headerName}</Heading>
            <Text>{subtitle}</Text>
        </Box>
    );
}

export default Categoriesheader;

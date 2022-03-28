import { Box, Icon, Input } from '@chakra-ui/react';
import React from 'react';

const Searchinput = ({ placeholder }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} marginBottom={6}>
            <Input w={'80%'} placeholder={ placeholder } fontSize={14} h={12}/>
            <Icon w={'16%'} />
        </Box>
    );
}

export default Searchinput;

import { Box, Heading, Icon, Image, Text,Center } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../Constants/Colors';

const Categoriescard = ({ categoryTitle, subcategory, img, emoji }) => {
    return (
        <Box w={'100%'} display={'flex'} marginTop={2} py={2} justifyContent={'space-between'} alignItems={'center'} borderBottomWidth={1}>
            <Box w={20} h={20} borderRadius={16} backgroundColor={Colors.lightPrimary}>
                {img ? <Image style={{objectFit:'cover'}} src={img} w={'100%'} h={20} borderRadius={16}/> : <Text style={{textAlign:'center'}} fontSize={50}> {emoji} </Text> }

            </Box>
            <Box w={'80%'}>
                <Heading fontSize={20}> {categoryTitle} </Heading>
                <Text color={Colors.ash}> {subcategory} </Text>
            </Box>
            <Box w={'10%'}>
                <Icon />
            </Box>
        </Box>
    );
}

export default Categoriescard;

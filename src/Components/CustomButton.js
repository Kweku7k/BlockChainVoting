import { Button } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../Constants/Colors';

const Custombutton = ({ buttonText }) => {
    return (
        <Button backgroundColor={Colors.primary} w={'100%'} height={14} color={Colors.white}>{buttonText}</Button>
    );
}

export default Custombutton;

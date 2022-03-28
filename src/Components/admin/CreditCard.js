import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../Constants/Colors";

export const CreditCard = ({amount, votes, date}) => {
  return (
    <Box
      w={"100%"}
      height={"220px"}
      borderRadius={"50px"}
      my={"10px"}
      backgroundColor={Colors.deepOrange}
      padding={"30px"}
    >
      <Box display={'flex'}>
        <Box>
          <Text color={Colors.white}>Current Balance</Text>
          <Text color={Colors.white} fontSize={32}>
            $ {amount}
          </Text>
        </Box>
        <Box>
        
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} paddingTop={16}>
        <Text color={Colors.white}>{votes} votes</Text>
        <Text color={Colors.white}>{date}</Text>
      </Box>
    </Box>
  );
};

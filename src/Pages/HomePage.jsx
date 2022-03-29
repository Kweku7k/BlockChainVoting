import React, { useEffect, useState } from "react";
import { Box, Heading, Icon, SimpleGrid, Container } from "@chakra-ui/react";
import Votingcard from "../Components/VotingCard";
import Custombutton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [data, setdata] = useState(null);

  useEffect( () => {
    const mounted = true;
    if (mounted) {
         axios
        .get("https://prestovotes.herokuapp.com/elections")
        .then((res) => {
          setdata(res.data);
        })
        .catch((error) => console.log(error));
    }

    return () => {};
  }, [data]);

  return (
    <Box w={"100%"} px={2}>
      <Container maxW="container.md">
        <Box my={10} display={"flex"} justifyContent={"space-between"}>
          <Heading className="heading">Alpha House 🚩 </Heading>
          <Icon />
        </Box>
        <SimpleGrid columns={2} spacing={5}>
            {data &&
              data.map((items) => (
          <Box key={items._id}>
                  <Link to={"/category"}>
                    <Votingcard
                      title={items.emoji}
                      heading={items.name}
                      candidate={items.c}
                    />
                  </Link>
          </Box>
              ))}
        </SimpleGrid>
        <Box
          w={"98%"}
          mx={"auto"}
          display={"block"}
          marginTop={200}
          marginBottom={10}
        >
          <Custombutton buttonText={"Create a new election"} />
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;

import { Box, Container, Spinner, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categoriescard from "../Components/CategoriesCard";
import Categoriesheader from "../Components/CategoriesHeader";
import Searchinput from "../Components/SearchInput";
import random from "../Assets/img/meal.png";
import axios from "axios";
import globals from "../globals";
import Custombutton from "../Components/CustomButton";
import InputField from "../Components/InputField";
import { Colors } from "../Constants/Colors";

const NewElectionPage = () => {
  const [electionName, setElectionName] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [slugName, setslugName] = useState("");
  const [number, setnumber] = useState("");
  const [rate, setrate] = useState("Ghc" + "");

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  let { election } = useParams();
  console.log(election);

  const createElection = () => {
    console.log("Initial Request");
    axios
      .post(`${globals.baseUrl}/elections`, {
        name: electionName,
        email: emailAddress,
        number: number,
        slugName: slugName,
        emoji: "‼️",
      })
      .then(() => {
        console.log("Success");
      })
      .catch(() => {
        console.log("Fail");
      });
  };

  // useEffect(() => {
  //   const mounted = true;
  //   if (mounted) {
  //     axios.get(`${globals.baseUrl}/categories/${election}`)
  //       .then((res) => {
  //         console.log(res.data);
  //           console.log(res.data[0].categories);
  //           setdata(res.data)
  //           setCategoriesData(res.data[0].categories)
  //           setloading(false)
  //       })
  //       .catch((error) => console.log(error));
  //   }

  //   return () => {};
  // }, []);

  return loading ? (
    <Box
      d="flex"
      w="100%"
      h="100vh"
      justifyContent="space-between"
      alignItems="center"
    >
      <Spinner size="xl" mx="auto" color="red.500" />
    </Box>
  ) : (
    <>
      <Container maxW="container.lg">
        <Box w={"95%"} mx={"auto"}>
          <Categoriesheader
            currentRoute={"Create a new election"}
            headerName="PrestoVotes🚩"
            // subtitle={`${categoriesData.length} entries`}
          />

          <InputField
            placeholder={"Name of Election"}
            value={slugName}
            setValue={(e) => setslugName(e.target.value)}
          />

          <InputField
            placeholder={"Nickname"}
            value={slugName}
            setValue={(e) => setslugName(e.target.value)}
          />

          <InputField
            placeholder={"Email Address"}
            value={slugName}
            setValue={(e) => setslugName(e.target.value)}
          />
          <h6 color={Colors.ash}>
            This should be less that 10 characters with no spacing
          </h6>

          <InputField
            placeholder={"Phone Number"}
            value={slugName}
            setValue={(e) => setslugName(e.target.value)}
          />
          <Box d="flex">
            <Box style={{ width: "15%", marginRight: "5%" }}>
              <InputField
                placeholder={"Phone Number"}
                value={"Ghc"}
                setValue={(e) => setslugName(e.target.value)}
              />
            </Box>
            <Box style={{ width: "65%", marginRight: "5%" }}>
              <InputField
                placeholder={"Amount"}
                value={slugName}
                setValue={(e) => setslugName(e.target.value)}
              />
            </Box>
            <Box style={{ width: "30%", marginRight: "5%" }}>
              <InputField
                placeholder={"Phone Number"}
                value={"Per vote"}
                setValue={(e) => setslugName(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box mx="auto" my="20" w="70%">
          <Custombutton
            onclick={() => createElection()}
            buttonText={"Create a new election"}
          />
        </Box>
      </Container>
    </>
  );
};

export default NewElectionPage;

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

const NewCategoryPage = () => {


  const [categoryName, setcategoryName] = useState("")

  const [loading, setloading] = useState(false)
  const [data, setdata] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  let { election } = useParams();
  console.log(election)

  const createElection = () => {
    console.log("Initial Request")
    axios.post(`${globals.baseUrl}/cateogory`,{
      name:categoryName,
    })
    .then(() =>{
      console.log("Success")
    })
    .catch(()=>{
      console.log("Fail")
    })
  }

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

  return (
    loading 
    ? 
    <Box d="flex" w="100%" h="100vh" justifyContent="space-between" alignItems="center">
      <Spinner size='xl' mx="auto" color='red.500'/>
    </Box>
    :
      <>
      <Container maxW="container.lg">



    <Box w={"95%"} mx={"auto"}>
      <Categoriesheader
        currentRoute={"Create a new election"}
        headerName="PrestoVotes🚩"
        // subtitle={`${categoriesData.length} entries`}
      />



      
    </Box>
    <Box mx="auto" my="20" w="70%">
          <Custombutton onclick={() => createElection()} buttonText={"Create a new election"} />
    </Box>
    </Container>



    </>

  );
};

export default NewCategoryPage;

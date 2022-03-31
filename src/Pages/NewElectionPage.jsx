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

const NewElectionPage = () => {


  const [electionName, setElectionName] = useState("")
  const [emailAddress, setemailAddress] = useState("")
  const [slugName, setslugName] = useState("")
  const [number, setnumber] = useState("")
  const [rate, setrate] = useState("Ghc" + "")



  const [loading, setloading] = useState(false)
  const [data, setdata] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  let { election } = useParams();
  console.log(election)

  const createElection = () => {
    console.log("Initial Request")
    axios.post(`${globals.baseUrl}/elections`,{
      name:electionName,
      email:emailAddress,
      number:number,
      slugName:slugName,
      emoji:"‼️"
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

      <input type="text" className="inputField" placeholder="Name Of Election"  value={electionName} onChange={(e)=>setElectionName(e.target.value)} />
      <input type="text" className="inputField" placeholder="nickname"  value={slugName} onChange={(e)=>setslugName(e.target.value)} />
      <h6 color="grey">this should be less that 10 characters with no spacing</h6>
      <input type="text" className="inputField" placeholder="Email Address"  value={emailAddress} onChange={(e)=>setemailAddress(e.target.value)} />
      <input type="number" className="inputField" placeholder="Phone Number"  value={number} onChange={(e)=>setnumber(e.target.value)} />
      <Box d="flex" >
      <input type="text" className="inputField" disabled value="Ghc" style={{width:'15%', color:'darkgrey', marginRight:"5%"}}/>
      <input type="number" className="inputField" placeholder="per vote"  value={rate} onChange={(e)=>setrate(e.target.value)} />
      </Box>

      
    </Box>
    <Box mx="auto" my="20" w="70%">
          <Custombutton onclick={() => createElection()} buttonText={"Create a new election"} />
    </Box>
    </Container>



    </>

  );
};

export default NewElectionPage;

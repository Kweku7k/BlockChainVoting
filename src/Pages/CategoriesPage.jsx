import { Box, Container, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categoriescard from "../Components/CategoriesCard";
import Categoriesheader from "../Components/CategoriesHeader";
import Searchinput from "../Components/SearchInput";
import random from "../Assets/img/meal.png";
import axios from "axios";

const Categoriespage = () => {

  const [loading, setloading] = useState(true)
  const [data, setdata] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  let { election } = useParams();
  console.log(election)

  useEffect(() => {
    const mounted = true;
    if (mounted) {
      axios.get(`https://prestovotes.herokuapp.com/elections/${election}`)
        .then((res) => {
          console.log(res.data);
            console.log(res.data[0].categories);
            setdata(res.data)
            setCategoriesData(res.data[0].categories)
            setloading(false)
        })
        .catch((error) => console.log(error));
    }

    return () => {};
  }, []);

  return (
    loading 
    ? 
    <Box d="flex" w="100%" h="100vh" justifyContent="space-between" alignItems="center">
      <Spinner size='xl' mx="auto" color='red.500'/>
    </Box>
    :
      <>
      <Container maxW="container.xl">



    <Box w={"95%"} mx={"auto"}>
      <Categoriesheader
        currentRoute={"PrestoVotes"}
        headerName={data[0].name}
        subtitle={`${categoriesData.length} entries`}
      />
      <Searchinput placeholder={"Search a particular person or category"} />

      
{categoriesData.map((category)=>(
      <Box>
        <Link to={`/${election}/${category.slugName}`}>
          <Categoriescard
            // img={random}
            emoji={category.emoji}
            categoryTitle={category.name}
            subcategory={`${category.totalSubCategories} subcategories`}
          />
        </Link>
      </Box>
))}

      
    </Box>
    </Container>

    </>

  );
};

export default Categoriespage;

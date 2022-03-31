import { Box } from "@chakra-ui/react";
import React from "react";
import Categoriescard from "../Components/CategoriesCard";
import Categoriesheader from "../Components/CategoriesHeader";
import Custombutton from "../Components/CustomButton";
import InputField from "../Components/InputField";

const NewElectionCategory = () => {
  return (
    <Box w={"95%"} mx={"auto"}>
      <Box>
        <Categoriesheader
          currentRoute={"Create a new election"}
          headerName="PrestoVotes🚩"
          // subtitle={`${categoriesData.length} entries`}
        />
      </Box>
      <InputField placeholder={"Category Name"} />

      <Box mx="auto" my="3" w="100%">
        <Custombutton buttonText={"Create New Category"} />
      </Box>

      <Categoriescard
        // img={random}
        emoji={"😎"}
        categoryTitle={"New Voting"}
        subcategory={"None"}
      />

      <Categoriescard
        // img={random}
        emoji={"😎"}
        categoryTitle={"New Voting"}
        subcategory={"None"}
      />
    </Box>
  );
};

export default NewElectionCategory;

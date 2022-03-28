import { Box, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Categoriescard from "../Components/CategoriesCard";
import Categoriesheader from "../Components/CategoriesHeader";
import Searchinput from "../Components/SearchInput";
import random from "../Assets/img/meal.png";
import { CreditCard } from "../Components/admin/CreditCard";

const AdminNominationPage = () => {
  return (
    <Box w={"95%"} mx={"auto"}>
      <Categoriesheader
        headerName={"Business Influencers"}
        subtitle={"overview"}
      />
      <CreditCard amount={"1,480,600"} votes={"100"} date={"12/12/2022"} />
      <Box display={"flex"} justifyContent={"space-between"} py={'30px'}>
        <Text>Status of Election</Text>
        <Switch color={"red.400"} />
      </Box>
      <Box>
        <Link to={"/select-category"}>
          <Categoriescard
            img={random}
            emoji={"🌮"}
            categoryTitle={"Most Foodian"}
            subcategory={"2 subcategories 6 candidates"}
          />
        </Link>
      </Box>
      <Categoriescard
        emoji={"😭"}
        categoryTitle={"Most Talkative"}
        subcategory={"2 subcategories 6 candidates"}
      />
      <Categoriescard
        emoji={"🏌️‍♂️"}
        categoryTitle={"Most Popular"}
        subcategory={"2 subcategories 6 candidates"}
      />
    </Box>
  );
};

export default AdminNominationPage;

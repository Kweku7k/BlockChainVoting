import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Categoriescard from '../Components/CategoriesCard';
import Categoriesheader from '../Components/CategoriesHeader';
import Searchinput from '../Components/SearchInput';
import random from '../Assets/img/meal.png'

const Selectedcategory = () => {
    return (
        <Box w={'95%'} mx={'auto'}>
            <Categoriesheader currentRoute={'Alpha House Business Influencers'} headerName={'Most Foodian'} subtitle={'16 entries'} />
            <Searchinput placeholder={'Search a particular person or category'} />
            <Box>
                <Link to={'/Candidates'}><Categoriescard emoji={'❤️'} categoryTitle={'Local'} subcategory={'2 subcategories 6 candidates'} /></Link> 
            </Box>
            <Categoriescard categoryTitle={'Continental'} emoji={'🏄'} subcategory={'2 subcategories 6 candidates'} />
        </Box>
    );
}

export default Selectedcategory;

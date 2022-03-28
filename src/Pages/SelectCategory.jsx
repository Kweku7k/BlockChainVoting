import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Categoriescard from '../Components/CategoriesCard';
import Categoriesheader from '../Components/CategoriesHeader';
import Searchinput from '../Components/SearchInput';
import random from '../Assets/img/meal.png'
import axios from 'axios';
import baseUrl from '../globals';

const Selectedcategory = () => {
    let {election} = useParams()

    useEffect(() => {
      axios.get(`${baseUrl}/elections/${election}`)
      .then((res) => {
        console.log(res.data);
    })

        
    }, [])
    

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

import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Categoriescard from '../Components/CategoriesCard';
import Categoriesheader from '../Components/CategoriesHeader';
import Searchinput from '../Components/SearchInput';
import random from '../Assets/img/meal.png'
import axios from 'axios';
import baseUrl from '../globals';
import globals from '../globals';

const Selectedcategory = () => {
    let {election} = useParams()
    let {category} = useParams()
    const [data, setdata] = useState([])
    console.log(election)
    console.log(category)


    useEffect(() => {
      axios.get(`${globals.baseUrl}/subcategories/${election}/${category}`)
      .then((res) => {
        console.log(res.data);
        // console.log(res.data[0].subCategories);
        console.log("res.data");
        setdata(res.data)
    }) 
    }, [])
    

    return (
        <Box w={'95%'} mx={'auto'}>
            <Categoriesheader currentRoute={'Alpha House Business Influencers'} headerName={'Selected Category'} subtitle={'16 entries'} />
            <Searchinput placeholder={'Search a particular person or category'} />

            {data.map((subcategory)=>(
            <Box>
                <Link to={`/${election}/${category}/${subcategory.name}`}>
                    <Categoriescard emoji={subcategory.emoji} categoryTitle={subcategory.name} subcategory={`${subcategory.totalSubCategories} candidates`} />
                </Link> 
            </Box>
))}
            {/* <Categoriescard categoryTitle={'Continental'} emoji={'🏄'} subcategory={'2 subcategories 6 candidates'} /> */}
        </Box>
    );
}

export default Selectedcategory;

import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Categoriescard from '../Components/CategoriesCard';
import Categoriesheader from '../Components/CategoriesHeader';
import Searchinput from '../Components/SearchInput';
import random from '../Assets/img/me.jpeg'
import adumatta from '../Assets/img/adumatta.JPG'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Selectedcategorytype = () => {

    
//   useEffect(() => {
//     const mounted = true;
//     if (mounted) {
//       axios.get(`${globals.baseUrl}/candidates/${election}/${subcategory}`)
//         .then((res) => {
//           console.log(res.data);
//             console.log(res.data[0].categories);
//             setdata(res.data)
//             setCategoriesData(res.data[0].categories)
//             setloading(false)
//         })
//         .catch((error) => console.log(error));
//     }

//     return () => {};
//   }, []);
    

    return (
        <Box w={'95%'} mx={'auto'}>
            <Categoriesheader currentRoute={'Alpha House Business Influencers'} headerName={'Most Foodian'} subtitle={'Local'} />
            <Searchinput placeholder={'Search a particular person or category'} />
            <Link to={'/selected-candidate'}> 
                <Categoriescard img={adumatta} categoryTitle={'Adumatta Nana Kweku'} subcategory={'16 votes'} /> 
            </Link>
            <Categoriescard img={random} categoryTitle={'Frank Abrokwa'} subcategory={'2 subcategories 6 candidates'} />
        </Box>
    );
}

export default Selectedcategorytype;

import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <Box d="flex" w="100%" h="100vh" justifyContent="space-between" alignItems="center">
    <Spinner size='xl' mx="auto" color='red.500'/>
  </Box>
  )
}

export default LoadingSpinner
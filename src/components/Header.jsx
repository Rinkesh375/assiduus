import React from 'react';
import logo from "../assets/logo.png"
import { IoNotifications } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Flex, Spacer, Box, Image, Input, Grid, GridItem,Button } from '@chakra-ui/react'
const Header = () => {
  const handleReloadPage = ()=>{
    window.location.reload();
  }
  return (
    <>
      <Grid templateColumns='3fr 1.2fr' mx="1rem">
        <GridItem >
          <Image src={logo} />
        </GridItem>

        <GridItem >
          <Flex style={{ alignItems: "center" }}>
             <Button colorScheme='messenger' onClick={handleReloadPage}>Random Data</Button>
            <Box>
              <Flex alignItems="center" border="1px solid #d5d9dd" p="0.5rem 0.7rem" style={{ borderRadius: "0.4rem" }}><IoIosSearch /><Input variant="unstyled" autoComplete='off' /> </Flex>
            </Box>
            <Spacer />
            <Box boxSize="2rem"><IoNotifications /></Box>
            <Spacer />
            <Box>
              <Image
                borderRadius='full'
                boxSize='50px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default Header;

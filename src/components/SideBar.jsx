import React ,{useState}from 'react';
import {  Box,  VStack, Link } from '@chakra-ui/react';
import { MdDashboard,MdContactPage,MdContacts } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";



const sidebarItems = [{text:"Dashboard",logo:<MdDashboard style={{display:"inline"}}/>}, {text:"Accounts",logo:<IoMdWallet style={{display:"inline"}}/>}, {text:"Payroll",logo:<FaDollarSign style={{display:"inline"}}/>} , {text:"Reports",logo:<MdContactPage style={{display:"inline"}}/>},{text:"Advisor",logo:<FaUser style={{display:"inline"}}/>},{text:"Contacts",logo:<MdContacts style={{display:"inline"}}/>}];

const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(-1);


  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Box display="flex" >
    <Box w="200px" >
    <VStack spacing={0} align="stretch">
      {sidebarItems.map(({text,logo}, index) => (
    

        <Link key={index} to={text}
        p={3}
        fontSize="lg"
        color={activeIndex === index ? 'white':'black' }
        bg={activeIndex === index ?   'green.500':''}
        _hover={{ bg: 'green.500' }}
        onClick={()=>handleItemClick(index)}
        cursor="pointer"
      >
       {logo} {text}
      </Link>
      ))}
    </VStack>
    </Box>
    
  </Box>
  );
}

export default SideBar;

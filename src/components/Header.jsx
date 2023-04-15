import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Box,
    HStack,
    Center,
    Button,
    ButtonGroup,
    IconButton,
    Heading,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    // useBreakpointValue
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import WalletConnect from './WalletConnect.jsx';



const CustomButton = ({
    variant = 'ghost',
    hover_bg = 'black',
    hover_color = 'white',
    hover_boxShadow = '2lg',
    ...props
}) => {
    return (
        <Button
            variant={variant}
            _hover={{
                bg: hover_bg,
                color: hover_color,
                boxShadow: hover_boxShadow,
            }}
            {...props}
        />
    );
}

const Header = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    // const {timeId, setTimeId } = useState(null);
    const navigate = useNavigate();

    return (
        <>
            <Box
                w={"100%"}
                h={"60px"}
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={10}
            >
                    <Heading
                        onClick={() => navigate('/')}
                    >Wave Hackathon</Heading>
                    <WalletConnect />
            </Box>

        </>
    );
}

export default Header
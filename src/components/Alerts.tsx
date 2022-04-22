import React from "react";

import { Alert, AlertIcon, AlertTitle, AlertDescription, ChakraProvider, Box, CloseButton, VStack, Button} from '@chakra-ui/react';


function Alerts() {
    interface alertProp{
        children: JSX.Element,
        status: string
    }

    const[display, setDisplay] =React.useState('none')

    return (
        <ChakraProvider>
            <Box>
                <VStack>
                    <Button onClick={() => setDisplay('')}>
                        Click the Button
                    </Button>

                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
                        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                        <CloseButton position='absolute' right='8px' top='8px' />
                    </Alert>
                </VStack>
            </Box>
        </ChakraProvider>
    )
}

export default Alerts;
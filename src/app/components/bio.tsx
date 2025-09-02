import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import About from './about';


export default function Bio() {
    return(
        <Stack height={"100vh"} alignContent={"space-evenly"}>
            {/* <Box>
                <Typography variant='h3'>Bobby Miller</Typography>

                <Typography variant='body1'>I am a computer science student at Vanderbilt University passionate 
                    about bridging the gap between software development and computer science education as well
                    as exploring the limits of what technology can achieve</Typography>
            </Box> */}
            
            <About />
        </Stack>
        
    )
}
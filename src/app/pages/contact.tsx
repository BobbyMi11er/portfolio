import { Box, Container, Stack, Typography } from "@mui/material";

export default function Contact() {    
    return (
        <footer>
            <Box alignItems={"center"} paddingY={2}>
                <Stack direction="row" spacing={3} justifyContent="center">
                    <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" title="Email" style={{ width: 32, height: 32 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" title="LinkedIn" style={{ width: 32, height: 32 }} />
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" title="GitHub" style={{ width: 32, height: 32 }} />
                    </a>
                </Stack>
            </Box>
        </footer>
    );
}
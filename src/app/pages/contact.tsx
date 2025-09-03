import { Box, Container, Stack, Typography } from "@mui/material";
import { DEV } from "../data/data";

export default function Contact() {    
    // Find links from DEV.contact
    const emailLink = DEV.contact.find(l => l.link.startsWith("mailto:"));
    const linkedinLink = DEV.contact.find(l => l.link.includes("linkedin.com"));
    const githubLink = DEV.contact.find(l => l.link.includes("github.com"));

    return (
        <footer>
            <Box alignItems={"center"} paddingY={2}>
                <Stack direction="row" spacing={3} justifyContent="center">
                    {emailLink && (
                        <a href={emailLink.link} target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" title="Email" style={{ width: 32, height: 32 }} />
                        </a>
                    )}
                    {linkedinLink && (
                        <a href={linkedinLink.link} target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" title="LinkedIn" style={{ width: 32, height: 32 }} />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink.link} target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" title="GitHub" style={{ width: 32, height: 32 }} />
                        </a>
                    )}
                </Stack>
            </Box>
        </footer>
    );
}
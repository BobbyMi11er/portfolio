import { Box, Divider, Stack, Typography } from "@mui/material";
import data from "../data/data.json"
import ProjectElement from "../components/projectElement";

export default interface ProjectObj {
    projectName : string,
    projectDescription : string,
    bulletPoints : string[],
    skillsUsed : string[],
    dateRange?: string,
    githubUrl?: string,
}


export default function Projects() {
    
    return(
        <Box textAlign={"center"} id="projects">
            <Typography variant="h5">Projects</Typography>
            <br />
            <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                {data["projects"].map((proj, i) => (
                    <ProjectElement key={i} obj={proj}  />
                ))}
            </Stack>
        </Box>
    )
}
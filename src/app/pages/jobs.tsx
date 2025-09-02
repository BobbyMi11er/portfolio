import { Box, Divider, Stack, Typography } from "@mui/material";
import data from "../data/data.json"
import ProjectElement from "../components/projectElement";

export default interface ProjectObj {
    projectName : string,
    projectDescription : string,
    bulletPoints : string[],
    skillsUsed : string[],
    image: {src: string, name: string},
}


export default function Jobs() {
    
    return(
        <Box textAlign={"center"} id="work-experience">
            <Typography variant="h5">Work Experience</Typography>
            <br />
            <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                {data["jobs"].map((proj, i) => (
                    <ProjectElement key={i} obj={proj}  />
                ))}
            </Stack>
        </Box>
    )
}
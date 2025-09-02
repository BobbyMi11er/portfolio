import ProjectObj from "../pages/projects"
import { Box, Card, CardContent, Chip, List, ListItem, Paper, Stack, Typography } from "@mui/material"

interface ProjectProps {
    obj: ProjectObj
}

export default function ProjectElement(project: ProjectProps) {
    return (
        <Paper elevation={4}>
            <Card sx={{display: "flex", flexDirection:"column", position: "relative"}}>
                <Box sx={{display: "flex", flexDirection: "column", position: "relative"}}>
                    <CardContent>
                        <Box sx={{ position: "absolute", top: 8, right: 16 }}>
                            <Typography variant="body2" color="text.secondary">
                                {project.obj.dateRange}
                            </Typography>
                        </Box>
                        <Typography align="center" variant="h5">
                            {project.obj.projectName}
                        </Typography>
                        <Typography align="center" variant="h6">
                            {project.obj.projectDescription}
                        </Typography>
                        <List>
                            {project.obj.bulletPoints.map((bullet, i) => (
                                <ListItem key={i}>
                                    {bullet}
                                </ListItem>
                            ))}
                        </List>
                        {project.obj.githubUrl && (
                            <Box textAlign="center" mt={2}>
                                <a href={project.obj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0366d6', textDecoration: 'none', fontWeight: 'bold' }}>
                                    View on GitHub
                                </a>
                            </Box>
                        )}
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <Stack direction="row" spacing={1}>
                            {project.obj.skillsUsed.map((skill, i) => (
                                <Chip key={i} label={skill}/>
                            ))}
                        </Stack>
                    </CardContent>
                </Box>
            </Card>
        </Paper>
    )
}
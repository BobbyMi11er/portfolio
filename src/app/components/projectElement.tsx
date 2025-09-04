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
                        <Box
                            sx={{
                                position: { xs: "static", sm: "absolute" },
                                top: { sm: 8 },
                                right: { sm: 16 },
                                mb: { xs: 1, sm: 0 },
                                textAlign: { xs: "center", sm: "right" }
                            }}
                        >
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
                            <Box textAlign="center">
                                <a href={project.obj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0366d6', textDecoration: 'none', fontWeight: 'bold' }}>
                                    View on GitHub
                                </a>
                            </Box>
                        )}
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <Box
                            sx={{
                                display: { xs: "block", sm: "flex" },
                                overflowX: { xs: "auto", sm: "visible" },
                                whiteSpace: { xs: "nowrap", sm: "normal" },
                                pb: { xs: 1, sm: 0 }
                            }}
                        >
                            {project.obj.skillsUsed.map((skill, i) => (
                                <Chip
                                    key={i}
                                    label={skill}
                                    sx={{
                                        mr: 1,
                                        mb: { xs: 1, sm: 0 },
                                        display: "inline-flex",
                                        alignItems: "center",
                                        flexShrink: 0
                                    }}
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Paper>
    )
}
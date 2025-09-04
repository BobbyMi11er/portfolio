import { Box, Divider, Stack, Typography, Chip, Paper, Card, CardContent } from "@mui/material";
import data from "../data/data.json";

export default function Coursework() {
    return (
        <Box textAlign={"center"} id="coursework">
            <Typography variant="h5">Relevant Coursework</Typography>
            <br />
                <Paper elevation={4} sx={{ mb: 2 }}>
                    <Card sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
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
                                Aug 2022 - May 2026
                            </Typography>
                        </Box>
                            <Typography align="center" variant="h5" sx={{ mb: 2 }}>
                                Vanderbilt University
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%"
                                }}
                            >
                                {data["coursework"].map((course: { name: string }, i: number) => (
                                    <Chip
                                        key={i}
                                        label={course.name}
                                        sx={{
                                            mb: 1,
                                            fontSize: { xs: "0.85rem", sm: "1rem" },
                                            px: 2,
                                            py: 1,
                                            maxWidth: "100%"
                                        }}
                                    />
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Paper>
        </Box>
    );
}

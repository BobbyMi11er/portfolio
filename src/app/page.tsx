import { Stack } from "@mui/material";
import About from "./components/about";
import Bio from "./components/bio";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Jobs from "./pages/jobs";
import Coursework from "./pages/coursework";


export default function Home() {
  return (
    <Stack spacing={10} marginX={"auto"} paddingX={"10px"} maxWidth={"1000px"}>
      <Bio />
      <Projects />
      <Jobs />
      <Coursework />
      <Contact />
    </Stack>
  );
}

export interface Developer {
    name: string,
    education: string,
    contact: CustomLink[],
    resume: CustomLink,
    interests: string[],
    skills: string[],
    classesTaken: string[],
    classesInProgress: string[],
}

export interface CustomLink {
    text: string,
    link: string,
}

export const DEV: Developer = {
    name:"Bobby Miller",
    education:"B.S. Vanderbilt University - Class of 2026",
    contact: [
        {text: "robert.p.miller@vanderbilt.edu", link: "mailto:robert.p.miller@vanderbilt.edu"},
        {text: "LinkedIn", link:"https://www.linkedin.com/in/bobbymiller32/"},
        {text: "GitHub", link:"https://www.github.com/BobbyMi11er"},
    ],
    resume: {
        text: "MillerResume.pdf", 
        link: "https://drive.google.com/file/d/1Q1vyBYThZ3tlf1Odn_Aw0uFiofMcIgDp/view?usp=sharing"
    },
    interests: [
        "Golf",
        "Formula 1",
        "Sailing"
    ],
    skills: [
        "Java",
        "SpringBoot",
        "C++",
        "Python",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "git"
    ],
    classesTaken: [
        "Principles of Software Engineering",
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "Database Management Systems",
        "Artificial Intelligence",
        "Discrete Structures",
        "Computer Architecture",
        "Linear Algebra"
    ],
    classesInProgress: [
        "Project in Autonomous Vehicles",
        "Applied Machine Learning",
        "Modern Programming Techniques",
        "Cloud Computing"
    ]
}
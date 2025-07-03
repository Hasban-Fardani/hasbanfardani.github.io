interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Software Engineer",
        startDate: "2022-07-08",
        endDate: "2025-05-08",
        school: "SMKN 11 Bandung",
        location: "Bandung, West Java, Indonesia",
        description: "Developed and maintained web applications using Laravel and Mysql.",
        currentUni: false,
    },
];

export default education;
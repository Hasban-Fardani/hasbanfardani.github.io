interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Bahasa Indonesia",
        level: "Native",
        description: "I speak natively and write natively",
        show: true
    },
    {
        name: "English",
        level: "B2",
        description: "I speak conversely and write conversely",
        show: true
    },
    {
        name: "Sundanese",
        level: "Fluent",
        description: "I speak fluently and write fluently",
        show: true
    },
];

export default languages;
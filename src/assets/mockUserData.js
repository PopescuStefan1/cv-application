const mockUserData = {
    generalInfo: {
        name: "Stefan-Tudor Popescu",
        email: "stefan.ro95@gmail.com",
        phoneNumber: "+40723254030",
    },
    education: [
        {
            type: "Master's degree",
            field: "Security and Applied Logic",
            university: "University of Bucharest",
            location: "Romania",
            startYear: "2024",
            endYear: "2026",
        },
        {
            type: "Bachelor's degree",
            field: "Electrical Engineering and Computer Science",
            university: "Transylvania University of Brasov",
            location: "Romania",
            startYear: "2020",
            endYear: "2024",
        },
    ],
    workExperience: [
        {
            company: "Talenting Software",
            location: "Romania",
            position: "Full Stack Software Engineer",
            startDate: "Dec 2023",
            endDate: "Present",
            description:
                "Developed and mantained full-stack MVC applications using Angular, C#, .NET with Repository Pattern, and Microsoft SQL Server in an Azure environment (Azure DevOps, Repos, Blob Storage), ensuring robust and scalable solutions.\nRefactored outdated and unoptimized codebases by implementing best Angular practices and adhering to SOLID, KISS, and DRY principles, resulting in a 60% reduction in code lines and a 20% improvement in load times, as measured by Lightghouse.\nCollaborated with a cross-functional team to design and implement solutions for complex tasks like interactive floor map drawing and saving, improving usability for both web and companion mobile applications.\nIntroduced comprehensive unit and E2E tests, increasing code coverage by 50%, enhancing reliability and reducing production bugs.",
        },
        {
            company: "Talenting Software",
            location: "Romania",
            position: "Full Stack Software Engineer Intern",
            startDate: "Nov 2023",
            endDate: "Dec 2023",
            description:
                "Created a full-stack web application for viewing and managing users' finances imported from an Excel file.\nDesigned and implemented a modern, user-friendly UI using Angular 16, enabling users to efficiently view and interact with financial information.\nMentored fellow interns on Angular and Git concepts, including branching and merging, improving team productivity and collaboration.",
        },
        {
            company: "NTT DATA",
            location: "Romania",
            position: "Front End Developer Intern",
            startDate: "Jul 2023",
            endDate: "Aug 2023",
            description:
                "Developed a fitness tracker web app from scratch using Angular and Angular Material, enabling users to track and visualize fitness metrics through interactive graphics.\nDesigned a responsive and user-friendly interface, ensuring seamless navigation and an engaging user experience across devices.",
        },
    ],
};

export default mockUserData;

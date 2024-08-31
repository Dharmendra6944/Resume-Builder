import resume_builder from '../assets/lil dragon.jpg'

// storing some  dummy data to be placed as placeholder in input 
export const Details = {
    bio: {
        profile_image: resume_builder,
        first_name: "First Name",
        last_name: "Last Name",
        role: "Software Developer",
        description: "Type short note here."
    },
    address: {
        postal_code: "000000",
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        phone: "+91 989889xxxx",
        email: "example@gmail.com",
    },
    experience: [
        {
            id: 1,
            job_title: "Developer",
            organization_name: "Software",
            start_year: "1947",
            end_year: "Present",
        },
       
    ],
    projects: [
        {
            id: 1,
            project_name: "Resume Builder",
            tech_stack: "MERN & Tailwind",
            github_link: "https://github.com/Dharmendra6944/Dharmendra_Portfolio",
            live_link: "https://dharmendra-portfolio-lake.vercel.app/",
            description: "Resume Builder app for users to craft professional resumes effortlessly."
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.Tech",
            domain: "Full Stack Developer",
            university: "RGPV",
            start_year: "2020",
            end_year: "2023",
        },
    ],
    key_skills: ["Leadership", "Combat",  "Strategy", "Teamwork", "Technology"],
};

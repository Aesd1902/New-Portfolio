
import type { PersonalDetails, ContactInfo, Experience, Education } from './types';

export const PERSONAL_DETAILS: PersonalDetails = {
    name: "Eswara Satya Dattatreya Alugolu",
    title: "iOS App Developer | AI & Mobile Development"
};

export const CONTACT_INFO: ContactInfo = {
    email: "eswarasatyadattathreyaalugolu@gmail.com",
    phone: "+91 9347989890",
    linkedin: "https://www.linkedin.com/in/satya6511",
    portfolio: "https://aesd1902.github.io/portfolio-website/",
    location: "Greater Bengaluru Area, India"
};

export const SKILLS: string[] = ["HTML", "Cascading Style Sheets (CSS)", "JavaScript", "iOS Development", "Python", "Data Analytics", "PowerBI", "Tableau", "Ethical Hacking"];

export const CERTIFICATIONS: string[] = [
    "Goldman Sachs - Operations Job Simulation",
    "Introduction to Deep Learning & Neural Networks with Keras",
    "J.P. Morgan - Software Engineering Job Simulation",
    "Tata Group - Data Visualisation: Empowering Business with Effective Insights",
    "Prepare Data for Exploration"
];

export const SUMMARY: string = "A dedicated and versatile developer with a foundation in Artificial Intelligence and Data Science. Experienced in optimizing full-stack web solutions and developing intuitive iOS applications. Passionate about leveraging problem-solving skills and data-driven insights to create innovative and impactful technology solutions. Committed to continuous learning and applying new skills to drive efficiency and maintain high-quality standards in software delivery.";

export const EXPERIENCES: Experience[] = [
    {
        role: "iOS App Developer",
        company: "Technohacks_Intern",
        duration: "Oct 2025 - Present",
        location: "Nashik, Maharashtra, India",
        points: [
            "Gained hands-on experience in iOS app development, enhancing technical skills in mobile applications.",
            "Learned to design intuitive user interfaces while integrating various APIs for functionality.",
            "Managed database handling and user authentication to ensure secure and efficient applications.",
            "Engaged in testing and optimization processes to improve overall app performance and reliability."
        ]
    },
    {
        role: "Full Stack Web Developer",
        company: "ApexPlanet Software Pvt Ltd",
        duration: "Oct 2025 - Nov 2025",
        location: "Bihar, India",
        points: [
            "Played a pivotal role in developing a full-stack web application that showcased end-to-end deployment readiness.",
            "Integrated authentication, CRUD operations, and analytics dashboards to enhance user functionality.",
            "Leveraged technologies like PHP, MySQL, AJAX, and Bootstrap for a responsive design.",
            "Contributed to a startup environment, fostering innovation and collaboration."
        ]
    },
    {
        role: "Cybersecurity and Ethical Hacking Intern",
        company: "Innovate Intern",
        duration: "Dec 2024 - Apr 2025",
        location: "Chennai, India",
        points: [
            "Conducted thorough analysis of system vulnerabilities and potential threats to safeguard networks.",
            "Implemented ethical hacking methodologies and penetration testing to identify and mitigate cyber threats.",
            "Developed keylogger detection techniques as part of a project aimed at strengthening system security."
        ]
    },
    {
        role: "Data Analytics (PowerBI)",
        company: "Edunet Foundation",
        duration: "Jan 2025 - Feb 2025",
        location: "Bengaluru, Karnataka, India",
        points: [
            "Actively contributed to the development and maintenance of applications at Revanco Technologies Pvt Ltd.",
            "Collaborated with diverse teams to ensure seamless integration of software solutions.",
            "Engaged in coding, testing, and deploying applications using advanced technologies and frameworks."
        ]
    },
     {
        role: "Associate Software Engineer",
        company: "Revanco Technologies Pvt.Ltd",
        duration: "Aug 2024 - Jan 2025",
        location: "Kakinada, Andhra Pradesh, India",
        points: [
            "Actively contributed to the development and maintenance of software applications, enhancing technical expertise.",
            "Collaborated with diverse teams to ensure seamless integration of software solutions.",
            "Engaged in the full software development lifecycle, from design to deployment."
        ]
    },
    {
        role: "Data Analytics (Tableau)",
        company: "SmartInternz",
        duration: "May 2024 - Jul 2024",
        location: "Hyderabad, Telangana, India",
        points: [
            "Gained valuable experience in data analytics and visualization while working with Tableau.",
            "Created engaging and interactive dashboards that facilitated data interpretation.",
            "Conducted thorough analyses of real-world datasets to uncover actionable insights."
        ]
    },
    {
        role: "Python Developer",
        company: "Tanishk software solutions",
        duration: "May 2023 - Jun 2023",
        location: "Hyderabad, Telangana, India",
        points: [
            "Built and deployed full-stack projects, enhancing technical skills in both backend and frontend development.",
            "Worked on database integration and user authentication to ensure seamless user experiences.",
            "Contributed to a startup environment, collaborating with a dedicated team to drive innovation."
        ]
    }
];

export const EDUCATION: Education = {
    institution: "Kakinada Institute of Technology and Science, Divili",
    degree: "Bachelor of Technology - BTech, Artificial Intelligence and Data Science",
    duration: "Sep 2021 - May 2025"
};

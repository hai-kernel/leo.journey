import { ResumeData } from './types';
import langmasterImg from './img/project-1/langmaster-cover.svg';
import infinityImg from './img/project-2/infertility-cover.svg';
import nabBazaarImg from './img/project-3/nabbazaar-cover.svg';
import personalImg1 from './img/personal/z7748881404441_471757216daf1147f636a165f0d2f3ea.jpg';
import personalImg2 from './img/personal/nab-starcamp-graduation.webp';
import personalImg3 from './img/personal/nab-starcamp-team.webp';
import nabLogo from './img/companies/nab.svg';
import fptLogo from './img/companies/fpt-software.svg';
import cvPdf from './cv/Dao_Hong_Hai_CV.pdf';

export const RESUME_DATA: ResumeData = {
  name: "LEO",
  realName: "Dao Hong Hai",
  title: "Backend Developer",
  // The "Download CV" button serves this PDF. Leave it empty ("") to fall back to printing the page.
  cvUrl: cvPdf,

  contact: {
    phone: "+84 366 250 704",
    email: "honghaiit257@gmail.com",
    github: "github.com/hai-kernel",
    linkedin: "www.linkedin.com/in/hai-hong-dao/",
    location: "Ho Chi Minh City, Viet Nam"
  },
  objective: "Final-year Software Engineering student with backend experience at NAB Vietnam and FPT Software, mainly with Java Spring Boot. In the short term, I hope to keep improving my technical skills and learn from experienced engineers while contributing reliable work to my team and projects. In the long term, I want to take on more responsibility, grow into a solid engineer and add real value to the company.",
  skills: [
    { category: "Languages", items: ["Java", "JavaScript", "C"] },
    { category: "Frameworks", items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Spring Cloud Gateway", "Eureka", "Keycloak"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MS SQL Server", "MongoDB", "Redis"] },
    { category: "Messaging", items: ["Apache Kafka"] },
    { category: "Cloud Services", items: ["AWS S3", "AWS EC2", "AWS Transcribe", "AWS Translate", "Azure AI Speech"] },
    { category: "Tools", items: ["Git", "Docker", "Snyk"] }
  ],
  education: [
    {
      institution: "FPT University",
      degree: "Bachelor of Software Engineering",
      duration: "Dec 2022 - Dec 2026 (Expected)",
      details: [
        "GPA: 8.25/10.0"
      ]
    }
  ],
  experience: [
    {
      company: "National Australia Bank (NAB) Vietnam",
      role: "Software Engineer",
      duration: "July 2026 - Oct 2026",
      location: "HCMC",
      logoUrl: nabLogo,
      technologies: ["Java Spring Boot", "Spring Scheduler", "PostgreSQL", "Snyk CLI", "Spring Mail", "Agile Scrum", "Rally"],
      keyContributions: [
        "Built a Spring Boot platform tracking vulnerabilities across all services.",
        "Automated SCA, SAST and container scans at the production tag with Spring Scheduler.",
        "Designed the job pipeline for ~400 services: bounded thread pool, PostgreSQL queue.",
        "Implemented a Snyk CLI runner with timeouts, exit-code handling and stuck-job recovery.",
        "Delivered per-service email reports to squads via Spring Mail, reporting each issue once.",
        "Worked in Agile Scrum with Australia, India and Vietnam teams, tracking tasks in Rally."
      ]
    },
    {
      company: "FPT Software",
      role: "On Job Training - Backend Engineer",
      duration: "Sept 2025 - Jan 2026",
      location: "HCMC",
      logoUrl: fptLogo,
      technologies: ["Java Spring Boot", "Apache Kafka", "AWS S3", "PostgreSQL", "MongoDB", "Agile Scrum"],
      keyContributions: [
        "Built 30+ Spring Boot APIs for sample collection, test orders, results and inventory.",
        "Processed instrument results via Kafka, completing samples, orders and medical records.",
        "Backed up raw HL7 results and PDF reports in AWS S3, served via presigned URLs.",
        "Designed PostgreSQL schemas for orders and inventory, MongoDB for patient records.",
        "Delivered features over 10 sprints in an Agile Scrum team."
      ]
    }
  ],
  projects: [
    {
      company: "NabBazaar - NAB Training Project",
      role: "Backend Developer",
      duration: "July 2026 - Oct 2026",
      technologies: ["Java Spring Boot", "Spring Cloud Gateway", "Keycloak", "Eureka", "Apache Kafka", "Redis", "MySQL"],
      description: "An e-commerce system built with microservices during the NAB training program, covering users, products, orders, inventory and notifications.",
      imageUrl: nabBazaarImg,
      keyContributions: [
        "Handled 5 microservices (user, order, product, notification, inventory).",
        "Secured all APIs at the API Gateway by using Keycloak.",
        "Cached product data in Redis and used a Redis lock to keep stock updates consistent.",
        "Registered services in Eureka, so they find each other by name instead of fixed URLs.",
        "Handled order placement, stock updates and notifications through Kafka events."
      ]
    },
    {
      company: "Langmaster - AI English Learning Application",
      role: "Backend Developer",
      duration: "Jan 2026 - April 2026",
      technologies: ["Java Spring Boot", "AWS", "Azure AI Speech", "OpenAI", "ReactJS", "WebSocket", "Redis", "PostgreSQL"],
      description: "An AI-powered English learning platform designed to enhance speaking skills through interactive and personalized experiences.",
      link: "#",
      github: "https://github.com/Ducpham04/English-LearningAppDesign",
      imageUrl: langmasterImg,
      keyContributions: [
        "Built a real-time English learning backend with Java Spring Boot.",
        "Built low-latency AI speaking practice with WebSocket and OpenAI.",
        "Added live transcription and subtitle translation via AWS Transcribe/Translate.",
        "Implemented pronunciation scoring and feedback with Azure AI Speech.",
        "Stored transcripts and learning data in AWS S3."
      ]
    },
    {
      company: "Infertility Treatment Management and Monitoring System",
      role: "Backend Developer",
      duration: "May 2025 - July 2025",
      technologies: ["Java Spring Boot", "JWT", "WebSocket", "MS SQL Server", "Cloudinary", "VNPAY", "ReactJS"],
      description: "A healthcare system for monitoring infertility treatment progress over time, supporting patient management, appointment scheduling, and structured treatment workflows.",
      link: "#",
      github: "https://github.com/hai-kernel/Infertility-Treatment-Management-and-Monitoring-System",
      imageUrl: infinityImg,
      keyContributions: [
        "Built secure REST APIs with Spring Security (JWT).",
        "Implemented sign-up, password reset and email verification with Spring Mail.",
        "Built appointment scheduling with time-slot validation and conflict handling.",
        "Designed the MS SQL Server schema for patients, doctors, staff and treatments.",
        "Integrated VNPAY payments and Cloudinary file storage."
      ]
    }
  ],
  certifications: [
    { name: "Amazon Junior Software Developer" },
    { name: "Project Management Principles and Practices" },
    { name: "Software Development Lifecycle" },
    { name: "Web Design for Everybody: Basics of Web Development & Coding" },
    { name: "Advanced Writing" }
  ],
  awards: [
    {
      name: "Honorable Student of Trimester - Semester Summer 2026",
      date: "Summer 2026"
    },
    {
      name: "Honorable Student of Trimester - Semester Spring 2025",
      date: "Spring 2025"
    },
    {
      name: "Excellent Student of Trimester - Semester Fall 2024",
      date: "Fall 2024"
    },
    {
      name: "Honorable Student of Trimester - Semester Spring 2024",
      date: "Spring 2024"
    },
    {
      name: "Consolation Prize – Provincial Excellent Student Competition in Mathematics (Grade 12)",
      date: "2021"
    },
    {
      name: "Consolation Prize – Provincial Excellent Student Competition in Mathematics (Advanced Level, Grade 11)",
      date: "2020"
    }
  ],
  awardPhotos: [
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=600&q=80"
  ],
  personalPhotos: [
    personalImg1,
    personalImg2,
    personalImg3
  ]
};

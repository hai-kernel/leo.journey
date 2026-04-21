import { ResumeData } from './types';
import langmasterImg from './img/project-1/z7748961283356_bceba2b31ec370f964764ef1f2bc5d83.jpg';
import infinityImg from './img/project-2/Gemini_Generated_Image_f5zcyrf5zcyrf5zc.png';
import personalImg1 from './img/personal/z7748881404441_471757216daf1147f636a165f0d2f3ea.jpg';
import personalImg2 from './img/personal/z7748881817292_96591714bfdb135c4730ddeb137ee193.jpg';
import personalImg3 from './img/personal/z7748884727806_4ac82a9ef5b19ecfc6444d2080619851.jpg';
import cvPdf from './cv/CV_anduin.pdf';

export const RESUME_DATA: ResumeData = {
  name: "LEO",
  realName: "Dao Hong Hai",
  title: "Backend Developer",
  // HƯỚNG DẪN DOWNLOAD CV:
  // 1. Nếu bạn có file PDF sẵn (vd: royce-cv.pdf), hãy đặt nó vào thư mục 'public'.
  // 2. Điền tên file vào dòng dưới đây: cvUrl: "/royce-cv.pdf"
  // 3. Nếu để trống (""), nút Download sẽ dùng tính năng in trang web (Print to PDF).
  cvUrl: cvPdf, 
  
  contact: {
    phone: "+84 366 250 704",
    email: "honghaiit257@gmail.com",
    github: "github.com/hai-kernel",
    linkedin: "www.linkedin.com/in/hai-hong-dao/",
    location: "Ho Chi Minh City, Viet Nam"
  },
  objective: "Final-year Software Engineering student with hands-on experience in building backend systems using Java Spring Boot and microservices architecture. Familiar with technologies like Kafka, Redis, and AWS in developing scalable and responsive applications with real-time data processing. Passionate about system design, developing low-latency, high-performance applications, and solving complex real-world problems.",
  education: [
    {
      institution: "FPT University",
      degree: "Bachelor Degree of Software Engineering",
      duration: "2022 - 2026 (Expected)",
      details: [
        "GPA: 8.3/10.0"
      ]
    }
  ],
  experience: [
    {
      company: "FPT Software",
      role: "Backend Developer Intern",
      duration: "Sept 2025 - Jan 2026",
      location: "HCMC",
      technologies: ["Java Spring Boot", "Microservices", "Redis", "Apache Kafka", "Netty Socket", "AWS OpenSearch", "AWS S3", "PostgreSQL", "MongoDB"],
      keyContributions: [
        "Designed and developed scalable backend services using Java Spring Boot (Microservices architecture) to manage patient information and blood test workflows.",
        "Improved system performance and response time by implementing Redis caching and asynchronous communication using Apache Kafka.",
        "Built real-time notifications and session control using Netty Socket to prevent one account from being used on multiple devices.",
        "Integrated AWS OpenSearch for fast search of patient and medication data; used AWS S3 for file storage.",
        "Designed and managed data using PostgreSQL and MongoDB.",
        "Collaborated in an Agile Scrum team, participating in sprint planning and daily stand-ups, and contributing to retrospectives."
      ]
    }
  ],
  projects: [
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
        "Designed and developed a real-time English learning application using Java Spring Boot with a microservices-based architecture.",
        "Built a low-latency speaking practice feature using WebSocket and OpenAI to enable real-time AI-driven conversations.",
        "Integrated AWS Transcribe and AWS Translate to support real-time speech-to-text and automatic subtitle translation.",
        "Implemented pronunciation scoring and feedback using Azure AI Speech, and generated IPA phonetic transcription using eSpeak NG.",
        "Utilized AWS S3 for scalable storage of transcripts and user learning data."
      ]
    },
    {
      company: "Infertility Treatment Management System",
      role: "Backend Developer",
      duration: "May 2025 - July 2025",
      technologies: ["Java Spring Boot", "Spring Security", "Spring Data JPA", "RESTful API", "JWT", "WebSocket", "MS SQL Server", "Cloudinary", "VNPAY", "ReactJS"],
      description: "A healthcare system for monitoring infertility treatment progress over time, supporting patient management, appointment scheduling, and structured treatment workflows.",
      link: "#",
      github: "https://github.com/hai-kernel/Infertility-Treatment-Management-and-Monitoring-System",
      imageUrl: infinityImg,
      keyContributions: [
        "Developed secure RESTful APIs using Spring Security (JWT) with authentication flows including registration, password reset, and email verification using Spring Mail.",
        "Built an appointment scheduling system with time-slot validation and conflict handling.",
        "Implemented real-time notifications using WebSocket and email services.",
        "Designed and managed data using MS SQL Server.",
        "Integrated Cloudinary for file storage and VNPAY for online payments.",
        "Developed modules for managing patients, doctors, staff, and treatment workflows."
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
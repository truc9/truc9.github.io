import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Truc Nguyen",
  initials: "TN",
  url: "https://github.com/truc9",
  location: "Birmingham, UK",
  locationLink: "https://www.google.com/maps/place/birmingham",
  description:
    ".NET Software Engineer, amature badminton player, I love technologies, cooking and photography.",
  summary:
    "At the end of 2019, I moved to the UK for a whole new exciting journey. In the past, [I pursued a bachelor degree in computer science](/#education)",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Angular",
    "Typescript",
    "Nodejs",
    "C#",
    ".NET",
    "ASP.NET Core",
    "Go",
    "Postgres",
    "SQL Server",
    "Apache Kafka",
    "Dart",
    "Flutter",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "truchjkl@gmail.com",
    tel: "(+44)07514897979",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/truc9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nttruc",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/trucnt0",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#truchjkl@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Depotnet",
      href: "https://www.depotnet.co.uk",
      badges: [],
      location: "Henley-in-Arden, UK",
      title: "Software Engineer",
      logoUrl: "/depotnet.png",
      start: "Oct 2021",
      end: "Now",
      description:
        "Develop a web app and cross-platform mobile app for civil engineer job / roadworks management using C#, .NET Core, REST API, Angular, AWS Lambda Function and Kafka. Mobile app using Flutter, Dart.",
    },
    {
      company: "Pinewood",
      badges: [],
      href: "https://pinewood.ai",
      location: "Birmingham Business Park, UK",
      title: "Software Engineer",
      logoUrl: "/pinewood.jpg",
      start: "Oct 2019",
      end: "Oct 2021",
      description:
        "Develop and maintain a dealer management system (DMS) using Razor pages, ASP.NET Web Form, jQuery, HTML/CSS/JS",
    },
    {
      company: "BOSCH",
      href: "https://www.bosch.com.vn",
      badges: [],
      location: "Ho Chi Minh City, Vietnam",
      title: "Senior Software Engineer",
      logoUrl: "/bosch.webp",
      start: "May 2015",
      end: "Oct 2019",
      description:
        "Develop a web-based application for analyzing financial reports and supporting finance analysts to predict spending cost in future and review the spending amount in past months usin C#, ASP.NET MVC 5, Entity Framework, Bootstrap 3, RDLC reporting, KnockoutJS.",
    },
    {
      company: "Orient Software",
      href: "https://www.orientsoftware.com",
      badges: [],
      location: "Ho Chi Minh City, Vietnam",
      title: "Junior Software Engineer",
      logoUrl: "/osd.png",
      start: "Feb 2014",
      end: "May 2015",
      description:
        "Migrate a legacy windows-form app to a single page app for an asset management tool for managing assets (truck, plane), budgeting report, and forecasting the repair cost in future using ASP.NET Web API 2, Durandaljs, Knockoutjs, Requirejs, Angularjs and Kendo UI.",
    },
  ],
  education: [
    {
      school: "Open University Ho Chi Minh City",
      href: "http://en.ou.edu.vn",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/OU.webp",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Racket",
      href: "https://github.com/truc9/racket",
      dates: "2024",
      active: true,
      description:
        "Develop a web app for amature badminton player self-organized group, manage players, courts, costs using Go, React, Postgres",
      technologies: [
        "Go",
        "Typescript",
        "React.js",
        "PostgreSQL",
        "TailwindCSS",
        "Mantine UI",
        "Vercel",
        "Koyeb",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/truc9/racket",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/racket.png",
      video: "",
    },
    {
      title: "PDF Insight",
      href: "https://github.com/truc9/pdf-insight",
      dates: "2024",
      active: true,
      description:
        "LLM experiment project with RAG using python, ollama, llama3 and langchain",
      technologies: [
        "Python",
        "Typescript",
        "Ollama",
        "Langchain",
        "llama3",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/truc9/pdf-insight",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pdfinsight.png",
      video: "",
    },
  ],
} as const;

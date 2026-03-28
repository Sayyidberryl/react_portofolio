export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  github: string;
  demo: string;
  features: string[];
  challenges: string[];
  role: string;
  year: string;
}

import project1 from "../assets/project/apotek.png";
import project2 from "../assets/project/hadirin.png";
import project3 from "../assets/project/sodik.png";
import project4 from "../assets/project/img5.png";
import project5 from "../assets/project/loder.png";
import project6 from "../assets/project/court.png";

export const projects: Project[] = [
  {
    id: "sodik",
    title: "Sodik - Hajj & Umrah Backend",
    shortDescription: "Backend system for Hajj & Umrah management from scratch using Laravel Sanctum.",
    description: "Built the comprehensive backend system from scratch using Laravel Sanctum. Developed 40+ endpoints for user authentication, Role-Based Access Control (RBAC), and content management to serve thousands of concurrent queries with high reliability and secure transactions.",
    tags: ["Laravel", "PostgreSQL", "Sanctum", "RBAC", "REST API"],
    gradient: "from-white/20 to-white/5",
    image: project3,
    github: "#",
    demo: "#",
    features: [
      "Secure JWT-based Authentication via Laravel Sanctum",
      "Dynamic Role-Based Access Control handling varied permissions",
      "Robust transaction processing for pilgrims scheduling",
      "Scalable infrastructure designed for peak concurrent traffic"
    ],
    challenges: [
      "Designing an extremely granular permission system without degrading query performance.",
      "Handling race conditions during high-volume booking periods."
    ],
    role: "Backend Developer",
    year: "2023"
  },
  {
    id: "hadir-in",
    title: "Hadir.IN - Attendance System",
    shortDescription: "Backend system for teacher and employee attendance tracking.",
    description: "Developed the core backend system for an attendance application serving web & mobile platforms. Focused on implementing secure user authentication, intricate role management hierarchies, and processing large streams of attendance data accurately.",
    tags: ["PHP", "Laravel", "PostgreSQL", "REST API", "Database Design"],
    gradient: "from-white/20 to-white/5",
    image: project2,
    github: "#",
    demo: "#",
    features: [
      "Geolocation-verified attendance logging",
      "Real-time absenteeism reporting and analytics",
      "Hierarchical approval workflows for leave requests",
      "Seamless integration with cross-platform mobile apps"
    ],
    challenges: [
      "Optimizing spatial queries to verify user locations instantly.",
      "Dealing with offline-sync scenarios from mobile clients."
    ],
    role: "Fullstack Developer",
    year: "2022"
  },
  {
    id: "pharmacy",
    title: "Pharmacy Management",
    shortDescription: "Comprehensive dashboard for managing pharmacy inventory and sales.",
    description: "A full-scale pharmacy management dashboard featuring real-time data tracking, automated stock alerts, and complex sales reporting. Built to handle massive inventories with low latency.",
    tags: ["Laravel", "PostgreSQL", "Bootstrap", "Javascript", "jQuery"],
    gradient: "from-white/20 to-white/5",
    image: project1,
    github: "#",
    demo: "#",
    features: [
      "Real-time inventory decrementing and monitoring",
      "Automated low-stock threshold alerts",
      "Integration with Point-of-Sale hardware",
      "Detailed financial reporting and analytics"
    ],
    challenges: [
      "Creating highly interactive dynamic tables with complex filtering.",
      "Ensuring ACID compliance during simultaneous sales transactions."
    ],
    role: "Fullstack Developer",
    year: "2021"
  },
  {
    id: "pengaduan",
    title: "Pengaduan Masyarakat",
    shortDescription: "Aplikasi pengaduan masyarakat berbasis web dan mobile.",
    description: "An intuitive public complaint platform facilitating seamless communication between citizens and government officials. Designed with a mobile-first approach to ensure accessibility for all demographics.",
    tags: ["PHP", "Laravel", "PostgreSQL", "Database Design", "Mobile-First"],
    gradient: "from-white/20 to-white/5",
    image: project4,
    github: "#",
    demo: "#",
    features: [
      "Ticket-based complaint tracking system",
      "Multi-tier escalation routing based on category",
      "Citizen dashboard with live status updates",
      "Performance metrics for government response times"
    ],
    challenges: [
      "Designing a workflow that automatically routes tickets without human intervention.",
      "Building a UI that is highly accessible and requires zero training to use."
    ],
    role: "Fullstack Developer",
    year: "2021"
  },
  {
    id: "valex",
    title: "Valex Logistics",
    shortDescription: "Aplikasi management pengantaran dan expedisi logistik.",
    description: "A robust logistics and expedition management system. Facilitates the tracking of shipments, fleet management, and dynamic route optimization for delivery drivers.",
    tags: ["PHP", "Laravel", "Bootstrap", "Javascript", "Maps API"],
    gradient: "from-white/20 to-white/5",
    image: project5,
    github: "#",
    demo: "#",
    features: [
      "Live tracking of fleet and individual packages",
      "Dynamic cost calculation based on distance and volumetric weight",
      "Driver allocation and manifest generation",
      "Client portal for bulk shipment management"
    ],
    challenges: [
      "Integrating third-party map APIs while maintaining fast load times.",
      "Handling complex tiered pricing structures for varied B2B clients."
    ],
    role: "Backend & Web Developer",
    year: "2022"
  },
  {
    id: "court-booking",
    title: "Sport Court Booking",
    shortDescription: "Aplikasi booking lapangan olahraga berbasis mobile.",
    description: "A cross-platform mobile application utilizing Flutter that simplifies the process of reserving sports facilities. It features a rich UI, real-time availability checks, and integrated payment gateways.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile App UI"],
    gradient: "from-white/20 to-white/5",
    image: project6,
    github: "#",
    demo: "#",
    features: [
      "Interactive calendar for schedule blocking",
      "Real-time slot availability updates without refreshing",
      "Automated reminder notifications via push",
      "In-app secure payment processing integration"
    ],
    challenges: [
      "Implementing deep linking for seamless sharing of court links.",
      "Managing complex state across multiple booking steps using BLoC."
    ],
    role: "Mobile Application Developer",
    year: "2023"
  }
];

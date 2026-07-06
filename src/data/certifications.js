import mcp from "../assets/certificates/MCP.jpg";
import aws from "../assets/certificates/aws.png";
import os from "../assets/certificates/OS.jpg";
import ibm from "../assets/certificates/Data Science - IBM.jpg";
import dbms from "../assets/certificates/DBMS_NPTEL.jpg";
import dsa from "../assets/certificates/DSA_NPTEL.jpg";

export const certifications = [
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Apr 2026",
    credentialLink: "https://www.linkedin.com/in/harshil-kothiya/details/certifications/",
    image: mcp,
    description: "Demonstrates proficiency in utilizing the Model Context Protocol to enhance AI reasoning, tools, and context integration.",
    tags: ["Model Context Protocol (MCP)", "AI Agents", "LLMs"]
  },
  {
    name: "AWS Academy Cloud Developing",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2025",
    credentialLink: "https://www.linkedin.com/in/harshil-kothiya/details/certifications/",
    image: aws,
    description: "Validates technical expertise in developing, deploying, and debugging cloud-based applications using AWS services.",
    tags: ["AWS", "Cloud Computing", "Serverless", "DynamoDB"]
  },
  {
    name: "Operating System Fundamentals",
    issuer: "NPTEL",
    date: "Aug 2024",
    credentialLink: "https://www.linkedin.com/in/harshil-kothiya/details/certifications/",
    image: os,
    description: "Covers foundational concepts of modern operating systems including process management, memory allocation, and concurrency.",
    tags: ["Operating Systems", "Concurrency", "Memory Management"]
  },
  {
    name: "Data Science Specialization",
    issuer: "IBM",
    date: "Aug 2023",
    credentialLink: "#",
    image: ibm,
    description: "Comprehensive specialization covering data analysis, machine learning, and statistical foundations using Python.",
    tags: ["Data Science", "Python", "Machine Learning", "Pandas"]
  },
  {
    name: "Data Base Management System",
    issuer: "NPTEL",
    date: "Jul 2023",
    credentialLink: "https://www.linkedin.com/in/harshil-kothiya/details/certifications/",
    image: dbms,
    description: "In-depth understanding of database architectures, relational models, SQL, and normalization techniques.",
    tags: ["DBMS", "SQL", "Relational Databases", "Normalization"]
  },
  {
    name: "Data Structure and Algorithms Using Java",
    issuer: "NPTEL",
    date: "Jul 2023",
    credentialLink: "https://www.linkedin.com/in/harshil-kothiya/details/certifications/",
    image: dsa,
    description: "Proficiency in core data structures and algorithmic problem-solving techniques implemented in Java.",
    tags: ["Data Structures", "Algorithms", "Java", "Problem Solving"]
  }
];

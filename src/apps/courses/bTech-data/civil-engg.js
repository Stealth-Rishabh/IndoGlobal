import {
    Star,
    Clock,
    GraduationCap,
    BookOpen,
    MapPin,
    List,
    HelpCircle,
  } from "lucide-react";
  import React from "react";
  import img from "../../../assets/courses/btech-civil.webp";
  export const BTECH_IN_CIVIL_ENGG = {
    path: "btech-civil-engineering",
    title: "B.Tech Civil Engineering",
    category: "B.Tech / B.tech Lateral Entry",
    image: img,
    badges: [
      { icon: Clock, text: "4 Years" },
      { icon: GraduationCap, text: "Bachelor's Degree" },
      { icon: BookOpen, text: "Full-time" },
      { icon: MapPin, text: "On-campus" },
    ],
  
    tabs: [
      {
        label: "overview",
        icon: React.createElement(BookOpen, { className: "w-4 h-4" }),
        content: [
          {
            type: "paragraph",
            data: "B.Tech Civil Engineering is the most versatile engineering discipline, designed to develop creative and knowledgeable engineers with strong capabilities in innovation and management. The program focuses on the construction, designing, and maintenance of physical and naturally built environments, including roads, bridges, dams, canals, and buildings.",
          },
          {
            type: "heading",
            data: "Key Highlights",
          },
          {
            type: "list",
            data: [
              "Comprehensive curriculum covering all major sub-disciplines of Civil Engineering",
              "State-of-the-art laboratories with advanced testing equipment",
              "Industry-oriented training and internship programs",
              "Focus on both theoretical knowledge and practical skills",
              "Exposure to modern design and analysis software",
              "Opportunities for cross-disciplinary research",
              "Strong industry connections and placement support",
            ],
          },
          {
            type: "heading",
            data: "Learning Outcomes",
          },
          {
            type: "list",
            data: [
              "Design and analyze structural systems",
              "Apply advanced technologies in civil engineering projects",
              "Understand environmental and sustainable engineering principles",
              "Develop problem-solving skills for complex engineering challenges",
              "Prepare technical reports and project documentation",
            ],
          },
          {
            type: "heading",
            data: "Career Opportunities",
          },
          {
            type: "list",
            data: [
              "Structural Engineering",
              "Construction Management",
              "Transportation Engineering",
              "Environmental Engineering",
              "Urban Planning",
              "Infrastructure Development",
              "Geotechnical Engineering",
              "Water Resources Management",
              "Research and Development",
            ],
          },
          {
            type: "heading",
            data: "Admission Process",
          },
          {
            type: "paragraph",
            data: "Candidates must have completed 10+2 with Physics and Mathematics as core subjects, with a minimum aggregate of 60%.",
          },
          {
            type: "paragraph",
            data: "Indo Global College is affiliated with Punjab Technical University, and all B.Tech programs are approved by the All India Council for Technical Education (AICTE).",
          },
        ],
      },
      {
        label: "eligibility",
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }),
        content: [
          {
            type: "heading",
            data: "First Year",
          },
          {
            type: "paragraph",
            data: "Candidates who have passed the 10+2 examination from a board recognized or established by Central/State Government with Physics & Mathematics as compulsory subjects, along with one of the following subjects: Chemistry/Biology/Computer Science & Biotechnology.",
          },
          {
            type: "heading",
            data: "Lateral Entry",
          },
          {
            type: "paragraph",
            data: "Candidates who have passed Minimum THREE years / TWO years (Lateral Entry) Diploma examination from an AICTE approved Institution / Recognized University with at least 45% marks (40% marks for reserved category) in ANY branch of Engineering and Technology.",
          },
          {
            type: "paragraph",
            data: "Indo Global College is affiliated to Punjab Technical University and all B.Tech programs are approved by All India Council for Technical Education (AICTE).",
          },
        ],
      },
      {
        label: "curriculum",
        icon: React.createElement(List, { className: "w-4 h-4" }),
        content: [
          {
            label: "Subjects",
            type: "list",
            data: [
              {
                year: "First Year",
                data: [
                  "Engineering Mathematics",
                  "Physics",
                  "Chemistry",
                  "Engineering Drawing",
                  "Introduction to Civil Engineering",
                  "Computer-Aided Design (CAD)",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Strength of Materials",
                  "Fluid Mechanics",
                  "Surveying",
                  "Geotechnical Engineering",
                  "Structural Analysis",
                ],
              },
              {
                year: "Third Year",
                data: [
                  "Transportation Engineering",
                  "Environmental Engineering",
                  "Concrete Technology",
                  "Steel Design",
                  "Water Resources Engineering",
                ],
              },
              {
                year: "Fourth Year",
                data: [
                  "Advanced Structural Design",
                  "Construction Management",
                  "Earthquake Engineering",
                  "Urban Planning",
                  "Project Management",
                  "Capstone Project",
                ],
              },
            ],
          },
          {
            label: "Special Features",
            type: "list",
            data: [
              "Comprehensive lab work in all major civil engineering domains",
              "Industry internship programs (4 weeks and 6 months)",
              "Exposure to advanced software like STAAD, AutoCAD, and Pro",
              "Emphasis on sustainable and green engineering practices",
              "Research opportunities in cutting-edge engineering technologies",
              "Interactive workshops and guest lectures from industry experts",
            ],
          },
        ],
      },
      {
        label: "faqs",
        icon: React.createElement(HelpCircle, { className: "w-4 h-4" }),
        content: [
          {
            label: "FAQ 1",
            data: {
              question: "What are the key laboratories in the Civil Engineering department?",
              answer: "We have state-of-the-art labs including Concrete Lab, Structural Analysis Lab, Environmental Engineering Lab, Transportation Engineering Lab, CAD Lab, Geotechnical Lab, Survey Lab, and Fluid Mechanics Lab.",
            },
          },
          {
            label: "FAQ 2",
            data: {
              question: "Are there internship opportunities?",
              answer: "Yes, students undergo 4 weeks and 6 months of industrial training/internship after 2nd and 6th semesters with organizations like Public Works Departments, NHPC Ltd., NTPC Ltd., and other prestigious companies.",
            },
          },
          {
            label: "FAQ 3",
            data: {
              question: "What makes this Civil Engineering program unique?",
              answer: "Our program focuses on building strong foundations, promoting independent thinking, nurturing global competency, and providing a comprehensive curriculum that balances theoretical knowledge with practical skills.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "What career paths can I pursue after this program?",
              answer: "Graduates can pursue careers in structural engineering, construction management, urban planning, infrastructure development, environmental engineering, research, and many other specialized fields.",
            },
          },
        ],
      },
      {
        label: "reviews",
        icon: React.createElement(Star, { className: "w-4 h-4" }),
        content: [
          {
            label: "Review 1",
            data: {
              name: "Emily Chen",
              rating: 5,
              comment: "Exceptional program with incredible hands-on learning. The lab facilities are top-notch and the faculty is extremely knowledgeable.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Michael Rodriguez",
              rating: 4,
              comment: "Great exposure to multiple aspects of civil engineering. The internship program really helped me understand real-world applications.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Sarah Kumar",
              rating: 5,
              comment: "The comprehensive curriculum and industry connections made my journey in civil engineering truly remarkable. Highly recommended!",
            },
          },
        ],
      },
    ],
  };
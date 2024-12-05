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
  import img from "../../../assets/courses/btech-mech.webp";

  export const BTECH_IN_MECH_ENGG = {
    
    title: "B.Tech Mechanical Engineering",
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
            data: "B.Tech Mechanical Engineering is a comprehensive 4-year undergraduate program that prepares students for a broad range of careers involving the design, development, and implementation of mechanical devices and energy conversion systems.",
          },
          {
            type: "heading",
            data: "Key Highlights",
          },
          {
            type: "list",
            data: [
              "Comprehensive curriculum covering mechanics, thermodynamics, and energy systems",
              "Extensive laboratory and workshop exposure",
              "Design and fabrication projects",
              "Experienced faculty from prestigious engineering societies",
              "Strong industry connections and placement support",
              "Specialization areas include applied mechanics, energy engineering, automobile engineering, and robotics",
              "Emphasis on problem-solving and innovative thinking",
            ],
          },
          {
            type: "heading",
            data: "Learning Outcomes",
          },
          {
            type: "list",
            data: [
              "Develop in-depth knowledge of mechanical engineering specializations",
              "Design and create innovative mechanical devices",
              "Apply scientific and technical skills to solve complex engineering challenges",
              "Understand energy conversion and mechanical systems",
              "Develop leadership and communication skills",
            ],
          },
          {
            type: "heading",
            data: "Career Opportunities",
          },
          {
            type: "list",
            data: [
              "Automotive Engineering",
              "Manufacturing Engineering",
              "Design Engineering",
              "Robotics and Automation",
              "Energy Systems",
              "Research and Development",
              "Consulting",
              "Product Development",
              "Quality Control",
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
                  "Engineering Graphics",
                  "Computer Programming",
                  "Mechanical Engineering Drawing",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Fluid Mechanics",
                  "Thermodynamics",
                  "Strength of Materials",
                  "Machine Design",
                  "Manufacturing Processes",
                ],
              },
              {
                year: "Third Year",
                data: [
                  "Heat Transfer",
                  "Machine Dynamics",
                  "Automotive Engineering",
                  "Industrial Engineering",
                  "Computer-Aided Design",
                ],
              },
              {
                year: "Fourth Year",
                data: [
                  "Robotics and Automation",
                  "Energy Systems",
                  "Advanced Manufacturing",
                  "Project Management",
                  "Capstone Project",
                  "Electives in Specialization Areas",
                ],
              },
            ],
          },
          {
            label: "Special Features",
            type: "list",
            data: [
              "Extensive laboratory and workshop training",
              "4-week and 6-month industrial training programs",
              "Exposure to advanced design and manufacturing technologies",
              "Opportunities for research and innovation",
              "Industry collaboration and guest lectures",
              "Emphasis on practical skills and theoretical knowledge",
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
              question: "What are the key laboratories in the Mechanical Engineering department?",
              answer: "We have comprehensive labs including Fluid Mechanics, Thermodynamics, Heat Transfer, Computer-Aided Design, Strength of Materials, Theory of Machines, Materials and Metallurgy, and Automobile Labs.",
            },
          },
          {
            label: "FAQ 2",
            data: {
              question: "What kind of industrial training is provided?",
              answer: "Students undergo 4 weeks and 6 months of industrial training in semesters, with opportunities in workshops like Sheet Metal, Electroplating, Carpentry, and Automobile. Many students have trained with companies like TATA MOTORS, L&T, and MARUTI UDYOG LTD.",
            },
          },
          {
            label: "FAQ 3",
            data: {
              question: "What makes this Mechanical Engineering program unique?",
              answer: "Our program offers a perfect blend of theoretical knowledge and practical skills, with extensive laboratory exposure, industry connections, and opportunities for specialization in areas like robotics, automotive engineering, and energy systems.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "What career paths can I pursue?",
              answer: "Graduates can pursue careers in automotive engineering, manufacturing, design, robotics, energy systems, research and development, consulting, and product development across various industries.",
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
              name: "Rajesh Sharma",
              rating: 5,
              comment: "Incredible program with state-of-the-art laboratories and workshops. The hands-on training really prepared me for my career.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Priya Patel",
              rating: 4,
              comment: "Excellent curriculum that covers both theoretical concepts and practical applications. The industrial training was a game-changer for my professional growth.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Amit Gupta",
              rating: 5,
              comment: "The depth of knowledge and exposure to various engineering disciplines in this program is outstanding. Highly recommended for aspiring mechanical engineers!",
            },
          },
        ],
      },
    ],
  };
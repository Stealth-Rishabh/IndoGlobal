import {
    Star,
    Clock,
    GraduationCap,
    BookOpen,
    MapPin,
    List,
    HelpCircle,
    User,
  } from "lucide-react";
  import React from "react";
  
  export const BBA = {
    
    title: "Bachelor of Business Administration (BBA)",
    category: "Management and Technology",
    image:
      "https://example.com/path/to/image.jpg", // Replace with actual image URL
    badges: [
      { icon: Clock, text: "3 Years" },
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
            data:
              "BBA (Bachelor of Business Administration) is a three-year undergraduate program in Business Administration. The course provides a strong foundation in core business disciplines, helping students acquire key competencies in business management at the undergraduate level. The BBA program at Indo Global Colleges focuses on enhancing the ability to communicate, make decisions using qualitative and quantitative factors, analyze situations, and develop a holistic approach to different functional areas in the business environment.",
          },
          {
            type: "paragraph",
            data:
              "The BBA program is designed to gain proficiency in basic management techniques to fulfill positions at operational and functional levels of management. It also empowers students who seek to become future business leaders. The course develops practical, managerial, and communication skills, as well as business decision-making capabilities in students. The program allows students to specialize in specific academic areas and incorporates training and practical experience through case projects, industrial training, internships, presentations, and interactions with industry experts.",
          },
          {
            type: "paragraph",
            data:
              "Indo Global Colleges in Chandigarh is one of the top BBA colleges in Punjab, providing a BBA program to those who wish to carve a niche for themselves in the sphere of management and business. A bachelor’s degree in BBA is a valued professional qualification for students aspiring to leadership positions. The BBA course offers comprehensive education in business and management principles while allowing students to select advanced courses in specialized areas such as international business, finance, real estate, computer information systems, marketing, and accounting. These degree programs are increasingly popular as they enable individuals to pursue higher studies and gain advanced skills.",
          },
          {
            type: "heading",
            data: "Industrial Projects",
          },
          {
            type: "paragraph",
            data:
              "During the 3-year BBA program, students undertake live projects related to HR, finance, laws, marketing, wealth management, decision-making, etc. These case studies help them grasp theoretical concepts of business administration. After 5 semesters, students join an industry setup for their final semester training based on their chosen specializations. This is a compulsory part of the curriculum designed to provide real-world industrial exposure, allowing students to apply theoretical concepts in real-life business situations.",
          },
          {
            type: "heading",
            data: "BBA Program Educational Objective",
          },
          {
            type: "list",
            data: [
              "Develop a student’s intellectual ability, executive personality, and management skills.",
              "Assist students in understanding and developing unique leadership and business qualities required for successfully managing business functions in an organization.",
              "Prepare students for higher education in business.",
            ],
          },
          {
            type: "heading",
            data: "BBA Program Outcome",
          },
          {
            type: "list",
            data: [
              "Gain a thorough understanding of the fundamentals of business management.",
              "Acquire industry-oriented curriculum with various specializations and practical exposure to face challenges in the business world.",
              "Develop a holistic outlook with personality development and value-based courses, ensuring students are groomed with strong leadership skills and social consciousness.",
            ],
          },
          {
            type: "heading",
            data: "Career Prospectus after BBA Degree",
          },
          {
            type: "paragraph",
            data:
              "After completing the BBA program, students can pursue numerous career opportunities in diverse areas such as insurance, financial sectors, marketing, government sectors, etc. It is crucial to earn the degree from a reputed college. The best BBA colleges in Punjab provide quality education that meets international standards. Before choosing a particular BBA college, conduct thorough research regarding the quality of education, teaching staff, infrastructure, and the college environment. Ensure that the college is approved by university norms and that the degree is globally recognized. Graduates with a BBA degree can start their careers as:",
          },
          {
            type: "list",
            data: [
              "Financial Analyst",
              "Marketing Executive",
              "HR Manager",
              "HR Generalist",
              "Business Development Executive",
              "Process Analyst",
            ],
          },
        ],
      },
      {
        label: "eligibility",
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }),
        content: [
          {
            type: "heading",
            data: "Eligibility",
          },
          {
            type: "paragraph",
            data:
              "All candidates must have passed the 10+2 or its equivalent examination in any stream conducted by a recognized Board, University, or Council.",
          },
        ],
      },
      {
        label: "curriculum",
        icon: React.createElement(List, { className: "w-4 h-4" }),
        content: [
          {
            label: "Program Structure",
            type: "list",
            data: [
              {
                year: "First Year",
                data: [
                  "Introduction to Business Administration",
                  "Principles of Management",
                  "Financial Accounting",
                  "Marketing Fundamentals",
                  "Organizational Behavior",
                  "Business Communication",
                  "Quantitative Methods for Management",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Human Resource Management",
                  "Financial Management",
                  "Operations Management",
                  "Business Law",
                  "Information Technology for Managers",
                  "Strategic Management",
                ],
              },
              {
                year: "Third Year",
                data: [
                  "Specialization Courses",
                  "Project Work",
                  "Industrial Training",
                  "Internships",
                  "Elective Courses",
                  "Capstone Project",
                ],
              },
            ],
          },
          {
            label: "Key Features",
            type: "list",
            data: [
              "Wide choice of specializations with the possibility of combining industry-wise and functional specializations.",
              "Primary focus on making students industry-ready.",
              "Acclaimed faculty, including highly trained and experienced leaders from the industry.",
              "Cutting-edge, industry-ready curriculum benchmarked with current industry realities.",
              "Pedagogy to develop a high degree of analytical and conceptual skills through live case studies, seminars, projects, and guest international faculty interactions with practice-based simulations.",
              "Internships and regular industry visits with an emphasis on leadership and management skills.",
              "Soft skill training to develop professional behavior and interpersonal skills.",
              "360-degree career growth roadmap for students.",
              "Integration of academic and experimental learning techniques essential for a career in management.",
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
              question: "What is the duration of the BBA program?",
              answer:
                "The BBA program is a 3-year undergraduate course.",
            },
          },
          {
            label: "FAQ 2",
            data: {
              question: "What are the eligibility criteria for admission?",
              answer:
                "Candidates must have passed the 10+2 or its equivalent examination in any stream conducted by a recognized Board, University, or Council.",
            },
          },
          {
            label: "FAQ 3",
            data: {
              question: "Are there internship opportunities available during the BBA program?",
              answer:
                "Yes, the program includes industrial training and internships to provide real-world business exposure.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "What specializations are available in the BBA program?",
              answer:
                "Specializations include Marketing, Human Resource Management, Finance, IT-Operations, and Advertising.",
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
              name: "Neha Sharma",
              rating: 5,
              comment:
                "The BBA program at Indo Global Colleges is fantastic. The curriculum is comprehensive, and the faculty are extremely supportive and knowledgeable.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Amit Verma",
              rating: 4,
              comment:
                "Great learning environment with excellent infrastructure. The internships provided valuable real-world experience.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Priya Gupta",
              rating: 5,
              comment:
                "I highly recommend this college for BBA. The focus on both theoretical and practical aspects has prepared me well for my career.",
            },
          },
        ],
      },
     
    ],
  };
  
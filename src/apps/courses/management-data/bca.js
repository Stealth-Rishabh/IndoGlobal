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
  import img from "../../../assets/courses/bca.webp";

  export const BCA = {
    path: "bachelor-of-computer-applications",
    title: "Bachelor of Computer Applications (BCA)",
    category: "Management and Technology",
    group: "BCA Course",
    image: img,
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
              "BCA (Bachelor of Computer Applications) is a three-year degree program that provides a strong foundation in computer principles and business practices for effectively managing information systems and enterprise software. This program prepares students with the necessary skills to build a successful career in the information technology sector. The curriculum for the BCA program is designed for the holistic development of students, aiming to nurture them into efficient computer professionals and proficient programmers. Students receive both theoretical and practical understanding of key computer applications, software, and hardware.",
          },
          {
            type: "paragraph",
            data:
              "Through the BCA program at Indo Global Colleges, students gain a solid conceptual grounding in computer usage and its practical business applications. The program focuses on various areas of information technology and software development, allowing students to specialize in legacy application software, mobile applications, and system software. The BCA program emphasizes the design, development, and use of computer applications, incorporating operating systems, utilities, and programming languages. Graduates can prepare projects, presentations, and design websites, and demonstrate skills in running software programs. The program places significant emphasis on hands-on training and the overall development of students' personalities, in addition to theoretical knowledge.",
          },
          {
            type: "heading",
            data: "Program Structure",
          },
          {
            type: "paragraph",
            data:
              "The BCA program is organized into 6 semesters spread over three years. An interesting feature of this program is the continuous internal assessment with quizzes, seminars, presentations, and other innovative methods that help in developing confidence, software development, and communication skills in students. The BCA program provides a sound academic base for an advanced career in computer applications. During the 3rd year, students are exposed to elective courses in their respective fields of specialization, providing an understanding of specialized focus areas. The core modules of this program include Introduction to IT, Programming in C, Database Management, System Analysis and Design, Computer Networking, Visual Programming with VB, Data Structures using C, Software Engineering, Java Programming, and C++.",
          },
          {
            type: "heading",
            data: "Program Highlights",
          },
          {
            type: "list",
            data: [
              "Foundation in computer principles and business practices for effective information system management",
              "Training to analyze and design software projects beneficial for industries",
              "Exposure to the latest software packages to meet industrial requirements",
              "Continuous internal assessments through quizzes, seminars, and presentations",
              "Hands-on training and practical experience through case projects and industrial training",
              "Opportunities to specialize in legacy application software, mobile applications, and system software",
              "Emphasis on developing communication and software development skills",
            ],
          },
          {
            type: "heading",
            data: "Career Opportunities",
          },
          {
            type: "paragraph",
            data:
              "Graduates with a BCA degree have numerous job opportunities in the IT sector and can work as analysts and database administrators. They are in great demand in banking, network administration, insurance, BPOs, and educational institutes. Successful graduates may also work in the fields of software designing and development, system management, web designing, and more. After graduating, students can pursue higher studies like MCA, M.Sc. in Computer Science/IT, or MS in IT.",
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
            label: "Subjects",
            type: "list",
            data: [
              {
                year: "First Year",
                data: [
                  "Introduction to Information Technology",
                  "Programming in C",
                  "Database Management",
                  "System Analysis and Design",
                  "Computer Networking",
                  "Visual Programming with VB",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Data Structures using C",
                  "Software Engineering",
                  "Java Programming",
                  "C++ Programming",
                  "Elective Courses",
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
              "Foundation in computer principles and business practices",
              "Continuous internal assessments through quizzes, seminars, and presentations",
              "Hands-on training with real-world projects and industrial training",
              "Specialization options in legacy application software, mobile applications, and system software",
              "Emphasis on developing practical, managerial, and communication skills",
              "Opportunities for internships and project assignments with industry experts",
              "Holistic development with a focus on personality and leadership skills",
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
              question: "What is the duration of the BCA program?",
              answer:
                "The BCA program is a 3-year undergraduate degree course.",
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
              question: "Are there internship opportunities available during the BCA program?",
              answer:
                "Yes, the program includes industrial training and internships to provide real-world business exposure.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "What specializations are available in the BCA program?",
              answer:
                "Specializations include Legacy Application Software, Mobile Applications, and System Software.",
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
              name: "Sneha Kumar",
              rating: 5,
              comment:
                "The BCA program at Indo Global Colleges is exceptional. The curriculum is well-structured, and the faculty are extremely supportive and knowledgeable.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Vikas Singh",
              rating: 4,
              comment:
                "Great learning environment with excellent infrastructure. The internships provided valuable real-world experience.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Ritu Sharma",
              rating: 5,
              comment:
                "I highly recommend this college for BCA. The focus on both theoretical and practical aspects has prepared me well for my career.",
            },
          },
        ],
      },
    ],
  };
  
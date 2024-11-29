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
  
  export const BTECH_IN_COMP_ENGG = {
    id: 1,
    title: "B.Tech Computer Science Engineering",
    category: "B.Tech / B.tech Lateral Entry",
    image:
      "https://www.accurate.in/engg/article/img/banner/btech-program-in-greater-noida-03-05-22.webp",
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
          // {
          //   type:"heading",
          //   data:"Overview"
          // },
          {
            type: "paragraph",
            data: "B.Tech in Computer Science and Engineering (4 years) aims to develop a strong foundation in mathematics, science, and computing systems, focusing on theoretical foundations of computation and computer systems, and software and hardware system development.",
          },
          {
            type: "heading",
            data: "Key Highlights",
          },
          {
            type: "list",
            data: [
              "Comprehensive curriculum covering core CS concepts and emerging technologies",
              "Hands-on projects and internship opportunities",
              "State-of-the-art computer labs and learning resources",
              "Industry-experienced faculty members",
              "Strong placement record with top tech companies",
              "Curriculum based on IEEE-ACM recommendations",
              "Skill enhancement with tools like Raptor, Python, and Visual Java",
            ],
          },
          {
            type: "heading",
            data: "Learning Outcomes",
          },
          {
            type: "list",
            data: [
              "Design software and hardware systems to meet desired requirements",
              "Analyze problems and design solutions",
              "Apply mathematics, algorithms, and computer science theory",
              "Utilize modern tools and programming languages effectively",
            ],
          },
          {
            type: "heading",
            data: "Career Opportunities",
          },
          {
            type: "list",
            data: [
              "Software Development and Programming",
              "Information Systems Management",
              "Telecommunication and Networking",
              "Web Development",
              "Data Mining Specialization",
              "Image Processing and Graphics",
              "Computer Science Research",
              "Training and Support",
            ],
          },
          {
            type: "heading",
            data: "Admission Process",
          },
          {
            type: "paragraph",
            data: "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics as core subjects, with a minimum aggregate of 60%.",
          },
          {
            type: "paragraph",
            data: "Indo Global College is affiliated to Punjab Technical University and all B.Tech programs are approved by All India Council for Technical Education (AICTE).",
          },
          {
            type: "heading",
            data: "Laboratories",
          },
          {
            type: "paragraph",
            data: "The college has well-equipped computer labs with the latest software and hardware. Students have access to high-performance servers, workstations, and a wide range of software tools for their projects and assignments.",
          },
          {
            type: "sub-heading",
            data: "Computer Lab",
          },
          {
            type: "paragraph",
            data: "Students are provided with extensive practical exposure to a range of software and hardware on b.tech computer science and engineering subjects relating to the curriculum. An overview of the facilities made available to the students is given below:",
          },
          {
            type: "sub-heading",
            data: "Computation and Networks Lab",
          },
          {
            type: "paragraph",
            data: "OPERATING SYSTEM LAB\nThese labs, are being used for practical courses on C, C++, Data-structures, Algorithms and Computer Networks. The labs have recently been upgraded with 30 latest Pentium 4 machines. Also they are equipped with Window 2003 Programming. Cyrix Server with range of network equipment which includes D-Link Switch, Radio Modem, Hubs, Patch Panel etc. The labs are provided for on-hand experience in Networking using Windows 2003 Environment. It also has Linux and Navell Netware licensed operating systems.",
          },
          {
            type: "sub-heading",
            data: "Multimedia & Graphics Lab",
          },
          {
            type: "paragraph",
            data: "The Multimedia Graphics Lab serves for practical sources in Computer Graphics. This lab is equipped with 30 Pentium 4 based multimedia PCs. Also the lab boasts of an Acer Altos Server. The lab provides working experience in Windows and Linux environments. This lab also has licensed Adobe Photoshop on all machines.",
          },
          {
            type: "sub-heading",
            data: "Microprocessor Lab",
          },
          {
            type: "paragraph",
            data: "The lab is primarily for practical courses on Microprocessors. The lab. is equipped with 10 trainer kits of 8085, 8086 & Z-80 (Oscilloscopes, Frequency Counters, Function Generators, Pulse Generators, Dual Output Power Supplies, Logic Design Trainer Kits, IC Tester Distortion Factor Meter and other cards and Peripherals.",
          },
          {
            type: "sub-heading",
            data: "Artificial Intelligence Lab",
          },
          {
            type: "paragraph",
            data: "This lab is provided with Mat Lab and other related Softwares with neural Network and Fuzzy Logic tool boxes for giving students.",
          },
          {
            type: "sub-heading",
            data: "RDBMS Lab",
          },
          {
            type: "paragraph",
            data: "This lab also has 30 Pentium –IV machines with Oracle 10, for giving students practical knowledge of data base management.",
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
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  "Engineering Drawing",
                  "Introduction to Programming",
                  "Basic Computer Skills",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Data Structures and Algorithms",
                  "Computer Organization and Architecture",
                  "Discrete Mathematics",
                  "Digital Logic Design",
                  "Object-Oriented Programming",
                ],
              },
              {
                year: "Third Year",
                data: [
                  "Computer Networks",
                  "Web Technologies",
                  "Operating Systems",
                  "Database Management Systems",
                  "Software Engineering",
                ],
              },
              {
                year: "Fourth Year",
                data: [
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Cloud Computing",
                  "Cybersecurity",
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
              "Curriculum based on IEEE-ACM recommendations",
              "Skill enhancement with tools like Raptor, Python, and Visual Java",
              "Coverage of latest industry trends: Cloud Computing, Data Mining, Big Data Analytics",
              "Industry case studies and open labs for competitive coding",
              "Structured internship programs and exchange opportunities",
              "Project-based courses integrating theoretical and practical aspects",
            ],
          },
        ],
      },
  
      // {
      //   label: "instructor",
      //   icon: React.createElement(User, { className: "w-4 h-4" }),
      //   content: [
      //     {
      //       label: "Name",
      //       data: "Dr. Jane Smith",
      //     },
      //     {
      //       label: "Title",
      //       data: "Associate Professor of Computer Science",
      //     },
      //     {
      //       label: "Degree",
      //       data: "Ph.D. in Computer Science from Stanford University",
      //     },
      //     {
      //       label: "Specialization",
      //       data: "Artificial Intelligence and Machine Learning",
      //     },
      //     {
      //       label: "Bio",
      //       data: "Dr. Jane Smith has over 15 years of experience in teaching and research in computer science. She has published numerous papers in top-tier conferences and journals, and has worked on several industry-sponsored projects. Her teaching philosophy emphasizes practical application of theoretical concepts.",
      //     },
      //     {
      //       label: "Avatar",
      //       data: "/placeholder.svg?height=64&width=64",
      //     },
      //   ],
      // },
      {
        label: "faqs",
        icon: React.createElement(HelpCircle, { className: "w-4 h-4" }),
        content: [
          {
            label: "FAQ 1",
            data: {
              question: "What are the admission requirements?",
              answer:
                "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics as core subjects, with a minimum aggregate of 60%.",
            },
          },
          {
            label: "FAQ 2",
            data: {
              question: "Is there a placement assistance program?",
              answer:
                "Yes, our college has a dedicated placement cell that assists students with internships and job placements. We have a strong network of industry partners and alumni.",
            },
          },
          {
            label: "FAQ 3",
            data: {
              question: "Are there any scholarships available?",
              answer:
                "We offer merit-based scholarships for top-performing students. Additionally, there are government scholarships available for eligible candidates.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "What kind of projects will I work on?",
              answer:
                "Throughout the course, you'll work on various projects including software development, web applications, mobile apps, and a final year capstone project. Many projects involve real-world problem-solving and industry collaboration.",
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
              name: "Alex Johnson",
              rating: 5,
              comment:
                "Excellent course with a perfect blend of theory and practical knowledge. The faculty is highly knowledgeable and supportive.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Samantha Lee",
              rating: 4,
              comment:
                "Great curriculum that covers all the latest technologies. The project work really helped me build a strong portfolio.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Rahul Sharma",
              rating: 5,
              comment:
                "The course prepared me well for the industry. I secured a great job right after graduation thanks to the skills I learned here.",
            },
          },
        ],
      },
    ],
  };
  
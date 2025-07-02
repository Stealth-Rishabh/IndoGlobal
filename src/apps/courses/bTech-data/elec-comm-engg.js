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
import img from "../../../assets/courses/btech-elec.webp";

export const BTECH_EC_DATA = {
  path: "btech-electronics-communication-engineering",
  title: "B.Tech Electronics & Communication Engineering",
  category: "B.Tech / B.tech Lateral Entry",
  group: "B.Tech Course",
  image: img,
  brochure: "/brochures/IGC Main Brochure.pdf",
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
          data: "B. Tech Electronics and Communication Engineering is a four-year professional degree program that mainly deals with basic electronics, analog transmission, microprocessors, semiconductor devices, satellite communication, and digital communication technologies.",
        },
        {
          type: "heading",
          data: "Program Structure",
        },
        {
          type: "paragraph",
          data: "The four-year (8 semesters) program provides students with a strong background in mathematics and science. In the first half, students learn basic engineering concepts, while the second half focuses on core communication studies.",
        },
        {
          type: "heading",
          data: "Program Highlights",
        },
        {
          type: "list",
          data: [
            "Strong theoretical foundations in electronic devices",
            "Rigorous training in research and device development",
            "Real-time project opportunities",
            "Technical conference and workshop participation",
            "Comprehensive coverage of modern communication technologies",
          ],
        },
        {
          type: "heading",
          data: "Program Objectives",
        },
        {
          type: "list",
          data: [
            "Provide a strong foundation in mathematics, science, and engineering fundamentals",
            "Develop analytical and innovative thinking skills",
            "Impart theoretical and practical knowledge",
            "Inculcate teamwork and leadership qualities",
            "Prepare students for professional engineering environments",
          ],
        },
        {
          type: "heading",
          data: "Program Outcomes",
        },
        {
          type: "list",
          data: [
            "Apply knowledge of computing and algorithmic principles",
            "Conduct experiments and analyze data",
            "Plan and design device integration technologies",
            "Work in multi-disciplinary teams",
            "Identify and solve electronics and communication problems",
            "Use modern engineering tools and techniques",
          ],
        },
        {
          type: "heading",
          data: "Laboratories",
        },
        {
          type: "sub-heading",
          data: "Computer Lab",
        },
        {
          type: "paragraph",
          data: "Latest computer systems with software like Matlab, Commsim, Multisim, Keil, Xilinx, and Ultiboard for hands-on training and emerging technology exposure.",
        },
        {
          type: "sub-heading",
          data: "Microprocessor and Digital Electronics Lab",
        },
        {
          type: "list",
          data: [
            "Microprocessor kits: 8085, 8086, Microcontrollers 8051, 8951",
            "Digital electronics kits: Multiplexer, ALU, gates",
            "PC and project labs",
          ],
        },
        {
          type: "sub-heading",
          data: "Communication Lab",
        },
        {
          type: "list",
          data: [
            "Latest measurement and communication devices",
            "Function generators and superheterodyne receivers",
            "CROs with audio oscillators and high-frequency generators",
            "PCM Multiplexing and Demultiplexing kits",
            "ASK, PSK, FSK, and Delta Modulation Kits",
          ],
        },
        {
          type: "sub-heading",
          data: "Other Specialized Labs",
        },
        {
          type: "list",
          data: [
            "Microwave Lab with advanced antenna and sophisticated devices",
            "Control and Instrumentation Lab",
            "Network and Electronic Devices Lab",
            "Project Lab with PCB manufacturing facilities",
          ],
        },
        {
          type: "heading",
          data: "Career Opportunities",
        },
        {
          type: "list",
          data: [
            "Telecommunications",
            "Embedded Systems Design",
            "Semiconductor Industry",
            "Satellite Communication",
            "Research and Development",
            "Hardware Engineering",
            "Signal Processing",
            "Network Engineering",
          ],
        },
        {
          type: "paragraph",
          data: "Previous batch students have secured placements in prestigious organizations like Infosys, IBM, nVidia, and other leading tech companies.",
        },
      ],
    },
    {
      label: "eligibility",
      icon: React.createElement(GraduationCap, { className: "w-4 h-4" }),
      content: [
        {
          type: "heading",
          data: "First Year Eligibility",
        },
        {
          type: "paragraph",
          data: "Candidates who have passed the 10+2 examination from a board recognized by Central/State Government with Physics & Mathematics as compulsory subjects, along with one of the following: Chemistry/Biology/Computer Science & Biotechnology.",
        },
        {
          type: "heading",
          data: "Lateral Entry Eligibility",
        },
        {
          type: "paragraph",
          data: "Candidates who have passed Minimum THREE years / TWO years (Lateral Entry) Diploma examination from an AICTE approved Institution with at least 45% marks (40% marks for reserved category) in ANY branch of Engineering and Technology.",
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
                "Mathematics",
                "Physics",
                "Chemistry",
                "Engineering Drawing",
                "Basic Electronics",
                "Programming Fundamentals",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Electronic Circuits",
                "Digital Electronics",
                "Signals and Systems",
                "Network Analysis",
                "Analog Communication",
              ],
            },
            {
              year: "Third Year",
              data: [
                "Digital Communication",
                "Microprocessors",
                "Control Systems",
                "Electromagnetic Theory",
                "Antenna and Wave Propagation",
              ],
            },
            {
              year: "Fourth Year",
              data: [
                "VLSI Design",
                "Satellite Communication",
                "Wireless Communication",
                "Embedded Systems",
                "Project Management",
                "Capstone Project",
              ],
            },
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
            question: "What are the career prospects?",
            answer:
              "Graduates have opportunities in telecommunications, embedded systems, semiconductor industry, and research organizations.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question: "Are internships available?",
            answer:
              "Yes, the college provides internship opportunities with leading tech companies and research institutions.",
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
            name: "Rajesh Kumar",
            rating: 5,
            comment:
              "Excellent program with comprehensive coverage of modern communication technologies.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Priya Sharma",
            rating: 4,
            comment:
              "Great practical exposure and industry-relevant curriculum.",
          },
        },
      ],
    },
  ],
};

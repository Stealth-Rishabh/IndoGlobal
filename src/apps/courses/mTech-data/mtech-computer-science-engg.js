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
import img from "../../../assets/courses/mtech-comp.webp";

export const MTECH_IN_COMPUTER_SCIENCE_ENGINEERING = {
    path: "mtech-computer-science-engineering",
    title: "M.Tech Computer Science Engineering",
    category: "M.Tech",
    group: "M.Tech Course",
    image: img,
    badges: [
        { icon: Clock, text: "2 Years" },
        { icon: GraduationCap, text: "Master's Degree" },
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
                    data: "M.Tech Computer Science and Engineering at Indo Global College imparts advanced knowledge in various areas of computer science, with a focus on artificial intelligence (AI) and distributed computing environments."
                },
                {
                    type: "heading",
                    data: "Program Highlights"
                },
                {
                    type: "list",
                    data: [
                        "Advanced courses in Networking, Computer Architecture, Databases, and Algorithms",
                        "Focus on Artificial Intelligence and distributed computing",
                        "Research and development-oriented curriculum",
                        "Practical exposure through industry case studies",
                        "Opportunities for specialized electives"
                    ]
                },
                {
                    type: "heading",
                    data: "Specialization Options"
                },
                {
                    type: "list",
                    data: [
                        "Computer Science (General)",
                        "Software Engineering",
                        "Data Analytics",
                        "Networking and Information Security"
                    ]
                },
                {
                    type: "heading",
                    data: "Laboratories"
                },
                {
                    type: "sub-heading",
                    data: "Computation and Networks Lab"
                },
                {
                    type: "paragraph",
                    data: "Upgraded with 30 Pentium 4 machines, equipped with Windows 2003 Programming, Cyrix Server, and network equipment including D-Link Switch, Radio Modem, Hubs, and Patch Panel. Provides hands-on experience in networking using Windows 2003 environments with Linux and Novell Netware operating systems"
                },
                {
                    type: "sub-heading",
                    data: "Multimedia & Graphics Lab"
                },
                {
                    type: "paragraph",
                    data: "30 Pentium 4-based multimedia PCs with Acer Altos Server. Provides working experience in Windows and Linux environments, with licensed Adobe Photoshop on all machines."
                },
                {
                    type: "sub-heading",
                    data: "Microprocessors Lab"
                },
                {
                    type: "paragraph",
                    data: "Equipped with 10 trainer kits of 8085, 8086 & Z-80, including oscilloscopes, frequency counters, function generators, pulse generators, dual output power supplies, logic design trainer kits, and IC testers."
                },
                {
                    type: "sub-heading",
                    data: "Artificial Intelligence Lab"
                },
                {
                    type: "paragraph",
                    data: "Equipped with MATLAB and related software, including neural network and fuzzy logic toolboxes."
                },
                {
                    type: "sub-heading",
                    data: "Additional Laboratories"
                },
                {
                    type: "list",
                    data: [
                        "RDBMS Lab with 30 Pentium-IV machines and Oracle 10",
                        "Internet Lab for web surfing",
                        "Multimedia Facility with Slide Projector, Overhead Projector, and LCD Projector"
                    ]
                },
                {
                    type: "heading",
                    data: "Multimedia Resources"
                },
                {
                    type: "list",
                    data: [
                        "Compaq Laptop",
                        "Digital Camera",
                        "Video Camera",
                        "Web Cameras"
                    ]
                },
                {
                    type: "paragraph",
                    data: "Computers equipped with Windows XP, AutoCAD, MS Office, Borland C++, and other relevant software."
                }
            ]
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
                            semester: "1st Semester",
                            subjects: [
                                "Advanced Computer Architecture",
                                "Advanced Operating Systems",
                                "Distributed Computing",
                                "Research Methodology"
                            ]
                        },
                        {
                            semester: "2nd Semester",
                            subjects: [
                                "Advanced Algorithms",
                                "Machine Learning",
                                "Network Security",
                                "Database Management Systems"
                            ]
                        },
                        {
                            semester: "3rd Semester",
                            subjects: [
                                "Artificial Intelligence",
                                "Software Engineering",
                                "Data Analytics",
                                "Elective Specialization Courses"
                            ]
                        },
                        {
                            semester: "4th Semester",
                            subjects: [
                                "Major Research Project",
                                "Dissertation",
                                "Industry Internship"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "eligibility",
            icon: React.createElement(GraduationCap, { className: "w-4 h-4" }),
            content: [
                {
                    type: "heading",
                    data: "Admission Requirements"
                },
                {
                    type: "paragraph",
                    data: "Regular B.E/B.Tech with at least 50% marks (45% for reserved category) and a valid GATE Score. In case of insufficient GATE candidates, admission will be based on inter-se-merit in qualifying examination."
                }
            ]
        },
       
        {
            label: "faqs",
            icon: React.createElement(HelpCircle, { className: "w-4 h-4" }),
            content: [
                {
                    label: "FAQ 1",
                    data: {
                        question: "What are the career prospects after M.Tech in Computer Science?",
                        answer: "Graduates have extensive opportunities in IT companies, research institutions, academia, and can pursue further research through Ph.D. programs."
                    }
                },
                {
                    label: "FAQ 2",
                    data: {
                        question: "Is GATE score mandatory for admission?",
                        answer: "GATE score is preferred, but in case of insufficient GATE candidates, admission can be based on merit in the qualifying examination."
                    }
                }
            ]
        },
        {
            label: "reviews",
            icon: React.createElement(Star, { className: "w-4 h-4" }),
            content: [
                {
                    label: "Review 1",
                    data: {
                        name: "Rahul Sharma",
                        rating: 5,
                        comment: "Comprehensive program with excellent lab facilities and industry-relevant curriculum."
                    }
                },
                {
                    label: "Review 2",
                    data: {
                        name: "Priya Patel",
                        rating: 4,
                        comment: "Great exposure to latest technologies and research opportunities."
                    }
                }
            ]
        }
    ]
}; 
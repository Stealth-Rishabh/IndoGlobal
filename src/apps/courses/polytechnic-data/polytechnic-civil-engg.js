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
import img from "../../../assets/courses/poly-civil.webp";
export const POLYTECHNIC_IN_CIVIL_ENGINEERING = {
    
    title: "Polytechnic (Diploma) in Civil Engineering",
    category: "Polytechnic / Polytechnic Lateral Entry", 
    image: img,
    badges: [
        { icon: Clock, text: "3 Years" },
        { icon: GraduationCap, text: "Diploma" },
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
                    data: "Polytechnic (Diploma) in Civil Engineering is a sought-after 3-year course that provides comprehensive exposure to infrastructural development and design techniques."
                },
                {
                    type: "heading",
                    data: "Program Highlights"
                },
                {
                    type: "list",
                    data: [
                        "Comprehensive exposure to civil engineering concepts",
                        "Focus on infrastructural development and design techniques",
                        "Practical learning in planning, drafting, and surveying",
                        "Emphasis on problem-solving and analytical skills",
                        "Industry-oriented curriculum"
                    ]
                },
                {
                    type: "heading",
                    data: "Program Objectives"
                },
                {
                    type: "list",
                    data: [
                        "Prepare students for successful careers in civil engineering",
                        "Offer tailored academic programs for supervisory-level manpower",
                        "Provide quality education and technical skills",
                        "Familiarize students with construction site work environments",
                        "Enhance industry-education linkage"
                    ]
                },
                {
                    type: "heading",
                    data: "Laboratories"
                },
                {
                    type: "list",
                    data: [
                        "Concrete Lab",
                        "Structure Analysis Lab",
                        "Transportation Lab",
                        "Environmental Lab",
                        "Computer-Aided Design Lab",
                        "Solid Mechanics Lab",
                        "Geo Technology Lab",
                        "Fluid Mechanics Lab"
                    ]
                },
                {
                    type: "heading",
                    data: "Career Opportunities"
                },
                {
                    type: "list",
                    data: [
                        "Construction Site Supervisor",
                        "Junior Engineer (Govt/Pvt Organizations)",
                        "PWD Department",
                        "Private Construction Companies",
                        "Military Engineering Services (MES)",
                        "Railways",
                        "Independent Entrepreneurship"
                    ]
                },
                {
                    type: "heading",
                    data: "Program Outcomes"
                },
                {
                    type: "list",
                    data: [
                        "Capable of handling construction site work as a supervisor",
                        "Eligible to work as a junior engineer in government/private organizations",
                        "Ability to set up own civil engineering unit",
                        "Apply knowledge and technical expertise in building, analyzing, testing, and maintaining industry work",
                        "Understanding of industry standards and codes of practices"
                    ]
                },
                {
                    type: "paragraph",
                    data: "The course equips students with sound knowledge of civil engineering and improves supervisory and administrative skills."
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
                    data: "10th standard pass with Mathematics, Science, and English as compulsory subjects. Valid JET examination score card required."
                },
                {
                    type: "heading",
                    data: "Fee Structure"
                },
                {
                    type: "paragraph",
                    data: "As per Punjab State Board of Technical Education and Industrial Training (PSBTE&IT) norms."
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
                            year: "First Year",
                            data: [
                                "Foundation Science Courses",
                                "Communication Skills",
                                "Basic Civil Engineering Concepts",
                                "Pipe Laying Techniques",
                                "Manhole Construction",
                                "Site Inspection Procedures"
                            ]
                        },
                        {
                            year: "Second Year",
                            data: [
                                "Surveying",
                                "Concrete Technology",
                                "Plumbing Codes",
                                "Water Supply Systems",
                                "Advanced Surveying",
                                "Solid Mechanics",
                                "Structural Engineering"
                            ]
                        },
                        {
                            year: "Third Year",
                            data: [
                                "Technical Project Development",
                                "Industrial Internship",
                                "Construction Management",
                                "Entrepreneurship Skills",
                                "Professional Practices",
                                "Office Procedures"
                            ]
                        }
                    ]
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
                        question: "What are the career prospects after this diploma?",
                        answer: "Graduates can work in construction companies, government departments, railways, and can also pursue higher education."
                    }
                },
                {
                    label: "FAQ 2",
                    data: {
                        question: "Can I start my own business after this diploma?",
                        answer: "Yes, the course provides entrepreneurship skills that can help you set up your own civil engineering unit."
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
                        name: "Rajesh Kumar",
                        rating: 5,
                        comment: "Excellent practical exposure and comprehensive curriculum in civil engineering."
                    }
                },
                {
                    label: "Review 2",
                    data: {
                        name: "Priya Singh",
                        rating: 4,
                        comment: "Great learning experience with industry-relevant skills and lab facilities."
                    }
                }
            ]
        }
    ]
}; 
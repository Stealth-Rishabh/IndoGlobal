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
import img from "../../../assets/courses/poly-mech.webp";

export const POLYTECHNIC_IN_MECHANICAL_ENGINEERING = {
    path: "polytechnic-mechanical-engineering",
    title: "Polytechnic (Diploma) in Mechanical Engineering",
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
                    data: "Polytechnic (Diploma) in Mechanical Engineering provides broad-based and diverse engineering learning in areas like thermodynamics, solid and fluid mechanics, combustion, instrumentation and control, material science, product and system design, and manufacturing."
                },
                {
                    type: "heading",
                    data: "Program Structure"
                },
                {
                    type: "paragraph",
                    data: "A three-year program designed to mold students for professional practice in rapidly advancing interdisciplinary technology, emphasizing applied design skills and innovative solutions."
                },
                {
                    type: "heading",
                    data: "Program Highlights"
                },
                {
                    type: "list",
                    data: [
                        "Comprehensive mechanical engineering education",
                        "Focus on applied design skills",
                        "Emphasis on clean energy and innovative solutions",
                        "Development of self-reliance and creativity",
                        "Strong industry-oriented curriculum"
                    ]
                },
                {
                    type: "heading",
                    data: "Program Objectives"
                },
                {
                    type: "list",
                    data: [
                        "Develop basic knowledge in mathematics, natural science, and engineering fundamentals",
                        "Enhance professional skills in design and experimentation",
                        "Build confidence through field exposure",
                        "Develop fundamental computing principles for problem-solving"
                    ]
                },
                {
                    type: "heading",
                    data: "Laboratories"
                },
                {
                    type: "list",
                    data: [
                        "Strength of Materials Lab",
                        "Fluid Machinery Lab",
                        "Heat Transfer Lab",
                        "Automobile Lab",
                        "Theory of Machines Lab",
                        "CAD Lab",
                        "Manufacturing Process Lab",
                        "Hydraulic Lab",
                        "Metallurgy Lab",
                        "Refrigeration & Air Conditioning Lab",
                        "Thermodynamics Lab",
                        "Mechanical Vibration Lab",
                        "Industrial Automation & Robotics Lab",
                        "Mechanical Measurement & Metrology Lab",
                        "Production Engineering Lab"
                    ]
                },
                {
                    type: "heading",
                    data: "Career Opportunities"
                },
                {
                    type: "list",
                    data: [
                        "Manufacturing Technician",
                        "Production Engineer",
                        "Maintenance Supervisor",
                        "Quality Control Specialist",
                        "Technical Sales Representative",
                        "CAD Technician",
                        "Industrial Equipment Operator"
                    ]
                },
                {
                    type: "paragraph",
                    data: "Graduates can find administrative positions in leading organizations and pursue further studies like bachelor's and post-graduation degrees."
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
                                "Engineering Mathematics",
                                "Engineering Materials",
                                "Manufacturing Technology",
                                "Composite Materials",
                                "Engineering Design Drafting",
                                "Basic Workshop Practice"
                            ]
                        },
                        {
                            year: "Second Year",
                            data: [
                                "Fluid Mechanics",
                                "Thermodynamics",
                                "Strength of Materials",
                                "Mechanical Design Practice",
                                "Engineering Design Thinking",
                                "Machine Drawing"
                            ]
                        },
                        {
                            year: "Third Year",
                            data: [
                                "Specialization Electives",
                                "Final Year Project",
                                "Industrial Internship",
                                "Advanced Manufacturing Techniques",
                                "Industrial Management",
                                "Professional Communication"
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
                    data: "10th standard pass with Mathematics, Science, and English as compulsory subjects."
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
            label: "faqs",
            icon: React.createElement(HelpCircle, { className: "w-4 h-4" }),
            content: [
                {
                    label: "FAQ 1",
                    data: {
                        question: "What are the career prospects after this diploma?",
                        answer: "Graduates can work in manufacturing, production, maintenance, and technical support roles across various industries."
                    }
                },
                {
                    label: "FAQ 2",
                    data: {
                        question: "Can I pursue higher education after this diploma?",
                        answer: "Yes, you can pursue bachelor's degree programs in mechanical engineering or related fields."
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
                        name: "Amit Singh",
                        rating: 5,
                        comment: "Excellent practical exposure and industry-relevant curriculum."
                    }
                },
                {
                    label: "Review 2",
                    data: {
                        name: "Priya Patel",
                        rating: 4,
                        comment: "Great learning experience with comprehensive lab facilities."
                    }
                }
            ]
        }
    ]
}; 
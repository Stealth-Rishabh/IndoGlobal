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
import img from "../../../assets/courses/mtech-civil.webp";

export const MTECH_IN_CIVIL_ENGINEERING = {

    title: "M.Tech in Civil Engineering",
    category: "M.Tech",
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
                    data: "M.Tech in Civil Engineering is a 2-year postgraduate professional degree program focusing on advanced design, supervision, and construction activities for public works, including dams, buildings, roads, bridges, airports, and sewage systems."
                },
                {
                    type: "heading",
                    data: "Program Highlights"
                },
                {
                    type: "list",
                    data: [
                        "Advanced knowledge in civil engineering specializations",
                        "Comprehensive 4-semester curriculum",
                        "Exposure to research and industry practices",
                        "Technical communication and soft skills development",
                        "Opportunities for research publication"
                    ]
                },
                {
                    type: "heading",
                    data: "Specialization Options"
                },
                {
                    type: "list",
                    data: [
                        "Structural Engineering",
                        "Environmental Engineering",
                        "Geotechnical Engineering",
                        "Water Resources",
                        "Hydraulics Engineering",
                        "Construction Technology and Management"
                    ]
                },
                {
                    type: "heading",
                    data: "Laboratories"
                },
                {
                    type: "sub-heading",
                    data: "Concrete Lab"
                },
                {
                    type: "paragraph",
                    data: "Deals with building materials and structural engineering. Conducts comprehensive testing, including cement testing, brick testing, concrete compressive strength, flexure strength of concrete beams, concrete mix design, steel tests, and timber tests."
                },
                {
                    type: "sub-heading",
                    data: "Structural Analysis Lab"
                },
                {
                    type: "paragraph",
                    data: "Equipped with various instruments for structural analysis of different materials, including steel beams, cantilevers, and trusses."
                },
                {
                    type: "sub-heading",
                    data: "Transportation Engineering Lab"
                },
                {
                    type: "list",
                    data: [
                        "Road construction materials testing",
                        "Aggregate Test",
                        "Crushing Value Test",
                        "Abrasion Value Test",
                        "Impact Shape Test",
                        "Flakiness Index",
                        "Sieve Analysis",
                        "Bituminous Tests",
                        "Penetration Test",
                        "Ductility Test",
                        "Softening Point Test"
                    ]
                },
                {
                    type: "sub-heading",
                    data: "Environmental Engineering Lab"
                },
                {
                    type: "list",
                    data: [
                        "Water Testing",
                        "Effluent Testing",
                        "BOD and COD Testing",
                        "pH Value Analysis",
                        "Acidic Value Measurement",
                        "Viscosity of Solution Testing"
                    ]
                },
                {
                    type: "sub-heading",
                    data: "Computer-Aided Design Lab"
                },
                {
                    type: "paragraph",
                    data: "Equipped with the latest software and computers for structural solutions and design, including AutoCAD, STAAD PRO, Windows XP, MS Office, Visual Studio, and audio-visual aids for technical and non-technical problem-solving."
                },
                {
                    type: "sub-heading",
                    data: "Other Specialized Laboratories"
                },
                {
                    type: "list",
                    data: [
                        "Solid Mechanics Lab (Tensile and Compression Tests)",
                        "Geotechnical Lab (Soil Testing)",
                        "Survey Lab",
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
                        "Project Manager",
                        "Research Scientist",
                        "Academic Faculty",
                        "Government Infrastructure Planner",
                        "Consulting Engineer",
                        "Urban Development Specialist"
                    ]
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
                                "Composite Materials",
                                "Hydrological Processes",
                                "Pavement Design",
                                "Geo-environmental Engineering",
                                "Advanced Structural Design"
                            ]
                        },
                        {
                            semester: "2nd Semester",
                            subjects: [
                                "Water Quality Modeling",
                                "Earthquake Engineering",
                                "Advanced Traffic Engineering",
                                "Advanced Bridge Design",
                                "Industrial Structures",
                                "Computational Geotechnics"
                            ]
                        },
                        {
                            semester: "3rd Semester",
                            subjects: [
                                "Urban Hydrology",
                                "Remote Sensing and GIS",
                                "Ground Water and Contamination Hydrology",
                                "Construction and Maintenance Management",
                                "Disaster Reduction & Management",
                                "Project"
                            ]
                        },
                        {
                            semester: "4th Semester",
                            subjects: [
                                "Thesis/Dissertation"
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
                        question: "What are the career prospects after M.Tech in Civil Engineering?",
                        answer: "Graduates can work in construction, research, academia, government organizations, and private consulting firms with excellent career growth opportunities."
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
                        name: "Amit Sharma",
                        rating: 5,
                        comment: "Comprehensive program with excellent research opportunities and industry exposure."
                    }
                },
                {
                    label: "Review 2",
                    data: {
                        name: "Priya Patel",
                        rating: 4,
                        comment: "Well-structured curriculum with advanced specialization options."
                    }
                }
            ]
        }
    ]
}; 
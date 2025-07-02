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
import img from "../../../assets/courses/bsc-medical.webp";

export const MSC_MEDICAL_LABORATORY_SCIENCES_BIOCHEMISTRY = {
  path: "msc-in-medical-laboratory-sciences-biochemistry",
  title: "M.Sc Medical Laboratory Sciences (Biochemistry)",
  category: "Paramedical Courses",
  group: "Paramedical Course",
  image: img,
  brochure: "/brochures/Brochure paramedical.pdf",
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
          data: "Master of Science (M.Sc.) in Medical Laboratory Science-Biochemistry is a postgraduatelevel program designed to equip students with comprehensive knowledge and advanced technical expertise in the field of laboratory medicine & clinical biochemistry.",
        },
        {
          type: "paragraph",
          data: "This program is ideal for individuals seeking to enhance their skills, broaden their understanding, and become proficient leaders in the domain of clinical laboratory science and clinical biochemistry. It offers an indepth curriculum that integrates theoretical knowledge with practical training, focusing on core areas such as diagnostic techniques, clinical biochemistry and immunology, molecular biology, microbiology, hematology etc.",
        },
        {
          type: "heading",
          data: "Career Opportunities",
        },
        {
          type: "list",
          data: [
            "Clinical Biochemist",
            "Laboratory Manager (Biochemistry)",
            "Quality Assurance Manager",
            "Research Scientist (Biochemistry)",
            "Application Specialist (Biochemistry)",
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
          data: "Admission Criteria",
        },
        {
          type: "paragraph",
          data: "All those candidates who have passed B.Sc. (Medical Lab Technology / Medical Lab Sciences) with at least 50% marks in aggregate (45% marks in case of candidate belonging to reserve category) from any University recognised by UGC.",
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
                "Advanced Clinical Biochemistry",
                "Enzymology & Metabolism",
                "Molecular Biology & Genetics",
                "Immunology & Immunochemistry",
                "Biostatistics & Research Methodology",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Clinical Endocrinology & Toxicology",
                "Diagnostic Techniques & Instrumentation",
                "Laboratory Management & Quality Control",
                "Recent Advances in Biochemistry",
                "Dissertation",
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
            question: "What is the primary focus of this M.Sc. program?",
            answer:
              "This program focuses on an advanced concepts in clinical biochemistry, diagnostic techniques, and laboratory management.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question: "What are the job roles I can get after this course?",
            answer:
              "You can work as a Clinical Biochemist in hospitals and diagnostic labs, or pursue research and academic positions.",
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
            name: "Vikas Sharma",
            rating: 5,
            comment:
              "The curriculum is very detailed and covers all the advanced topics in biochemistry. The practical sessions are very informative.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Meena Kumari",
            rating: 4,
            comment:
              "A great platform for anyone looking to build a career in clinical biochemistry. The dissertation work was a great learning experience.",
          },
        },
      ],
    },
  ],
};

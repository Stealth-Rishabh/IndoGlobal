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
import img from "../../../assets/courses/msc-rit.webp";

export const MSC_RADIOLOGY_IMAGING_TECHNOLOGY = {
  path: "msc-in-radiology-imaging-technology",
  title: "M.Sc Radiology & Imaging Technology",
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
          data: "Master of Science (M.Sc.) in Medical Radiology and Imaging Technology is a postgraduate program designed to equip students with the skills to apply advanced technology for visualizing, analyzing and interpreting the complex structure of the human body.",
        },
        {
          type: "paragraph",
          data: "This program focuses on the principles of methodological techniques, applications, advancements and innovations related to diagnostic imaging modalities such as X-ray radiography, Computed tomography (CT), Magnetic resonance imaging (MRI), Nuclear medicine, Positron emission tomography (PET), ultrasound, other emerging imaging technologies, Radiation safety etc.",
        },
        {
          type: "heading",
          data: "Career Opportunities",
        },
        {
          type: "list",
          data: [
            "Radiology Manager/Administrator",
            "Lead Radiology Technologist",
            "Application Specialist",
            "Research Radiographer",
            "Academician in Radiology",
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
          data: "All those candidates who have passed B.Sc. (Medical Radiology and Imaging Technology / Radio Diagnosis and Imaging / Radiological Technology / Radiography / Medical Technology (X-Ray) / Radiology and Imaging Technology) with at least 50% marks in aggregate (45% marks in case of candidate belonging to reserve category) from any University recognised by UGC.",
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
                "Advanced Principles of Radiographic Imaging",
                "Sectional Anatomy (CT & MRI)",
                "Medical Radiation Physics",
                "Patient Care & Ethics",
                "Recent Advances in Imaging",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Specialized Imaging Techniques (CT, MRI, PET)",
                "Quality Control in Radiology",
                "Radiation Safety & Protection",
                "Biostatistics & Research Methodology",
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
            question:
              "What is the focus of the M.Sc. Radiology & Imaging Technology program?",
            answer:
              "The program focuses on advanced imaging modalities like CT, MRI, PET, and research in the field of radiology.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question:
              "What are the career prospects after completing this master's degree?",
            answer:
              "Graduates can take up leadership roles in radiology departments, work as application specialists for equipment manufacturers, or pursue a career in research and academia.",
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
            name: "Amit Kumar",
            rating: 5,
            comment:
              "This M.Sc. program provided in-depth knowledge of advanced imaging techniques. The research opportunities are excellent.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Sneha Reddy",
            rating: 4,
            comment:
              "Great faculty and well-equipped labs. The focus on new technology is what makes this course stand out.",
          },
        },
      ],
    },
  ],
};

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
import img from "../../../assets/courses/bsc-cct.webp";

export const BSC_CARDIAC_CARE_TECHNOLOGY = {
  path: "bsc-in-cardiac-care-technology",
  title: "B.Sc Cardiac Care Technology",
  category: "Paramedical Courses",
  group: "Paramedical Course",
  image: img,
  brochure: "/brochures/Brochure paramedical.pdf",
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
          data: "Bachelor of Science (B.Sc.) in Cardiac Care Technology is a 4-year undergraduate program aimed at preparing students for careers in the field of cardiac healthcare and technology. This course provides a strong foundation in the knowledge and practical skills necessary to support the diagnosis, treatment, and management of cardiovascular diseases in a variety of clinical environments.",
        },
        {
          type: "paragraph",
          data: "Indo Global Group of Colleges is equipped with state-of-the-art instruments and modern infrastructure that foster innovation and high-quality research. Students gain hands-on experience using industry-standard tools, enabling them to stay current with emerging trends and technologies in cardiac care.",
        },
        {
          type: "heading",
          data: "Program Highlights",
        },
        {
          type: "list",
          data: [
            "In-depth understanding of the cardiovascular system and cardiac disorders.",
            "Hands-on training in cardiac physiology, ECG, echocardiography, cardiac catheterization, and advanced cardiac imaging.",
            "Proficiency in operating specialized medical equipment and assisting in cardiac procedures.",
            "Focus on patient care, communication skills, and professional conduct.",
          ],
        },
        {
          type: "heading",
          data: "Scope and Career Opportunities",
        },
        {
          type: "paragraph",
          data: "Graduates are well-prepared for roles such as Cardiac Care Technologists, Cardiac Technicians, and Cardiovascular Technologists in hospitals, diagnostic centers, clinics, and cardiac rehabilitation facilities.",
        },
        {
          type: "heading",
          data: "Key Areas",
        },
        {
          type: "list",
          data: [
            "Cardiac Rehabilitation",
            "Cardiac Catheterization Laboratory",
            "Cardiac Intensive Care Unit (ICU)",
            "Cardiac Surgery",
            "Cardiac Electrophysiology",
            "Cardiac Imaging",
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
          data: "All those candidates who have passed 10+2 with Medical stream or equivalent examination with Physics, Chemistry as Compulsory subjects and any of the following subject(s) in addition: (a) Biology (b) Botany & Zoology together and also obtained minimum 50% marks in aggregate (45% marks in case of candidate belonging to reserve category) in qualifying examination from recognised University / Board recognised or established by Central / State Government through a legislation and member of Council of School Education (COBSE).",
        },
        {
          type: "paragraph",
          data: "OR, Minimum 2 Years Diploma in Cardiac Care Technology after 10th/12th, with 50% marks in aggregate & 45% marks in case of candidate belonging to reserved.",
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
                "Human Anatomy & Physiology",
                "Biochemistry",
                "Pathology",
                "Microbiology",
                "Introduction to Cardiac Care Technology",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Cardiac Anatomy & Physiology",
                "Pharmacology",
                "Electrocardiography (ECG)",
                "Echocardiography",
                "Treadmill Test (TMT)",
              ],
            },
            {
              year: "Third Year",
              data: [
                "Cardiac Catheterization Lab - I",
                "Cardiac Catheterization Lab - II",
                "Holter Monitoring",
                "ICU Technology",
                "Clinical Training",
              ],
            },
            {
              year: "Fourth Year",
              data: [
                "Advanced Cardiac Care Techniques",
                "Pediatric Cardiology",
                "Research & Biostatistics",
                "Project Work/Internship",
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
            question: "What is the scope of B.Sc. in Cardiac Care Technology?",
            answer:
              "Graduates can work as Cardiac Care Technologists, Cath Lab Technicians, or ECG technicians in hospitals and diagnostic centers.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question: "Can I pursue higher studies after this course?",
            answer:
              "Yes, you can opt for M.Sc. in Cardiac Care Technology or other related specializations.",
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
            name: "Rohan Verma",
            rating: 5,
            comment:
              "The program offers excellent hands-on training in cardiac care. The faculty is experienced and supportive.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Priya Singh",
            rating: 4,
            comment:
              "A comprehensive curriculum that covers all aspects of cardiac technology. The internship was very beneficial.",
          },
        },
      ],
    },
  ],
};

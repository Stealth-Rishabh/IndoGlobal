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
import img from "../../../assets/courses/bsc-operation.webp";

export const BSC_OPERATION_THEATRE_TECHNOLOGY = {
  path: "bsc-in-operation-theatre",
  title: "B.Sc Operation Theatre Technology",
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
          data: "Indo Global College of Management and Technology offers a 4-year (8 semesters) B.Sc. in Anesthesia & Operation Theatre Technology, affiliated with IKG Punjab Technical University, Jalandhar, and approved by the Government of Punjab.",
        },
        {
          type: "paragraph",
          data: "IGCMT provides excellent infrastructure, including well-qualified and experienced faculty, classrooms, laboratories, a Wi-Fi campus, computer rooms, library, gym, sports center, cafeteria, and separate hostel facilities for boys and girls, to facilitate hands-on learning.",
        },
        {
          type: "heading",
          data: "Course Overview",
        },
        {
          type: "paragraph",
          data: "B.Sc. Anesthesia and Operation Theatre Technology is a 4-year undergraduate degree that equips students with comprehensive knowledge and hands-on skills in anesthesia care, surgical procedures, and operation theatre management.",
        },
        {
          type: "heading",
          data: "Key Learning Areas",
        },
        {
          type: "list",
          data: [
            "Anesthesia techniques",
            "Surgical instruments and supplies",
            "Medical technology",
            "Operation theatre management",
            "Medical ethics",
            "Post-operative care",
          ],
        },
        {
          type: "heading",
          data: "Scope of Practice",
        },
        {
          type: "list",
          data: [
            "Transplant teams",
            "Orthopedic clinics",
            "Gynecology sections",
            "Cancer units",
            "Surgical departments",
            "Special care baby units",
          ],
        },
        {
          type: "heading",
          data: "Career Opportunities",
        },
        {
          type: "list",
          data: [
            "Operation Theatre & Anesthesia Technologist",
            "Anesthesiologist Assistant",
            "Operation Theatre Technician",
            "Lead Medical Instrument Technician",
            "Anesthesiology Technician",
            "Perioperative Care Technician",
          ],
        },
        {
          type: "heading",
          data: "Salary Potential",
        },
        {
          type: "paragraph",
          data: "Graduates can expect a salary range of Rs. 3.5 lakhs to Rs. 10 lakhs per annum.",
        },
        {
          type: "heading",
          data: "Industry Connections",
        },
        {
          type: "paragraph",
          data: "IGCMT has tie-ups with various hospitals, laboratories, and health centers to provide internship and training opportunities to students.",
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
          data: "Candidates must have passed 10+2 with Medical Stream, meeting the following requirements:",
        },
        {
          type: "list",
          data: [
            "Minimum 50% aggregate marks",
            "Minimum 55% combined marks in Physics, Chemistry & Biology",
            "45% marks for candidates belonging to reserved categories",
            "From any recognized board of school education",
          ],
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
                "Human Anatomy",
                "Physiology",
                "Biochemistry",
                "Medical Terminology",
                "Introduction to Operation Theatre",
                "Basic Medical Sciences",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Anesthesia Principles",
                "Surgical Instrumentation",
                "Patient Care",
                "Medical Equipment Management",
                "Operation Theatre Procedures",
                "Pharmacology",
              ],
            },
            {
              year: "Third Year",
              data: [
                "Advanced Anesthesia Techniques",
                "Surgical Specialties",
                "Medical Ethics",
                "Operation Theatre Management",
                "Emergency and Critical Care",
                "Clinical Practicum",
              ],
            },
            {
              year: "Fourth Year",
              data: [
                "Advanced Surgical Technologies",
                "Perioperative Care",
                "Research Methodology",
                "Professional Communication",
                "Advanced Clinical Training",
                "Dissertation/Project Work",
              ],
            },
          ],
        },
        {
          label: "Special Features",
          type: "list",
          data: [
            "Comprehensive practical training in operation theatre management",
            "State-of-the-art laboratory facilities",
            "Industry internship programs",
            "Exposure to advanced medical technologies",
            "Research-oriented curriculum",
            "Guest lectures from medical professionals",
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
            question: "What career paths can I pursue after B.Sc. Operation Theatre Technology?",
            answer: "Graduates can work in hospitals, surgical centres, medical research institutions, and can specialize in various surgical and anesthesia technologies.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question: "Is there scope for higher education after this program?",
            answer: "Yes, graduates can pursue M.Sc. in Operation Theatre Technology, Anesthesia, or related medical fields, or opt for specialized certifications.",
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
            name: "Simran Kaur",
            rating: 5,
            comment: "Exceptional program with comprehensive training in operation theatre management. The practical exposure is truly world-class.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Arjun Patel",
            rating: 4,
            comment: "Great learning experience with hands-on training in surgical technologies and patient care techniques.",
          },
        },
      ],
    },
  ],
}; 
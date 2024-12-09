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

export const BSC_MEDICAL_LABORATORY_SCIENCES = {
  path: "bsc-in-medical-laboratory-science",
  title: "B.Sc Medical Laboratory Sciences",
  category: "Paramedical Courses",
  image: img,
  badges: [
    { icon: Clock, text: "3 Years" },
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
          data: "Indo Global College of Management and Technology offers a 3-year (6 semesters) course on Bachelor of Science (B.Sc.) in Medical Laboratory Science, affiliated with IKG Punjab Technical University Jalandhar & approved by Govt. of Punjab.",
        },
        {
          type: "paragraph",
          data: "Medical Laboratory Sciences (MLS) is a branch of medical science in performing clinical laboratory investigations, which is the first step of diagnosis of any disease followed by treatment and prevention. Medical Laboratory Sciences (MLS) play an important role in the medical field.",
        },
        {
          type: "heading",
          data: "Key Highlights",
        },
        {
          type: "list",
          data: [
            "Modern trends in theoretical and practical learning experiences",
            "Comprehensive coverage of critical medical laboratory sciences",
            "Hands-on training in advanced diagnostic techniques",
            "Focus on practical skills and laboratory management",
            "Exposure to the latest medical technologies and research methodologies",
            "Industry-oriented curriculum",
            "Strong placement support",
          ],
        },
        {
          type: "heading",
          data: "Program Focus Areas",
        },
        {
          type: "list",
          data: [
            "Microbiology",
            "Clinical Chemistry",
            "Pathology",
            "Histology",
            "Hematology",
            "Molecular Biology",
            "Immunology & Mycology",
          ],
        },
        {
          type: "heading",
          data: "Learning Outcomes",
        },
        {
          type: "list",
          data: [
            "Demonstrate proper techniques in collecting, testing, and analyzing biological specimens",
            "Perform comprehensive laboratory investigations",
            "Interpret test data for clinical significance",
            "Handle and document laboratory procedures effectively",
            "Apply advanced diagnostic techniques",
          ],
        },
        {
          type: "heading",
          data: "Career Opportunities",
        },
        {
          type: "list",
          data: [
            "Laboratory Manager",
            "Laboratory Information System Analyst",
            "Health Care Administrator/Manager",
            "Hospital Outreach Coordinator",
            "Quality Manager",
            "Regulatory Affairs Officer",
            "Independent Medical Laboratory Entrepreneur",
          ],
        },
        {
          type: "heading",
          data: "Admission Process",
        },
        {
          type: "paragraph",
          data: "Candidates must have completed 10+2 with Physics and Chemistry as compulsory subjects, with either Mathematics or Biology.",
        },
        {
          type: "paragraph",
          data: "Indo Global College is affiliated with IKG Punjab Technical University, and the program is approved by the Government of Punjab.",
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
          data: "Candidates who have passed 10+2 with Physics & Chemistry as compulsory subjects and either Mathematics or Biology from a recognized Board/University/Council.",
        },
        {
          type: "paragraph",
          data: "Alternatively, candidates with 10+2 vocational course in Medical Laboratory Science/Medical Laboratory Technology with at least 50% marks (45% marks for reserved categories) are eligible.",
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
                "Basic Medical Sciences",
                "Human Anatomy",
                "Physiology",
                "Biochemistry",
                "Medical Terminology",
                "Laboratory Safety and Management",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Microbiology",
                "Clinical Chemistry",
                "Hematology",
                "Immunology",
                "Pathology Techniques",
                "Research Methodology",
              ],
            },
            {
              year: "Third Year",
              data: [
                "Advanced Clinical Diagnostics",
                "Molecular Biology",
                "Histopathology",
                "Medical Genetics",
                "Laboratory Quality Control",
                "Dissertation/Project Work",
              ],
            },
          ],
        },
        {
          label: "Special Features",
          type: "list",
          data: [
            "Comprehensive practical training in medical laboratories",
            "Industry internship programs",
            "Exposure to advanced diagnostic technologies",
            "Research-oriented curriculum",
            "Guest lectures from medical professionals",
            "Hands-on training in state-of-the-art laboratories",
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
            question: "What career paths can I pursue after B.Sc. Medical Laboratory Sciences?",
            answer: "Graduates can work in hospitals, diagnostic centers, research institutions, pharmaceutical companies, and can also start their own medical laboratories.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question: "Is there scope for higher education after this program?",
            answer: "Yes, graduates can pursue M.Sc. in Medical Laboratory Sciences, pursue research, or opt for specialized certifications in various diagnostic fields.",
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
            name: "Priya Sharma",
            rating: 5,
            comment: "Excellent program with comprehensive practical training. The laboratories are world-class and faculty is extremely supportive.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Rahul Mehta",
            rating: 4,
            comment: "Great exposure to medical laboratory techniques. The internship program was incredibly helpful in understanding real-world diagnostics.",
          },
        },
      ],
    },
  ],
}; 
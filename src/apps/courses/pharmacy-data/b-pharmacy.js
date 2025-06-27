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
import img from "../../../assets/courses/bpharmacy.webp";

export const B_PHARMACY = {
  path: "b-pharmacy",
  title: "Bachelor of Pharmacy (B.Pharmacy)",
  category: "Pharmacy",
  group: "Pharmacy Course",
  image: img,
  brochure: "/brochures/PHARMACY BROCHURE.pdf",
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
          data: "Indo Global College of Pharmacy offers a four-year Bachelor of Pharmacy (B.Pharmacy) program, approved by the Pharmacy Council of India (PCI) & Government of Punjab and affiliated with IKG Punjab Technical University, Jalandhar. Nestled in a peaceful, lush green campus at the foothills of the Shivalik Ranges, our college provides an ideal atmosphere for learning and personal development with state-of-the-art infrastructure.",
        },
        {
          type: "paragraph",
          data: "The B. Pharmacy course is designed for students passionate about medicine, healthcare, and pharmaceuticals. It equips them with the knowledge and skills to develop, formulate, manufacture, and distribute medicines safely and effectively, bridging the gap between medical science and patient care.",
        },
        {
          type: "heading",
          data: "Vision and Mission",
        },
        {
          type: "paragraph",
          data: "Our vision is to provide high-quality, affordable education in pharmaceutical sciences, building a strong theoretical foundation with maximum exposure to hands-on learning. We aim to develop skilled, confident, and responsible pharmacy professionals ready to meet the needs of the healthcare industry and society.",
        },
        {
          type: "heading",
          data: "Key Highlights",
        },
        {
          type: "list",
          data: [
            "State-of-the-art infrastructure including digital classrooms and well-equipped laboratories.",
            "Specialized facilities like a Model Pharmacy and Pharmaceutical Museum.",
            "Well-stocked library with dedicated seminar and group discussion rooms.",
            "Experienced faculty committed to quality education and hands-on training.",
            "Strong industry connections and research opportunities.",
            "Focus on innovation, entrepreneurship, and holistic student development.",
            "Excellent placement record with top national and international companies.",
          ],
        },
        {
          type: "heading",
          data: "Program Focus Areas",
        },
        {
          type: "list",
          data: [
            "Pharmaceutical Sciences",
            "Pharmacology",
            "Pharmaceutics",
            "Pharmaceutical Chemistry",
            "Hospital & Clinical Pharmacy",
          ],
        },
        {
          type: "heading",
          data: "Scope of Employment",
        },
        {
          type: "list",
          data: [
            "Drug Inspector",
            "Drug Controller",
            "Hospital/Clinical Pharmacist",
            "Computational Pharmacist",
            "Healthcare Management Scientist",
            "Big Data Analyst",
            "Sales & Marketing",
            "Quality Assurance/Control",
            "Health Inspector",
            "Clinical Research Associate",
            "Formulation Development Associate",
            "Production/Manufacturing Chemist",
            "Government Analyst",
            "Life-cycle Management Scientist",
            "Drug Therapist",
            "Medical Scripting Manager",
            "Educationist",
            "Pharmaceutical Entrepreneur",
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
          data: "Candidates must have passed the 10+2 examination with Physics, Chemistry, and Mathematics/Biology as conducted by a recognized Board/University/Council. English must be one of the subjects.",
        },
        {
          type: "paragraph",
          data: "Candidates should have completed the age of 17 years on or before 31st December of the year of admission to the course.",
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
                "Human Anatomy and Physiology I & II",
                "Pharmaceutical Analysis I",
                "Pharmaceutics I (Formulation)",
                "Pharmaceutical Inorganic Chemistry",
                "Biochemistry",
                "Pathophysiology",
                "Communication Skills",
                "Environmental Science",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Pharmaceutical Organic Chemistry I & II",
                "Physical Pharmaceutics I & II",
                "Pharmaceutical Microbiology",
                "Pharmaceutical Engineering",
                "Medicinal Chemistry I",
                "Pharmacology I",
                "Computer Applications in Pharmacy",
              ],
            },
            {
              year: "Third Year",
              data: [
                "Medicinal Chemistry II",
                "Pharmacology II & III",
                "Pharmacognosy and Phytochemistry I & II",
                "Industrial Pharmacy I",
                "Pharmaceutical Jurisprudence",
                "Herbal Drug Technology",
              ],
            },
            {
              year: "Fourth Year",
              data: [
                "Biopharmaceutics and Pharmacokinetics",
                "Clinical Pharmacy",
                "Pharmaceutical Biotechnology",
                "Quality Assurance",
                "Pharma Marketing Management",
                "Instrumental Methods of Analysis",
                "Novel Drug Delivery Systems",
                "Project Work / Industrial Training (compulsory)",
              ],
            },
          ],
        },
        {
          label: "Special Features",
          type: "list",
          data: [
            "Curriculum combines theoretical knowledge with practical training in laboratories, hospitals, and industries.",
            "Emphasis on hands-on experience in pharmacy practice.",
            "Opportunities for entrepreneurship in the pharmaceutical sector.",
            "Training in patient care and medication management.",
            "Focus on developing new medicines and contributing to public health.",
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
            question: "What is the duration of the B.Pharmacy course?",
            answer:
              "The Bachelor of Pharmacy (B. Pharmacy) is a four-year undergraduate program, comprising 8 semesters.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question:
              "What are the career opportunities after completing B.Pharmacy?",
            answer:
              "Graduates have diverse career opportunities, including roles as pharmacists, drug inspectors, quality analysts, regulatory officers, researchers, and entrepreneurs in the pharmaceutical sector.",
          },
        },
        {
          label: "FAQ 3",
          data: {
            question:
              "Is the B.Pharmacy program at Indo Global College approved?",
            answer:
              "Yes, the course is approved by the Pharmacy Council of India (PCI) & Government of Punjab and is affiliated with IKG Punjab Technical University, Jalandhar.",
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
            name: "Anjali Verma",
            rating: 5,
            comment:
              "The B.Pharmacy program at Indo Global is top-notch. The faculty is incredibly knowledgeable and the labs are equipped with the latest technology. I feel well-prepared for a career in the pharmaceutical industry.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Sameer Kumar",
            rating: 4,
            comment:
              "A great learning experience. The curriculum is comprehensive and the industrial training was invaluable. I would recommend this college to any aspiring pharmacist.",
          },
        },
      ],
    },
  ],
};

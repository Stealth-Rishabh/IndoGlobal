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
import img from "../../../assets/courses/bsc-radio.webp";

export const BSC_RADIOLOGY_IMAGING_TECHNOLOGY = {
  path: "bsc-radiology-and-imaging-technology",
  title: "B.Sc Radiology & Imaging Technology",
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
          data: "Indo Global College of Management and Technology offers a 4-year (8 semesters) B.Sc. in Radiology and Imaging Technology, affiliated with IKG Punjab Technical University, Jalandhar, and approved by the Government of Punjab.",
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
          data: "Radiology and Imaging Technology (MRIT) is a 4-year degree course that deals with different imaging techniques and sophisticated equipment to produce high-quality images during injury or disease diagnosis.",
        },
        {
          type: "heading",
          data: "Key Imaging Techniques",
        },
        {
          type: "list",
          data: [
            "X-rays",
            "Mammography",
            "Fluoroscopy",
            "CT (Computed Tomography)",
            "MRI (Magnetic Resonance Imaging)",
            "DEXA",
            "Angiography",
          ],
        },
        {
          type: "heading",
          data: "Learning Outcomes",
        },
        {
          type: "list",
          data: [
            "Hands-on learning in Radio diagnosis and Imaging",
            "Perform whole-body X-ray techniques",
            "Conduct interventional procedures",
            "Master various scanning procedures of CT and MRI",
            "Develop practical skills in medical imaging technologies",
          ],
        },
        {
          type: "heading",
          data: "Career Opportunities",
        },
        {
          type: "list",
          data: [
            "Diagnostic Radiographer",
            "Radiation Therapy Educator",
            "Radiation Protection Specialist",
            "Radiation Therapy Team Supervisor",
            "Radiation Therapy Technologist",
            "Radiation Therapy Treatment Researcher",
            "Therapy Radiographer",
            "X-Ray Technician",
          ],
        },
        {
          type: "heading",
          data: "Salary Potential",
        },
        {
          type: "paragraph",
          data: "Graduates can expect a salary range of Rs. 4 lakhs to Rs. 8 lakhs per annum.",
        },
        {
          type: "heading",
          data: "Industry Connections",
        },
        {
          type: "paragraph",
          data: "IGCMT has various tie-ups with Government and Private Hospitals, Laboratories, and Health Centres to provide internship and training opportunities to students.",
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
                "Introduction to Radiology",
                "Basic Imaging Techniques",
              ],
            },
            {
              year: "Second Year",
              data: [
                "Radiographic Positioning",
                "Medical Physics",
                "Radiation Biology",
                "Diagnostic Imaging",
                "Patient Care and Management",
                "Radiographic Equipment",
              ],
            },
            {
              year: "Third Year",
              data: [
                "Advanced Imaging Techniques",
                "CT and MRI Principles",
                "Interventional Radiology",
                "Radiation Protection",
                "Medical Image Processing",
                "Clinical Practicum",
              ],
            },
            {
              year: "Fourth Year",
              data: [
                "Specialized Imaging Modalities",
                "Radiotherapy Techniques",
                "Research Methodology",
                "Professional Ethics",
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
            "Comprehensive practical training in medical imaging",
            "State-of-the-art laboratory facilities",
            "Industry internship programs",
            "Exposure to advanced medical imaging technologies",
            "Research-oriented curriculum",
            "Guest lectures from medical imaging professionals",
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
            question: "What career paths can I pursue after B.Sc. Radiology and Imaging Technology?",
            answer: "Graduates can work in hospitals, diagnostic centers, research institutions, medical imaging centres, and can specialize in various imaging technologies.",
          },
        },
        {
          label: "FAQ 2",
          data: {
            question: "Is there scope for higher education after this program?",
            answer: "Yes, graduates can pursue M.Sc. in Radiology, Medical Imaging, or related fields, or opt for specialized certifications in advanced imaging technologies.",
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
            name: "Anjali Sharma",
            rating: 5,
            comment: "Exceptional program with cutting-edge medical imaging technologies. The practical training is world-class and faculty is extremely supportive.",
          },
        },
        {
          label: "Review 2",
          data: {
            name: "Rohit Mehta",
            rating: 4,
            comment: "Great exposure to various imaging techniques. The internship program provided invaluable real-world experience in medical diagnostics.",
          },
        },
      ],
    },
  ],
}; 
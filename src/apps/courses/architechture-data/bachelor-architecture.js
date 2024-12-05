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
  import img from "../../../assets/courses/barch.webp";

  export const BACHELOR_OF_ARCHITECTURE = {
    
    title: "Bachelor of Architecture (B.Arch)",
    category: "Architecture",
    image: img,
    badges: [
      { icon: Clock, text: "5 Years" },
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
            data: "The Bachelor of Architecture (B.Arch) at Indo Global Colleges is a 5-year professional program comprising 10 semesters. The curriculum integrates engineering, technology, and arts with professional architectural practice, aiming for excellence in architectural design through comprehensive learning.",
          },
          {
            type: "heading",
            data: "Key Features",
          },
          {
            type: "list",
            data: [
              "AICTE-approved curriculum with a focus on practical learning",
              "State-of-the-art digital and analog design facilities",
              "Industry exposure through practical training and internships",
              "Core curriculum for the first 3 years followed by specialized study",
              "Integration of regional, economic, and cultural aspects in design"
            ],
          },
          {
            type: "heading",
            data: "B.Arch Program Objectives",
          },
          {
            type: "list",
            data: [
              "To stimulate sensitivity and unveil creative talents",
              "To develop proficiency in technical and professional skills",
              "To provide excellent career opportunities in architecture",
              "To attain excellence in architectural design and construction",
              "To encourage individual design approaches and cultural understanding"
            ],
          },
          {
            type: "heading",
            data: "Architecture Program Structure",
          },
          {
            type: "sub-heading",
            data: "First Year",
          },
          {
            type: "list",
            data: [
              "Architectural design studios and model workshops",
              "Drawing and communication techniques",
              "Building construction and materials",
              "Theory of structures and history of art",
              "Climatology and environmental studies"
            ],
          },
          {
            type: "sub-heading",
            data: "Second Year",
          },
          {
            type: "list",
            data: [
              "Advanced architectural design studios",
              "Building services and systems",
              "History of architecture",
              "Advanced theory of structures",
              "Construction technology and methods"
            ],
          },
          {
            type: "sub-heading",
            data: "Third Year",
          },
          {
            type: "list",
            data: [
              "Advanced computer applications in design",
              "Building construction and materials",
              "History and theory of architecture",
              "Quantities and specification management",
              "Advanced structural systems"
            ],
          },
          {
            type: "sub-heading",
            data: "Fourth Year",
          },
          {
            type: "list",
            data: [
              "Urban design and group housing",
              "Research Methodology",
              "Contract management",
              "Professional practice",
              "Town planning and development"
            ],
          },
          {
            type: "sub-heading",
            data: "Fifth Year",
          },
          {
            type: "list",
            data: [
              "Professional training and apprenticeship",
              "Construction documentation and drawings",
              "Site supervision and management",
              "Client interaction and presentations",
              "Final year thesis project"
            ],
          }
        ],
      },
      {
        label: "eligibility",
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }),
        content: [
          {
            type: "heading",
            data: "Eligibility and Admission",
          },
          {
            type: "paragraph",
            data:
              "Candidates must have passed the 10+2 examination with at least 50% aggregate marks in Physics, Chemistry, and Mathematics. Alternatively, candidates who have passed the 10+3 diploma examination with Mathematics as a compulsory subject with at least 50% marks in aggregate are also eligible.",
          },
          {
            type: "paragraph",
            data:
              "Additionally, students are required to clear the National Aptitude Test in Architecture (NATA) conducted by the Council of Architecture (COA) or another competent authority.",
          },
          {
            type: "paragraph",
            data:
              "Most architectural firms prefer to hire job applicants who have gained their education from the best colleges for architecture in India with appropriate accreditation status. When choosing from top architecture colleges in India, it is important to choose wisely. Many employers also check the educational background of their employees while promoting them or providing company advancements or assistance. Thus, earning a B.Arch degree from a recognized and established best college of architecture will significantly boost your career path.",
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
                  "Studios for Architectural Design",
                  "Drawing and Communication",
                  "Building Construction and Materials",
                  "Model Workshop",
                  "Theory of Structures",
                  "History of Art",
                  "Building Construction",
                  "History of Human Settlements",
                  "Climatology and Environmental Studies",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Building Services",
                  "History of Architecture",
                  "Theory of Structures",
                ],
              },
              {
                year: "Third Year",
                data: [
                  "Advanced Computer Applications",
                  "Studios for Architectural Design",
                  "Building Construction and Materials",
                  "History and Theory of Architecture",
                  "Building Services",
                  "Theory of Structure",
                  "Quantities, Specification, Estimation, and Contract Management",
                ],
              },
              {
                year: "Fourth Year",
                data: [
                  "Research Work",
                  "Urban Design or Group Housing Studio",
                  "Contract Management",
                  "Professional Practice",
                  "Town Planning",
                  "Theory of Structures",
                ],
              },
              {
                year: "Fifth Year",
                data: [
                  "Practical Training and Apprenticeship",
                  "Assistance in Designing",
                  "Preparation of Construction Drawings and Documentation",
                  "Visits to Construction Sites",
                  "Client Meetings",
                ],
              },
            ],
          },
          {
            label: "Key Features",
            type: "list",
            data: [
              "Curriculum designed in line with top architecture programs in India",
              "Hands-on experience through practical training and apprenticeships",
              "Exposure to regional, economic, cultural, and technological diversity",
              "Opportunities to work across disciplines for a rigorous course of study",
              "State-of-the-art laboratories and model workshops",
              "Focus on environmental sustainability and green building design",
              "Integration of advanced computer applications in architectural design",
            ],
          },
        ],
      },
  
      // {
      //   label: "instructor",
      //   icon: React.createElement(User, { className: "w-4 h-4" }),
      //   content: [
      //     {
      //       label: "Name",
      //       data: "Dr. Arjun Mehta",
      //     },
      //     {
      //       label: "Title",
      //       data: "Professor and Head of Department",
      //     },
      //     {
      //       label: "Degree",
      //       data: "Ph.D. in Architecture from IIT Delhi",
      //     },
      //     {
      //       label: "Specialization",
      //       data: "Sustainable Architecture and Urban Design",
      //     },
      //     {
      //       label: "Bio",
      //       data:
      //         "Dr. Arjun Mehta has over 20 years of experience in teaching and research in the field of architecture. He has published numerous papers in reputed journals and has been involved in several high-profile architectural projects.",
      //     },
      //     {
      //       label: "Avatar",
      //       data: "/placeholder.svg?height=64&width=64",
      //     },
      //   ],
      // },
      {
        label: "faqs",
        icon: React.createElement(HelpCircle, { className: "w-4 h-4" }),
        content: [
          {
            label: "FAQ 1",
            data: {
              question: "What are the admission requirements for the B.Arch program?",
              answer:
                "Candidates must have passed the 10+2 examination with at least 50% aggregate marks in Physics, Chemistry, and Mathematics. Alternatively, candidates with a 10+3 diploma in engineering with Mathematics as a compulsory subject and at least 50% marks in aggregate are also eligible. Additionally, students must clear the National Aptitude Test in Architecture (NATA).",
            },
          },
          {
            label: "FAQ 2",
            data: {
              question: "Is the B.Arch program accredited?",
              answer:
                "Yes, Indo Global Colleges is an accredited institution. Accreditation ensures that the degree is recognized and valued by employers and other educational institutions.",
            },
          },
          {
            label: "FAQ 3",
            data: {
              question: "What career opportunities are available after completing the B.Arch program?",
              answer:
                "Graduates can pursue careers in architectural firms, construction companies, urban planning departments, and various other sectors. They can also opt for higher studies or specialized certifications to enhance their career prospects.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "Are there internship opportunities during the B.Arch program?",
              answer:
                "Yes, the program includes practical training and apprenticeships with registered architects and organizations that provide services related to designing and construction, offering valuable hands-on experience.",
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
                "The B.Arch program at Indo Global Colleges is outstanding. The curriculum is comprehensive, and the faculty are highly knowledgeable and supportive.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Rohit Sharma",
              rating: 4,
              comment:
                "Great learning environment with excellent infrastructure. The practical training helped me gain real-world experience.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Sneha Gupta",
              rating: 5,
              comment:
                "I highly recommend this college for architecture. The emphasis on both theoretical and practical aspects prepared me well for my career.",
            },
          },
        ],
      },
    ],
  };
  
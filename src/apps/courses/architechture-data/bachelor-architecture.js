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
            data:
              "For undergraduates, Indo Global Colleges - the best Architecture College in Chandigarh offers a 5-year professional program leading to the Bachelor of Architecture degree. It is considered as one of the best colleges for architecture in India. The program comprises 10 semesters and focuses on subjects ranging from engineering, technology, and arts to the professional practice of architecture. The B.Arch program aims at attaining a high level of excellence in architectural design supported by lateral inputs from other subjects.",
          },
          {
            type: "paragraph",
            data:
              "Do you have a passion and interest in designing structures and want to design something to leave a mark in the world? Then, a career in architecture will be perfect for you. To pursue an architecture course in your graduation, you need to find the best architecture colleges in India from among which you can choose the one that suits your interest. The Bachelor of Architecture programme will help you hone your skills and expertise in the field, which you can further use to build a successful career ahead.",
          },
          {
            type: "paragraph",
            data:
              "Doing the B.Arch course at Indo Global Colleges, ranked among the top Architecture Colleges in Punjab and North India, students learn to communicate ideas through drawings and models, working fluidly and seamlessly between all modes of digital and analog representations. All students spend their first 3 years following the core curriculum designed to lay a strong foundation for architectural education. During the final four semesters in one of the best B.Arch colleges in India, students are encouraged to work across disciplines focusing on an intellectually speculative and rigorous course of study.",
          },
          {
            type: "paragraph",
            data:
              "Being the reputed Chandigarh architecture college, Indo Global Colleges facilitate students with opportunities to work in the field to gain practical knowledge. Students are also exposed to a wide range of subjects and elective courses to equip them with the skills and knowledge required to deal with the regional, economic, cultural, and technological diversity of India. Therefore, it is highly recommended that you consider applying to the best colleges for architecture.",
          },
          {
            type: "heading",
            data: "B.Arch Program Objectives",
          },
          {
            type: "list",
            data: [
              "To stimulate sensitivity and unveil creative talents.",
              "To reinforce intellectual capabilities and develop proficiency in technical and professional skills that allow pursuing alternative careers within the broad spectrum of architecture.",
              "To provide excellent career opportunities to students to try out the role they will play as responsible members of society.",
              "Attaining the highest level of excellence in architectural design with sound knowledge in construction.",
              "Encouraging students to design their individual design approaches through the analysis of theories, history of ideas, and cultural agendas.",
            ],
          },
          {
            type: "paragraph",
            data:
              "The best architecture colleges in Punjab are always accredited, which is very important. College accreditation ensures that certifications are recognized for their true value. Studying in an accredited college is crucial for your educational journey and future career goals. Therefore, before enrolling in any architecture college, make sure to verify its accreditation status.",
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
            type: "paragraph",
            data:
              "The first-year curriculum includes studios for architectural design, drawing and communication, building construction and materials, and practical courses for the model workshop. The theoretical courses include theory of structures, history of art, building construction, history of human settlements, and climatology and environmental studies.",
          },
          {
            type: "sub-heading",
            data: "Second Year",
          },
          {
            type: "paragraph",
            data:
              "The second-year curriculum continues with the same subjects as the first year. The theoretical courses covered are building services, history of architecture, and theory of structures.",
          },
          {
            type: "sub-heading",
            data: "Third Year",
          },
          {
            type: "paragraph",
            data:
              "In the third year of the B.Arch course, advanced computer applications are added to the curriculum along with studios for architectural design, building construction, and materials. The theoretical courses include history and theory of architecture, building services, and theory of structure, along with quantities, specification, estimation, and contract management.",
          },
          {
            type: "sub-heading",
            data: "Fourth Year",
          },
          {
            type: "paragraph",
            data:
              "The fourth-year curriculum includes research work. The design studio involves urban design or group housing. The course curriculum includes contract management, professional practice, town planning, and theory of structures.",
          },
          {
            type: "sub-heading",
            data: "Fifth Year",
          },
          {
            type: "paragraph",
            data:
              "The fifth and final year comprises practical training during which students undertake apprenticeships with registered architects in organizations that provide services related to designing and construction. The work includes assistance in designing, preparation of construction drawings and documentation, visits to construction sites, and attending meetings with clients.",
          },
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
            label: "Program Structure",
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
  
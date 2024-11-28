import {
    Star,
    Clock,
    GraduationCap,
    BookOpen,
    MapPin,
    List,
    HelpCircle,
    User,
  } from "lucide-react";
  import React from "react";
  
  export const MBA = {
    id: 4,
    title: "Master of Business Administration (MBA)",
    category: "MBA / Management",
    image:
      "https://example.com/path/to/image.jpg", // Replace with actual image URL
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
            data:
              "In today’s era, we all live in an environment of fierce competition. Political, economic, cultural, and regulatory factors make things more difficult. To rise above all these challenges, one needs to possess the required skills, understanding, enthusiasm, and intellect. The necessity of professionals in the growing corporate world is inevitable, where the competition is at its peak. To accommodate these demands, professional management programs are designed to help individuals learn to face and manage all types of circumstances successfully and efficiently.",
          },
          {
            type: "paragraph",
            data:
              "Indo Global Group of Colleges (IGEC) is one of the top MBA colleges in Punjab, offering a master's program in business administration to candidates who aspire to build a successful career in the global business arena. The Master in Business Administration (MBA) in Chandigarh is a 2-year full-time postgraduate management degree course. Combining the best career opportunities, academic excellence, and real-world industrial experience, our MBA program will leave a positive impact on your management career. We offer a highly practical program that provides hands-on experience and the best career opportunities in diverse fields.",
          },
          {
            type: "heading",
            data: "Our MBA Program Includes",
          },
          {
            type: "list",
            data: [
              "Wide choice in specializations and the possibility of combining industry-wise and functional specializations in the second year",
              "Primary focus on making students industry-ready",
              "Acclaimed faculty, including highly trained and experienced leaders from the industry",
              "Cutting-edge, industry-ready curriculum benchmarked with the current realities of the industry",
              "Pedagogy to develop a high degree of analytical and conceptual skills, including extensive use of live case studies, seminars, projects, and guest international faculty interactions with practice-based simulations",
              "Internships and regular industry visits with an emphasis on leadership and management skills to tackle growth",
              "Soft skill training that helps students understand, appreciate, and imbibe the key qualities of professional behavior that will help them in the future",
              "360-degree career growth roadmap for students",
              "Fuses academic and experimental learning techniques that provide a framework essential for a career in management, along with the context that puts new management skills into action",
            ],
          },
          {
            type: "paragraph",
            data:
              "Indo Global Colleges in Chandigarh is affiliated with Punjab Technical University (PTU) and all our MBA/Management programs are approved by the All India Council for Technical Education (AICTE). The curriculum of the MBA program at Indo Global Colleges enables students to evolve into professionally competent leaders of the future, ready to face the challenges of the industry. The Department of Management Studies at Indo Global Colleges has been offering MBA degrees to students since 2004.",
          },
          {
            type: "paragraph",
            data:
              "We at IGEC provide students with the much-needed corporate experience to groom them as industry-ready professionals. Students gain firsthand experience by working in real-life business environments, allowing them to learn essential skills and gain the expertise required by prospective employers. Considered one of the best MBA colleges in Punjab, Indo Global Colleges have corporate tie-ups with industry leaders like IBM Center of Excellence, Campus Business Park, and have signed memorandums of understanding (MoUs) with leading automotive brand Ashok Leyland for skill development initiatives, and with “E-Drona” for project assignments and completion.",
          },
        ],
      },
      {
        label: "eligibility",
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }),
        content: [
          {
            type: "heading",
            data: "Eligibility",
          },
          {
            type: "paragraph",
            data:
              "All candidates must have passed a Bachelor's Degree of minimum three years duration in any discipline from a University recognized by the University Grants Commission (UGC).",
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
                  "Introduction to Management",
                  "Financial Accounting",
                  "Marketing Principles",
                  "Organizational Behavior",
                  "Quantitative Methods",
                  "Business Communication",
                  "Economics for Managers",
                ],
              },
              {
                year: "Second Year",
                data: [
                  "Specialization Courses",
                  "Strategic Management",
                  "Operations Management",
                  "Human Resource Management",
                  "Business Analytics",
                  "International Business",
                  "Elective Courses",
                ],
              },
            ],
          },
          {
            label: "Key Features",
            type: "list",
            data: [
              "Wide choice of specializations with the possibility of combining industry-wise and functional specializations",
              "Industry-ready curriculum aligned with current industry standards",
              "Hands-on experience through live case studies, projects, and seminars",
              "Opportunities for internships and industry visits to enhance practical knowledge",
              "Soft skill training to develop professional behavior and interpersonal skills",
              "Mentorship and career counseling by industry experts",
              "Global exposure through guest lectures and international faculty interactions",
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
              question: "What is the duration of the MBA program?",
              answer:
                "The MBA program is a 2-year full-time postgraduate management degree course.",
            },
          },
          {
            label: "FAQ 2",
            data: {
              question: "What are the eligibility criteria for admission?",
              answer:
                "Candidates must have a Bachelor's Degree of minimum three years duration in any discipline from a University recognized by the UGC.",
            },
          },
          {
            label: "FAQ 3",
            data: {
              question: "Are there internship opportunities available during the MBA program?",
              answer:
                "Yes, the program includes internships and regular industry visits to provide hands-on experience and enhance practical knowledge.",
            },
          },
          {
            label: "FAQ 4",
            data: {
              question: "What specializations are available in the MBA program?",
              answer:
                "Specializations include Finance, Marketing, Information Technology, Human Resource Management, Operations Management, and Business Analytics.",
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
              name: "Rahul Verma",
              rating: 5,
              comment:
                "The MBA program at IGEC is exceptional. The curriculum is well-structured, and the faculty are highly knowledgeable and supportive.",
            },
          },
          {
            label: "Review 2",
            data: {
              name: "Priya Sharma",
              rating: 4,
              comment:
                "Great learning environment with ample opportunities for internships and industry exposure. The soft skills training was particularly beneficial.",
            },
          },
          {
            label: "Review 3",
            data: {
              name: "Amit Singh",
              rating: 5,
              comment:
                "IGEC's MBA program has equipped me with the necessary skills to excel in the corporate world. The practical approach and industry tie-ups are commendable.",
            },
          },
        ],
      },
    ],
  };
  
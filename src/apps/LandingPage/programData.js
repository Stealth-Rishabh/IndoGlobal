import path from "path";

export const programData = [
    {
      id: "undergraduate",
      title: "Undergraduate",
      programs: [
        {
          name: "B.Tech (CSE, ECE, ME, Civil)",
          description: "Our B.Tech program offers specializations in Computer Science, Electronics, Mechanical, and Civil Engineering. Students engage in cutting-edge research and hands-on projects.",
          duration: "4 years",
          eligibility: "10+2 with PCM, minimum 60% aggregate",
          path : '/courses/btech-computer-science-engineering'
        },
        {
          name: "B.Arch (Bachelor of Architecture)",
          description: "The B.Arch program focuses on architectural design, urban planning, and sustainable development. Students work on real-world projects and internships.",
          duration: "5 years",
          eligibility: "10+2 with PCM, minimum 50% aggregate, valid NATA score",
          path : '/courses/bachelors-of-architecture'
        },
        {
          name: "BBA (Bachelor of Business Administration)",
          description: "Our BBA program prepares future business leaders with a comprehensive curriculum covering management, finance, marketing, and entrepreneurship.",
          duration: "3 years",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          path : '/courses/bachelor-of-business-administration'
        },
        {
          name: "BCA (Bachelor of Computer Applications)",
          description: "The BCA program offers in-depth knowledge of computer applications, programming languages, and software development methodologies.",
          duration: "3 years",
          eligibility: "10+2 with Mathematics, minimum 50% aggregate",
          path : '/courses/bachelor-of-computer-applications'
        },
        {
          name: "B.Sc Paramedical",
          description: "This program trains students in various aspects of medical laboratory techniques, preparing them for careers in healthcare and research.",
          duration: "3 years",
          eligibility: "10+2 with PCB, minimum 50% aggregate",
          path : '/courses/bsc-in-medical-laboratory-science'
        }
      ],
      defaultCard: {
        title: "Undergraduate Programs",
        description: "Our undergraduate programs offer a wide range of disciplines, preparing students for successful careers and further studies. With state-of-the-art facilities and experienced faculty, we ensure a comprehensive learning experience.",
        path : '/courses'
      }
    },
    {
      id: "postgraduate",
      title: "Postgraduate",
      programs: [
        {
          name: "M.Tech (CSE, ME, Civil)",
          description: "Our M.Tech programs offer advanced specializations in various engineering disciplines, focusing on research and innovation.",
          duration: "2 years",
          eligibility: "B.Tech or equivalent, minimum 60% aggregate, valid GATE score",
          path : '/courses/mtech-computer-science-engineering'
        },
        {
          name: "MBA (Master of Business Administration)",
          description: "The MBA program develops future business leaders with a focus on global business practices, leadership, and strategic management.",
          duration: "2 years",
          eligibility: "Bachelor's degree in any discipline, minimum 50% aggregate, valid CAT/MAT score",
          path : '/courses/master-of-business-administration'
        },
        // {
        //   name: "MCA (Master of Computer Applications)",
        //   description: "The MCA program provides advanced knowledge in software development, database management, and emerging technologies.",
        //   duration: "2 years",
        //   eligibility: "Bachelor's degree with Mathematics, minimum 50% aggregate",
        //   path : '/courses/mca-master-of-computer-applications'
        // },
        // {
        //   name: "M.Sc (Data Science)",
        //   description: "This program focuses on advanced data analysis, machine learning, and big data technologies, preparing students for careers in data-driven industries.",
        //   duration: "2 years",
        //   eligibility: "Bachelor's degree in relevant discipline, minimum 55% aggregate",
        //   path : '/courses/m.sc.-(data-science)'
        // }
      ],
      defaultCard: {
        title: "Postgraduate Programs",
        description: "Our postgraduate programs offer advanced specializations and research opportunities across various disciplines. These programs are designed to enhance expertise and career prospects for working professionals and fresh graduates alike.",
        path : '/courses'
      }
    },
    {
      id: "diploma",
      title: "Diploma",
      programs: [
        {
          name: "Diploma in Civil Engineering",
          description: "This program provides practical skills in civil engineering, covering areas such as construction, surveying, and structural design.",
          duration: "3 years",
          eligibility: "10th pass with minimum 35% aggregate",
          path : '/courses/polytechnic-civil-engineering'
        },
        {
          name: "Diploma in Mechanical Engineering",
          description: "Students learn about mechanical systems, manufacturing processes, and CAD/CAM technologies in this hands-on program.",
          duration: "3 years",
          eligibility: "10th pass with minimum 35% aggregate",
          path : '/courses/polytechnic-mechanical-engineering'
        },
        // {
        //   name: "Diploma in Electrical Engineering",
        //   description: "This program covers electrical systems, power generation, and automation technologies, preparing students for various industrial roles.",
        //   duration: "3 years",
        //   eligibility: "10th pass with minimum 35% aggregate"
        // },
        // {
        //   name: "Diploma in Computer Science",
        //   description: "Students gain practical skills in programming, web development, and computer networking through this industry-oriented program.",
        //   duration: "3 years",
        //   eligibility: "10th pass with minimum 35% aggregate"
        // }
      ],
      defaultCard: {
        title: "Diploma Programs",
        description: "Our diploma programs offer practical, skill-based education in various technical fields. These programs are designed to produce industry-ready professionals with hands-on experience and technical knowledge.",
        path : '/courses'
      }
    }
  ];
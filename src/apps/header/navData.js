export const navlinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "Accreditation & Tie-ups", path: "/about/accreditation" },
      { name: "Location", path: "/about/location" },
      { name: "Vision & Mission", path: "/about/vision-mission" },
      { name: "Leadership", path: "/about/leadership" },
      { name: "Eminent Faculty", path: "/about/eminent-faculty" },
      { name: "Notable Alumni", path: "/about/notable-alumni" },
    ],
  },
  {
    name: "Courses",
    path: "/courses",
    dropdown: [
      {
        name: "Undergraduate",
        path: "/courses/undergraduate",
        subdropdown: [
          {
            name: "Engineering (B.Tech)",
            courses: [
              {
                name: "Mechanical Engineering",
                path: "/courses/btech-mechanical-engineering",
              },
              {
                name: "Computer Science Engineering", 
                path: "/courses/btech-computer-science-engineering",
              },
              {
                name: "Electronics and Communication Engineering",
                path: "/courses/btech-electronics-communication-engineering",
              },
              { name: "Civil Engineering", path: "/courses/btech-civil-engineering" },
            ],
          },
          {
            name: "Architecture",
            courses: [
              {
                name: "Bachelor of Architecture",
                path: "/courses/bachelors-of-architecture",
              },
            ],
          },
        ],
      },
      {
        name: "Postgraduate",
        path: "/courses/postgraduate",
        subdropdown: [
          {
            name: "Engineering (M.Tech)",
            courses: [
              { name: "Civil Engineering", path: "/courses/mtech-civil-engineering" },
              {
                name: "Computer Science Engineering",
                path: "/courses/mtech-computer-science-engineering",
              },
              {
                name: "Electronics and Communication Engineering",
                path: "/courses/mtech-electronics-communication-engineering",
              },
            ],
          },
          {
            name: "Management",
            courses: [
              {
                name: "Bachelor of Computer Application (BCA)",
                path: "/courses/bachelor-of-computer-applications",
              },
              
              {
                name: "Bachelor of Business Administration (BBA)",
                path: "/courses/bachelor-of-business-administration",
              },
              {
                name: "Master of Business Administration (MBA)",
                path: "/courses/master-of-business-administration",
              },
            ],
          },
        ],
      },
      {
        name: "Polytechnic",
        path: "/courses/polytechnic",
        subdropdown: [
          {
            name: "Engineering (Diploma)",
            courses: [
              {
                name: "Mechanical Engineering",
                path: "/courses/polytechnic-mechanical-engineering",
              },
              { name: "Civil Engineering", path: "/courses/polytechnic-civil-engineering" },
            ],
          },
          {
            name: "Paramedical Courses",
            courses: [
              {
                name: "B.Sc. Medical Laboratory Sciences (MLS)",
                path: "/courses/bsc-in-medical-laboratory-science",
              },
              {
                name: "B.Sc. Radiology & Imaging Technology",
                path: "/courses/bsc-radiology-and-imaging-technology",
              },
              {
                name: "B.Sc. Operation Theatre Technology",
                path: "/courses/bsc-in-operation-theatre",
              },
            ],
          },
          {
            name: "Pharmacy",
            courses: [
              {
                name: "Bachelor of Pharmacy (B.Pharmacy)",
                path: "/courses/b-pharmacy",
              },
            ],
          },
        ],
      },
    ],
  },
  { name: "Admissions", path: "/admissions" },
  {
    name: "Campus Life",
    path: "/spotlights",
    dropdown: [
      { name: "Spotlights", path: "/spotlights" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
  {
    name: "Why Indo Global",
    path: "/why-indo-global",
    dropdown: [
      {
        name: "Industry Oriented Curriculum",
        path: "/why-indo-global/industry-oriented-curriculum",
      },
      { name: "Sports Arena", path: "/why-indo-global/sports-arena" },
      { name: "Infrastructure", path: "/why-indo-global/infrastructure" },
      {
        name: "Great Transportation",
        path: "/why-indo-global/great-transportation",
      },
      { name: "Students Security", path: "/why-indo-global/students-security" },
      { name: "AICTE SPICES", path: "/why-indo-global/aicte-spices" },
      { name: "Hostel", path: "/why-indo-global/hostel" },
    ],
  },
  {
    name: "Placements",
    path: "/placements",
    dropdown: [
      { name: "Campus Recruitments", path: "/placements/campus-recruitments" },
      { name: "Industry Speaks", path: "/placements/industry-speaks" },
      { name: "Industry Tie-ups", path: "/placements/industry-tie-ups" },
      {
        name: "Placement Activities",
        path: "/placements/placement-activities",
      },
      { name: "Our Recruiters", path: "/placements/our-recruiters" },
    ],
  },
  { name: "Blogs", path: "/blog" },
  { name: "Contact", path: "/contact-us" },
];

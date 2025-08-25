const BASE_URL = "https://www.igef.net";

export const seoConfig = {
  home: {
    path: "/",
    title: "Best Architecture & Engineering College in Chandigarh | IGEF",
    description:
      "Join Indo Global Group of Colleges, the best architecture & engineering college in Chandigarh. Explore B.Tech, MBA, Polytechnic & more. Apply today!",
    h1: "Best Architecture & Engineering College in Chandigarh - IGEF",
  },

  about: {
    accreditation: {
      path: "/about/accreditation",
      title: "IGEF Accreditation | Recognized Excellence in Education",
      description:
        "Explore the accreditations of IGEF, highlighting our commitment to academic excellence, global standards, and quality education for a brighter future.",
      h1: "Accreditations of IGEF - Ensuring Excellence in Education",
    },
    location: {
      path: "/about/location",
      title:
        "Location of Indo Global Education Foundation | IGEF Campus Details",
      description:
        "Explore the location of the Indo Global Education Foundation (IGEF). Discover campus details, accessibility, and directions to our vibrant learning hub.",
      h1: "Discover the Location of Indo Global Education Foundation",
    },
    visionMission: {
      path: "/about/vision-mission",
      title: "Vision and Mission | Indo Global Group of Colleges",
      description:
        "Discover the vision and mission of Indo Global Group of Colleges, fostering academic excellence and innovation for future leaders in education and industry.",
      h1: "Vision and Mission of Indo Global Group of Colleges",
    },
    leadership: {
      path: "/about/leadership",
      title: "Leadership at IGEF | Meet Our Visionary Team",
      description:
        "Discover the leadership team of IGEF dedicated to excellence in education. Learn about our vision, mission, and commitment to shaping future leaders.",
      h1: "Meet the Visionary Leaders of IGEF",
    },
    eminentFaculty: {
      path: "/about/eminent-faculty",
      title: "Eminent Faculty at Indo Global Group of Colleges | IGEF",
      description:
        "Discover the experienced and accomplished faculty at Indo Global Group of Colleges. Learn how their expertise shapes future-ready professionals.",
      h1: "Meet Our Eminent Faculty at Indo Global Group of Colleges",
    },
    notableAlumni: {
      path: "/about/notable-alumni",
      title: "Notable Alumni of Indo Global Group of Colleges | IGEF",
      description:
        "Explore the success stories of our notable alumni who have made significant contributions to various fields.",
      h1: "Notable Alumni of Indo Global Group of Colleges",
    },
  },

  courses: {
    index: {
      path: "/courses",
      title:
        "Explore Courses at Indo Global College - Top College in Chandigarh",
      description:
        "Check out the wide range of courses offered by Indo Global College, a leading engineering and architecture college in Chandigarh. Enroll in your dream course today!",
      h1: "Explore Top Courses at Indo Global College in Chandigarh",
    },
    // Course paths mapped for dynamic routing
    paths: {
      "btech-mechanical-engineering": {
        title: "Top B.Tech Mechanical Engineering College in Chandigarh - IGEF",
        description:
          "Join the best B.Tech Mechanical Engineering program at Indo Global College, a top engineering college in Chandigarh & Punjab. Enroll now for a bright future!",
        h1: "Best B.Tech Mechanical Engineering College in Chandigarh",
      },
      "btech-computer-science-engineering": {
        title: "Top BTech College for Computer Science in Chandigarh | IGEF",
        description:
          "Join Indo Global College, a top BTech college in Chandigarh for Computer Science. Explore cutting-edge subjects & shape your future in engineering. Apply now!",
        h1: "Best BTech College for Computer Science & Engineering in Chandigarh",
      },
      "btech-electronics-communication-engineering": {
        title:
          "Best B.Tech Electronics & Communication Engineering College - IGEF",
        description:
          "Join Indo Global College, a top engineering college in Chandigarh, offering the best B.Tech in Electronics & Communication Engineering with advanced curriculum & placements.",
        h1: "Best B.Tech Electronics & Communication Engineering College in Chandigarh",
      },
      "btech-civil-engineering": {
        title: "Top B.Tech Civil Engineering College in Chandigarh | IGEF",
        description:
          "Join Indo Global College, a top B.Tech Civil Engineering college in Chandigarh. Build a strong foundation for your career with expert faculty & modern infrastructure.",
        h1: "B.Tech Civil Engineering at Indo Global College – Top Choice in Chandigarh",
      },
      "bachelors-of-architecture": {
        title:
          "Best Architecture College in Chandigarh | Top B.Arch College India",
        description:
          "Join Indo Global College, the best architecture college in Chandigarh. Explore top B.Arch programs in India with expert faculty & world-class infrastructure.",
        h1: "Best Architecture College in Chandigarh – Top B.Arch Programs",
      },
      "mtech-civil-engineering": {
        title: "M.Tech Civil Engineering | Top Engineering College Chandigarh",
        description:
          "Advance your career with M.Tech Civil Engineering at Indo Global College, a top engineering college in Chandigarh. Enroll today for industry-focused learning.",
        h1: "M.Tech Civil Engineering at Chandigarh's Top Engineering College",
      },
      "mtech-computer-science-engineering": {
        title: "MTech in Computer Science Engineering at Indo Global College",
        description:
          "Join Indo Global College in Chandigarh for MTech in Computer Science Engineering. Top engineering college in Punjab offering advanced tech education.",
        h1: "MTech in Computer Science Engineering at Indo Global College, Chandigarh",
      },
      "mtech-electronics-communication-engineering": {
        title: "M.Tech Electronics & Communication Engineering - IGEF",
        description:
          "Join the best engineering college in Chandigarh for M.Tech in Electronics & Communication Engineering. Advance your career with top engineering courses.",
        h1: "M.Tech in Electronics & Communication Engineering at IGEF College, Chandigarh",
      },
      "bachelor-of-computer-applications": {
        title:
          "Bachelor of Computer Applications - Best Engineering College in Chandigarh",
        description:
          "Explore the Bachelor of Computer Applications course at Indo Global College, a top engineering college in Chandigarh offering quality education for future leaders.",
        h1: "Bachelor of Computer Applications (BCA) at Indo Global College - Best Engineering College in Chandigarh",
      },
      "bachelor-of-business-administration": {
        title:
          "Bachelor of Business Administration - Best BBA Colleges in Chandigarh",
        description:
          "Explore top BBA courses at IGEF. Enroll at one of the best BBA colleges in Chandigarh for a successful career in business administration.",
        h1: "Bachelor of Business Administration (BBA) - Best College in Chandigarh",
      },
      "master-of-business-administration": {
        title:
          "Master of Business Administration | Best MBA College in Chandigarh",
        description:
          "Join the best MBA college in Chandigarh. Explore top courses and career opportunities at Indo Global College, a leading institute for business education.",
        h1: "Master of Business Administration - Top MBA Course in Chandigarh",
      },
      "polytechnic-mechanical-engineering": {
        title: "Best Polytechnic Course in Mechanical Engineering | IGEF",
        description:
          "Join the best Polytechnic Mechanical Engineering course at IGEF, one of the top engineering colleges in Chandigarh. Secure a bright future in engineering.",
        h1: "Polytechnic Mechanical Engineering Course at IGEF - Top College in Chandigarh",
      },
      "polytechnic-civil-engineering": {
        title: "Polytechnic Civil Engineering Courses in Chandigarh - IGEF",
        description:
          "Explore top Polytechnic Civil Engineering courses at Indo Global College, one of the best engineering colleges in Chandigarh and Punjab.",
        h1: "Polytechnic Civil Engineering Courses at Indo Global College",
      },
      "bsc-in-medical-laboratory-science": {
        title:
          "B.Sc. in Medical Laboratory Science | Top Colleges in Chandigarh",
        description:
          "Enroll in B.Sc. in Medical Laboratory Science at IGEF. Join one of the best colleges in Chandigarh offering quality education for aspiring medical professionals.",
        h1: "B.Sc. in Medical Laboratory Science at IGEF | Best College in Chandigarh",
      },
      "bsc-radiology-and-imaging-technology": {
        title: "BSc Radiology & Imaging Technology Course - IGEF College",
        description:
          "Explore the BSc Radiology and Imaging Technology course at IGEF College in Chandigarh. Join one of the best engineering colleges for a rewarding career.",
        h1: "BSc Radiology and Imaging Technology Course at IGEF College, Chandigarh",
      },
      "bsc-in-operation-theatre": {
        title: "B.Sc. in Operation Theatre at IGEF - Top College in Chandigarh",
        description:
          "Enroll in B.Sc. in Operation Theatre at IGEF, one of the best engineering colleges in Chandigarh. Pursue your dreams with top courses in healthcare.",
        h1: "B.Sc. in Operation Theatre - Best Course at IGEF College Chandigarh",
      },
      "bsc-in-cardiac-care-technology": {
        title:
          "B.Sc. in Cardiac Care Technology at IGEF - Top College in Chandigarh",
        description:
          "Enroll in B.Sc. in Cardiac Care Technology at IGEF, one of the best engineering colleges in Chandigarh. Pursue your dreams with top courses in healthcare.",
        h1: "B.Sc. in Cardiac Care Technology - Best Course at IGEF College Chandigarh",
      },
      "msc-in-radiology-imaging-technology": {
        title:
          "M.Sc. in Radiology & Imaging Technology at IGEF - Top College in Chandigarh",
        description:
          "Enroll in M.Sc. in Radiology & Imaging Technology at IGEF, one of the best engineering colleges in Chandigarh. Pursue your dreams with top courses in healthcare.",
        h1: "M.Sc. in Radiology & Imaging Technology - Best Course at IGEF College Chandigarh",
      },
      "msc-in-medical-laboratory-sciences-biochemistry": {
        title:
          "M.Sc. in Medical Laboratory Sciences (Biochemistry) at IGEF - Top College in Chandigarh",
        description:
          "Enroll in M.Sc. in Medical Laboratory Sciences (Biochemistry) at IGEF, one of the best engineering colleges in Chandigarh. Pursue your dreams with top courses in healthcare.",
        h1: "M.Sc. in Medical Laboratory Sciences (Biochemistry) - Best Course at IGEF College Chandigarh",
      },
      "b-pharmacy": {
        title: "B.Pharmacy Course | Top Pharmacy College in Chandigarh",
        description:
          "Join the B.Pharmacy program at Indo Global College, a leading pharmacy college in Chandigarh. Build a successful career in the pharmaceutical sciences.",
        h1: "Bachelor of Pharmacy (B.Pharmacy) at Indo Global College",
      },
    },
  },

  admissions: {
    path: "/admissions",
    title: "Admissions - IGEF Institute | Apply Now for Your Future",
    description:
      "Explore admission details for IGEF Institute. Apply for undergraduate and postgraduate courses. Start your educational journey today!",
    h1: "Admissions at IGEF Institute - Apply Now!",
  },

  spotlights: {
    path: "/spotlights",
    title: "Spotlights | IGEF - Discover Inspirational Stories & Achievements",
    description:
      "Explore IGEF's Spotlights section to read inspiring stories, achievements, and highlights from our community, showcasing excellence in various fields.",
    h1: "Spotlights - Celebrating Excellence and Inspiring Stories",
  },

  gallery: {
    path: "/gallery",
    title: "Gallery - IGEF | Capturing Moments of Excellence",
    description:
      "Explore the gallery of IGEF showcasing events, achievements, and memorable moments. A visual journey of success and excellence at IGEF.",
    h1: "IGEF Gallery - Celebrating Milestones and Memories",
  },

  placements: {
    campusRecruitments: {
      path: "/placements/campus-recruitments",
      title: "Campus Recruitments at Indo Global College - Placement Drive",
      description:
        "Explore the campus recruitment opportunities at Indo Global College, one of the top engineering and architecture colleges in Chandigarh. Secure your future today!",
      h1: "Campus Recruitment at Indo Global College - Leading College in Chandigarh",
    },
    industrySpeaks: {
      path: "/placements/industry-speaks",
      title: "Industry Speaks - Placement Opportunities at Indo Global College",
      description:
        "Explore placement opportunities and industry insights at Indo Global College, one of the best engineering and architecture colleges in Chandigarh.",
      h1: "Industry Speaks - Placement Opportunities at Indo Global College",
    },
    industryTieUps: {
      path: "/placements/industry-tie-ups",
      title: "Industry Tie-Ups at Indo Global College - Top Placement Support",
      description:
        "Explore industry tie-ups at Indo Global College, enhancing placements for students in engineering, architecture, and other top courses in Chandigarh.",
      h1: "Strong Industry Tie-Ups for Top Placements at Indo Global College",
    },
    placementActivities: {
      path: "/placements/placement-activities",
      title: "Top Placement Activities at Indo Global College, Chandigarh",
      description:
        "Explore placement activities at Indo Global College in Chandigarh. We provide excellent career opportunities for students in engineering, architecture, and more.",
      h1: "Placement Activities at Indo Global College - Shaping Careers",
    },
    ourRecruiters: {
      path: "/placements/our-recruiters",
      title: "Top Recruiters at Indo Global College - Placements & Careers",
      description:
        "Explore the top recruiters at Indo Global College, Chandigarh. We connect students with leading companies for placements in engineering, architecture, and more.",
      h1: "Our Recruiters - Leading Companies Hiring Indo Global College Students",
    },
  },

  whyIndoGlobal: {
    industryOrientedCurriculum: {
      path: "/why-indo-global/industry-oriented-curriculum",
      title: "Industry-Oriented Curriculum at Indo Global College",
      description:
        "Discover Indo Global's industry-oriented curriculum, offering best-in-class architecture and engineering courses in Chandigarh. Prepare for a successful career in design & tech.",
      h1: "Why Choose Indo Global College for Industry-Oriented Education",
    },
    entrepreneurship: {
      path: "/why-indo-global/entrepreneurship",
      title: "Entrepreneurship at Indo Global College",
      description:
        "Discover entrepreneurship opportunities at Indo Global College. Learn how we nurture future business leaders through innovation and guidance.",
      h1: "Entrepreneurship Development at Indo Global College",
    },
    sportsArena: {
      path: "/why-indo-global/sports-arena",
      title: "Sports Arena at Indo Global - Top Architecture College in India",
      description:
        "Explore the state-of-the-art sports arena at Indo Global College, one of the top architecture colleges in Chandigarh, offering world-class facilities.",
      h1: "Sports Arena at Indo Global College - Best Architecture College in Chandigarh",
    },
    infrastructure: {
      path: "/why-indo-global/infrastructure",
      title: "Best Architecture College in India | Indo Global Infrastructure",
      description:
        "Discover the best architecture colleges in India. Indo Global College offers top courses and infrastructure for aspiring architects in Chandigarh.",
      h1: "Why Indo Global College Offers the Best Architecture Infrastructure",
    },
    greatTransportation: {
      path: "/why-indo-global/great-transportation",
      title: "Great Transportation at Indo Global College, Chandigarh",
      description:
        "Explore excellent transportation services at Indo Global College, Chandigarh, making it easy for students to commute to the best engineering and architecture colleges.",
      h1: "Great Transportation Services at Indo Global College, Chandigarh",
    },
    studentsSecurity: {
      path: "/why-indo-global/students-security",
      title: "Student Security at Indo Global College - Safe Campus",
      description:
        "Experience a secure learning environment at Indo Global College, one of the top colleges in Chandigarh. Prioritizing student safety and well-being.",
      h1: "Student Security and Safety at Indo Global College",
    },
    aicteSpices: {
      path: "/why-indo-global/aicte-spices",
      title: "AICTE SPICES Program at Indo Global College - Chandigarh",
      description:
        "Join Indo Global College, Chandigarh, for AICTE SPICES Program. A top architecture and engineering college offering the best education in various disciplines.",
      h1: "AICTE SPICES Program at Indo Global College, Chandigarh",
    },
    hostel: {
      path: "/why-indo-global/hostel",
      title: "Hostel Facilities at Indo Global College - Best in Chandigarh",
      description:
        "Experience top-class hostel facilities at Indo Global College, offering safe, comfortable, and affordable accommodations for students in Chandigarh.",
      h1: "Top-Notch Hostel Facilities at Indo Global College, Chandigarh",
    },
  },

  careers: {
    path: "/careers",
    title: "Careers at IGEF | Join Our Team of Educators",
    description:
      "Explore career opportunities at IGEF. Join our team of dedicated educators and professionals shaping the future of education.",
    h1: "Career Opportunities at IGEF",
  },

  contactUs: {
    path: "/contact-us",
    title: "Contact IGEF - Reach Out to Us for Queries and Assistance",
    description:
      "Get in touch with the IGEF team for any queries, assistance, or information. Fill out the contact form or call us to connect. We're here to help you!",
    h1: "Contact Us - We're Here to Assist You",
  },

  onlineLearningResources: {
    path: "/online-learning-resources",
    title: "Online Learning Resources - Indo Global Engineering College",
    description:
      "Explore top online learning resources at Indo Global College. Enhance your skills in architecture, engineering, and more with our expert-led programs.",
    h1: "Explore Online Learning Resources at Indo Global College",
  },

  onlineGrievance: {
    path: "/online-grievance",
    title: "Online Grievance Redressal System - Indo Global College",
    description:
      "Submit your grievances easily with Indo Global College's online grievance redressal system. We value your feedback for a better academic environment.",
    h1: "Online Grievance Redressal System - Indo Global College",
  },

  alumniLogin: {
    path: "/alumni-login",
    title: "IGEF Alumni Login | Connect with Your Alumni Network",
    description:
      "Login to the IGEF Alumni Portal to reconnect with peers, explore opportunities, and stay updated on alumni events. Join your community today!",
    h1: "Welcome to the IGEF Alumni Portal",
  },

  alumniSignup: {
    path: "/alumni-signup",
    title: "IGEF Alumni Signup | Join Your Alumni Network",
    description:
      "Sign up for the IGEF Alumni Portal to connect with fellow alumni, access exclusive resources, and stay connected with your alma mater.",
    h1: "Join the IGEF Alumni Network - Sign Up Today",
  },

  legal: {
    terms: {
      path: "/terms-and-conditions",
      title: "Terms and Conditions | Indo Global Education Foundation",
      description:
        "Read the Terms and Conditions for using the Indo Global Education Foundation website, services, and resources.",
      h1: "Terms and Conditions",
    },
    privacy: {
      path: "/privacy-policy",
      title: "Privacy Policy | Indo Global Education Foundation",
      description:
        "Learn how Indo Global Education Foundation collects, uses, and protects your personal information.",
      h1: "Privacy Policy",
    },
  },
};

export const getSeoDataByPath = (path) => {
  // For course detail pages
  if (path && path.startsWith("/courses/")) {
    const coursePath = path.replace("/courses/", "");
    return seoConfig.courses.paths[coursePath];
  }

  // For other pages, flatten and search the config
  const flattenConfig = (config, parentPath = "") => {
    return Object.entries(config).reduce((acc, [key, value]) => {
      if (value.path) {
        acc[value.path] = value;
      } else if (typeof value === "object" && !value.getMetadata) {
        acc = { ...acc, ...flattenConfig(value, `${parentPath}${key}/`) };
      }
      return acc;
    }, {});
  };

  const flattenedConfig = flattenConfig(seoConfig);
  return flattenedConfig[path];
};

export const getCanonicalUrl = (path) => `${BASE_URL}${path}`;

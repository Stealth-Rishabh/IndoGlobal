import basketball from "../../assets/sports-arena/basketball.webp";
import football from "../../assets/sports-arena/football.webp";
import kabaddi from "../../assets/sports-arena/kabaddi.webp";
import sportsArena1 from "../../assets/sports-arena/sportsArena (1).webp";
import sportsArena2 from "../../assets/sports-arena/sportsArena (2).webp";
import sportsArena3 from "../../assets/sports-arena/sportsArena (3).webp";
import sportsArena4 from "../../assets/sports-arena/sportsArena (4).webp";

export const sportsData = [
  {
    title: "Sports Club",
    description:
      "We empower students to excel both in the classroom and on the field, fostering resilience and peak performance in sports like football, volleyball, cricket, and basketball. At IGC, we believe success isn't just about talent—it's about tapping into inner drive to reach goals. Through engaging activities, we keep students’ passion for these sports sharp, especially under pressure, helping them rise to every challenge and deliver excellence on and off the field.",
    items: [
      {
        src: football,
        alt: "Photo by Minh Pham",
        label: "Football",
        height: "h-48",
        mdHeight: "md:col-span-2 md:h-80",
      },
      {
        src: basketball,
        alt: "Photo by Magicle",
        label: "Basketball",
        height: "h-48",
        mdHeight: "md:h-80",
      },
      {
        src: kabaddi,
        alt: "Photo by Martin Sanchez",
        label: "Kabaddi",
        height: "h-48",
        mdHeight: "md:h-80",
      },
      {
        src: "https://www.bennett.edu.in/wp-content/uploads/2021/07/2-Outdoor-Volley-Ball-Courts.jpeg",
        alt: "Photo by Lorenzo Herrera",
        label: "Volleyball",
        height: "h-48",
        mdHeight: "md:col-span-2 md:h-80",
      },
    ],
  },

  {
    title: "Fitness Club",
    description:
      "Our Fitness Club encourages students to prioritize physical health and well-being, providing resources and activities that promote endurance, strength, and a balanced lifestyle. Through a variety of fitness programs, students cultivate discipline, resilience, and a passion for healthy living, empowering them to excel both academically and personally.",
    items: [
      {
        src: "https://img.freepik.com/free-photo/yoga-park_23-2147645731.jpg?t=st=1733826001~exp=1733829601~hmac=d599e99e9cf075b90850a2f444e22c9e326a9dee62646b886badefb7bcd22dde&w=1060",
        alt: "Photo by Minh Pham",
        label: "Yoga",
        height: "h-48",
        mdHeight: "md:col-span-2 md:h-80",
      },
      {
        src: "https://img.freepik.com/free-photo/man-face-down-lifting-arms-legs_1163-765.jpg?t=st=1733826068~exp=1733829668~hmac=5fc1af6c031c80d66dcfa00029c9761cfba4033e9bac4247a0fe22e3f1120409&w=1060",
        alt: "Photo by Magicle",
        label: "Strength Training",
        height: "h-48",
        mdHeight: "md:h-80",
      },
      {
        src: "https://img.freepik.com/free-photo/pleased-young-sporty-man-wearing-headband-wristband-holding-dumbbells-with-yoga-mat_141793-89495.jpg?t=st=1733826243~exp=1733829843~hmac=0fdffae70742e80db8900613d66f40d0383dc4f1a837838c8f1c4bfb17cb60f7&w=996",
        label: "Cardio Sessions",
        height: "h-48",
        mdHeight: "md:h-80",
      },
      {
        src: "https://img.freepik.com/free-photo/focused-young-indian-man-meditating-lotus-pose_1262-12658.jpg?t=st=1733826303~exp=1733829903~hmac=e7a4f4b7fed9d5b236f7023a5a8b6b1d4e3b6e5be4e79d9db198a6a0e2e27a6b&w=1060",
        alt: "Photo by Lorenzo Herrera",
        label: "Meditation",
        height: "h-48",
        mdHeight: "md:col-span-2 md:h-80",
      },
    ],
  },

  {
    title: "Student Achievements",
    description:
      "IGC celebrates student achievements across academics, sports, and community initiatives. Our students strive for excellence, bringing home awards and honors that showcase their hard work and dedication. Through a commitment to personal growth, IGC students set high standards and achieve remarkable milestones that inspire others.",
    items: [
      {
        src: sportsArena3,
        alt: "Photo by Minh Pham",
        label: "Academic Excellence",
        height: "h-48",
        mdHeight: "md:col-span-2 md:h-80",
      },
      {
        src: sportsArena2,
        alt: "Photo by Magicle",
        label: "Sports Championships",
        height: "h-48",
        mdHeight: "md:h-80",
      },
      {
        src: sportsArena1,
        alt: "Photo by Martin Sanchez",
        label: "Community Impact",
        height: "h-48",
        mdHeight: "md:h-80",
      },
      {
        src: sportsArena4,
        alt: "Photo by Lorenzo Herrera",
        label: "Research and Development",
        height: "h-48",
        mdHeight: "md:col-span-2 md:h-80",
      },
    ],
  },
];

// data.js
export const infrastructureData = [
  {
    title: "Labs & Workshops",
    description: `
      Labs are a cornerstone of hands-on learning at IGC, with state-of-the-art facilities equipped to support specialized education across fields. Each lab features the latest configurations, software, and tools necessary for skill development. In addition, students benefit from 2-3 day workshops in areas like mural making and sculpture, taught by industry experts.
    `,
    stories: [
      {
        text: "High-tech labs with the latest configurations and software for specialized learning.",
      },
      {
        text: "Frequent hands-on workshops in creative disciplines such as mural making and sculpture.",
      },
      {
        text: "Guidance from guest experts in the field during intensive workshops.",
      },
      {
        text: "Well-equipped spaces supporting diverse educational needs and specializations.",
      },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3574.jpg?t=st=1731569939~exp=1731573539~hmac=3f5c43fdb263946264578367c238f42d8c7be1c35c4a5fe4b38acc64254f0e58&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/new-test-concentrated-skilled-researchers-wearing-uniform-doing-test-creating-vaccine_1157-48124.jpg?t=st=1731569248~exp=1731572848~hmac=574a3babf54e1cb52cfa134b4012c5efb043f044c0ffbf1686d9bd21c784f5b2&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3557.jpg?t=st=1731569899~exp=1731573499~hmac=035302a69d7a92dbc8a7073f3b626bb99a6f2e540dc031c27307ab2923a3d275&w=360",
      },
      {
        name: "Facebook",
        img: "https://img.freepik.com/free-photo/selective-focus-medical-transparent-equipment-standing-table_482257-16126.jpg?t=st=1731569309~exp=1731572909~hmac=bf73763201ab403811a5febd7b53d1ba846d9208cc068541f4a630e54bee4e8e&w=360",
      },
    ],
  },

  {
    title: "Studios",
    description: `
      Our college boasts a range of modern studios fully equipped with top-notch drawing, drafting, and printing tools. These studios provide Architecture and Interior Design students with all the resources they need to bring their creative visions to life.
    `,
    stories: [
      {
        text: "Modern studios designed for Architecture and Interior Design students.",
      },
      {
        text: "Comprehensive tools for drawing, drafting, and printing available in every studio.",
      },
      {
        text: "A productive space tailored for hands-on project work and design thinking.",
      },
      {
        text: "Professional-grade instruments that prepare students for real-world work.",
      },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/man-with-microphone-headphones-running-podcast-studio_23-2149434325.jpg?t=st=1731570224~exp=1731573824~hmac=6ef616f549b1cb98d3258bb18b93f384ed75c3f72b09067d273bf59ac4f1a2ea&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/high-angle-friends-taking-selfie_23-2148602760.jpg?t=st=1731570260~exp=1731573860~hmac=32c16e5e8572bbdb80394587bd6fb2005686db7c37c409563acef44571b43958&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/female-fitness-instructor-teaching-online-class-from-home-using-camera-tripod_23-2149320139.jpg?t=st=1731570301~exp=1731573901~hmac=97332b1d7a5b06328d895ddcc6e593bd2d6e4408879ca2af8fa28150a82c4d14&w=360",
      },
    ],
  },

  {
    title: "Internet",
    description: `
      Our institute provides robust, high-speed internet access for students and faculty, ensuring everyone can stay current with the latest in technological developments. With a high-bandwidth (9 Mbps) RF link and Wi-Fi coverage across the campus, connectivity is both reliable and fast.
    `,
    stories: [
      {
        text: "High-speed, uninterrupted internet access throughout the campus.",
      },
      { text: "9 Mbps RF link for enhanced connectivity." },
      { text: "Wi-Fi enabled campus for convenience and mobility." },
      {
        text: "Supports research and learning with reliable, fast internet access.",
      },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/young-woman-shopping-through-electronic-app_1163-3210.jpg?t=st=1731570361~exp=1731573961~hmac=ae43d6fc8982aca7260c5e543eab559150b752c5a3bb77499698d3706da96f83&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/top-view-wi-fi-router-with-laptop-ethernet-cables_23-2148779233.jpg?t=st=1731570399~exp=1731573999~hmac=4874594932a566b3ff836020cb6d0c5c29c02785656c6e6685cf51f46f4f33e8&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/beautiful-optical-fiber-detail_23-2149182512.jpg?t=st=1731570433~exp=1731574033~hmac=a7153762795a4b15f9486973081df248d5eaaf6718590181464f8ad90246c8f3&w=360",
      },
    ],
  },

  {
    title: "Library",
    description: `Indo Global Colleges features a central library along with departmental libraries, housing a diverse collection of over 30,000 books and resources. This fully air-conditioned space includes study areas for national and international magazines, journals, and newspapers, alongside e-journals, e-books, and audio-visual resources.
    `,
    stories: [
      {
        text: "Main and departmental libraries with over 30,000 books and resources.",
      },
      {
        text: "Dedicated study areas for magazines, journals, and newspapers.",
      },
      { text: "Access to e-journals, e-books, and audio-visual resources." },
      { text: "Comfortable, air-conditioned environment for focused study." },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/teenagers-reading-near-friend-choosing-book_23-2147864013.jpg?t=st=1731573700~exp=1731577300~hmac=30a419127675ccecb8b3ddf4f866355eb6ca6530d654aa465102a445895074c9&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/guy-sitting-floor-library_23-2147679281.jpg?t=st=1731573717~exp=1731577317~hmac=dd6e948a7f15c1dc76a6a8baa71cbedf10f46b8a0cc3d9713da07e4006f8b387&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/female-looking-book-library_329181-19501.jpg?t=st=1731573745~exp=1731577345~hmac=a1cfdd024b1433a24549db72f76ca5de464386ee62e80903af686d967478609d&w=360",
      },
    ],
  },

  {
    title: "Canteen",
    description: `
      Our college canteen offers a variety of cuisines, providing students with hygienic, high-quality food options. From snacks and beverages to full meals, everything is available at reasonable prices.
    `,
    stories: [
      { text: "Multi-cuisine canteen with a variety of food options." },
      { text: "Emphasis on quality, hygiene, and reasonable prices." },
      { text: "Serves snacks, juices, cold drinks, tea, and coffee." },
      { text: "A convenient spot for students to refuel between classes." },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3574.jpg?t=st=1731569939~exp=1731573539~hmac=3f5c43fdb263946264578367c238f42d8c7be1c35c4a5fe4b38acc64254f0e58&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/new-test-concentrated-skilled-researchers-wearing-uniform-doing-test-creating-vaccine_1157-48124.jpg?t=st=1731569248~exp=1731572848~hmac=574a3babf54e1cb52cfa134b4012c5efb043f044c0ffbf1686d9bd21c784f5b2&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3557.jpg?t=st=1731569899~exp=1731573499~hmac=035302a69d7a92dbc8a7073f3b626bb99a6f2e540dc031c27307ab2923a3d275&w=360",
      },
      {
        name: "Facebook",
        img: "https://img.freepik.com/free-photo/selective-focus-medical-transparent-equipment-standing-table_482257-16126.jpg?t=st=1731569309~exp=1731572909~hmac=bf73763201ab403811a5febd7b53d1ba846d9208cc068541f4a630e54bee4e8e&w=360",
      },
    ],
  },

  {
    title: "Student Activity Centre",
    description: `
      The Student Activity Centre (SAC) is a hub for various technical and cultural societies, offering spaces for practice and event organization. SAC also includes a gym, food court, and other recreational facilities, fostering a vibrant student community.
    `,
    stories: [
      {
        text: "Dedicated spaces for technical and cultural society activities.",
      },
      { text: "Gym, food court, and recreational facilities within SAC." },
      { text: "Supports practice and event organization for student groups." },
      { text: "Encourages an active and engaged student community." },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3574.jpg?t=st=1731569939~exp=1731573539~hmac=3f5c43fdb263946264578367c238f42d8c7be1c35c4a5fe4b38acc64254f0e58&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/new-test-concentrated-skilled-researchers-wearing-uniform-doing-test-creating-vaccine_1157-48124.jpg?t=st=1731569248~exp=1731572848~hmac=574a3babf54e1cb52cfa134b4012c5efb043f044c0ffbf1686d9bd21c784f5b2&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3557.jpg?t=st=1731569899~exp=1731573499~hmac=035302a69d7a92dbc8a7073f3b626bb99a6f2e540dc031c27307ab2923a3d275&w=360",
      },
      {
        name: "Facebook",
        img: "https://img.freepik.com/free-photo/selective-focus-medical-transparent-equipment-standing-table_482257-16126.jpg?t=st=1731569309~exp=1731572909~hmac=bf73763201ab403811a5febd7b53d1ba846d9208cc068541f4a630e54bee4e8e&w=360",
      },
    ],
  },

  {
    title: "Medical Facility",
    description: `
      Our campus provides a medical facility with a resident doctor and nurse, along with a fully-equipped first aid and medical checkup room. Basic medications are readily available to support student health and well-being.
    `,
    stories: [
      { text: "On-campus medical facility with a resident doctor and nurse." },
      {
        text: "First aid and medical checkup room equipped with basic medicines.",
      },
      { text: "Quick access to healthcare for students and staff." },
      { text: "Supports a safe and healthy campus environment." },
    ],
    logos: [
      {
        name: "Microsoft",
        img: "https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3574.jpg?t=st=1731569939~exp=1731573539~hmac=3f5c43fdb263946264578367c238f42d8c7be1c35c4a5fe4b38acc64254f0e58&w=360",
      },
      {
        name: "Apple",
        img: "https://img.freepik.com/free-photo/new-test-concentrated-skilled-researchers-wearing-uniform-doing-test-creating-vaccine_1157-48124.jpg?t=st=1731569248~exp=1731572848~hmac=574a3babf54e1cb52cfa134b4012c5efb043f044c0ffbf1686d9bd21c784f5b2&w=360",
      },
      {
        name: "Google",
        img: "https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3557.jpg?t=st=1731569899~exp=1731573499~hmac=035302a69d7a92dbc8a7073f3b626bb99a6f2e540dc031c27307ab2923a3d275&w=360",
      },
      {
        name: "Facebook",
        img: "https://img.freepik.com/free-photo/selective-focus-medical-transparent-equipment-standing-table_482257-16126.jpg?t=st=1731569309~exp=1731572909~hmac=bf73763201ab403811a5febd7b53d1ba846d9208cc068541f4a630e54bee4e8e&w=360",
      },
    ],
  },
];

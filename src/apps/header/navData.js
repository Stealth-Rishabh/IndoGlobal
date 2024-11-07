export const navlinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
      dropdown: [
        { name: "Accreditation & Tie-ups", path: "/about/accreditation" },
        { name: "Location", path: "/about/location" },
        { name: "Vision & Mission", path: "/about/vision-mission" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "Eminent Faculty", path: "/about/eminent-faculty" },
      ],
    },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    {
      name: "Highlights",
      path: "/events",
      dropdown: [
        { name: "Events", path: "/events" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    { name: "Why Indo Global", path: "/why-indo-global" },

    {
      name: "Placements",
      path: "/placements",
      dropdown: [
        {
          name: "Campus Recruitments",
          path: "/placements/campus-recruitments",
        },
        { name: "Industry Speaks", path: "/placements/industry-speaks" },
        { name: "Industry Tie-ups", path: "/placements/industry-tie-ups" },
        {
          name: "Placement Activities",
          path: "/placements/placement-activities",
        },
        { name: "Our Recruiters", path: "/placements/our-recruiters" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];
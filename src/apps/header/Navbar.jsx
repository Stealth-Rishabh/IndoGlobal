import { NavLink } from "react-router-dom"; // import NavLink from react-router-dom
import logo from "../../assets/IndoGlobalLogo.svg";
import logo2 from "../../assets/nav-logo-2.svg";
import Drawer from "./Drawer";
import { Button } from "@/components/ui/button"; // Assuming Button is still used elsewhere

export default function Navbar() {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Events", path: "/events" },
    { name: "Why Indo Global", path: "/why-indo-global" },
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="px-4 py-4 bg-red-600">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-10">
          <img
            src={logo}
            alt="Indo Global Group of Colleges"
            className="object-contain h-12"
          />
          <img src={logo2} alt="22 Years" className="object-contain h-12" />
        </div>
        <nav>
          <ul className="hidden space-x-4 lg:flex">
            {navlinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-100 bg-red-700 rounded px-3 py-2"
                      : "text-white hover:text-red-200 hover:bg-red-700 rounded px-3 py-2"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Drawer />
        </nav>
      </div>
    </div>
  );
}

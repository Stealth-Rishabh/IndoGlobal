import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/IndoGlobalLogo.svg";
import logo2 from "../../assets/nav-logo-2.svg";
import Drawer from "./Drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const location = useLocation();
  const navlinks = [
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
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="bg-red-600 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <img
            src={logo}
            alt="Indo Global Group of Colleges"
            className="h-12 object-contain"
          />
          <img src={logo2} alt="22 Years" className="h-12 object-contain" />
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-4">
            {navlinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={
                          link.dropdown.some(item => item.path === location.pathname)
                            ? "rounded bg-red-700 px-3 py-2 -mt-2 text-red-100"
                            : "rounded px-3 py-2 text-white -mt-2 hover:bg-red-700 hover:text-red-200"
                        }
                      >
                        {link.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  align='start'>
                      {link.dropdown.map((dropdownLink) => (
                        <DropdownMenuItem key={dropdownLink.name} asChild className='pr-6'>
                          <NavLink
                            to={dropdownLink.path}
                            className={({ isActive }) =>
                              isActive
                                ? "w-full px-2 py-1.5 text-red-600"
                                : "w-full px-2 py-1.5 hover:text-red-600"
                            }
                          >
                            {dropdownLink.name}
                          </NavLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded bg-red-700 px-3 py-2 text-red-100"
                        : "rounded px-3 py-2 text-white hover:bg-red-700 hover:text-red-200"
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Drawer />
        </nav>
      </div>
    </div>
  );
}
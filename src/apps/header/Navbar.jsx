import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/nav-logo-2.svg";
import Drawer from "./Drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { navlinks } from "./navData";
import React, { useState, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const renderSubDropdown = (subdropdown) => {
    return subdropdown.map((subItem) => (
      <DropdownMenuSub key={subItem.name}>
        <DropdownMenuSubTrigger className="px-4 py-2">
          {subItem.name}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={handleMouseLeave}
          >
            {subItem.courses
              ? subItem.courses.map((course) => (
                  <DropdownMenuItem key={course.name} asChild>
                    <NavLink
                      to={course.path}
                      className={({ isActive }) =>
                        `w-full px-4 py-2 ${
                          isActive ? "text-red-600" : "hover:text-red-600"
                        }`
                      }
                    >
                      {course.name}
                    </NavLink>
                  </DropdownMenuItem>
                ))
              : null}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    ));
  };

  const renderDropdownContent = (link) => {
    return (
      <DropdownMenuContent
        align="start"
        className="mt-2"
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={handleMouseLeave}
      >
        {link.dropdown?.map((item) => {
          if (item.subdropdown) {
            return renderSubDropdown(item.subdropdown);
          }

          return (
            <DropdownMenuItem key={item.name} asChild>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `w-full px-4 py-2 ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    );
  };

  return (
    <div className="bg-red-600 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img
              src={logo}
              alt="Indo Global Group of Colleges"
              className="h-12 sm:h-16 object-contain "
            />
          </Link>
          <img src={logo2} alt="22 Years" className="h-12 object-contain" />
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-4">
            {navlinks.map((link, index) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {link.dropdown ? (
                  <DropdownMenu open={openDropdown === index}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={
                          link.dropdown.some(
                            (item) => item.path === location.pathname
                          )
                            ? "rounded bg-red-700 px-3 py-2 -mt-2 text-red-100 outline-0"
                            : "rounded px-3 py-2 text-white -mt-2 hover:bg-red-700 hover:text-red-200"
                        }
                      >
                        {link.name}
                      </button>
                    </DropdownMenuTrigger>
                    {renderDropdownContent(link)}
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

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronDown,Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import img from "../assets/breadcrumb.png"

export default function CourseSidebar() {
  const [isSticky, setIsSticky] = useState(false)
  const [openCategories, setOpenCategories] = useState([])

  const categories = [
    {
      name: "B.Tech / Lateral Entry",
      courses: [
        { href: "/courses/mechanical-engineering", label: "Mechanical Engg." },
        { href: "/courses/computer-science", label: "Computer Science Engg." },
        { href: "/courses/electronics-communication", label: "Electronics and Communication Engg." },
        { href: "/courses/civil-engineering", label: "Civil Engg." },
      ],
    },
    {
      name: "M.Tech",
      courses: [
        { href: "/courses/mtech-civil", label: "Civil Engg." },
        { href: "/courses/mtech-computer-science", label: "Computer Science Engg." },
        { href: "/courses/mtech-electronics-communication", label: "Electronics and Communication" },
      ],
    },
    {
      name: "Polytechnic / Lateral Entry",
      courses: [
        { href: "/courses/polytechnic-mechanical", label: "Mechanical Engg." },
        { href: "/courses/polytechnic-civil", label: "Civil Engg." },
      ],
    },
    {
      name: "Management and Tech.",
      courses: [
        { href: "/courses/mba", label: "Master Of Business Administration (MBA)" },
        { href: "/courses/bba", label: "Bachelor Of Business Administration (BBA)" },
        { href: "/courses/bca", label: "Bachelor of Computer Application (BCA)" },
      ],
    },
    {
      name: "Architecture",
      courses: [
        { href: "/courses/architecture", label: "Bachelor of Architecture" },
      ],
    },
    {
      name: "Paramedical Courses",
      courses: [
        { href: "/courses/medical-lab-sciences", label: "B.Sc. Medical Laboratory Sciences (MLS)" },
        { href: "/courses/radiology-imaging", label: "B.Sc Radiology & Imaging Technology" },
        { href: "/courses/operation-theatre-tech", label: "B.Sc Operation Theatre Technology" },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar")
      const container = document.querySelector(".container")
      if (sidebar && container) {
        const containerRect = container.getBoundingClientRect()
        const sidebarRect = sidebar.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (
          containerRect.bottom > windowHeight &&
          sidebarRect.height < windowHeight
        ) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  return (
    <div
      className={`sidebar col-span-1 hidden max-w-96 md:block pt-8 ${
        isSticky ? "md:sticky md:top-4" : ""
      }`}
    >
      <div className="flex flex-col h-full p-6 bg-white  rounded-lg shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-secondary-color">
          Categories
        </h2>
        <nav className="mb-6 space-y-2">
          {categories.map((category) => (
            <Collapsible
              key={category.name}
              open={openCategories.includes(category.name)}
              onOpenChange={() => toggleCategory(category.name)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-500 transition-all duration-200 rounded hover:bg-gray-100">
                {category.name}
                {/* <ChevronDown
                  className={`w-4 h-4 mt-1 text-gray-500/60  transition-transform duration-200 ${
                    openCategories.includes(category.name) ? "rotate-180" : ""
                  }`}
                /> */}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-1 space-y-1">
                {category.courses.map((course) => (
                  <Link
                    key={course.href}
                    to={course.href}
                    className="block px-8 py-2 text-sm text-gray-500/90 transition-all duration-100  rounded hover:pl-6 hover:text-secondary-color hover:bg-gray-100 hover:font-medium"
                  >
                    {course.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </nav>
        <Button className="w-full px-4 py-2 mb-6 font-bold text-white rounded bg-primary-color hover:bg-red-600 transition-colors duration-200">
          Apply Online
        </Button>
        <div className="relative flex-grow overflow-hidden rounded-md h-56">
          <img
            src={img}
            alt="Discover Our Partnerships"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
            <p className="mb-3 text-xl font-semibold text-center">
              Discover Our Partnerships
            </p>
            <Button
              variant="outline"
              className="text-white transition-colors bg-transparent border-white hover:bg-white hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
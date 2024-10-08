
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import logo from "../../assets/IndoGlobalLogo.svg"
import logo2 from "../../assets/nav-logo-2.svg"
export default function Navbar() {

const navlinks = ["Home", "About-Us", "Courses", "Admissions", "Events", "Placements", "Why Indo Global", "Contact-Us"]

  return (
    <div className="bg-red-600 py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <img src={logo} alt="Indo Global Group of Colleges" className="h-12 object-contain" />
          <img src={logo2} alt="22 Years" className="h-12 object-contain" />
        </div>
        <nav>
          <ul className=" space-x-4 hidden md:flex">
            {navlinks.map(
              (item) => (
                <li key={item}>
                  <Button variant="ghost" className="text-white hover:text-red-200 hover:bg-red-700">
                    {item}
                  </Button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}

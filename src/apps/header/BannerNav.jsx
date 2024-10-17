
import { FacebookIcon, Twitter, Instagram, Youtube, Rss, MapPin, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function BannerNav() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm hidden sm:block">
      <div className="container mx-auto flex justify-end sm:justify-between sm:items-center">
        <div className="hidden md:flex items-center space-x-4">
          <span>Follow us</span>
          <div className="flex space-x-2">
            <Link to="#" className="text-red-600 hover:text-red-700">
              <FacebookIcon size={16} />
            </Link>
            <Link to="#" className="text-red-600 hover:text-red-700">
              <Twitter size={16} />
            </Link>
            <Link to="#" className="text-red-600 hover:text-red-700">
              <Instagram size={16} />
            </Link>
            <Link to="#" className="text-red-600 hover:text-red-700">
              <Youtube size={16} />
            </Link>
            <Link to="#" className="text-red-600 hover:text-red-700">
              <Rss size={16} />
            </Link>
          </div>
        </div>
        <div className="flex justify-end sm:items-center space-x-4">
          <div className="hidden md:flex items-center">
            <MapPin size={16} className="text-red-600 mr-1" />
            <span>Abhipur, New Chandigarh</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="text-red-600 mr-1" />
            <span>contact@igef.net</span>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="text-red-600 mr-1" />
            <span>+91-7307211222</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import  { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';

const Drawer = () => {
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

    const CollapsibleNavItem = ({ item }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors">
                    {item.name}
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <ul className="pl-4 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                                <SheetClose asChild>
                                    <Link
                                        to={subItem.path}
                                        className="block py-2 px-4 w-fit text-sm text-slate-200 hover:bg-white/10 rounded transition-colors"
                                    >
                                        {subItem.name}
                                    </Link>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </CollapsibleContent>
            </Collapsible>
        );
    };

    return (
        <Sheet>
            <SheetTrigger className="lg:hidden block">
                <Menu className="w-8 h-8 text-white" />
            </SheetTrigger>
            <SheetContent className="bg-primary-color">
                <SheetHeader>
                    <SheetTitle className="text-white text-2xl font-bold text-left">Indo Global</SheetTitle>
                    <SheetDescription className="text-white text-left pt-5">
                        <nav>
                            <ul className="space-y-1">
                                {navlinks.map((item, index) => (
                                    <li key={index}>
                                        {item.dropdown ? (
                                            <CollapsibleNavItem item={item} />
                                        ) : (
                                            <SheetClose asChild>
                                                <Link
                                                    to={item.path}
                                                    className="block py-2 px-4 w-fit font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            </SheetClose>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Drawer;
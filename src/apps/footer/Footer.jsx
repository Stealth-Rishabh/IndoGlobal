import React from 'react';
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Instagram, Youtube, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
    const footerSections = [
        {
            label: "About Us",
            items: [
                { name: "Overview", path: "/overview" },
                { name: "Milestones", path: "/milestones" },
                { name: "Accomplishments", path: "/accomplishments" },
                { name: "Leadership Team", path: "/leadership" },
                { name: "Academic Advisory Board", path: "/advisory-board" },
                { name: "Governing Body", path: "/governing-body" },
            ],
        },
        {
            label: "Admissions",
            items: [
                { name: "Overview", path: "/admissions" },
                { name: "Eligibility", path: "/eligibility" },
                { name: "Program Fee", path: "/program-fee" },
                { name: "Admissions Process", path: "/admission-process" },
                { name: "Merit Scholarships", path: "/scholarships" },
                { name: "Financial Aid & Loans", path: "/financial-aid" },
            ],
        },
        {
            label: "Quick Links",
            items: [
                { name: "Contact Us", path: "/contact" },
                { name: "Pay Fee Online", path: "/pay-fee" },
                { name: "Enquire Now", path: "/enquire" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" },
            ],
        },
        {
            label: "Resources",
            items: [
                { name: "News", path: "/news" },
                { name: "Events", path: "/events" },
                { name: "Research", path: "/research" },
                { name: "Download Brochures", path: "/brochures" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Sitemap", path: "/sitemap" },
            ],
        },
        {
            label: "Student Services",
            items: [
                { name: "Fee Structure", path: "/fee-structure" },
                { name: "Scholarship", path: "/scholarship" },
                { name: "Grievance Redressal", path: "/grievance-redressal" },
                { name: "Online Grievance Mechanism", path: "/online-grievance" },
                { name: "Student Feedback System", path: "/feedback" },
                { name: "Alumni Login", path: "/alumni-login" },
            ],
        },
        {
            label: "More Info",
            items: [
                { name: "International Admissions", path: "/international-admissions" },
                { name: "Jobs @Indo Global", path: "/jobs" },
                { name: "View Virtual Tour", path: "/virtual-tour" },
                { name: "Contact Directory", path: "/contact-directory" },
                { name: "Blogs", path: "/blogs" },
                { name: "Admission Procedure", path: "/admission-procedure" },
            ],
        },
    ];

    const socialIcons = [
        { name: "Linkedin", icon: Linkedin },
        { name: "Facebook", icon: Facebook },
        // { name: "Twitter", icon: Twitter },
        { name: "Instagram", icon: Instagram },
        { name: "YouTube", icon: Youtube },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-10 text-lg">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-5">
                {/* First section with social icons and address */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">Explore. Discover. Connect.</h2>
                        <div className="flex flex-wrap gap-4 mb-6 ">
                            {socialIcons.map((platform) => (
                                <a
                                    key={platform.name}
                                    href="#"
                                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                                    aria-label={platform.name}
                                >
                                    <platform.icon size={24} />
                                </a>
                            ))}
                        </div>
                       
                    </div>
                    <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-red-600 mb-4">Campus Address </h3>
                            <p className='text-sm'>INDO GLOBAL EDUCATION CITY</p>
                            <p className='text-sm'>ABHIPUR-New Chandigarh-140109, District Mohali (Punjab)</p>
                            <p className="flex items-center text-sm"><Phone size={18} className="mr-2" /> 0160-5036000</p>
                            <p className="flex items-center text-sm"><Globe size={18} className="mr-2" /> www.igef.net</p>
                            <p className="flex items-center text-sm"><Mail size={18} className="mr-2" /> contact@igef.net</p>
                        </div>
                    
                    {/* Footer sections with links */}
                    {footerSections.map((section) => (
                        <div key={section.label}>
                            <h3 className="text-2xl font-bold text-red-600 mb-4">{section.label}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <li key={item.name} className='text-sm'>
                                        <Link to={item.path} className="hover:text-red-600 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="py-6 border-t border-gray-800 bg-primary-color text-center">
                <p className="text-white mb-2 text-xl">
                    © Copyright - Indo Global Education Foundation All Rights Reserved
                </p>
                <div className="text-base text-white">
                    <p>
                        Phone: <a href="tel:+91-7307211222">+91-7307211222</a> | Website: <a href="https://www.igef.net" target="_blank" rel="noopener noreferrer">www.igef.net</a> | Email: <a href="mailto:contact@igef.net">contact@igef.net</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

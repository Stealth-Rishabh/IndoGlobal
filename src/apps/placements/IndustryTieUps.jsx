import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/BannerPlacements.webp"
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search, Book, Database, Cpu, Cloud, Cog, Zap, Briefcase, Globe, Brain, Heart } from 'lucide-react'


const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];
const IndustryTieUps = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/placements/industry-tie-ups ", label: "Placements" },
    { label: "Industry Tie-ups " },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Industry Tie-ups"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 pt-12">
          <Heading
            title="Industry Partnerships"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Learn from industry experts to build intellectual, practical, and social skills, fostering leadership, social responsibility, and a commitment to lifelong learning."
            className="lg:pb-10"
          />
          <TieUps/>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default IndustryTieUps;














const partnerships = [
  {
    name: "Oracle Academy",
    description: "Indo Global Group of Colleges is a member of Oracle Academy, offering students hands-on learning in Java Programming, Database Design, SQL, PL/SQL, and career skills such as problem-solving, collaboration, and critical thinking to prepare them for computer science studies or the job market.",
    details: [
      "Hands-on learning in Java Programming",
      "Skills in Database Design and SQL",
      "Career skills: Problem solving, Collaboration, Critical thinking",
      "Preparation for computer science studies and the job market"
    ]
  },
  {
    name: "QEEE Program by IIT Madras and MHRD Govt of India",
    description: "Indo Global Colleges participates in the Quality Enhancement in Engineering Education (QEEE) Program by IIT Madras, offering live classes, virtual labs, tutorials, interactive e-books, and open courseware through online learning modules to enhance engineering education.",
    details: [
      "Live Lectures & Tutorials from IIT Madras",
      "Virtual Labs for remote hands-on experiments",
      "Interactive e-books with rich multimedia content",
      "Open Courseware for customized learning"
    ]
  },
  {
    name: "IBM Software Center of Excellence (COE)",
    description: "IBM, in collaboration with Indo Global Colleges, inaugurated a Centre of Excellence to provide students with world-class training in IBM technologies, including RAD, DB2, Lotus, Tivoli, RFT, Cloud, and Big Data, with certifications available from IBM experts.",
    details: [
      "Training in RAD, DB2, Lotus, Tivoli, RFT",
      "Cloud and Big Data technologies",
      "Certifications by IBM experts",
      "Hands-on training for industry readiness"
    ]
  },
  {
    name: "IIT Bombay - FREE Open Software Centre (FOSS)",
    description: "Indo Global Colleges hosts the first FOSS Center in Punjab as part of IIT Bombay's Spoken Tutorial Project, offering training and certification in Free and Open Source Software (FOSS) technologies, including Linux, Scilab, LaTeX, PHP, MySQL, Java, and C/C++.",
    details: [
      "Training in Free and Open Source Software (FOSS)",
      "Technologies: Linux, Scilab, LaTeX, PHP, MySQL, Java, C/C++",
      "Certification by IIT Bombay",
      "Enhances practical skills for industry readiness"
    ]
  },
  {
    name: "Toyota Technical Education Program (T-TEP)",
    description: "In partnership with Toyota, the T-TEP provides in-house training in the latest automotive technologies and service techniques to develop a skilled workforce for the automotive service industry.",
    details: [
      "In-house training in automotive technology",
      "Focus on latest service techniques",
      "Develops highly skilled technical workforce",
      "Enhances career prospects in automotive service"
    ]
  },
  {
    name: "Indo Global Colleges Tie-Up with BSNL for EETP",
    description: "Indo Global Colleges has partnered with BSNL to provide students with industry-specific training through the Electronics Engineering Training Program (EETP), preparing them for the evolving job market in electronics engineering.",
    details: [
      "Training through the Electronics Engineering Training Program (EETP)",
      "Partnership with BSNL for industry-specific training",
      "Focus on electronics engineering skills",
      "Prepares students for careers in the electronics industry"
    ]
  },
  {
    name: "Red Hat Academy",
    description: "Indo Global Colleges has partnered with Red Hat, Inc. to offer Red Hat Academy, helping students gain the right technical skills through emerging software, technologies, and certifications.",
    details: [
      "Training on emerging software and technologies",
      "Certifications from Red Hat, Inc.",
      "Hands-on projects and live work experience",
      "Prepares students for enterprise-ready careers"
    ]
  },
  {
    name: "Ashok Leyland Skill Development Centre",
    description: "Indo Global Colleges has partnered with Ashok Leyland to establish a Skill Development Centre, offering hands-on training to budding mechanical engineers and technicians to enhance their skills and employability in the automotive industry.",
    details: [
      "Hands-on training for mechanical engineers",
      "Skill development in automotive technology",
      "Focus on employability and career readiness",
      "Partnership with Ashok Leyland for industry collaboration"
    ]
  },
  {
    name: "EC-Council Centre of Excellence/Cisco Academy",
    description: "Indo Global Colleges offers training and certifications in networking, network security, and ethical hacking through its EC-Council Centre of Excellence and Cisco Academy for CSE/ECE students.",
    details: [
      "Networking and network security certifications",
      "Training in ethical hacking",
      "Collaborations with EC-Council and Cisco Academy",
      "Skills for careers in network administration and security"
    ]
  },
  {
    name: "PTU Incubation Centre",
    description: "The PTU Incubation Centre at Indo Global Colleges provides workshops and training in entrepreneurship, fostering innovation and developing business skills among students.",
    details: [
      "Workshops and training in entrepreneurship",
      "Fosters innovation and business development",
      "Supports students in starting their own ventures",
      "Collaboration with Punjab Technical University"
    ]
  },
  {
    name: "Virtual Lab of IIT, Delhi",
    description: "Indo Global Colleges serves as a nodal center for IIT Delhi's Virtual Lab, offering practical and project skills to engineering students to enhance employability and industry readiness.",
    details: [
      "Virtual labs for engineering and science subjects",
      "Enhances practical and project skills for engineering students",
      "Prepares students for emerging industry trends",
      "Collaboration with IIT Delhi for virtual learning resources"
    ]
  },
  {
    name: "RoundGlass Peace",
    description: "Indo Global Colleges has partnered with RoundGlass Peace to provide a digital health and wellness ecosystem for students, focusing on mental wellbeing education, proactive assessment, and therapy through a mobile app and offline support.",
    details: [
      "Mental wellbeing education and awareness",
      "Proactive assessment and online/offline intervention",
      "Support for students' emotional and behavioral health",
      "Mobile app for wellness monitoring and therapy"
    ]
  }
]

const getIcon = (name) => {
  const icons = {
    "Oracle Academy": <Database className="h-6 w-6 text-secondary-color" />,
    "QEEE Program by IIT Madras and MHRD Govt of India": <Book className="h-6 w-6 text-secondary-color" />,
    "IBM Software Center of Excellence (COE)": <Cpu className="h-6 w-6 text-secondary-color" />,
    "IIT Bombay - FREE Open Software Centre (FOSS)": <Globe className="h-6 w-6 text-secondary-color" />,
    "Toyota Technical Education Program (T-TEP)": <Cog className="h-6 w-6 text-secondary-color" />,
    "Indo Global Colleges Tie-Up with BSNL for EETP": <Zap className="h-6 w-6 text-secondary-color" />,
    "Red Hat Academy": <Cloud className="h-6 w-6 text-secondary-color" />,
    "Ashok Leyland Skill Development Centre": <Briefcase className="h-6 w-6 text-secondary-color" />,
    "EC-Council Centre of Excellence/Cisco Academy": <Globe className="h-6 w-6 text-secondary-color" />,
    "PTU Incubation Centre": <Brain className="h-6 w-6 text-secondary-color" />,
    "Virtual Lab of IIT, Delhi": <Cpu className="h-6 w-6 text-secondary-color" />,
    "RoundGlass Peace": <Heart className="h-6 w-6 text-secondary-color" />
  }
  return icons[name] || <Book className="h-6 w-6 text-secondary-color" />
}

 function TieUps() {
  const [expandedCards, setExpandedCards] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const toggleCard = (name) => {
    setExpandedCards(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const filteredPartnerships = useMemo(() => {
    return partnerships.filter(partnership =>
      partnership.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partnership.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partnership.details.some(detail => detail.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [searchTerm])

  return (
    <div className="container mx-auto   max-w-7xl">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">Our Strategic Partnerships</h1>
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search partnerships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
          aria-label="Search partnerships"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
      </div> */}
      <motion.div 
        className="grid grid-cols-1 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {filteredPartnerships.map((partnership) => (
            <motion.div
              key={partnership.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col rounded-md border-secondary-color/50">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon(partnership.name)}
                    <CardTitle className="text-xl text-secondary-color">{partnership.name}</CardTitle>
                  </div>
                  <CardDescription>{partnership.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow ">
                  <AnimatePresence>
                    {expandedCards[partnership.name] && (
                      <motion.ul
                        className="list-disc list-inside space-y-2 mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {partnership.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-auto">
                  <Button
                  className='bg-secondary-color text-white hover:bg-blue-950/90 hover:text-white'
                    variant="outline"
                    onClick={() => toggleCard(partnership.name)}
                    aria-expanded={expandedCards[partnership.name]}
                    aria-controls={`details-${partnership.name}`}
                  >
                    {expandedCards[partnership.name] ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        Show Details
                      </>
                    )}
                  </Button>
                  {/* <Badge variant="secondary">Learn More</Badge> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredPartnerships.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No partnerships found matching your search.</p>
      )}
    </div>
  )
}

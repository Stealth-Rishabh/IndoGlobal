
import {
  Clock,
  GraduationCap,
  Calendar,
  Users,
  BookOpen,
  DollarSign,
  MapPin,
  Book,
  List,
  User,
  HelpCircle,
  Star,
} from "lucide-react";
import React from "react";

export const COURSE_DETAILS = {
  title: "B.Tech Computer Science Engineering",
  badges: [
    { icon: Clock, text: "4 Years" },
    { icon: GraduationCap, text: "Bachelor's Degree" },
    { icon: Calendar, text: "Next Intake: Sept 2024" },
    { icon: Users, text: "120 students" },
    { icon: BookOpen, text: "Full-time" },
    { icon: DollarSign, text: "$10,000/year" },
    { icon: MapPin, text: "On-campus" },
  ],
  breadcrumbs: [
    { text: "Home", href: "/" },
    { text: "Courses", href: "/courses" },
    { text: "B.Tech Computer Science Engineering", current: true },
  ],
  curriculumYears: ["Year 1", "Year 2", "Year 3", "Year 4"],
  subjects: [
    "Introduction to Programming",
    "Data Structures and Algorithms",
    "Computer Organization and Architecture",
    "Discrete Mathematics",
    "Digital Logic Design",
  ],
  faqs: [
    {
      question: "What are the admission requirements?",
      answer:
        "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics as core subjects, with a minimum aggregate of 60%.",
    },
    {
      question: "Is there a placement assistance program?",
      answer:
        "Yes, our college has a dedicated placement cell that assists students with internships and job placements. We have a strong network of industry partners and alumni.",
    },
    {
      question: "Are there any scholarships available?",
      answer:
        "We offer merit-based scholarships for top-performing students. Additionally, there are government scholarships available for eligible candidates.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "Throughout the course, you'll work on various projects including software development, web applications, mobile apps, and a final year capstone project. Many projects involve real-world problem-solving and industry collaboration.",
    },
  ],
  reviews: [
    {
      name: "Alex Johnson",
      rating: 5,
      comment:
        "Excellent course with a perfect blend of theory and practical knowledge. The faculty is highly knowledgeable and supportive.",
    },
    {
      name: "Samantha Lee",
      rating: 4,
      comment:
        "Great curriculum that covers all the latest technologies. The project work really helped me build a strong portfolio.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      comment:
        "The course prepared me well for the industry. I secured a great job right after graduation thanks to the skills I learned here.",
    },
  ],
  tabs: [
    { label: "overview", icon: React.createElement(BookOpen, { className: "w-4 h-4" }) },
    { label: "curriculum", icon: React.createElement(List, { className: "w-4 h-4" }) },
    { label: "instructor", icon: React.createElement(User, { className: "w-4 h-4" }) },
    { label: "faqs", icon: React.createElement(HelpCircle, { className: "w-4 h-4" }) },
    { label: "reviews", icon: React.createElement(Star, { className: "w-4 h-4" }) },
  ],
  instructor: {
    name: "Dr. Jane Smith",
    title: "Associate Professor of Computer Science",
    degree: "Ph.D. in Computer Science from Stanford University",
    specialization: "Artificial Intelligence and Machine Learning",
    bio: "Dr. Jane Smith has over 15 years of experience in teaching and research in computer science. She has published numerous papers in top-tier conferences and journals, and has worked on several industry-sponsored projects. Her teaching philosophy emphasizes practical application of theoretical concepts.",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  overviewHighlights: [
    "Comprehensive curriculum covering core CS concepts and emerging technologies",
    "Hands-on projects and internship opportunities",
    "State-of-the-art computer labs and learning resources",
    "Industry-experienced faculty members",
    "Strong placement record with top tech companies",
  ],
};

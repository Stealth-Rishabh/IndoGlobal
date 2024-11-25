import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LATEST_BLOGS = [
  {
    title: "The Rise of Quantum Computing",
    excerpt:
      "Exploring the potential of quantum computers and their impact on various industries.",
    author: "Alice Johnson",
    date: "June 1, 2023",
  },
  {
    title: "Sustainable Tech: Green Innovations",
    excerpt:
      "Discover how technology is driving sustainability and eco-friendly solutions.",
    author: "Bob Smith",
    date: "May 28, 2023",
  },
  {
    title: "Cybersecurity in the Age of IoT",
    excerpt:
      "Understanding the challenges and solutions for securing the Internet of Things.",
    author: "Charlie Brown",
    date: "May 25, 2023",
  },
];

const img =
  "https://img.freepik.com/free-photo/man-working-dark-home-office-with-laptop_53876-16041.jpg?t=st=1732531763~exp=1732535363~hmac=53eb8d064bc4e95578a1b0cddd294be0ed92aa6d5bca32bd4b720fbfe4c9517b&w=1060";
function BlogSidebar() {
  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm sm:shadow-lg">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl text-secondary-color font-bold leading-none tracking-tight ">
          Latest Blog Posts
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-4">
          {LATEST_BLOGS.map((blog, index) => (
            <div key={index} className="flex items-start space-x-4 mb-5">
              <div className="relative aspect-square h-10 w-10 rounded-full">
                <img
                  src={`https://v0.dev/placeholder.svg?height=40&width=40&text=${blog.author.charAt(
                    0
                  )}`}
                  className="rounded-full object-cover"
                  alt={blog.author}
                />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted absolute top-0 left-0">
                  {blog.author.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.excerpt}</p>
                <div className="mt-1 text-xs text-gray-400">
                  {blog.author} • {blog.date}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-md  h-44 mt-6">
          <img
            src={img}
            alt="cta"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
            <p className="mb-3 text-xl font-semibold text-center">
              Explore More Blogs
            </p>
            <Link to='/blogs'>
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                View More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;

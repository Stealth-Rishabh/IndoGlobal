const LATEST_BLOGS = [
    {
      title: "The Rise of Quantum Computing",
      excerpt: "Exploring the potential of quantum computers and their impact on various industries.",
      author: "Alice Johnson",
      date: "June 1, 2023",
    },
    {
      title: "Sustainable Tech: Green Innovations",
      excerpt: "Discover how technology is driving sustainability and eco-friendly solutions.",
      author: "Bob Smith",
      date: "May 28, 2023",
    },
    {
      title: "Cybersecurity in the Age of IoT",
      excerpt: "Understanding the challenges and solutions for securing the Internet of Things.",
      author: "Charlie Brown",
      date: "May 25, 2023",
    },
  ]
  
  function BlogSidebar() {
    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow sm:shadow-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl text-secondary-color font-bold leading-none tracking-tight ">Latest Blog Posts</h3>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            {LATEST_BLOGS.map((blog, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="relative aspect-square h-10 w-10 rounded-full">
                  <img 
                    src={`https://v0.dev/placeholder.svg?height=40&width=40&text=${blog.author.charAt(0)}`}
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
        </div>
      </div>
    )
  }
  
  export default BlogSidebar;
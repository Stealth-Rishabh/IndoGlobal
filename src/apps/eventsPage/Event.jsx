import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import AboutSidebar from "../../components/AboutSidebar";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent,CardDescription,CardFooter,CardHeader,CardTitle, } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Event" }];

const Event = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const eventsPerPage = 6;
  const events = useMemo(() => [
    {
      id: 1,
      title: "Cultural Fest",
      date: "2023-10-15",
      tags: ["Culture", "Festivals"],
      image:
        "https://plus.unsplash.com/premium_photo-1683121128953-9a7f08b82198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "2023-11-20",
      tags: ["Technology", "Conference"],
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "2023-12-01",
      tags: ["Art", "Exhibition"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Science Fair",
      date: "2023-10-30",
      tags: ["Science", "Education"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Music Festival",
      date: "2023-11-05",
      tags: ["Music", "Festival"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Career Fair",
      date: "2023-11-15",
      tags: ["Career", "Networking"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Sports Day",
      date: "2023-10-25",
      tags: ["Sports", "Competition"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Literature Festival",
      date: "2023-12-10",
      tags: ["Literature", "Festival"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      title: "Health Awareness Camp",
      date: "2023-11-12",
      tags: ["Health", "Awareness"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      title: "Film Screening",
      date: "2023-11-25",
      tags: ["Film", "Screening"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "Dance Workshop",
      date: "2023-12-05",
      tags: ["Dance", "Workshop"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      title: "Coding Bootcamp",
      date: "2023-11-18",
      tags: ["Technology", "Education"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      title: "Environmental Awareness Day",
      date: "2023-10-28",
      tags: ["Environment", "Awareness"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      title: "Photography Contest",
      date: "2023-12-15",
      tags: ["Photography", "Contest"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 15,
      title: "Charity Run",
      date: "2023-11-30",
      tags: ["Charity", "Sports"],
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // ... more events
  ], []);

  // Extract unique tags from all events
  const allTags = useMemo(() => {
    const tagSet = new Set();
    events.forEach((event) => {
      event.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [events]);

  // Handle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter events based on search term and selected tags
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => event.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [events, searchTerm, selectedTags]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // New pagination helper functions
  const generatePaginationRange = (currentPage, totalPages) => {
    const delta = 2; // Number of pages to show before and after current page
    const range = [];
    const rangeWithDots = [];

    // Always add first page
    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    // Always add last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Add dots where needed
    let l;
    for (let i of range) {
      if (l) {
        if (i - l > 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  // Generate page range
  const pageRange = useMemo(
    () => generatePaginationRange(currentPage, totalPages),
    [currentPage, totalPages]
  );

  return (
    <section className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Events"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid gap-14 relative">
        <div className="col-span-1 pt-12">
          <Heading
            title="Experience the Vibrance of Campus Life"
            subtitle="Stay updated with the latest events, workshops, and seminars happening at our college. From cultural fests to academic conferences, we've got it all."
            titleClassName="text-secondary-color text-left lg:text-5xl text-center"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal text-center"
            className="lg:pb-10"
          />

          <div className="search-section mb-14 space-y-8" id="top">
            <Input
              id="search"
              type="text"
              placeholder="Search events by title or tags..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className=" placeholder:text-gray-400 py-6 px-6 rounded-full max-w-6xl mx-auto border-secondary-color border-2"
            />

            <div className="tags-filter justify-center flex flex-wrap sm:gap-4 gap-2 max-w-6xl mx-auto">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  className={`cursor-pointer sm:hover:-translate-y-1 transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-secondary-color text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {currentEvents.map((event) => (
              <Card key={event.id} className="p-4 hover:shadow-lg shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2">{event.title}</h3>
                <p className="text-gray-500">{event.date}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {event.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className={
                        selectedTags.includes(tag) ? "bg-secondary-color" : ""
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="mt-4 w-full">View Details</Button>
              </Card>
            ))}
          </div>

          {currentEvents.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No events found matching your criteria.
            </div>
          )}

          {filteredEvents.length > eventsPerPage && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#top"
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {pageRange.map((page, index) =>
                  page === "..." ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#top"
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className={`
                      ${
                        currentPage === page
                          ? "active pointer-events-none"
                          : "inActive"
                      }
                      hover:bg-gray-100 transition-colors
                    `}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#top"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </Container>

      <Stats />
      <Newsletter />
    </section>
  );
};

export default Event;

import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
// import AboutSidebar from "../../components/AboutSidebar";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "../../components/ui/card";
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
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { eventsData } from "./eventData";

const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Event" }];

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Event = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventsPerPage = 12;

  const events = useMemo(() => eventsData, []);
  console.log(events);
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

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

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

          <div className="search-section mb-24 space-y-8" id="top">
            <div className="relative w-full max-w-6xl mx-auto">
              <Input
                id="search"
                type="text"
                placeholder="Search events by title or tags..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className=" placeholder:text-gray-400 py-6 pl-12 rounded-full  border-secondary-color border-2"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
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

          <div className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {currentEvents.map((event) => (
              <Card key={event.id} className="p-4 hover:shadow-lg shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto aspect-square object-cover rounded"
                />
                <h3 className="text-sm font-bold my-2">{event.title}</h3>
                <p className="text-gray-500 text-xs">{event.date}</p>
                <div className="flex flex-wrap gap-2 mt-1">
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
                <Button
                  className="mt-4 w-full"
                  onClick={() => handleImageClick(event)}
                >
                  View Details
                </Button>
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg max-w-[93%] rounded-lg">
          {selectedEvent && (
            <>
              <DialogHeader className="px-1">
                <DialogTitle>{selectedEvent.title}</DialogTitle>
                {/* <DialogDescription>
                  {selectedEvent.description}
                </DialogDescription> */}
              </DialogHeader>
              <div className="mt-2 space-y-3">
                {selectedEvent.gallery.length > 0 ? (
                  <Carousel>
                    <CarouselContent className="relative ml-0">
                      {selectedEvent.gallery.map((image) => (
                        <CarouselItem key={image.id} className="w-full px-1">
                          <img
                            src={image}
                            alt={image}
                            className="object-cover w-full  rounded-md h-96 sm:h-[70vh]"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="absolute -translate-y-1/2  top-1/2 left-4"
                      iconStyle="w-1/2 sm:w-3/4"
                    />
                    <CarouselNext
                      className="absolute -translate-y-1/2  top-1/2 right-4"
                      iconStyle="w-1/2 sm:w-3/4"
                    />
                  </Carousel>
                ) : (
                  <img
                    src={selectedEvent.image}
                    alt={`Event ${selectedEvent.id}`}
                    className="object-cover w-full rounded-md h-96"
                  />
                )}
                <p className="text-muted-foreground px-1">
                  {selectedEvent.description}
                </p>
                <div className="flex justify-between px-1">
                  <p className="text-xs sm:text-sm ">
                    {/* <strong>Date:</strong> {formatDate(selectedEvent.date)} */}
                  </p>
                  <p className="text-xs sm:text-sm">
                    {/* <strong>Category:</strong> {selectedEvent.category} */}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Stats />
      <Newsletter />
    </section>
  );
};

export default Event;

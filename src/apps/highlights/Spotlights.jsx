import React, { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";

const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Spotlights" }];

const categories = [
  { id: "all", label: "All" },
  { id: "culture", label: "Culture & Arts" },
  { id: "tech", label: "Technology" },
  { id: "sports", label: "Sports" },
  { id: "education", label: "Education" },
];

const dateFilters = [
  { id: "all", label: "All Time" },
  { id: "past", label: "Past Events" },
  { id: "upcoming", label: "Upcoming Events" },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const isDateBefore = (dateString, compareDate) => {
  return new Date(dateString) < compareDate;
};

const isDateAfter = (dateString, compareDate) => {
  return new Date(dateString) > compareDate;
};

const Spotlights = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [focus, setFocus] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const events = useMemo(
    () => [
      {
        id: 1,
        date: "2024-12-15",
        category: "culture",
        title: "Cultural Gala Night",
        description:
          "An evening filled with cultural performances and exhibitions.",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop",
        ],
      },
      {
        id: 2,
        date: "2024-11-20",
        category: "tech",
        title: "Tech Innovators Summit",
        description: "A gathering of the brightest minds in technology.",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
        ],
      },
      {
        id: 3,
        date: "2024-10-10",
        category: "sports",
        title: "Annual Sports Meet",
        description: "Compete in various sports and showcase your talent.",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        ],
      },
      {
        id: 4,
        date: "2024-09-05",
        category: "education",
        title: "Education Expo",
        description: "Explore educational opportunities from around the world.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop",
        ],
      },
      {
        id: 5,
        date: "2024-08-20",
        category: "culture",
        title: "Art and Craft Fair",
        description: "A showcase of art and craft from local artists.",
        image:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
        ],
      },
      {
        id: 6,
        date: "2025-01-10",
        category: "tech",
        title: "Future of AI Conference",
        description:
          "Discuss the future of artificial intelligence and its impact.",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop",
        ],
      },
      {
        id: 7,
        date: "2024-09-05",
        category: "education",
        title: "Learning Festival",
        description:
          "Interactive sessions and workshops for lifelong learners.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
        ],
      },
      {
        id: 8,
        date: "2024-08-20",
        category: "culture",
        title: "Heritage Walk",
        description: "A walk through historic sites and cultural landmarks.",
        image:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
        ],
      },
    ],
    []
  );

  const filteredEvents = useMemo(() => {
    const today = new Date();

    return events.filter((event) => {
      const categoryMatch =
        selectedCategory === "all" || event.category === selectedCategory;

      let dateMatch = true;
      if (dateFilter === "past") {
        dateMatch = isDateBefore(event.date, today);
      } else if (dateFilter === "upcoming") {
        dateMatch = isDateAfter(event.date, today);
      }

      return categoryMatch && dateMatch;
    });
  }, [events, selectedCategory, dateFilter]);

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <section className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Spotlights"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="py-12 ">
        <Heading
          title="Explore Our Spotlights"
          subtitle="Discover the highlights of our events and activities."
          titleClassName="text-secondary-color text-center text-4xl lg:text-5xl mb-4"
          subtitleClassName="text-gray-500 text-center mb-12 "
          className="pt-10"
        />

        <div className="flex flex-col items-center justify-between gap-4 mb-8 sm:flex-row">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>

          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              {dateFilters.map((filter) => (
                <SelectItem key={filter.id} value={filter.id}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="relative overflow-hidden transition-shadow bg-white rounded-lg shadow-lg break-inside-avoid aspect-square hover:shadow-xl"
              onClick={() => handleImageClick(event)}
            >
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className={`w-full absolute object-cover h-full hover:scale-125 transition-all duration-300 ${
                  focus === null
                    ? ""
                    : focus === index
                    ? ""
                    : " brightness-50 duration-150"
                }`}
                onMouseEnter={() => setFocus(index)}
                onMouseLeave={() => setFocus(null)}
              />
              <div className="absolute bottom-0 inline-block w-full py-3 pl-4 text-sm text-white duration-300 md:pl-5 md:text-lg group-hover:translate-y-0 group-hover:transition-all">
                {event.category}
                <div className="absolute inset-0 h-full text-white text-opacity-100 bg-black pointer-events-none bg-opaci bg-gradient-to-t from-gray-800 via-transparent to-transparent -z-10 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No events found for the selected filters.
          </div>
        )}
      </Container>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg max-w-[93%] rounded-lg">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedEvent.title}</DialogTitle>
                <DialogDescription>
                  {selectedEvent.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 space-y-3">
                {selectedEvent.gallery.length > 0 ? (
                  <Carousel>
                    <CarouselContent className="relative">
                      {selectedEvent.gallery.map((image) => (
                        <CarouselItem key={image.id}>
                          <img
                            src={image}
                            alt={image}
                            className="object-cover w-full  rounded-md h-96"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="absolute -translate-y-1/2  top-1/2 left-4"
                      iconStyle="w-1/2 sm:w-full"
                    />
                    <CarouselNext
                      className="absolute -translate-y-1/2  top-1/2 right-4"
                      iconStyle="w-1/2 sm:w-full"
                    />
                  </Carousel>
                ) : (
                  <img
                    src={selectedEvent.image}
                    alt={`Event ${selectedEvent.id}`}
                    className="object-cover w-full rounded-md h-96"
                  />
                )}

                <div className="flex justify-between">
                  <p className="text-xs sm:text-sm ">
                    <strong>Date:</strong> {formatDate(selectedEvent.date)}
                  </p>
                  <p className="text-xs sm:text-sm">
                    <strong>Category:</strong> {selectedEvent.category}
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

export default Spotlights;

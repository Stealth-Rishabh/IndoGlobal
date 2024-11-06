import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";

const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Gallery" }];

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

// Simple date formatting function
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Simple date comparison functions
const isDateBefore = (dateString, compareDate) => {
  return new Date(dateString) < compareDate;
};

const isDateAfter = (dateString, compareDate) => {
  return new Date(dateString) > compareDate;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [focus, setFocus] = useState(null);

  const events = useMemo(
    () => [
      {
        id: 1,
        date: "2024-12-15",
        category: "culture",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        date: "2024-11-20",
        category: "tech",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        date: "2024-10-15",
        category: "sports",
        image:
          "https://plus.unsplash.com/premium_photo-1683121128953-9a7f08b82198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        date: "2024-09-10",
        category: "education",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        date: "2024-08-05",
        category: "culture",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 6,
        date: "2024-07-20",
        category: "tech",
        image:
          "https://plus.unsplash.com/premium_photo-1683121128953-9a7f08b82198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 7,
        date: "2024-06-15",
        category: "sports",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 8,
        date: "2024-05-10",
        category: "education",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        date: "2024-04-05",
        category: "culture",
        image:
          "https://plus.unsplash.com/premium_photo-1683121128953-9a7f08b82198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 10,
        date: "2024-03-20",
        category: "tech",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 11,
        date: "2024-02-15",
        category: "sports",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 12,
        date: "2024-01-10",
        category: "education",
        image:
          "https://plus.unsplash.com/premium_photo-1683121128953-9a7f08b82198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  return (
    <section className="relative min-h-screen">
        <ImgAndBreadcrumb
        title="Gallery"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="py-12">
        <Heading
          title="Explore Our Gallery"
          subtitle="Discover the highlights of our events and activities."
          titleClassName="text-secondary-color text-center text-4xl lg:text-5xl mb-4"
          subtitleClassName="text-gray-500 text-center mb-12"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filters */}
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

          {/* Date Filter */}
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

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredEvents.map((event,index) => (
            <div
              key={event.id}
              className="break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white h-96"
            >
              <img
                src={event.image}
                alt={event.title}
                className={`w-full object-cover h-full hover:scale-125 transition-all duration-300 ${focus=== null ? '' : (focus===index? '' : 'grayscale brightness-50  duration-150')}`}
                onMouseEnter={() => setFocus(index)}
                onMouseLeave={() => setFocus(null)}
              />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No events found for the selected filters.
          </div>
        )}
      </Container>

      <Stats />
      <Newsletter />
    </section>
  );
};

export default Gallery;

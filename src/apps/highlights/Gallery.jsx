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
import { galleryData } from "./galleryData";
const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Gallery" }];

const categories = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "labs", label: "Labs" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
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

  const gallery = useMemo(() => galleryData, []);

  const filteredEvents = useMemo(() => {
    const today = new Date();

    return gallery.filter((event) => {
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
  }, [gallery, selectedCategory, dateFilter]);

  return (
    <section className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Gallery"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="py-12 ">
        <Heading
          title="Explore Our Gallery"
          subtitle="Discover the highlights of our events and activities."
          titleClassName="text-secondary-color text-center text-4xl lg:text-5xl mb-4"
          subtitleClassName="text-gray-500 text-center mb-12 "
          className="pt-10"
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
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white h-96"
            >
              <img
                src={event.image}
                alt={event.title}
                className={`w-full object-cover h-full hover:scale-125 transition-all duration-300 ${
                  focus === null
                    ? ""
                    : focus === index
                    ? ""
                    : "grayscale brightness-50  duration-150"
                }`}
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

import React from "react";
// import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "../../assets/blogs1.svg";
import img2 from "../../assets/blogs2.svg";
import img3 from "../../assets/blogs3.svg";
import img4 from "../../assets/blogs4.svg";
import { Calendar } from "lucide-react";
import Heading from "../../components/Heading";
import Container from "../../components/wrappers/Container";
export default function LatestBlogsAndEvents() {
  const events = [
    {
      id: 1,
      title: "Wide Array of Events To Mark Engineers Day",
      date: "September 2023",
      image: img2,
    },
    {
      id: 2,
      title: "Wide Array of Events To Mark Engineers Day",
      date: "September 2023",
      image: img3,
    },
    {
      id: 3,
      title: "Wide Array of Events To Mark Engineers Day",
      date: "September 2023",
      image: img4,
    },
  ];

  return (
    <Container className="">
      <Heading
        title="Latest Blogs & Events"
        titleClassName="lg:font-extrabold font-bold text-secondary-color"
        className="w-full text-center sm:col-span-4 "
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="relative rounded-none">
          <CardContent className="p-0 rounded-none">
            <div className="h-full ">
              <img
                src={img1}
                alt="Main event"
                className="object-cover w-full h-full "
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 sm:p-10 sm:space-y-4 bg-gradient-to-t from-black to-transparent">
                <span className="top-0 px-4 py-1 mx-auto text-sm font-semibold tracking-wide text-white sm:text-lg w-fit sm:mx-0 bg-secondary-color ">
                  Trending
                </span>
                <p className="flex items-center mr-2 text-base font-semibold text-white sm:text-lg">
                  <Calendar size={20} className="mr-2 text-white" /> September
                  2023
                </p>
                <p className="font-semibold text-white md:text-xl lg:text-2xl sm:font-bold ">
                  Wide Array of Events To Mark Engineers Day
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-5">
          {events.map((event) => (
            <Card key={event.id} className="p-0 rounded-none ">
              <CardContent className="flex p-0 space-x-3 sm:space-x-4 h-32 sm:h-auto">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover h-full aspect-square"
                />
                <div className="flex flex-col items-start justify-center flex-grow gap-2 sm:gap-3 ml-2">
                  <span className="top-0 px-4 py-1  text-xs sm:text-sm font-semibold tracking-wide text-white w-fit sm:mx-0 bg-secondary-color ">
                    Trending
                  </span>
                  <p className="flex items-center mr-2 text-xs sm:text-lg font-semibold text-red-600">
                    <Calendar size="14" className="mr-2 text-red-600 " />{" "}
                    {event.date}
                  </p>
                  <p className="text-sm sm:text-lg font-semibold sm:font-bold text-gray-800 ">
                    {event.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

import ButtonSq from "../../components/ButtonSq";

import Container from "../../components/wrappers/Container";
import img from "../../assets/EventImg.svg";
import img2 from "../../assets/EventImg2.svg";
import { Calendar } from "lucide-react";
import Heading from "../../components/Heading";
const Events = () => {
  const eventDataArray = [
    {
      title: "DENGUE AWARENESS CAMPAIGN",
      date: "15th May 2023",
      image: img,
      registerLabel: "Register Now",
    },
    {
      title: "Productivity Session on Ground Breaking Ideas and Inventive Methodologies",
      date: "20th June 2023",
      image: img2,
      registerLabel: "Register Now",
    },
    {
      title: "FITNESS AWARENESS CAMPAIGN",
      date: "10th July 2023",
      image: img,
      registerLabel: "Register Now",
    },
    {
      title: "NUTRITION AWARENESS CAMPAIGN",
      date: "25th August 2023",
      image: img,
      registerLabel: "Register Now",
    },
    {
      title: "WELLNESS AWARENESS CAMPAIGN",
      date: "1st September 2023",
      image: img,
      registerLabel: "Register Now",
    },
  ];

  return (
    <Container className="pt-0 lg:pt-0">
      <div className="grid items-center justify-center sm:grid-cols-6 pb-8 sm:pb-28">
        <div className="h-2 bg-primary-color hidden sm:block"></div>
        <Heading
          title="Explore Educational Events"
          titleClassName="lg:font-extrabold font-bold text-secondary-color"
          className="w-full sm:col-span-4 pb-0 text-center sm:pb-0"
        />
        <div className="h-2 bg-primary-color hidden sm:block"></div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {eventDataArray.map((eventData, index) => (
          <EventCard
            key={index}
            eventData={eventData}
            className={
              index == 1 ? "sm:col-span-2 sm:row-span-2" : "h-96 "
            }
            imgClassname={index == 1 ? "sm:h-[75%]" : "h-3/5 sm:h-1/2"}
            contentClassname={index == 1 ? "sm:h-[25%]" : "h-2/5 sm:h-1/2"}
          />
        ))}
      </div>
    </Container>
  );
};

const EventCard = ({ className, imgClassname, contentClassname , eventData: { title, date, image: img, registerLabel }}) => {
  return (
    <div className={` ${className}`}>
      <div className={` ${imgClassname}`}>
        <img src={img} alt="Event Img" className="object-cover w-full h-full" />
      </div>

      <div
        className={`p-5  bg-red-600  grid text-white space-y-2 sm:space-y-0 content-between ${contentClassname}`}
      >
        <h1 className="text-sm sm:text-xl font-bold flex items-center tracking-wide text-white">
          {title.toUpperCase()}
        </h1>
        <div className="flex items-center text-xs sm:text-sm font-medium">
          <Calendar size={20} className="mr-2 text-white" /> {date}
        </div>
        <ButtonSq className="w-fit bg-secondary-color  hover:bg-blue-700 text-sm sm:text-base" label={registerLabel} iconStyle='text-primary-color' iconDiv='bg-white' />
      </div>
    </div>
  );
};

export default Events;

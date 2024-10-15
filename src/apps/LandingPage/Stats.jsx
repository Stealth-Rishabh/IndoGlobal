import React from "react";
import bg from "../../assets/stats-bg.svg";
import Heading from "../../components/Heading";
import WordPullUp from "../../components/ui/word-pull-up";
import NumberTicker from "../../components/ui/number-ticker";

const Stats = () => {
  const stats = [
    { data: "70", title: "Acres of Campus" },
    { data: "22+", title: "Years of Excellence" },
    { data: "10000+", title: "Alumni" },
    { data: "20+", title: "Courses" },
  ];

  return (
    <section className="lg:py-28 md:py-12 py-6 sm:px-0 px-6 relative">
      <img
        src={bg}
        alt="stats"
        className="absolute object-cover top-0 h-full w-full -z-10"
      />
      <div className="bg-black inset-0 opacity-70 absolute z-20" />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative z-30">
        <WordPullUp
          className="text-4xl md:text-6xl font-bold text-white mb-8  text-center text-3xl font-bold sm:font-bold md:font-extrabold  sm:text-5xl lg:text-6xl "
          words="INDO GLOBAL GROUPS OF COLLEGES"
        />
        <Heading
          // title="INDO GLOBAL GROUPS OF COLLEGES"
          subtitle="Spanning 70 acres, with 22+ years of academic excellence, over 10,000 alumni, and 20+ specialized courses, we continue to shape future professionals."
          titleClassName="text-4xl md:text-6xl font-bold text-white"
          subtitleClassName="text-gray-300 text-base md:text-lg"
        />

        {/* Example of Heading without subtitle */}

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x-2 md:divide-red-700">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:p-4">
              <div className="text-5xl font-bold font text-white sm:text-6xl">
                {/* {item.data} */}
                <NumberTicker
                  value={item.data}
                  className="text-5xl font-bold font text-white sm:text-6xl"
                />{" "}
                {index != 0 && <span className="-ml-3 ">+</span>}
              </div>
              <div className="mt-3 text-sm font-medium text-gray-400 sm:text-xl">
                {item.title}
                {}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

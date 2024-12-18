import bg from "../../assets/StatsBg.webp";
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
    <section className=" relative px-0 py-10 lg:py-28 md:py-12 sm:px-0">
      <img
        src={bg}
        alt="stats"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10 blur-sm"
      />
      <div className="absolute inset-0 z-20 bg-black opacity-70" />
      <div className="relative z-30 max-w-screen-xl px-4 mx-auto md:px-8">
        <WordPullUp
          className="mb-8 text-4xl font-bold text-center text-white md:text-6xl sm:font-bold md:font-extrabold sm:text-5xl lg:text-6xl "
          words="INDO GLOBAL GROUP OF COLLEGES"
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
              <div className="text-5xl font-bold text-white font sm:text-6xl">
                {/* {item.data} */}
                <NumberTicker
                  value={item.data}
                  className="text-4xl font-bold text-white font sm:text-6xl"
                />{" "}
                {index != 0 && (
                  <span className="-ml-3 text-4xl font-bold text-white font sm:text-6xl">
                    +
                  </span>
                )}
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

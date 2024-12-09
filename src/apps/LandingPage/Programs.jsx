import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight, SendHorizontal } from "lucide-react";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import { programData } from "./programData";
import ButtonSq from "../../components/ButtonSq";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
export default function Programs() {
  // Set default active tab to "undergraduate"
  const [activePrograms, setActivePrograms] = useState(
    programData.reduce((acc, category) => ({ ...acc, [category.id]: null }), {})
  );

  const [selectedTab, setSelectedTab] = useState("undergraduate");

  const handleProgramClick = (categoryId, programIndex) => {
    setActivePrograms((prev) => ({
      ...prev,
      [categoryId]: programIndex,
    }));
  };

  // Hook for checking if the card content is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the card is in the viewport
    triggerOnce: false, // Re-trigger on each tab change
  });

  useEffect(() => {
    // Reset the active program when the tab changes
    setActivePrograms((prev) => ({
      ...prev,
      [selectedTab]: null,
    }));
  }, [selectedTab]);

  return (
    <div>
      <Container className="container md:px-0">
        <div className="mx-auto">
          <Heading
            title="Programs Offered"
            subtitle="Explore our program offerings, including degree programs, undergraduate and graduate programs, and more."
            subtitleClassName="text-gray-500"
            titleClassName="text-secondary-color mb-6 md:text-6xl text-4xl font-bold"
          />
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="relative z-50 w-full"
          >
            <TabsList className="grid grid-cols-3 p-0 w-full h-8 bg-white rounded-none sm:h-16">
              {programData.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-red-500 data-[state=inactive]:bg-gray-200 py-1 h-full data-[state=active]:text-white text-sm sm:text-lg md:text-xl rounded-none border-r-2 border-gray-300 active:scale-95 transition-all   last:border-r-0"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {programData.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="space-y-2">
                    <ul className="space-y-4 list-disc list-inside">
                      {category.programs.map((program, index) => (
                        <motion.li
                          key={index}
                          onClick={() => handleProgramClick(category.id, index)}
                          className={`cursor-pointer flex items-center ${
                            activePrograms[category.id] === index
                              ? "text-red-500 text-lg drop-shadow-md sm:text-2xl font-semibold"
                              : " text-black text-base sm:text-xl"
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            delay: index * 0.5,
                            duration: 0.5,
                          }}
                        >
                          {activePrograms[category.id] === index ? (
                            <SendHorizontal className="mr-2 w-5 h-5" />
                          ) : (
                            <ChevronRight className="mr-2 w-5 h-5" />
                          )}
                          {program.name}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <Card
                    as={motion.div}
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }} // Start offscreen to the right
                    animate={inView ? { opacity: 1, x: 0 } : {}} // Translate into view
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="bg-gray-900 text-white md:absolute md:w-[70%] md:-right-64 md:top-8 rounded-none  md:py-10 md:px-14  sm:-z-10 z-auto"
                  >
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold sm:text-3xl lg:text-5xl">
                        {activePrograms[category.id] !== null
                          ? category.programs[activePrograms[category.id]].name
                          : category.defaultCard.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="md:w-2/3">
                      <CardDescription className="text-lg text-gray-300">
                        {activePrograms[category.id] !== null
                          ? category.programs[activePrograms[category.id]]
                              .description
                          : category.defaultCard.description}
                      </CardDescription>
                      {activePrograms[category.id] !== null && (
                        <>
                          <p className="mt-4 text-white">
                            <strong>Duration:</strong>{" "}
                            {
                              category.programs[activePrograms[category.id]]
                                .duration
                            }
                          </p>
                          <p className="mt-2 text-white">
                            <strong>Eligibility:</strong>{" "}
                            {
                              category.programs[activePrograms[category.id]]
                                .eligibility
                            }
                          </p>
                        </>
                      )}
                      <div className="flex relative gap-1 justify-between mt-8 z-100 sm:gap-5 sm:justify-start">
                        <Link
                          to={
                            activePrograms[category.id] !== null
                              ? category.programs[activePrograms[category.id]]
                                  .path
                              : category.defaultCard.path
                          }
                        >
                          <ButtonSq
                            className="text-xs text-white bg-red-500 sm:text-base hover:bg-red-600 w-fit"
                            iconDiv="bg-red-800"
                            label="Apply Now"
                          />
                        </Link>

                        <ButtonSq
                          className="text-xs text-gray-800 bg-white sm:text-base hover:bg-slate-100 w-fit"
                          iconDiv="bg-gray-400"
                          label="Know More"
                          to={
                            activePrograms[category.id] !== null
                              ? category.programs[activePrograms[category.id]]
                                  .path
                              : category.defaultCard.path
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

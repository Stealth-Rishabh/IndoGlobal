import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { ChevronRight, SendHorizontal } from "lucide-react";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import { programData } from "./programData";
import ButtonSq from "../../components/ButtonSq";

export default function Programs() {
  const [activePrograms, setActivePrograms] = useState(
    programData.reduce((acc, category) => ({ ...acc, [category.id]: null }), {})
  );

  const handleProgramClick = (categoryId, programIndex) => {
    setActivePrograms((prev) => ({
      ...prev,
      [categoryId]: programIndex,
    }));
  };

  return (
    <div className="">
      <Container className="container md:px-0 ">
        <div className="mx-auto">
          <Heading
            title="Programs Offered"
            subtitle="Explore our program offerings, including degree programs, undergraduate and graduate programs, and more."
            subtitleClassName="text-gray-500"
            titleClassName="text-secondary-color mb-6 md:text-6xl text-4xl font-bold"
            //   className="font-bold text-center"
          />
          <Tabs defaultValue="undergraduate" className="relative w-full">
            <TabsList className="grid w-full h-8 grid-cols-3 p-0 bg-white rounded-none sm:h-16">
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
                        <li
                          key={index}
                          onClick={() => handleProgramClick(category.id, index)}
                          className={`cursor-pointer   flex items-center ${
                            activePrograms[category.id] === index
                              ? "text-red-500 text-lg drop-shadow-md sm:text-2xl font-semibold"
                              : " text-black text-base sm:text-xl"
                          }`}
                        >
                          {activePrograms[category.id] === index && (
                            <SendHorizontal className="w-5 h-5 mr-2" />
                          )}
                          {activePrograms[category.id] != index && (
                            <ChevronRight className="w-5 h-5 mr-2" />
                          )}
                          {program.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Card className="bg-gray-900 text-white md:absolute md:w-[70%] md:-right-64 md:top-8 rounded-none  md:py-10 md:px-14 md:-z-10">
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
                      <div className="flex justify-between gap-1 mt-8 sm:gap-5 sm:justify-start">
                        <ButtonSq
                          className="text-xs text-white bg-red-500 sm:text-base hover:bg-red-600 w-fit"
                          iconDiv="bg-red-800"
                          label="Apply Now"
                        />
                        <ButtonSq
                          className="text-xs text-gray-800 bg-white sm:text-base hover:bg-slate-100 w-fit"
                          iconDiv="bg-gray-400"
                          label="Know More"
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

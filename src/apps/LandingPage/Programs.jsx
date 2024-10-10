import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Container className="container md:px-0">
      <div className="mx-auto">
        <Heading
          title="Programs Offered"
          subtitle='Explore our program offerings, including degree programs, undergraduate and graduate programs, and more.'
          subtitleClassName="text-gray-500"
          titleClassName="text-blue-800 mb-6 md:text-6xl"
        />
        <Tabs defaultValue="undergraduate" className="w-full relative">
          <TabsList className="grid w-full grid-cols-3 h-8 sm:h-16 rounded-none bg-white p-0">
            {programData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-red-500 data-[state=inactive]:bg-gray-200 py-1 h-full data-[state=active]:text-white text-sm sm:text-xl rounded-none border-r-2 border-gray-300 last:border-r-0"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {programData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <ul className="list-inside list-disc space-y-4">
                    {category.programs.map((program, index) => (
                      <li
                        key={index}
                        onClick={() => handleProgramClick(category.id, index)}
                        className={`cursor-pointer  flex items-center ${
                          activePrograms[category.id] === index
                            ? "text-red-500 text-lg sm:text-2xl font-semibold"
                            : " text-black text-base sm:text-xl"
                        }`}
                      >
                        {activePrograms[category.id] === index && (
                          <SendHorizontal className="mr-2 h-5 w-5" />
                        )}
                        {activePrograms[category.id] != index && (
                          <ChevronRight className="mr-2 h-5 w-5" />
                        )}
                        {program.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="bg-gray-900 text-white sm:absolute sm:w-[70%] sm:-right-64 sm:top-8 rounded-none  sm:py-10 sm:px-14 sm:-z-10">
                  <CardHeader>
                    <CardTitle className="text-3xl sm:text-5xl font-bold">
                      {activePrograms[category.id] !== null
                        ? category.programs[activePrograms[category.id]].name
                        : category.defaultCard.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="sm:w-2/3">
                    <CardDescription className="text-gray-300 text-lg">
                      {activePrograms[category.id] !== null
                        ? category.programs[activePrograms[category.id]]
                            .description
                        : category.defaultCard.description}
                    </CardDescription>
                    {activePrograms[category.id] !== null && (
                      <>
                        <p className="text-white mt-4">
                          <strong>Duration:</strong>{" "}
                          {
                            category.programs[activePrograms[category.id]]
                              .duration
                          }
                        </p>
                        <p className="text-white mt-2">
                          <strong>Eligibility:</strong>{" "}
                          {
                            category.programs[activePrograms[category.id]]
                              .eligibility
                          }
                        </p>
                      </>
                    )}
                    <div className="flex space-x-4 mt-8">
                      {/* <Button className="bg-red-500 hover:bg-red-600">
                        Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-gray-900"
                      >
                        Know more... <ChevronRight className="ml-2 h-4 w-4" />
                      </Button> */}
                      <ButtonSq
                        className="bg-red-500 hover:bg-red-600 text-white "
                        iconDiv="bg-red-800"
                        label="Apply Now"
                      />
                      <ButtonSq
                        className="bg-white hover:bg-slate-100 text-gray-800"
                        iconDiv="bg-gray-400"
                        label="Know More..."
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
  );
}

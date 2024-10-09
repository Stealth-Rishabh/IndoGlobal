import React from "react";
import Container from "../../components/wrappers/Container";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonSq from "../../components/ButtonSq";

const RankSlider = () => {
  return (
    <Container className="relative">
      <Carousel className="w-full ">
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none rounded-none shadow">
                  <CardContent className="p-0  h-96 sm:h-[600px] shadow-none ">
                    <div className="w-full flex justify-between">
                      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0">
                        Rankings, Accereditations &amp; Tie-up.
                      </h2>
                      <ButtonSq
                        label="Know more..."
                        iconDiv="bg-primary-color"
                        className="bg-secondary-color hover:bg-secondary-color/90 text-white"
                        iconStyle=""
                      />
                    </div>
                    <div className="div">
                      <div className="">

                      </div>
                      <div className="">

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          iconStyle="text-white lg:h-8  "
          className="absolute left-[0px] top-[106%] bg-gray-300 hover:bg-red-600 h-10 active:bg-red-700 w-24 rounded-sm opacity-100 "
        />
        <CarouselNext
          iconStyle="text-white lg:h-8"
          className="absolute left-[110px] top-[106%] bg-slate-300 hover:bg-red-600 w-24 h-10 rounded-sm opacity-100 active:bg-red-700 "
        />
      </Carousel>
    </Container>
  );
};

export default RankSlider;

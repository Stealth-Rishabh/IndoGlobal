import React from "react";
import { GraduationCap, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam.jsx";
import RetroGrid from "@/components/ui/retro-grid";
import Ripple from "@/components/ui/ripple";
const StatCard = ({ icon, value, description }) => (
  <Card className="relative py-6 overflow-hidden transition-all duration-300 rounded-sm shadow-md cursor-pointer bg sm:shadow-none hover:shadow-md">
    <CardContent className="flex flex-col items-center p-6">
      {icon}
      <h3 className="mt-4 text-5xl font-bold tracking-wide text-blue-900 md:text-6xl drop-shadow-lg">
        {value}
      </h3>
      <p className="mt-4 text-xl text-center tracking-wide text-gray-600 md:text-2xl drop-shadow-sm">
        {description}
      </p>
      <BorderBeam
        borderWidth={3}
        colorFrom="#ef4444"
        size={200}
        colorTo="#053A86"
      />
      {/* <RetroGrid /> */}
      <Ripple className="-bottom-72 blur-[2px]" mainCircleSize={50} />
    </CardContent>
  </Card>
);

const PlacementStats = () => {
  return (
    <div className="pt-24 pb-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          <StatCard
            icon={
              <GraduationCap className="w-14 sm:w-20 h-14 sm:h-20 text-primary-color drop-shadow-md" />
            }
            value="₹ 60 LPA"
            description="Highest Placement"
          />
          <StatCard
            icon={
              <Briefcase className="w-14 sm:w-20 h-14 sm:h-20 text-primary-color drop-shadow-md" />
            }
            value="8700+"
            description="Students Placed"
          />
          <StatCard
            icon={
              <Users className="w-14 sm:w-20 h-14 sm:h-20 text-primary-color drop-shadow-md" />
            }
            value="2100+"
            description="Recruiters"
          />
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;

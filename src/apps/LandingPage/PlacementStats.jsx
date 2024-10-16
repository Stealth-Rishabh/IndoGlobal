import React from 'react';
import { GraduationCap, Briefcase, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam.jsx";
const StatCard = ({ icon, value, description }) => (
  <Card className="bg-white rounded-sm py-6 shadow-md sm:shadow-none hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden">
    <CardContent className="flex flex-col items-center p-6">
      {icon}
      <h3 className="mt-4   text-5xl md:text-6xl font-bold text-blue-900 drop-shadow-lg">{value}</h3>
      <p className="text-center text-xl md:text-2xl text-gray-600 mt-4 drop-shadow-sm">{description}</p>
      <BorderBeam borderWidth={3} colorFrom="#ef4444" size={200} colorTo="#053A86"/>
    </CardContent>
  </Card>
);

const PlacementStats = () => {
  return (
    <div className="pt-24 pb-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 sm:gap-8">
          <StatCard
            icon={<GraduationCap className="w-14 sm:w-20 h-14 sm:h-20 text-primary-color drop-shadow-md" />}
            value="₹ 60 LPA"
            description="Highest Placement"
          />
          <StatCard
            icon={<Briefcase className="w-14 sm:w-20 h-14 sm:h-20 text-primary-color drop-shadow-md" />}
            value="8700+"
            description="Students Placed"
          />
          <StatCard
            icon={<Users className="w-14 sm:w-20 h-14 sm:h-20 text-primary-color drop-shadow-md" />}
            value="2100+"
            description="Recruiters"
          />
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;

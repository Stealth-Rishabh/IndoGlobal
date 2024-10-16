import { GraduationCap, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatCard = ({ icon, value, description }) => (
  <Card className="bg-white rounded-none py-6 shadow-none">
    <CardContent className="flex flex-col items-center p-6">
      {icon}
      <h3 className="mt-4   text-4xl md:text-6xl font-bold text-blue-900">
        {value}
      </h3>
      <p className="text-center text-xl md:text-2xl text-gray-600 mt-4">
        {description}
      </p>
    </CardContent>
  </Card>
);

const PlacementStats = () => {
  return (
    <div className="pt-24 pb-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 sm:gap-8">
          <StatCard
            icon={
              <GraduationCap className="w-10 sm:w-20 h-10 sm:h-20 text-red-500" />
            }
            value="₹ 60 LPA"
            description="Highest Placement"
          />
          <StatCard
            icon={
              <Briefcase className="w-10 sm:w-20 h-10 sm:h-20 text-red-500" />
            }
            value="8700+"
            description="Students Placed"
          />
          <StatCard
            icon={<Users className="w-10 sm:w-20 h-10 sm:h-20 text-red-500" />}
            value="2100+"
            description="Recruiters"
          />
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;

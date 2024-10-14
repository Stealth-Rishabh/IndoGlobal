import Heading from "../../components/Heading";
import Container from "../../components/wrappers/Container";
import PlacementCard from "./PlacementCard";
import img1 from "../../assets/placement-img.svg";
import logo from "../../assets/placement-logo.svg";
import PlacementStats from "./PlacementStats";
const Placements = () => {
  const profiles = [
    {
      bgColor: "bg-gray-900",
      name: "Gurpreet Randhawa",
      company: "Cerner",
      salary: "₹40 Lakh",
      location: "Bengaluru",
      imageUrl: img1,
      logoUrl: logo,
    },
    {
      bgColor: "bg-blue-900",
      name: "Rohit Sharma",
      company: "Google",
      salary: "₹50 Lakh",
      location: "Hyderabad",
      imageUrl: img1,
      logoUrl: logo,
    },
    {
      bgColor: "bg-gray-900",
      name: "Anita Desai",
      company: "Microsoft",
      salary: "₹45 Lakh",
      location: "Delhi",
      imageUrl: img1,
      logoUrl: logo,
    },
    {
      bgColor: "bg-blue-900",
      name: "Rahul Verma",
      company: "Amazon",
      salary: "₹60 Lakh",
      location: "Mumbai",
      imageUrl: img1,
      logoUrl: logo,
    },
  ];

  return (
    <Container className="sm:px-0">
      <Heading
        title="Our Top Placements"
        subtitle="We are proud to announce that our students have got placed in top companies with highest salary package of 60 Lacs. We also have a strong network of alumni who are working in top MNCs."
        subtitleClassName="text-gray-500"
        titleClassName="text-secondary-color mb-6 md:text-6xl text-4xl font-bold"
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0">
        {profiles.map((profile, index) => (
          <PlacementCard
            key={index}
            bgColor={profile.bgColor}
            name={profile.name}
            company={profile.company}
            salary={profile.salary}
            location={profile.location}
            imageUrl={profile.imageUrl}
            logoUrl={profile.logoUrl}
          />
        ))}
      </div>
      <PlacementStats/>
    </Container>
  );
};

export default Placements;

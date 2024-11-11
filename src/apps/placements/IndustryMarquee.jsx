import { cn } from "@/lib/utils";
import Marquee from "../../components/ui/marquee";
const reviews = [
    {
      name: "Mr. S. Swapnil",
      username: "Wipro Technologies, Pune",
      body: "Insightful contributions to technical processes and solutions.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Mr. Ishlesh Bhaskar",
      username: "HDFC Bank",
      body: "Engaging discussions on financial strategies and market insights.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Mr. Sanjeev Garg",
      username: "CEO, Reliance Communication, Punjab Circle",
      body: "Strategic contributions to communications and networking advancements.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Mr. Siddharth Bhardwaj",
      username: "Regional Director North, Adlabs Films Ltd, BIG 92.7 FM",
      body: "Valuable insights into media management and audience engagement.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Ms. Banmala Shardar",
      username: "HR, IRLE Kay Jay Rolls Pvt. Ltd, Panchkula",
      body: "Effective strategies for workforce management and development.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Mr. A.C. Cheema",
      username: "Cheema Boilers, Ropar",
      body: "Deep understanding of energy systems and boiler technologies.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Mr. Ravi Verma",
      username: "The Times of India",
      body: "Innovative approaches to media and journalism.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Mr. Sandeep Khosla",
      username: "Aditya Birla Retail Ltd",
      body: "Exceptional insights into retail management and customer satisfaction.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Mr. Varinder Verma",
      username: "Sr. Manager-personnel, Swaraj Engines Ltd, Mohali",
      body: "Advanced personnel management and team-building expertise.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Dr. R.K. Kalia",
      username: "G.M. (HRLADM), Amrit Banaspati Co. Ltd, Rajpur",
      body: "Strong leadership in HR and administrative management.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Mr. Sanjeev Updadhyay",
      username: "Sr. Manager HR, Cellebrum Technologies LTD",
      body: "Pioneering HR strategies for technological organizations.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Mr. Hreetesh Bhandari",
      username: "Manager-HR, ICICI Prudentical",
      body: "Forward-thinking HR management and employee engagement.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Mr. I.V. Rao",
      username: "Managing Executive Officer, Maruti Suzuki Pvt. Ltd",
      body: "Extensive knowledge in automotive industry leadership.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Naranjan Dass",
      username: "AVP & Regional Business Head, GCL Infrastructure Ltd",
      body: "Expertise in regional business expansion and infrastructure projects.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Anshul Kotyal",
      username: "Standard Chartered",
      body: "In-depth knowledge in banking and financial services.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Mr. Ashok Garg",
      username: "AVP-HR-IR-HSE, Reliance Industrial Ltd., Hoshiarpur",
      body: "Outstanding leadership in industrial relations and health safety.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Prof. M.M. Malhotra",
      username: "Ex. Principal, NITTTR, Chandigarh",
      body: "Exemplary contributions to technical education and training.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Dr. H.K. Sardana",
      username: "CSIO",
      body: "Leading research in scientific and industrial advancements.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Col. (Retd.) M. S. Dhaliwal",
      username: "Vice President, HR, Grozbeckert",
      body: "Experienced in leadership and HR management strategies.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Mr. Arvind Dixit",
      username: "MD, Advance Technologies",
      body: "Specialized in technology management and innovation.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Mr. Deepak Singla",
      username: "Sun Micro Systems India Pvt. Ltd., Bangalore",
      body: "Innovative solutions in software development and systems management.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Dr. Sunil Pandey",
      username: "Prof. In Mechanical Engineering, IIT, New Delhi",
      body: "Groundbreaking research in mechanical engineering.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Prof. P.K. Singla",
      username: "NITTTR, Chandigarh",
      body: "Pioneering technical education methodologies.",
      img: "https://avatar.vercel.sh/jill",
    }
  ];
  
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-max w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-normal dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function IndustryMarquee() {
  return (
    <div className="relative flex h-[480px] w-full flex-row items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}

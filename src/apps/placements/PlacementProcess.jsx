import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card"
import { ArrowDownIcon } from "lucide-react"

const CustomIcon = ({ d, className = "" }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={d} fill="currentColor" />
  </svg>
)

const steps = [
  {
    title: "Preparation for Interviews",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    description: "Refining student skills for the interview process",
    subSteps: [
      {
        title: "Group Discussions",
        icon: "M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8ZM12 15C7.58172 15 4 18.5817 4 23H20C20 18.5817 16.4183 15 12 15Z",
        description: "Enhances students' communication and collaborative abilities"
      },
      {
        title: "Mock Interviews",
        icon: "M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z",
        description: "Provides students with realistic interview practice to boost their confidence"
      },
      {
        title: "Aptitude Tests",
        icon: "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01",
        description: "Helps students assess and improve their problem-solving skills"
      },
      {
        title: "PowerPoint Presentations",
        icon: "M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21ZM7 3V21M17 3V21M7 12H19",
        description: "Builds presentation and public speaking skills, vital in modern workplaces"
      }
    ]
  },
  {
    title: "Placement Assistance",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    description: "Connecting students with companies",
    subSteps: [
      {
        title: "Resume Building Workshops",
        icon: "M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z",
        description: "Assisting students in creating professional resumes"
      },
      {
        title: "Industry Interface",
        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        description: "Placement team collaborates with companies to bring opportunities to campus"
      },
      {
        title: "On-campus Placement Drives",
        icon: "M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21H5M19 21H21M5 21H3M9 7H10M9 11H10M9 15H10M14 7H15M14 11H15M14 15H15",
        description: "Active participation of companies in on-campus recruitment events"
      },
      {
        title: "Technical Interviews",
        icon: "M12 3c-4.418 0-8 3.582-8 8s3.582 8 8 8s8-3.582 8-8s-3.582-8-8-8zM12 18c-3.313 0-6-2.687-6-6s2.687-6 6-6s6 2.687 6 6s-2.687 6-6 6zM12 10c-1.104 0-2 0.896-2 2s0.896 2 2 2s2-0.896 2-2s-0.896-2-2-2z",
        description: "Assessing students' technical knowledge and problem-solving abilities"
      }
    ]
  }
]

export default function PlacementProcess() {
  return (
    <Card className="w-full  mx-auto  shadow-none border-0">
      <CardHeader className='px-0'>
        <CardTitle className="text-4xl font-bold ">Placement Process</CardTitle>
        <CardDescription className='text-lg pt-4'>Efficiently connect students with top companies for successful careers.</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-8 pt-5">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-4 bg-primary text-primary-foreground rounded-lg p-4">
                <CustomIcon d={step.icon} className="flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Step {index + 1}: {step.title}</h3>
                  <p className="text-sm opacity-90">{step.description}</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 pl-5">
                {step.subSteps.map((subStep, subIndex) => (
                  <div key={subIndex} className="bg-muted p-4 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105">
                    <div className="flex items-center space-x-3 mb-2">
                      <CustomIcon d={subStep.icon} className="text-primary" />
                      <h4 className="font-semibold">{subStep.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{subStep.description}</p>
                  </div>
                ))}
              </div>
              {/* {index < steps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDownIcon className="text-primary" size={34} />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
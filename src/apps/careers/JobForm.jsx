import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitApplication } from "./actions";
import {
  Building2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
  // Sparkle,
  LetterText,
  Book,
  CalendarClockIcon,
} from "lucide-react";

const QUALIFICATIONS = {
  undergraduate: [
    "Bachelor of Technology in Computer Science & Engineering",
    "Bachelor of Technology in Electronics & Comm. Engineering",
    "Bachelor of Technology in Mechanical Engineering",
    "Bachelor of Technology in Civil Engineering",
    "Bachelor of Architecture",
    "Bachelor of Science",
    "Bachelor of Arts",
    "Bachelor of Commerce",
    "Bachelor of Computer Applications",
    "Bachelor of Business Administration",
  ],
  postgraduate: [
    "MCA",
    "MBA",
    "M.Com",
    "M.Tech",
    "M.Tech in Computer Science & Engineering",
    "M.Tech in Electronics & Comm. Engineering",
    "M.Tech in Mechanical Engineering",
    "M.Tech in Civil Engineering",
    "Master of Architecture",
    "M.Sc in Maths",
    "M.Sc in Physics",
    "M.Sc in Chemistry",
    "M.A in English",
    "M.A in Economics",
    "M.A in History",
    "M.A in Hindi",
    "M.A in Punjabi",
    "M.A in Geography",
    "M.A in Statistics",
  ],
  other: ["Other"],
};

export default function JobForm({ h1 }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedQualification, setSelectedQualification] = useState("");
  const [otherQualification, setOtherQualification] = useState("");

  async function handleSubmit(formData) {
    // If 'other' is selected, add the custom qualification to the form data
    if (selectedQualification === "other" && otherQualification) {
      formData.append("customQualification", otherQualification);
    }

    setIsSubmitting(true);
    await submitApplication(formData);
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen  ">
      <Card className="mx-auto max-w-3xl rounded-none sm:rounded-lg">
        <CardHeader className="space-y-1 text-center">
          <h1 className=" text-2xl sm:text-3xl">
            {h1}
          </h1>
          <CardDescription className="text-sm sm:text-lg">
            Apply for academic and administrative positions
          </CardDescription>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <Label
                    htmlFor="firstName"
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" /> First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="h-4 w-4" /> Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@university.edu"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="123 University Ave, City, State"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Job Details
              </h2>
              <div className="space-y-4">
                <Label>Position Type</Label>
                <RadioGroup
                  name="positionType"
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  defaultValue="teaching"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teaching" id="teaching" />
                    <Label htmlFor="teaching">Teaching</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non-teaching" id="non-teaching" />
                    <Label htmlFor="non-teaching">Non-Teaching</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="administration"
                      id="administration"
                    />
                    <Label htmlFor="administration">Administration</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-4">
                <Label htmlFor="department" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Department
                </Label>
                <Input
                  id="department"
                  name="department"
                  placeholder="e.g., Computer Science"
                  required
                />
              </div>
              <div className="space-y-4">
                <Label
                  htmlFor="qualification"
                  className="flex items-center gap-2"
                >
                  <GraduationCap className="h-4 w-4" /> Highest Qualification
                </Label>
                <Select
                  name="qualification"
                  value={selectedQualification}
                  onValueChange={(value) => setSelectedQualification(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem disabled>Undergraduate Degrees</SelectItem>
                    {QUALIFICATIONS.undergraduate.map((degree, index) => (
                      <SelectItem key={index} value={degree}>
                        {degree}
                      </SelectItem>
                    ))}

                    <SelectItem disabled>Postgraduate Degrees</SelectItem>
                    {QUALIFICATIONS.postgraduate.map((degree, index) => (
                      <SelectItem key={index} value={degree}>
                        {degree}
                      </SelectItem>
                    ))}

                    <SelectItem disabled>Other</SelectItem>
                    {QUALIFICATIONS.other.map((option, index) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Dynamic input for 'Other' qualification */}
                {selectedQualification === "Other" && (
                  <div className="mt-2 space-y-4 animate-fade-in">
                    <Label
                      htmlFor="otherQualification"
                      className="flex items-center gap-2"
                    >
                      <Book className="h-4 w-4" /> Specify Qualification
                    </Label>
                    <Input
                      id="otherQualification"
                      name="otherQualification"
                      placeholder="Enter your specific qualification"
                      value={otherQualification}
                      onChange={(e) => setOtherQualification(e.target.value)}
                      required
                    />
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <Label htmlFor="experience" className="flex items-center gap-2">
                  <CalendarClockIcon className="h-4 w-4" /> Years of Experience
                </Label>
                <Input
                  id="experience"
                  name="experience"
                  placeholder="Years of professional experience"
                  required
                />
              </div>
              <div className="space-y-4">
                <Label
                  htmlFor="coverLetter"
                  className="flex items-center gap-2"
                >
                  <LetterText className="h-4 w-4" /> Cover Letter
                </Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  placeholder="Explain why you're the ideal candidate for this position..."
                  className="min-h-[150px]"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Job Application"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

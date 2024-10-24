import Container from "../../components/wrappers/Container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { PhoneCall, Mail, Map } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const supportData = [
    {
      icon: PhoneCall,
      title: "Call Now",
      details: ["+91-7307211222", "+91-987654321"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["contact@igef.net", "igef@example.com"],
    },
    {
      icon: Map,
      title: "Location",
      details: ["Abhipur, New Chandigarh", "Mohali, Punjab-1"],
    },
  ];

  return (
    <div className="bg-slate-50">
      <Container>
        <section className="grid grid-cols-1 gap-0 space-y-5 sm:space-y-0 sm:gap-5 md:grid-cols-3">
          <Card className="bg-white shadow-sm ">
            <CardHeader>
              <CardTitle className="text-3xl font-bold sm:text-4xl sm:pb-5 text-primary-color">
                Need more help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {supportData.map(({ icon: Icon, title, details }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-5 p-6  shadow-sm hover:shadow-md transition-all duration-300 bg-secondary-color cursor-pointer justify-center items-center rounded-lg"
                >
                  <div className="group flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 p-4 sm:p-8 bg-primary-color  rounded-full transition-transform duration-500 hover:rotate-[360deg] overflow-hidden">
                    <Icon className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-125 text-white " />
                  </div>

                  <div className="grid col-span-2 gap-2">
                    <span className="text-lg sm:text-2xl text-white font-semibold">
                      {title}
                    </span>
                    {details.map((detail, i) => (
                      <span key={i} className="text-xs sm:text-base text-white/80">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Form section */}
          <Card className="col-span-2 bg-white shadow-sm ">
            <CardHeader>
              <CardTitle className="text-3xl font-bold sm:text-4xl sm:pb-5 text-primary-color">
                Get in touch with us.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 sm:grid-cols-1 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5" >
                    {[
                  { id: "name", label: "Name", placeholder: "Your name" },
                  { id: "email", label: "Email", placeholder: "Your email" },
                  { id: "phone", label: "Phone", placeholder: "Your phone" },
                  { id: "course", label: "Course", placeholder: "Your course" },
                ].map(({ id, label, placeholder }) => (
                  <div key={id} className="flex flex-col space-y-2.5">
                    <Label className="text-lg sm:text-2xl text-primary-color" htmlFor={id}>
                      {label}
                    </Label>
                    <Input
                      className="py-6 border-pri-color/30 focus:border-primary-color"
                      id={id}
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                </div>
                
                <div className="flex flex-col col-span-2 space-y-2.5">
                  <Label className="text-2xl text-primary-color" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    className="h-[10rem] border-pri-color/30 focus:border-primary-color"
                    id="message"
                    placeholder="Type your message here."
                  />
                  <Button className="mt-12 bg-primary-color hover:bg-primary-color/90 text-white" type="submit">
                    Send message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
};

export default Contact;

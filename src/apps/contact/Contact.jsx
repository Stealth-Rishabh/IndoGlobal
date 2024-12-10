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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const supportData = [
    {
      data: "tel",
      icon: PhoneCall,
      title: "Call Now",
      details: ["+91-7307211222", "0160-5036000"],
    },
    {
      data: "email",
      icon: Mail,
      title: "Email Address",
      details: ["contact@igef.net", "igef@example.com"],
    },
    {
      data: "location",
      icon: Map,
      title: "Location",
      details: ["Abhipur, New Chandigarh", "Mohali, Punjab-140109"],
    },
  ];

  // Validation rules
  const validateForm = () => {
    const newErrors = {};

    // Name validation (letters only, min 3 chars)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation (10 digits starting with 6,7,8,9)
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9";
    }

    // Course validation
    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    // Message validation (min 10 chars)
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fix the errors in the form",
      });
      return;
    }

    try {
      // Show loading toast
      toast({
        title: "Sending message...",
        description: "Please wait while we process your request.",
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success toast
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="bg-slate-50">
      <Toaster />
      <Container>
        <section className="grid grid-cols-1 gap-0 sm:space-y-5 sm:space-y-0 sm:gap-5 md:grid-cols-3">
          <Card className="bg-white shadow-sm sm:order-1 order-2 mt-6 sm:mt-0">
            <CardHeader>
              <CardTitle className="text-3xl font-bold sm:text-4xl sm:pb-5 text-secondary-color">
                Need more help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {supportData.map(
                ({ data, icon: Icon, title, details }, index) => (
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
                      {data === "tel" &&
                        details.map((detail, i) => (
                          <a
                            key={i}
                            href={`tel:${detail}`}
                            className="text-xs sm:text-base text-white/80"
                          >
                            {detail}
                          </a>
                        ))}
                      {data === "email" &&
                        details.map((detail, i) => (
                          <a
                            key={i}
                            href={`mailto:${detail}`}
                            className="text-xs sm:text-base text-white/80"
                          >
                            {detail}
                          </a>
                        ))}
                      {data === "location" &&
                        details.map((detail, i) => (
                          <a
                            key={i}
                            href="https://maps.app.goo.gl/NL7WpXRs7wDYNTEu5"
                            target="_blank"
                            className="text-xs sm:text-base text-white/80"
                          >
                            {detail}
                          </a>
                        ))}
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>

          {/* Form section */}
          <Card className="col-span-2 bg-white shadow-sm sm:order-2 order-1">
            <CardHeader>
              <CardTitle className="text-3xl font-bold sm:text-4xl sm:pb-5 text-secondary-color">
                Get in touch with us.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                  {[
                    { id: "name", label: "Name", placeholder: "Your name", type: "text" },
                    { id: "email", label: "Email", placeholder: "Your email" },
                    { id: "phone", label: "Phone", placeholder: "Your phone", type: "tel" },
                    { id: "course", label: "Course", placeholder: "Your course" },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id} className="flex flex-col space-y-2.5">
                      <Label className="text-lg sm:text-2xl text-secondary-color/80" htmlFor={id}>
                        {label}
                      </Label>
                      <Input
                        type={type}
                        className={`py-6 border-secondary-color/30 focus:border-secondary-color ${
                          errors[id] ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        id={id}
                        value={formData[id]}
                        onChange={handleChange}
                        placeholder={placeholder}
                      />
                      {errors[id] && (
                        <span className="text-sm text-red-500">{errors[id]}</span>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col col-span-2 space-y-2.5">
                  <Label className="text-2xl text-secondary-color/80" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    className={`h-[10rem] border-secondary-color/30 focus:border-secondary-color ${
                      errors.message ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here."
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500">{errors.message}</span>
                  )}
                  <Button 
                    className="mt-12 bg-secondary-color hover:bg-secondary-color/90 text-white" 
                    type="submit"
                  >
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

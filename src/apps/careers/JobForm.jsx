import React, { useState } from 'react'
import { Loader2, User, Briefcase, GraduationCap, Mail, Phone, MapPin, Check, ChevronsUpDown } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { cn } from "@/lib/utils"

// Constants
const JOB_TYPES = ['Teaching', 'Non-Teaching', 'Administration', 'Other']
const QUALIFICATIONS = ['Bachelor\'s', 'Master\'s', 'Ph.D.', 'Other']

// Combobox Component
function Combobox({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select...", 
  name 
}) {
  const [open, setOpen] = useState(false)

  const handleSelect = (currentValue) => {
    const newValue = currentValue.toLowerCase() === value?.toLowerCase() ? "" : currentValue

    if (onChange) {
      onChange({
        target: {
          name: name,
          value: newValue
        }
      })
    }

    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.toLowerCase() === value.toLowerCase())
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option}
                onSelect={() => handleSelect(option)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value?.toLowerCase() === option.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

// Form Component
export default function JobApplicationForm() {
  // State Management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    positionType: 'teaching',
    department: '',
    qualification: '',
    experience: '',
    coverLetter: ''
  })

  // Error State
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Validation Function
  const validateForm = () => {
    const newErrors = {}
    
    // Validate Personal Information
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone Validation
    const phoneRegex = /^(\+\d{1,3}[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    // Other Required Fields
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.department.trim()) newErrors.department = 'Department is required'
    if (!formData.qualification) newErrors.qualification = 'Highest qualification is required'
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required'
    
    // Experience Validation
    if (!formData.experience || 
        isNaN(Number(formData.experience)) || 
        Number(formData.experience) < 0
    ) {
      newErrors.experience = 'Please enter a valid number of years'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        // Simulate API Call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        console.log('Submitted Form Data:', formData)
        
        toast({
          title: "Application Submitted",
          description: "Your job application has been successfully submitted.",
          variant: "default"
        })

        // Optional: Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          positionType: 'teaching',
          department: '',
          qualification: '',
          experience: '',
          coverLetter: ''
        })
      } catch (error) {
        toast({
          title: "Submission Error",
          description: "There was a problem submitting your application. Please try again.",
          variant: "destructive"
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <main className="container mx-auto py-10">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>University Job Application</CardTitle>
          <CardDescription>Apply for academic and administrative positions</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-8"
                    />
                  </div>
                  {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="pl-8"
                    />
                  </div>
                  {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@university.edu"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-8"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Phone and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-8"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="address"
                      name="address"
                      placeholder="123 University Ave, City, State"
                      value={formData.address}
                      onChange={handleChange}
                      className="pl-8"
                    />
                  </div>
                  {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
                </div>
              </div>
            </div>

            {/* Job Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Job Details</h3>
              
              {/* Position Type */}
              <div className="space-y-2">
                <Label>Position Type</Label>
                <RadioGroup 
                  value={formData.positionType}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, positionType: value }))}
                  className="flex flex-wrap gap-4"
                >
                  {JOB_TYPES.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value={type.toLowerCase()} 
                        id={type.toLowerCase()} 
                      />
                      <Label htmlFor={type.toLowerCase()}>{type}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Department */}
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <div className="relative">
                  <Briefcase className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="department"
                    name="department"
                    placeholder="e.g., Computer Science"
                    value={formData.department}
                    onChange={handleChange}
                    className="pl-8"
                  />
                </div>
                {errors.department && <p className="text-xs text-red-500">{errors.department}</p>}
              </div>

              {/* Qualification */}
              <div className="space-y-2">
                <Label>Highest Qualification</Label>
                <Combobox 
                  options={QUALIFICATIONS}
                  value={formData.qualification}
                  onChange={handleChange}
                  name="qualification"
                  placeholder="Select qualification"
                />
                {errors.qualification && <p className="text-xs text-red-500">{errors.qualification}</p>}
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <div className="relative">
                  <GraduationCap className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    placeholder="Years of professional experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="pl-8"
                  />
                </div>
                {errors.experience && <p className="text-xs text-red-500">{errors.experience}</p>}
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea 
                  id="coverLetter"
                  name="coverLetter"
                  placeholder="Explain why you're the ideal candidate for this position..."
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="min-h-[120px]"
                />
                {errors.coverLetter && <p className="text-xs text-red-500">{errors.coverLetter}</p>}
              </div>
            </div>
          </form>
        </CardContent>
        
        {/* Submit Button */}
        <CardFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit} 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              'Submit Job Application'
            )}
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
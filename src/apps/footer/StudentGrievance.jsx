import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function StudentGrievance({ h1 }) {
  const [formData, setFormData] = useState({
    course: '',
    semester: '',
    rollNo: '',
    name: '',
    email: '',
    mobile: '',
    grievance: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const courses = [
    'M.TECH CIVIL ENGINEERING',
    'M.TECH COMPUTER SCIENCE ENGINEERING', 
    'M.TECH ELECTRONICS AND COMMUNICATION',
    'B.TECH MECHANICAL ENGINEERING',
    'B.TECH COMPUTER SCIENCE ENGINEERING',
    'B.TECH ELECTRONICS AND COMMUNICATION ENGINEERING',
    'B.TECH CIVIL ENGINEERING',
    'POLYTECHNIC MECHANICAL ENGINEERING',
    'POLYTECHNIC CIVIL ENGINEERING',
    'MASTER OF BUSINESS ADMINISTRATION(MBA)',
    'BACHELOR OF BUSINESS ADMINISTRATION (BBA)',
    'BACHELOR OF COMPUTER APPLICATIONS (BCA)',
    'BACHELOR OF COMMERCE (BCOM)',
    'BACHELOR OF ARCHITECTURE',
    'B.SC. MEDICAL LABORATORY SCIENCES (MLS)',
    'B.SC RADIOLOGY & IMAGING TECHNOLOGY',
    'B.SC OPERATION THEATRE TECHNOLOGY'
  ];
  const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.course) newErrors.course = 'Course is required';
    if (!formData.semester) newErrors.semester = 'Semester is required';
    if (!formData.rollNo.match(/^[0-9]{8}$/)) newErrors.rollNo = 'Please enter a valid 8-digit roll number';
    if (formData.name.length < 2) newErrors.name = 'Name should be at least 2 characters long';
    if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) newErrors.email = 'Please enter a valid email address';
    if (!formData.mobile.match(/^[0-9]{10}$/)) newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    if (formData.grievance.length < 20) newErrors.grievance = 'Please provide more details (minimum 20 characters)';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Grievance submitted successfully!');
      setFormData({
        course: '',
        semester: '',
        rollNo: '',
        name: '',
        email: '',
        mobile: '',
        grievance: '',
      });
    }
  };

  return (
    <div className="min-h-screen sm:py-20 p-6 flex bg-slate-100 items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-black">
          {h1}
        </h1>

        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Select Course</Label>
            <Select
              name="course"
              value={formData.course}
              onValueChange={(value) => setFormData({ ...formData, course: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
          </div>

          <div>
            <Label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">Select Semester</Label>
            <Select
              name="semester"
              value={formData.semester}
              onValueChange={(value) => setFormData({ ...formData, semester: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.semester && <p className="mt-1 text-xs text-red-600">{errors.semester}</p>}
          </div>

          <div>
            <Label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-1">Roll Number</Label>
            <Input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter Roll Number"
            />
            {errors.rollNo && <p className="mt-1 text-xs text-red-600">{errors.rollNo}</p>}
          </div>

          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter Name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter Email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</Label>
            <Input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter Mobile Number"
            />
            {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
          </div>

          <div>
            <Label htmlFor="grievance" className="block text-sm font-medium text-gray-700 mb-1">Your Grievance</Label>
            <Textarea
              name="grievance"
              value={formData.grievance}
              onChange={handleChange}
              className="w-full h-32"
              placeholder="Enter Your Grievances"
            />
            {errors.grievance && <p className="mt-1 text-xs text-red-600">{errors.grievance}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default StudentGrievance;


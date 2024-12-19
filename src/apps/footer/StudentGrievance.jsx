import React, { useState } from 'react';

function StudentGrievance() {
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

  const courses = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Chemical'];
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
    <div className="min-h-screen p-6 flex bg-slate-100 items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-black">Student Grievance</h1>

        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
            >
              <option value="">Select Semester</option>
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
            {errors.semester && <p className="mt-1 text-xs text-red-600">{errors.semester}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter Roll Number"
            />
            {errors.rollNo && <p className="mt-1 text-xs text-red-600">{errors.rollNo}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter Name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter Email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter Mobile Number"
            />
            {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Grievance</label>
            <textarea
              name="grievance"
              value={formData.grievance}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black h-32"
              placeholder="Enter Your Grievances"
            />
            {errors.grievance && <p className="mt-1 text-xs text-red-600">{errors.grievance}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentGrievance;


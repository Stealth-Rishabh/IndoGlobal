export async function submitApplication(formData) {
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    positionType: formData.get('positionType'),
    department: formData.get('department'),
    qualification: formData.get('qualification'),
    experience: formData.get('experience'),
    coverLetter: formData.get('coverLetter')
  }

  console.log('Form submitted:', data)
  return { success: true }
}


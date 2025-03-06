function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'UG Courses' )
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-select architects-select validate[required]'><option value='' selected='selected'>Select Specialization*</option><option value='Business Administration (BBA)'>Business Administration (BBA)</option>\
<option value='BBA in Hospital Management'>BBA in Hospital Management</option>\
<option value='B.Sc in Media Science'>B.Sc in Media Science</option>\
<option value='Computer Application (BCA)'>Computer Application (BCA)</option>\
<option value='Travel and Tourism Management'>Travel and Tourism Management</option>\
<option value='B.voc in Hardware & Networking'>B.voc in Hardware & Networking</option>\
<option value='B.voc in Electronics Manufacturing Services'>B.voc in Electronics Manufacturing Services</option>\
<option value='BSc in VFX Film Making'>BSc in VFX Film Making</option>\
<option value='Bsc in Medical Lab Technology'>Bsc in Medical Lab Technology</option>\
<option value='B.voc in Interior Design'>B.voc in Interior Design</option>\
<option value='B.voc in Automobile Servicing Technology'>B.voc in Automobile Servicing Technology</option>\
</select>";
		}
 
 else if (typevalue == 'PG Courses')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='MSc in Computer Science'>MSc in Computer Science</option>\
			</select>";
		}

		else if (typevalue == 'Bachelor of Technology (Lateral)')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='Aerospace Engineering'>Aerospace Engineering</option>\
<option value='Aeronautical Engineering'>Aeronautical Engineering</option>\
<option value='Computer Science and Engineering'>Computer Science and Engineering</option>\
<option value='Computer Engineering (Cloud Technology and Mobile Application)'>Computer Engineering (Cloud Technology and Mobile Application)</option>\
<option value='Computer Technology (Cloud Technology and Information Security)'>Computer Technology (Cloud Technology and Information Security)</option>\
<option value='Computer Science and System Engineering (Internet of Things)'>Computer Science and System Engineering (Internet of Things)</option>\
<option value='Computer Science and Technology (Artificial Intelligence)'>Computer Science and Technology (Artificial Intelligence)</option>\
<option value='Software Engineering'>Software Engineering</option>\
<option value='Information Science and Engineering'>Information Science and Engineering</option>\
<option value='Civil Engineering'>Civil Engineering</option>\
<option value='Mechanical Engineering - Mechatronics'>Mechanical Engineering - Mechatronics</option>\
<option value='Electronics & Communication Engineering - Embedded Systems and Industrial IOT'>Electronics & Communication Engineering - Embedded Systems and Industrial IOT</option>\
<option value='Electrical & Electronics Engineering - Electric Mobility and Smart Systems'>Electrical & Electronics Engineering - Electric Mobility and Smart Systems</option>\
<option value='Computer Science (Data Science)'>Computer Science (Data Science)</option>\
<option value='Computer Science and Engineering (Cyber Security)'>Computer Science and Engineering (Cyber Security)</option>\
<option value='Computer Science and Engineering - Artificial Intelligence and Machine Learning'>Computer Science and Engineering - Artificial Intelligence and Machine Learning</option>\
<option value='Mechanical Engineering - 3D Printing'>Mechanical Engineering - 3D Printing</option>\
<option value='Electronics & Communication Engineering - Cellular Technology'>Electronics & Communication Engineering - Cellular Technology</option>\
<option value='Electrical & Electronics Engineering - IOT Energy Management'>Electrical & Electronics Engineering - IOT Energy Management</option>\
</select>";
		}
}
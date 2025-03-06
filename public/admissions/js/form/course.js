function select_course_func()
{
		var select = document.getElementById("courseid");
        var typevalue = select.options[select.selectedIndex].value;
		
		if (typevalue == 'B.Tech')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='Civil Engineering' >Civil Engineering</option>\
<option value='Computer Science & Engineering' >Computer Science & Engineering</option>\
<option value='Electrical Engineering' >Electrical Engineering</option>\
<option value='Electronics and Communication Engineering' >Electronics and Communication Engineering</option>\
<option value='Electrical & Electronics Engineering'>Electrical & Electronics Engineering</option>\
<option value='Mechanical Engineering'>Mechanical Engineering</option>\
<option value='Automobile Engineering'>Automobile Engineering</option>\
<option value='Mechatronics Engineering'>Mechatronics Engineering</option>\
</select>";
		}
		
		else if (typevalue == 'B.Tech - CS')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='Data Analytics'>Data Analytics</option>\
<option value='Clouds Computing & Virtualization'>Clouds Computing & Virtualization</option>\
<option value='Cyber Security and Forensics'>Cyber Security and Forensics</option>\
<option value='Artificial Intelligence and Machine Learning' >Artificial Intelligence and Machine Learning</option>\
</select>";
		}
 
 else if (typevalue == 'B.Tech - DCS')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='Industrial IOT'>Industrial IOT</option>\
</select>";
		}
 
 else if (typevalue == 'B.Tech - ME')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='Smart Manufacturing'>Smart Manufacturing</option>\
</select>";
		}
 
 else if (typevalue == 'B.Tech Lateral')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='Computer Science & Engineering' >Computer Science & Engineering</option>\
<option value='Civil Engineering' >Civil Engineering</option>\
<option value='Electronics and Communication Engineering' >Electronics and Communication Engineering</option>\
<option value='Mechanical Engineering'>Mechanical Engineering</option>\
</select>";
		}
 
 else if (typevalue == 'School Of Architecture')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='Bachelor of Architecture ' >Bachelor of Architecture </option>\
</select>";
		}
 
 else if (typevalue == 'School Of Law')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='LLB' >LLB</option>\
<option value='BBA + LLB ' >BBA + LLB </option>\
<option value='LLM' >LLM</option>\
</select>";
		}
 
 else if (typevalue == 'School of Basic & Applied Sciences')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Branch*</option><option value='B.Sc (Hons.) ( Physics, Chemistry,Mathematics)' >B.Sc (Hons.) ( Physics, Chemistry,Mathematics)</option>\
<option value='Bachelor of Science ( Life/ Physical Science)' >Bachelor of Science ( Life/ Physical Science)</option>\
<option value='Master of Science( Phy/Chem/Math)' >Master of Science( Phy/Chem/Math)</option>\
</select>";
		}
 
 else if (typevalue == 'School of Allied Sciences')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='Diploma after Class 10th' >Diploma after Class 10th</option>\
<option value='Diploma after Class 12th' >Diploma after Class 12th</option>\
<option value='B.Sc in Medical Lab Technology.' >B.Sc in Medical Lab Technology.</option>\
<option value='B.Sc in Operation Theatre Technology' >B.Sc in Operation Theatre Technology</option>\
<option value='B.Sc in Medical Imaging Technology' >B.Sc in Medical Imaging Technology.</option>\
<option value='B.Sc in dialysis Technology' >B.Sc in dialysis Technology</option>\
<option value='B.Sc in Emergency Medical Care Technology' >B.Sc in Emergency Medical Care Technology</option>\
</select>";
		}
 
 else if (typevalue == 'School of Agriculture')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='B.Sc in Agriculture' >B.Sc in Agriculture</option>\
</select>";
		}
 
 else if (typevalue == 'School of Computer science')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='B.Sc Computer Science' >B.Sc Computer Science</option>\
<option value='BCA' >BCA</option>\
<option value='MCA' >MCA</option>\
<option value='MCA Lateral' >MCA Lateral</option>\
</select>";
		}
 
 else if (typevalue == 'Masters & Doctorate')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='M.Tech( CS/ME/EC/EEE/Civil)' >M.Tech( CS/ME/EC/EEE/Civil)</option>\
			<option value='Ph.d (CS/ME/EC/EEE/Civil)' >Ph.d (CS/ME/EC/EEE/Civil)</option>\
<option value='Ph.D In Pharmacy' >Ph.D In Pharmacy</option>\
<option value='Ph.D in Management' >Ph.D in Management</option>\
<option value='Ph.D in Humanities' >Ph.D in Humanities</option>\
<option value='Ph.D in Physics' >Ph.D in Physics</option>\
<option value='Ph.D in Chemistry' >Ph.D in Chemistry</option>\
<option value='Ph.D in Mathematics' >Ph.D in Mathematics</option>\
<option value='Ph.D in English' >Ph.D in English</option>\
<option value='Ph.D in Education' >Ph.D in Education</option>\
<option value='Ph.D in Health Science' >Ph.D in Health Science</option>\
<option value='Ph.D in Law' >Ph.D in Law</option>\
</select>";
		}
	}
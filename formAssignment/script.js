//JavaScript Document
function validate(){
	var success = true;
	success =  validateFirstName() && success ;
	success =  validateLastName() && success;
	success =  validateStreet() && success;
	success =  validateCity() && success;
	success =  validateState() && success;
	success =  validateZip() && success;
	success =  validateCountry() && success;
	success =  validateEmail() && success;
	success =  validateProductType() && success;
	success =  validateReasonForReturn() && success;
	success =  validatePassword() && success;
	success = validateCheckboxTermsOfAgreement() && success;
	return success;
}

function validateFirstName()
{
	var firstNameEntry = form.fname.value;
	
	if (/^[A-Za-z ]+$/.test(firstNameEntry) && firstNameEntry.length>=2)
{
	document.getElementById("errFirstName").style.display = "none";	
	return (true);
}
	else{
		document.getElementById("errFirstName").style.display = "inline";
		return (false);
	}
		
	
}

function validateLastName()
{
	var lastNameEntry = form.lname.value;
	
		if (/^[A-Za-z ]+$/.test(lastNameEntry) && lastNameEntry.length>=2)
{
	document.getElementById("errLastName").style.display = "none";	
	return (true);
}
	else{
		document.getElementById("errLastName").style.display = "inline";
		return (false);
	}
	
}
 
 function validateEmail()
 {
	var emailEntry = form.email.value;
	
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailEntry))  
  {  
	document.getElementById("errEmail").style.display = "none";
    return (true);  
	
	
  }  
    else{
	document.getElementById("errEmail").style.display = "inline";
    return (false);  
	}
	
} 

function validateStreet()
{
	var streetEntry = form.street.value;
	
	if (/^\s*\S+(?:\s+\S+){2}/.test(streetEntry))
	{
		document.getElementById("errStreet").style.display = "none";
		return (true);
		
	}
		else{
			document.getElementById("errStreet").style.display = "inline";
			return(false);
		}
}

function validateCity()
{
	var cityEntry = form.city.value;
	
	if (/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(cityEntry))
	{
		document.getElementById("errCity").style.display = "none";
		return (true);
		
	}
	
		else{
			document.getElementById("errCity").style.display = "inline";
			return(false);
			
		}

	
}

function validateState()
{
	var e = document.getElementById("state");
	var stateEntry = e.options[e.selectedIndex].text;
	
	if (stateEntry.length==2)
	{
		document.getElementById("errState").style.display = "none";
		return (true);
		
	}
	
		else{
			document.getElementById("errState").style.display = "inline";
			return (false);
		}
	
}

function validateZip()
{
	var zipEntry = form.zip.value;
	
	if(/^\d{5}(?:[-\s]\d{4})?$/.test(zipEntry))
	{
		document.getElementById("errZip").style.display = "none";
		return (true);
		
	}
	
		else{
			document.getElementById("errZip").style.display = "inline";
			return (false);
		}
	
}

function validateCountry()
{
	var countryEntry = form.country.value;
	
	if(/[a-zA-Z]{2,}/.test(countryEntry))
	{
		document.getElementById("errCountry").style.display = "none";
		return (true);
		
	}
	
		else{
			document.getElementById("errCountry").style.display = "inline";
			return (false);
		}
	
	
}

function validateProductType()
{
	
	
	var radios = document.getElementsByName("Product");
	for (var i=0; i<radios.length; i++)
	{
		if (radios[i].type == "radio" && radios[i].checked)
		{
			document.getElementById("errRadio").style.display = "none";
			return true;
		}
	}
	document.getElementById("errRadio").style.display = "inline";
	return (false);  
	
}






function validateReasonForReturn()
{
	var reasonEntry = form.reasonForReturn.value;
	
	if(reasonEntry.length<=256 && reasonEntry.length>0)
	{
		document.getElementById("errReason").style.display = "none";
		return true;
	}
	
		else{
			document.getElementById("errReason").style.display = "inline";
			return false;
			
		}
	 
}

function validatePassword()
{
	var passwordEntry = form.password.value;
	
	if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(passwordEntry))
	{
		document.getElementById("errPassword").style.display = "none";
		return true;	
	}
		else{
			document.getElementById("errPassword").style.display = "inline";
			return false;
		}
}

function validateCheckboxTermsOfAgreement()
{
	var checkBoxEntry = document.getElementById("CHKTermsOfAgreement");
	
	if(checkBoxEntry.checked)
	{
		document.getElementById("errCheckBox").style.display = "none";
		
		return true;	
	}
		else{
			document.getElementById("errCheckBox").style.display = "inline";
			
			return false;
		}
}

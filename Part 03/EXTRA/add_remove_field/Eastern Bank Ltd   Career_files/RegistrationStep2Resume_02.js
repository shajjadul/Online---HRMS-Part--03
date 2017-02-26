var bgcolor = "#F9A51B";
var fgcolor = "#FFF";


$(document).ready(function () {

	// if user clicked on button, the overlay layer or the dialogbox, close the dialog-edit	
	$('a.btn-ok, #dialog-edit-overlay, #dialog-edit-box').click(function () {		
		$('#dialog-edit-overlay, #dialog-edit-box').hide();		
		return false;
	});
	
	// if user resize the window, call the same function again
	// to make sure the overlay fills the screen and dialogbox aligned to center	
	$(window).resize(function () {
		
		//only do it if the dialog-edit box is  not hidden
		if (!$('#dialog-edit-box').is(':hidden')) popup();		
	});	
	
	
});


//function popup(message) {
//		
//	try
//	{	
//	// get the screen height and width  
//	var maskHeight = $(document).height();  
//	var maskWidth = $(window).width();
//	
//	// calculate the values for center alignment
//	  var dialogTop =  (maskHeight) -  500;  
////	var dialogTop =  (maskHeight/1.2) - ($('#dialog-box').height());  
//	 var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
//	
//	// assign values to the overlay and dialog box
//	$('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
//	$('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
//	
//	// display the message
//	$('#dialog-message').html( "----------------- EBL   HELP   DESK------------<br/><hr/>"+message);
//	
//	}
//	catch(ex)
//	{
//		 popup(ex);
//	}
//			
//}


function popup(message,position) {
//var position = 800;	
	try
	{	
	var agent = navigator.userAgent.toLowerCase ();
//	alert(agent);
	if( agent.search ("msie") > 1)
	{
		forIEpopup(message);
	}
	else
	{
	// get the screen height and width  

	var maskHeight = $(document).height();  
	
		if(agent.search("chrome") > 1 )
		{
			//alert("brwosr name : crome");
			//alert("maskhight"+maskHeight);
			maskHeight = maskHeight - 51;
			position = position + 102;
		}
		
//	alert("window height"+maskHeight+"\n scrol from top :"+position);
	var maskWidth = $(window).width();
//	var dialogTop =  (maskHeight) - ($('#dialog-edit-box').height()) + parseInt(position); 

    var dialogTop =  (maskHeight) - parseInt(position);  
 //  alert(dialogTop);
	var dialogLeft = (maskWidth/2) - ($('#dialog-edit-box').width())/2; 
	
	// assign values to the overlay and dialog-edit box
	$('#dialog-edit-overlay').css({height:maskHeight, width:maskWidth}).show();
	$('#dialog-edit-box').css({top:dialogTop, left:dialogLeft}).show();


	// display the message
	$('#dialog-edit-message').html( "----------------- EBL   HELP   DESK------------<br/><hr/>"+message);
	
	}
	}
	catch(ex)
	{
      alert(message)	;
	  //ErrorMessage("112", ex, "1" , "Internalresuem01.asp :::  utility_hsbc.html  :: function popup", "HSBC");
	}
			
}



function forIEpopup(message)
{
   alert(message);
   //objForFocus.focus();
   
}


var  date = new Date();		
function DisbleServeTill(intIndex)
{
	if(document.getElementById("CURRENT" + intIndex).checked == true)
	{
		document.getElementById("ETO_D" + intIndex).disabled = true;
		//document.getElementById("ETO_D" + intIndex).value = "day";
		document.getElementById("ETO_M" + intIndex).disabled = true;
		document.getElementById("ETO_Y" + intIndex).disabled = true;
	}
	else
	{
		document.getElementById("ETO_D" + intIndex).disabled = false;
		document.getElementById("ETO_M" + intIndex).disabled = false;
		document.getElementById("ETO_Y" + intIndex).disabled = false;
	}
	//popup(strId);
}
	
/* 4 Delete dynamic HTML start*/
function DeleteForm_Exp(strForm)
{
	strUB = parseInt(document.getElementById("count_exp").value);
	if(strUB > 1)
	{
		document.getElementById("cust_exp"+strUB).innerHTML = "";
		document.getElementById("count_exp").value = strUB - 1;
	}
	else
	{
		document.getElementById("remove_exp").disabled = true;
	}
	
}

function DeleteForm_Edu(strForm)
{
	strUB = parseInt(document.getElementById("count_edu").value);
	if(strUB > 1)
	{
		document.getElementById("cust_edu"+strUB).innerHTML = "";
		document.getElementById("count_edu").value = strUB - 1;
	}
	else
	{
		document.getElementById("remove_edu").disabled = true;
	}
	
}

function DeleteForm_PEdu(strForm)
{
	strUB = parseInt(document.getElementById("count_pedu").value);
	if(strUB > 1)
	{
		document.getElementById("cust_pedu"+strUB).innerHTML = "";
		document.getElementById("count_pedu").value = strUB - 1;
	}
	else
	{
		document.getElementById("remove_pedu").disabled = true;
	}
	
}

function DeleteForm_Tra(strForm)
{
	strUB = parseInt(document.getElementById("count_tra").value);
	if(strUB > 1)
	{
		document.getElementById("cust_tra"+strUB).innerHTML = "";
		document.getElementById("count_tra").value = strUB - 1;
	}
	else
	{
		document.getElementById("remove_tra").disabled = true;
	}
	
}

function DeleteForm_EBLRef(strForm)
{
	strUB = parseInt(document.getElementById("count_eblRef").value);
	if(strUB > 1)
	{
		document.getElementById("cust_eblRef"+strUB).innerHTML = "";
		document.getElementById("count_eblRef").value = strUB - 1;
	}
	else
	{
		document.getElementById("remove_eblRef").disabled = true;
	}
	
}

function DeleteForm_EBLPrev(strForm)
{
	strUB = parseInt(document.getElementById("count_EBLPrev").value);
	if(strUB > 1)
	{
		document.getElementById("cust_EBLPrev"+strUB).innerHTML = "";
		document.getElementById("count_EBLPrev").value = strUB - 1;
	}
	else
	{
		document.getElementById("remove_EBLPrev").disabled = true;
	}
}

/* 4 Delete dynamic HTML end*/

// This function is 4 negative number check. 
function IsNegativeNum(str)
{ 
	mystring = str;
	if (mystring.match(/^-\d+$/)) 
	{
		return true;
	}
	else
	{
		return false;
	}
}

// This function is 4 Exp summation.
function TotalExp()
{
	var objBankExp, objOtherExp, objTotalExp
	var BankExp, OtherExp, TotalExp;
	
	objBankExp = document.getElementById("BANK_EXP");
	objOtherExp = document.getElementById("OTH_EXP");
	objTotalExp = document.getElementById("TTL_EXP");
			
	if(isNaN(objBankExp.value))
	{
		popup("Bank experince  of  Previous Experience  should be numeric.","2700");
		objBankExp.value = "";
		objBankExp.focus();
		objBankExp.style.backgroundColor = bgcolor;
	}
	else if(isNaN(objOtherExp.value))
	{
		popup("Other experince  of  Previous Experience  should be numeric.","2700");
		objOtherExp.value = "";
		objOtherExp.focus();
		objOtherExp.style.backgroundColor = bgcolor;
	}
	else if (IsNegativeNum(objBankExp.value))
	{
		popup("Bank experince  of  Previous Experience   should be possitive.","2700");
		objBankExp.value = "";
		objBankExp.focus();
		objBankExp.style.backgroundColor = bgcolor;
	}
	else if (IsNegativeNum(objOtherExp.value))
	{
		popup("Other experince  of  Previous Experience    should be possitive.","2700");
		objOtherExp.value = "";
		objOtherExp.focus();
		objOtherExp.style.backgroundColor = bgcolor;
	}
	else
	{
		if(objBankExp.value != "")
		{
			
			BankExp = parseInt(objBankExp.value);
		}
		else
		{
			BankExp = 0;
		}
		if(objOtherExp.value != "")
		{
			OtherExp = parseInt(objOtherExp.value);
		}
		else
		{
			OtherExp = 0;
		}
		
		TotalExp = BankExp + OtherExp;
		objTotalExp.value = TotalExp;
	}
	
}

// This function is 4 Email validation.
function CheckEmail(strEmail)
{	
	//popup(objEmail);
	var filter = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
	
	if (filter.test(strEmail))
	{
		return true;
	}
	else 
	{
		//document.getElementById(strID).focus();
		return false;
	}
}

// This function is 4 empty check of Exp.
function EmptyExp()
{
	// Variable declare and initialization.
	var strCompany = "";
	var strExpType = "";
	var strExpArea = "";
	var strExpPost = "";
	var strDept = "";
	var strUnit = "";
	var strDuty = "";
	var strCompanyLocation = "";
	var strJobLocation = "";
	var strAchieve = "";
	var strSupervisorName = "";
	var strSupervisorPhone = "";
	var strSupervisorEmail = "";
	var strFromDay = "";
	var strFromMonth = "";
	var strFromYear = "";
	var strToDay = "";
	var strToMonth = "";
	var strToYear = "";
	
	// Experience block starts here.
	objBankExp = document.getElementById("BANK_EXP");
	objOtherExp = document.getElementById("OTH_EXP");
	objTotalExp = document.getElementById("TTL_EXP");
	
	// Most Outer if starts here.
	if(objTotalExp.value > 0)
	{
		var ExpUB = parseInt(document.getElementById("count_exp").value);
		var i;
		
		// For loop starts here.
		for(i = 1; i <= ExpUB; i++)
		{
			strCompany = "";
			strExpType = "S";
			strExpArea = "S";
			strExpPost = "";
			strDept = "";
			strUnit = "";
			strDuty = "";
			strCompanyLocation = "";
			strJobLocation = "";
			strAchieve = "";
			strSupervisorName = "";
			strSupervisorPhone = "";
			strSupervisorEmail = "";
			strFromDay = "S";
			strFromMonth = "S";
			strFromYear = "S";
			strToDay = "";
			strToMonth = "";
			strToYear = "";
			
			// Object declare and initialization.
			objCompany = document.getElementById("COMPANY"+i);
			objExpType = document.getElementById("EXP_TYPE"+i);
			objExpArea = document.getElementById("EXP_AREA"+i);
			objExpPost = document.getElementById("EXP_POST"+i);
			objDept = document.getElementById("DEPT"+i);
			objUnit = document.getElementById("UNIT"+i);
			objDuty = document.getElementById("DUTY"+i);
			objCompanyLocation = document.getElementById("CLOCATION"+i);
			objJobLocation = document.getElementById("JOB_LOC"+i);
			objAchieve = document.getElementById("ACHIEVE"+i);
			objSupervisorName = document.getElementById("SUPER_NAME"+i);
			objSupervisorPhone = document.getElementById("SUPER_PHONE"+i);
			objSupervisorEmail = document.getElementById("SUPER_EMAIL"+i);
			objFromDay = document.getElementById("EFROM_D"+i);
			objFromMonth = document.getElementById("EFROM_M"+i);
			objFromYear = document.getElementById("EFROM_Y"+i);
			objToDay = document.getElementById("ETO_D"+i);
			objToMonth = document.getElementById("ETO_M"+i);
			objToYear = document.getElementById("ETO_Y"+i);
			// Value of html controls.
			strCompany = objCompany.value;
			strExpType = objExpType.value;
			strExpArea = objExpArea.value;
			strExpPost = objExpPost.value;
			strDept = objDept.value;
			strUnit = objUnit.value;
			strDuty = objDuty.value;
			strCompanyLocation = objCompanyLocation.value;
			strJobLocation = objJobLocation.value;
			strAchieve = objAchieve.value;
			strSupervisorName = objSupervisorName.value;
			strSupervisorPhone = objSupervisorPhone.value;
			strSupervisorEmail = objSupervisorEmail.value;
			strFromDay = objFromDay.value;
			strFromMonth = objFromMonth.value;
			strFromYear = objFromYear.value;
			strToDay = objToDay.value;
			strToMonth = objToMonth.value;
			strToYear = objToYear.value;
			// Checking & focusing of html controls.
			if(i > 1)
			{
				//popup("if: "+i);
				//popup("if: "+ExpUB);
				if(strCompany != "" || strExpType != "S" || strExpArea != "S" || strExpPost != "" || strDept != "" || strUnit != "" || strDuty != "" || strCompanyLocation != "" || strJobLocation != "" || strAchieve != "" || strSupervisorName != "" || strSupervisorPhone != "" || strSupervisorEmail != "" || strFromDay != "S" || strFromMonth != "S" || strFromYear != "S")
				{
					if(strCompany == "")
					{
						popup("Employer Name  " + i + "  of  Work Experience   " + i + " can't be empty.",2200);
						objCompany.focus();
						objCompany.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objCompany.style.backgroundColor = fgcolor;
					}
					if(strExpType == "S")
					{
						popup("Type of Employment " + i + "  of  Work Experience " + i + "   should be selected.",2200);
						objExpType.focus();
						objExpType.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objExpType.style.backgroundColor = fgcolor;
					}
					if(strExpArea == "S")
					{
						popup("Organization Type " + i + " of  Work Experience " + i + "   should be selected.",2180);
						objExpArea.focus();
						objExpArea.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objExpArea.style.backgroundColor = fgcolor;
					}
					if(strExpPost == "")
					{
						popup("Position Held " + i + " of  Work Experience " + i + "   can't be empty.",2180);
						objExpPost.focus();
						objExpPost.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objExpPost.style.backgroundColor = fgcolor;
					}
					if(strDept == "")
					{
						popup("Department " + i + " of  Work Experience  " + i + "  can't be empty.",2180);
						objDept.focus();
						objDept.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objDept.style.backgroundColor = fgcolor;
					}
					if(strUnit == "")
					{
						popup("Unit " + i + "  of  Work Experience  " + i + " can't be empty.",2150);
						objUnit.focus();
						objUnit.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objUnit.style.backgroundColor = fgcolor;
					}
					if(strDuty == "")
					{
						popup("Major responsibilities " + i + "  of  Work Experience " + i + "  can't be empty.",2140);
						objDuty.focus();
						objDuty.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objDuty.style.backgroundColor = fgcolor;
					}
					if(strCompanyLocation == "")
					{
						popup("Employer Address " + i + " of  Work Experience  " + i + "  can't be empty.",2130);
						objCompanyLocation.focus();
						objCompanyLocation.style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						objCompanyLocation.style.backgroundColor = fgcolor;
					}
					if(strJobLocation == "")
					{
						popup("Job location " + i + "  of  Work Experience " + i + "  can't be empty.",2130);
						objJobLocation.focus();
					    objJobLocation.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objJobLocation.style.backgroundColor = bgcolor;		
					}
					if(strAchieve == "")
					{
						popup("Achievement " + i + " of  Work Experience " + i + "   can't be empty.",2120);
						objAchieve.focus();
					    objAchieve.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objAchieve.style.backgroundColor = fgcolor;		
					}
					if(strSupervisorName == "")
					{
						popup("Supervisor name " + i + " of  Work Experience  " + i + "  can't be empty.",2120);
						objSupervisorName.focus();
					    objSupervisorName.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objSupervisorName.style.backgroundColor = fgcolor;		
					}
					if(strSupervisorPhone == "")
					{
						popup("Supervisor phone " + i + "  of  Work Experience " + i + "   can't be empty.",2120);
						objSupervisorPhone.focus();
					    objSupervisorPhone.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objSupervisorPhone.style.backgroundColor = fgcolor;		
					}
					if(strSupervisorEmail == "")
					{
						popup("Supervisor email " + i + " of  Work Experience " + i + "   can't be empty.",2110);
						objSupervisorEmail.focus();
					    objSupervisorEmail.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objSupervisorEmail.style.backgroundColor = fgcolor;		
					}
					if(CheckEmail(strSupervisorEmail) == false)
					{
						popup("Please input a valid email address " + i + "  of  Work Experience " + i + "  ",2100);
						objSupervisorEmail.focus();
					    objSupervisorEmail.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objSupervisorEmail.style.backgroundColor = fgcolor;		
					}
					
					if(strFromDay == "S")
					{
						popup("Served From day" + i + " can't be empty  of  Work Experience  " + i + "   .",2100);
						objFromDay.focus();
					    objFromDay.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objFromDay.style.backgroundColor = fgcolor;		
					}
					if(strFromMonth == "S")
					{
						popup("Served From month " + i + "  of  Work Experience " + i + "   can't be empty.",2000);
						objFromMonth.focus();
					    objFromMonth.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objFromMonth.style.backgroundColor = fgcolor;		
					}
					if(strFromYear == "S")
					{
						popup("Served From year " + i + "  of  Work Experience " + i + "  can't be empty.",1950);
						objFromYear.focus();
					    objFromYear.style.backgroundColor = bgcolor;	
						return false;
					}
					else
					{
					    objFromYear.style.backgroundColor = fgcolor;	
					}
					
					// 4 All
					if(document.getElementById("CURRENT"+i).checked == false && strToDay == "S")
					{
						popup("Served Till day " + i + "  of  Work Experience " + i + "   can't be empty.",1950);
						objToDay.focus();
					    objToDay.style.backgroundColor = bgcolor;	
						return false;
					}
					else
					{
					    objToDay.style.backgroundColor = fgcolor;	
					}
					if(document.getElementById("CURRENT"+i).checked == false && strToMonth == "S")
					{
						popup("Served Till month " + i + " of  Work Experience " + i + "   can't be empty.",1950);
						objToMonth.focus();
					    objToMonth.style.backgroundColor = bgcolor;		
						return false;
					}
					else
					{
					    objToMonth.style.backgroundColor = fgcolor;		
					}
					if(document.getElementById("CURRENT"+i).checked == false && strToYear == "S")
					{
						popup("Served Till  year " + i + " of  Work Experience " + i + "   can't be empty.",1950);
						objToYear.focus();
					    objToYear.style.backgroundColor = bgcolor;	
						return false;
					}
					else
					{
					    objToYear.style.backgroundColor = fgcolor;	
					}
					
				}
			}
			else
			{
				//popup("else: "+i);
				//popup("else: "+ExpUB);
				if(strCompany == "")
				{
					popup("Employer Name  " + i + "   of   Work Experience  " + i + "   can't be empty.",2500);
					objCompany.focus();
				    objCompany.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objCompany.style.backgroundColor = fgcolor;	
				}
				if(strExpType == "S")
				{
					popup("Type of Employment " + i + "  of  Work Experience " + i + "  should be selected.",2500);
					objExpType.focus();
				    objExpType.style.backgroundColor = bgcolor;		
					return false;
				}
				else 
				{
				    objExpType.style.backgroundColor = fgcolor;	
				}
				if(strExpArea == "S")
				{
					popup("Organization Type " + i + "  of  Work Experience   " + i + "   should be selected.",2490);
					objExpArea.focus();
					objExpArea.style.backgroundColor = bgcolor;		
					return false;
				}
				else 
				{
				    objExpArea.style.backgroundColor = fgcolor;	
				}
				if(strExpPost == "")
				{
					popup("Position Held " + i + "  of  Work Experience " + i + "   can't be empty.",2490);
					objExpPost.focus();
				    objExpPost.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objExpPost.style.backgroundColor = fgcolor;	
				}
				if(strDept == "")
				{
					popup("Department " + i + "  of  Work Experience  " + i + "  can't be empty.",2480);
					objDept.focus();
				    objDept.style.backgroundColor = bgcolor;
					return false;
				}
				else 
				{
				    objDept.style.backgroundColor = fgcolor;	
				}
				if(strUnit == "")
				{
					popup("Unit " + i + "   of  Work Experience   " + i + "  can't be empty.",2470);
					objUnit.focus();
					objUnit.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objUnit.style.backgroundColor = fgcolor;	
				}
				if(strDuty == "")
				{
					popup("Major responsibilities " + i + "  of  Work Experience  " + i + "   can't be empty.",2470);
					objDuty.focus();
				    objDuty.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objDuty.style.backgroundColor = fgcolor;	
				}
				if(strCompanyLocation == "")
				{
					popup("Employer Address " + i + "  of  Work Experience  " + i + "  can't be empty.",2470);
					objCompanyLocation.focus();
					objCompanyLocation.style.backgroundColor = bgcolor;		
					return false;
				}
				else 
				{
				    objCompanyLocation.style.backgroundColor = fgcolor;	
				}
				if(strJobLocation == "")
				{
					popup("Job location " + i + "  of  Work Experience  " + i + "  can't be empty.",2470);
					objJobLocation.focus();
					objJobLocation.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objJobLocation.style.backgroundColor = fgcolor;	
				}
				if(strAchieve == "")
				{
					popup("Achievement " + i + "  of  Work Experience  " + i + "  can't be empty.",2460);
					objAchieve.focus();
				    objAchieve.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objAchieve.style.backgroundColor = fgcolor;	
				}
				if(strSupervisorName == "")
				{
					popup("Supervisor name  " + i + "  of  Work Experience  " + i + "  can't be empty.",2260);
					objSupervisorName.focus();
					objSupervisorName.style.backgroundColor = bgcolor;
					return false;
				}
				else 
				{
				    objSupervisorName.style.backgroundColor = fgcolor;	
				}
				if(strSupervisorPhone == "")
				{
					popup("Supervisor phone " + i + " can't be empty.",2250);
					objSupervisorPhone.focus();
				    objSupervisorPhone.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objSupervisorPhone.style.backgroundColor = fgcolor;	
				}
				if(strSupervisorEmail == "")
				{
					popup("Supervisor email  " + i + "  of  Work Experience " + i + "  can't be empty.",2250);
					objSupervisorEmail.focus();
					objSupervisorEmail.style.backgroundColor = bgcolor;	
					return false;
				}
				else
				{
					 objSupervisorEmail.style.backgroundColor = fgcolor;
				}
				if(CheckEmail(strSupervisorEmail) == false)
				{
					popup("Please input a valid email address " + i + "  of  Work Experience  !",2250);
					objSupervisorEmail.focus();
					objSupervisorEmail.style.backgroundColor = bgcolor;		
					return false;
				}
				else 
				{
				    objSupervisorEmail.style.backgroundColor = fgcolor;	
				}
				
				if(strFromDay == "S")
				{
					popup("Served From day" + i + "   of  Work Experience  " + i + " can't be empty  .",2250);
					objFromDay.focus();
					objFromDay.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objFromDay.style.backgroundColor = fgcolor;	
				}
				if(strFromMonth == "S")
				{
					popup("Served From month " + i + " of  Work Experience  " + i + " can't be empty .",2250);
					objFromMonth.focus();
				    objFromMonth.style.backgroundColor = bgcolor;
					return false;
				}
				else 
				{
				    objFromMonth.style.backgroundColor = fgcolor;	
				}
				if(strFromYear == "S")
				{
					popup("Served From year " + i + "   of  Work Experience  " + i + "  can't be empty.",2250);
					objFromYear.focus();
					objFromYear.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objFromYear.style.backgroundColor = fgcolor;	
				}
				
				// 4 All
				if(document.getElementById("CURRENT"+i).checked == false && strToDay == "S")
				{
					popup("Served Till day " + i + "   of  Work Experience  " + i + "  can't be empty.",2250);
					objToDay.focus();
				    objToDay.style.backgroundColor = bgcolor;    
					return false;
				}
				else 
				{
				    objToDay.style.backgroundColor = fgcolor;	
				}
				if(document.getElementById("CURRENT"+i).checked == false && strToMonth == "S")
				{
					popup("Served Till month " + i + "    of  Work Experience  " + i + " can't be empty.",2140);
					objToMonth.focus();
				    objToMonth.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objToMonth.style.backgroundColor = fgcolor;	
				}
				if(document.getElementById("CURRENT"+i).checked == false && strToYear == "S")
				{
					popup("Served Till  year " + i + "   of  Work Experience   " + i + "  can't be empty.",2130);
					objToYear.focus();
				    objToYear.style.backgroundColor = bgcolor;	
					return false;
				}
				else 
				{
				    objToYear.style.backgroundColor = fgcolor;	
				}
			}
		}
		// For loop ends here.
	}
	else
	{
		// Object declare and initialization.
		objCompany = document.getElementById("COMPANY1");
		objExpType = document.getElementById("EXP_TYPE1");
		objExpArea = document.getElementById("EXP_AREA1");
		objExpPost = document.getElementById("EXP_POST1");
		objDept = document.getElementById("DEPT1");
		objUnit = document.getElementById("UNIT1");
		objDuty = document.getElementById("DUTY1");
		objCompanyLocation = document.getElementById("CLOCATION1");
		objJobLocation = document.getElementById("JOB_LOC1");
		objAchieve = document.getElementById("ACHIEVE1");
		objSupervisorName = document.getElementById("SUPER_NAME1");
		objSupervisorPhone = document.getElementById("SUPER_PHONE1");
		objSupervisorEmail = document.getElementById("SUPER_EMAIL1");
		objFromDay = document.getElementById("EFROM_D1");
		objFromMonth = document.getElementById("EFROM_M1");
		objFromYear = document.getElementById("EFROM_Y1");
		objToDay = document.getElementById("ETO_D1");
		objToMonth = document.getElementById("ETO_M1");
		objToYear = document.getElementById("ETO_Y1");
		// Value of html controls.
		strCompany = objCompany.value;
		strExpType = objExpType.value;
		strExpArea = objExpArea.value;
		strExpPost = objExpPost.value;
		strDept = objDept.value;
		strUnit = objUnit.value;
		strDuty = objDuty.value;
		strCompanyLocation = objCompanyLocation.value;
		strJobLocation = objJobLocation.value;
		strAchieve = objAchieve.value;
		strSupervisorName = objSupervisorName.value;
		strSupervisorPhone = objSupervisorPhone.value;
		strSupervisorEmail = objSupervisorEmail.value;
		strFromDay = objFromDay.value;
		strFromMonth = objFromMonth.value;
		strFromYear = objFromYear.value;
		strToDay = objToDay.value;
		strToMonth = objToMonth.value;
		strToYear = objToYear.value;
		
		if(strCompany != "" || strExpType != "S" || strExpArea != "S" || strExpPost != "" || strDept != "" || strUnit != "" || strDuty != "" || strCompanyLocation != "" || strJobLocation != "" || strAchieve != "" || strSupervisorName != "" || strSupervisorPhone != "" || strSupervisorEmail != "" || strFromDay != "S" || strFromMonth != "S" || strFromYear != "S")
		{
				popup("Total experience  of  Previous Experience  can't  be empty.",2600);
				objBankExp.focus();
				objBankExp.style.backgroundColor = bgcolor;		
			    return false;
		}
		else 
		{
			   objBankExp.style.backgroundColor = fgcolor;	
		}
	}
	// Most Outer if ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 empty check of Edu.
function EmptyEdu()
{
	var EduUB = parseInt(document.getElementById("count_edu").value);
	var i;
		
	// For loop starts here.
	for(i = 1; i <= EduUB; i++)
	{
		// Variable declare and initialization.
		var strEduLevel = "";
		var strEducation = "";
		var strPassingYear = "";
		var strInstitute = "";
		var strResult = "";
		var strSubject = "";

		// Object declare and initialization.
		objEduLevel = document.getElementById("EDULEVEL"+i);
		objEducation = document.getElementById("EDUCATION"+i);
		objPassingYear = document.getElementById("FYEAR"+i);
		objInstitute = document.getElementById("INSTITUTE"+i);
		objResult = document.getElementById("RESULT"+i);
		objSubject = document.getElementById("SUBJECT"+i);
		
		// Value of html controls.
		strEduLevel = objEduLevel.value;
		strEducation = objEducation.value;
		strPassingYear = objPassingYear.value;
		strInstitute = objInstitute.value;
		strResult = objResult.value;
		strSubject = objSubject.value;
		
		
			if(i == 1)
			{
			 var Education = "Secondary Level ";
			}
			else if(i == 2)
			{
				var Education = "Higher Secondary Level ";
			}
			else if(i == 3)
			{
				var Education = "Graduation Level  ";
			}
			else if(i == 4)
			{
				var Education = "Post Graduation  Level  ";
			}
			else if(i == 5)
			{
				var Education = "Post Graduation/Doctorate Level  ";				
			}
			
			
			switch(i)
		    { 
			case 1:
			level = "Secondary  Level  ";
			BoardUni = "Board";
			break;
			
			case 2:
			level = "Higher Seconadary  Level  ";
			BoardUni = "Board";
			break;
			
			case 3:
			level = "Graduation  Level  ";
			BoardUni = "University";			
			break;
			
			case 4:
			level = "Post Graduation  Level  ";
			BoardUni = "University";			
			break;
			
			case 5 :
			level = "Post Graduation/Doctorate  Level ";
			BoardUni = "University";
			break;
			
			default:		  
		    }
		

		
		
		
		//popup(strInstitute);
		/*if(strInstitute == "F" || strInstitute == "O")
		{
			var strTempInstituteName = document.getElementById("INS_NAME"+i)
			if(strTempInstituteName == "")
			{
				popup("Instituteof " +level+"can't be empty.");
				document.getElementById("INS_NAME"+i).focus();
				return false;
			}
		}*/
		
		// Checking & focusing of html controls.	
		if(i > 3)
		{
			if(strEduLevel != "S" || strEducation != "S" || strPassingYear != "S" || strInstitute != "S" || strResult != "S" || strSubject != "S")
			{
				if(strEduLevel == "S")
				{
					popup(Education + " of EDUCATION   PROFILE  should be selected.",1900);
					objEduLevel.focus();
					objEduLevel.style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					objEduLevel.style.backgroundColor = fgcolor;
				}
				
				if(strEducation == "S")
				{
	
			    	popup("Exam/Degree Title of "+level+"   of  EDUCATION  PROFILE   should be selected.",1900);
					objEducation.focus();
					objEducation.style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					objEducation.style.backgroundColor = fgcolor;
				}
				
				if(strPassingYear == "S")
				{
					popup("Passing year of "+level+" Level in  EDUCATION   PROFILE   should be selected.",1900);
					objPassingYear.focus();
					objPassingYear.style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					objPassingYear.style.backgroundColor = fgcolor;
				}
				
				if(strInstitute == "S")
				{
					popup("Institute of "+level+" Level in  EDUCATION   PROFILE   should be selected.",1900);
					objInstitute.focus();
					objInstitute.style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					objInstitute.style.backgroundColor = fgcolor;
				}
				//popup(strInstitute);
				if(strInstitute == "F" || strInstitute == "O")
				{
					if(document.getElementById("INS_NAME"+i).value == "")
					{
						popup("Institute name  of  EDUCATION   PROFILE  can't be empty.",1900);
						document.getElementById("INS_NAME"+i).focus();
						document.getElementById("INS_NAME"+i).style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						document.getElementById("INS_NAME"+i).style.backgroundColor = fgcolor;
					}
				}
				
				if(strResult == "S")
				{
					popup("Result  of " +level+" of  EDUCATION   PROFILE  can't be empty.",1900);
					objResult.focus();
					objResult.style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					objResult.style.backgroundColor = fgcolor;
				}
				
				if(strResult > "12" || strResult == "0")
				{
					if(document.getElementById("PERCENT"+i).value == "")
					{
						popup("Marks  of " +level+" of   EDUCATION  PROFILE  can't be empty.",1900);
						document.getElementById("PERCENT"+i).focus();
						document.getElementById("PERCENT"+i).style.backgroundColor = bgcolor;
						return false;
					}
					else
					{
						 document.getElementById("PERCENT"+i).style.backgroundColor = fgcolor;
					}
					if(isNaN(document.getElementById("PERCENT"+i).value))
					{
						popup("Marks  of " +level+" of   EDUCATION  PROFILE    should be numeric.",1900);
						document.getElementById("PERCENT"+i).focus();
					    document.getElementById("PERCENT"+i).style.backgroundColor = bgcolor;		

						return false;
					}
						else
						{
							 document.getElementById("PERCENT"+i).style.backgroundColor = fgcolor;
						}
					if(parseInt(document.getElementById("PERCENT"+i).value)>100)
					{
						popup("Marks  of " +level+" of   EDUCATION  PROFILE    should be less than 100.",1900);
						document.getElementById("PERCENT"+i).focus();
					    document.getElementById("PERCENT"+i).style.backgroundColor = bgcolor;	
						return false;
					}
					else
					{
						 document.getElementById("PERCENT"+i).style.backgroundColor = fgcolor;
					}					
				}
				
				if(strResult  == "10"  || strResult == "12" )
				{
					 var objongoing  = document.getElementById('OnGoing'+i);
					 strobjongoing = objongoing.value;
					 
					 if (strobjongoing  == "S")
					 {
						   popup("please  choose a   *mention  a  result  of "+level+" from  EDUCATION  PROFILE   ",1900)
						   objongoing.focus();
						   objongoing.style.backgroundColor = bgcolor;
						   return false;
					 }
					 else
					 {
						  objongoing.style.backgroundColor = fgcolor;
					 }
					
				}			
				
				
				
				if (strResult == "10")
				{
					   if (strPassingYear < date.getFullYear())
						   {
							   popup(" Sorry!  Incase of  Choosing Result   of " +level+" as  Ongoing " + "  Your  Passing Year  "+i+"  of    EDUCATION  PROFILE   should  be greater  than current year, if you think that your degree may be  completed in current year  , no probem you can choose next year  ",1900);
							   objPassingYear.focus();
					           objPassingYear.style.backgroundColor = bgcolor;	
							   return false;
						   }	
						else
						{
							objPassingYear.style.backgroundColor = fgcolor;
						}								
				}
				else 
				{
					   if (strPassingYear > date.getFullYear())
						   {
							   popup("Your  Passing Year  of  " + level +"  of  EDUCATION  PROFILE  should be smaller   than or  same as  current year",1900);
							   objPassingYear.focus();
					           objPassingYear.style.backgroundColor = bgcolor;	
							   return false;
						   }	
						else
						{
							objPassingYear.style.backgroundColor = fgcolor;
						}		
				}
			
				
				if(strSubject == "S")
				{
					popup("Concentration / Major  of " +level+"  of  EDUCATION  PROFILE  area can't be empty.",1900);
					objSubject.focus();
				    objSubject.style.backgroundColor = bgcolor;	
					return false;
				}
				else
				{
					objSubject.style.backgroundColor = fgcolor;
				}
				if(strSubject == "Others")
				{
					if(document.getElementById("MAJOR"+i).value == "")
					{
						popup("Major  of  " +level+"   of  EDUCATION  PROFILE  can't be empty.",1900);
						document.getElementById("MAJOR"+i).focus();
					    document.getElementById("MAJOR"+i).style.backgroundColor = bgcolor;	
						return false;
					}
					else
					{
						 document.getElementById("MAJOR"+i).style.backgroundColor = fgcolor;
					}
				}			
				
			}
		}
		else
		{
			if(strEduLevel == "S")
			{
				popup(Education + "of EDUCATION   PROFILE  should be selected.",1900);
				objEduLevel.focus();
				objEduLevel.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
				objEduLevel.style.backgroundColor = fgcolor;
			}
			
			if(strEducation == "S")
			{

				popup("Exam/Degree Title of "+level+"   of  EDUCATION  PROFILE   should be selected.",1900);
				objEducation.focus();  
				objEducation.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
				objEducation.style.backgroundColor = fgcolor;
			}
			
			if(strPassingYear == "S")
			{
				popup("Passing year  of "+level+" of  EDUCATION PROFILE  should be selected.",1900);
				objPassingYear.focus();
				objPassingYear.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
				objPassingYear.style.backgroundColor = fgcolor;
			}
			
			if(strInstitute == "S")
			{
				popup("Institute Name  of "+level+"   of  EDUCATION  PROFILE    should be selected.",1900);
				objInstitute.focus();
				objInstitute.style.backgroundColor = bgcolor;				
				return false;
			}
			else
			{
				objInstitute.style.backgroundColor = fgcolor;
			}
			
			if(strInstitute == "F" || strInstitute == "O")
			{
				if(document.getElementById("INS_NAME"+i).value == "")
				{
					popup("Institute name   of "+level+"   of  EDUCATION  PROFILE    can't be empty.",1900);
					document.getElementById("INS_NAME"+i).focus();
					document.getElementById("INS_NAME"+i).style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					document.getElementById("INS_NAME"+i).style.backgroundColor = fgcolor;
				}
			}
			
			if(strResult == "S")
			{
				popup("Result  of "+level+"   of  EDUCATION  PROFILE    can't be empty.",1900);
				objResult.focus();
				objResult.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
				objResult.style.backgroundColor = fgcolor;
			}
			
			if(strResult > "12" || strResult == "0")
			{
				if(document.getElementById("PERCENT"+i).value == "")
				{
					popup("Marks  of "+level+"  can't be empty.",1900);
					document.getElementById("PERCENT"+i).focus();
					document.getElementById("PERCENT"+i).style.backgroundColor = bgcolor;
					return false;
				}
				else
				{
					document.getElementById("PERCENT"+i).style.backgroundColor = fgcolor;
				}
				if(isNaN(document.getElementById("PERCENT"+i).value))
				{
					popup("Marks  of "+level+"  should be numeric.",1900);
					document.getElementById("PERCENT"+i).focus();					
				    document.getElementById("PERCENT"+i).style.backgroundColor = bgcolor;	
					return false;
				}
				else
				{
					 document.getElementById("PERCENT"+i).style.backgroundColor = fgcolor;
				}
				if(parseInt(document.getElementById("PERCENT"+i).value)>100)
				{
					popup("Marks  of " +level+"should be less than 100.",1900);
					document.getElementById("PERCENT"+i).focus();
				    objInstitute.style.backgroundColor = bgcolor;	
					return false;
				}
				else
				{
					objInstitute.style.backgroundColor = fgcolor;
				}
			}
			
			
							
				if(strResult  == "10"  || strResult == "12" )
				{
					 var objongoing  = document.getElementById('OnGoing'+i);
					 strobjongoing = objongoing.value;
					 
					 if (strobjongoing  == "S")
					 {
						   popup("please  choose a   *mention  a  result  of "+level+" from  EDUCATION PROFILE   ",1900)
						   objongoing.focus();
						   objongoing.style.backgroundColor = bgcolor;
						   return false;
					 }
					 else
					 {
						  objongoing.style.backgroundColor = fgcolor;
					 }
					
				}			
				
			
			
			if (strResult == "10")
			{
				   if (strPassingYear < date.getFullYear())
					   {
						popup(" Sorry !  in  case of  choosing  result  "  + level +  "  as  ongoing , your  passing year " +i +"  of  EDUCATION PROFILE  ,   should  be greater than current year, if you think that your degree may be  completed in current year , please  choose  your passing year "+level + "  greater than current year   ",1900);
						objPassingYear.focus();
						objPassingYear.style.backgroundColor = bgcolor;	
					    return false;
					   }	
				else
				{
					objPassingYear.style.backgroundColor = fgcolor;
				}								
			}
			else 
			{
				   if (strPassingYear > date.getFullYear())
					   {
						   popup("Your  Passing Year  of  "+level+"  of  EDUCATION  PROFILE    should be smaller than current year  ",1900);
						   objPassingYear.focus();
					       objPassingYear.style.backgroundColor = bgcolor;	
						   return false;
					   }
						else
						{
							objPassingYear.style.backgroundColor = fgcolor;
						}			
			}
			
			if(strSubject == "S")
			{
				popup("Concentration / Major  of " +level+"   of  EDUCATION  PROFILE   can't be empty.",1900);
				objSubject.focus();
				objSubject.style.backgroundColor = bgcolor;				
				return false;
			}
			else
			{
			objSubject.style.backgroundColor = fgcolor;
			}
			if(strSubject == "Others")
			{
				if(document.getElementById("MAJOR"+i).value == "")
				{
					popup("Major  of " +level+"can't be empty.",1900);
					document.getElementById("MAJOR"+i).focus();
					document.getElementById("MAJOR"+i).style.backgroundColor = bgcolor;						
					return false;
				}
				else
				{
					document.getElementById("MAJOR"+i).style.backgroundColor = fgcolor;
				}
			}
		}
	}
	// For loop ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 empty check of PEdu.
function EmptyPEdu()
{
	var PEduUB = parseInt(document.getElementById("count_pedu").value);
	var i;
	
	// For loop starts here.
	for(i = 1; i <= PEduUB; i++)
	{
		// Variable declare and initialization.
		var strPDegree = "";
		var strPInstitute = "";
		var strPassingYear = "";
		var strPInstitute = "";
		var strPPassingYear = "";
		var strPSubject = "";

		// Object declare and initialization.
		objPDegree = document.getElementById("P_DEGREE"+i);
		objPInstitute = document.getElementById("P_INST"+i);
		objPLocation = document.getElementById("P_LOC"+i);
		objPPassingYear = document.getElementById("P_YEAR"+i);
		objPSubject = document.getElementById("P_SUB"+i);
		//popup('degree val :- '+objPInstitute.value);
		// Value of html controls.
		strPDegree = objPDegree.value;
		strPInstitute = objPInstitute.value;
		strPLocation = objPLocation.value;
		strPPassingYear = objPPassingYear.value;
		strPSubject = objPSubject.value;
		profile = " of  PROFESSIONAL QUALIFICATION "
				
		// Checking & focusing of html controls.	
		if(strPDegree != "" || strPInstitute != "" || strPLocation != "" || strPPassingYear != "S" || strPSubject != "")
		{//popup('PEduUB:- '+PEduUB);
			if(strPDegree == "")
			{
				popup("Degree name " + i +profile + " can't be empty.",1600);
				objPDegree.focus();
				objPDegree.style.backgroundColor = bgcolor;						
				return false;
			}
			else
			{
				objPDegree.style.backgroundColor = fgcolor;						
			}
			if(strPInstitute == "")
			{
				popup("Awarding Body " + i +profile +  " can't be empty.",1600);
				objPInstitute.focus();
				objPInstitute.style.backgroundColor = bgcolor;	
				return false;
			}
			else
			{
				objPInstitute.style.backgroundColor = fgcolor;						
			}
			if(strPLocation == "")
			{
				popup("Location of Awarding Body " + i +profile +  " can't be empty.",1600);
				objPLocation.focus();
				objPLocation.style.backgroundColor = bgcolor;	
				return false;
			}
			else
			{
				objPLocation.style.backgroundColor = fgcolor;						
			}
			if(strPPassingYear == "S")
			{
				popup("Passing of awarding year " + i +profile +  " can't be empty.",1600);
				objPPassingYear.focus();
				objPPassingYear.style.backgroundColor = bgcolor;		
				return false;
			}
			else
			{
				objPPassingYear.style.backgroundColor = fgcolor;						
			}
			if(strPSubject == "")
			{
				popup("Awarding Subject " + i +profile +  " can't be empty.",1600);
				objPSubject.focus();
				objPSubject.style.backgroundColor = bgcolor;					
				return false;
			}
			else
			{
				objPSubject.style.backgroundColor = bgcolor;						
			}
		}
		
	}
	// For loop ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 empty check of Tra.
function EmptyTra()
{
	var TraUB = parseInt(document.getElementById("count_tra").value);
	var i;
	
	// For loop starts here.
	for(i = 1; i <= TraUB; i++)
	{
		// Variable declare and initialization.
		var strTName = "";
		var strTInstitute = "";
		var strTLocation = "";
		var strTLength = "";
		var strTPassingYear = "";

		// Object declare and initialization.
		objTName = document.getElementById("T_NAME"+i);
		objTInstitute = document.getElementById("T_INSTITUTE"+i);
		objTLocation = document.getElementById("T_LOC"+i);
		objTLength = document.getElementById("T_LENGTH"+i);
		objTPassingYear = document.getElementById("T_YEAR"+i);
		
		// Value of html controls.
		strTName = objTName.value;
		strTInstitute = objTInstitute.value;
		strTLocation = objTLocation.value;
		strTLength = objTLength.value;
		strTPassingYear = objTPassingYear.value;
		profile = " of   TRAINING INFORMATION";
				
		// Checking & focusing of html controls.	
		if(strTName != "" || strTInstitute != "" || strTLocation != "" || strTLength != "" || strTPassingYear != "S")
		{
			if(strTName == "")
			{
				popup("Training name " + i + profile + " can't be empty.",1350);
				objTName.focus();
				objTName.style.backgroundColor = bgcolor;				
				return false;
			}
			else
			{
				objTName.style.backgroundColor = fgcolor;				
			}
			if(strTInstitute == "")
			{
				popup("Training Awarding Body   " + i + profile + "   can't be empty.",1350);
				objTInstitute.focus();
				objTInstitute.style.backgroundColor = bgcolor;					
				return false;
			}
			else
			{
				objTInstitute.style.backgroundColor = fgcolor;				
			}
			if(strTLocation == "")
			{
				popup("Training year " + i + profile+ " can't be empty.",1350);
				objTLocation.focus();
				objTLocation.style.backgroundColor = bgcolor;					
				return false;
			}
			else
			{
				objTLocation.style.backgroundColor = fgcolor;				
			}
			if(strTLength == "")
			{
				popup("Training Duration " + i + profile+ " can't be empty.",1350);
				objTLength.focus();
				objTLength.style.backgroundColor = bgcolor;					
				return false;
			}
			else
			{
				objTLength.style.backgroundColor = fgcolor;				
			}
			if(strTPassingYear == "S")
			{
				popup("Training Passing year " + i + profile+" can't be empty.",1350);
				objTPassingYear.focus();
				objTPassingYear.style.backgroundColor = bgcolor;					
				return false;
			}
			else
			{
				objTPassingYear.style.backgroundColor = fgcolor;				
			}
		}
		
	}
	// For loop ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 empty check of Prev worked in EBL.
function EmptyPrevWorkedInEBL()
{
	// Variable declare and initialization.
	var strPrevEBL = "";
	var strPrevPos = "";
	var strPrevFromMonth = "";
	var strPrevFromYear = "";
	var strPrevToMonth = "";
	var strPrevToYear = "";

	// Object declare and initialization.
	objPrevEBL = document.getElementById("PREV_EBL");
	objPrevPos = document.getElementById("PREV_POS");
	objPrevFromMonth = document.getElementById("PREV_POS_FR_M");
	objPrevFromYear = document.getElementById("PREV_POS_FR_Y");
	objPrevToMonth = document.getElementById("PREV_POS_TO_M");
	objPrevToYear = document.getElementById("PREV_POS_TO_Y");
	
	// Value of html controls.
	strPrevEBL = objPrevEBL.value;
	strPrevPos = objPrevPos.value;
	strPrevFromMonth = objPrevFromMonth.value;
	strPrevFromYear = objPrevFromYear.value;
	strPrevToMonth = objPrevToMonth.value;
	strPrevToYear = objPrevToYear.value;
	profile =  " of  Previous Work Information in Eastern Bank ";
	
	// Checking & focusing of html controls.	
	if(strPrevEBL == "S")
	{
		popup("Previous worked in EBL  "+profile+ " should be selected.",1150);
		objPrevEBL.focus();
		objPrevEBL.style.backgroundColor = bgcolor;			
		return false;
	}
	else
	{
		objPrevEBL.style.backgroundColor = fgcolor;			
	}
	
	if(strPrevEBL == "Y")
	{
		if(strPrevPos == "")
		{
			popup("Previous Possition  "+profile+ "  can't be empty.",1150);
			objPrevPos.focus();
			objPrevPos.style.backgroundColor = bgcolor;	
			return false;
		}
		else
		{
			objPrevPos.style.backgroundColor = fgcolor;			
		}
		if(strPrevFromMonth == "S")
		{
			popup("Previous Served From month  "+profile+ "  can't be empty.",1150);
			objPrevFromMonth.focus();
			objPrevFromMonth.style.backgroundColor = bgcolor;
			return false;
		}
		else
		{
			objPrevFromMonth.style.backgroundColor = fgcolor;			
		}
		if(strPrevFromYear == "S")
		{
			popup("Previous from year  "+profile+ "  can't be empty.",1150);
			objPrevFromYear.focus();
			objPrevFromYear.style.backgroundColor = bgcolor;			
			return false;
		}
		else
		{
			objPrevFromYear.style.backgroundColor = fgcolor;			
		}
		if(strPrevToMonth == "S")
		{
			popup("Previous to month  "+profile+ "   can't be empty.",1150);
			objPrevToMonth.focus();
			objPrevToMonth.style.backgroundColor = bgcolor;	
			return false;
		}
		else
		{
			objPrevToMonth.style.backgroundColor = fgcolor;			
		}
		if(strPrevToYear == "S")
		{
			popup("Previous to year "+profile+ "   can't be empty.",1150);
			objPrevToYear.focus();
			objPrevToYear.style.backgroundColor = bgcolor;				
			return false;
		}
		else
		{
			objPrevToYear.style.backgroundColor = fgcolor;			
		}
	}
}

// This function is 4 empty check of Job Location.
function EmptyJobLoc(chk)
{
	// Variable declare and initialization.
	var strJobLocation = "";
	var IsChecked = false;
	
	objJobLocation = document.getElementById("JOB_LOC_PREF");
	
	// Value of html controls.
	strJobLocation = objJobLocation.value;
	
	if(strJobLocation == "S")
	{
		popup("Job location preference should be selected.");
		objJobLocation.focus();
		objJobLocation.style.backgroundColor = bgcolor;
		return false;
	}
	else
	{
		objJobLocation.style.backgroundColor = fgcolor;
	}
	
	if(strJobLocation == "Y")
	{
		//popup(chk.length);
		for (i = 0; i < chk.length; i++)
		{
			if(chk[i].checked)
			{
				IsChecked = true;
			}
			
		}
		
		if(IsChecked == true)
		{
			return true;
		}
		else
		{
			popup("Job location should be selected.");
			objJobLocation.focus();
			objJobLocation.style.backgroundColor = bgcolor;	
			return false;
		}
	}
}

// This function is 4 empty check of Personal.
function EmptyPersonal()
{
	// Variable declare and initialization.
	var intExpectedSalary = 0;
	var intNoticePeriod = "";
	var strObjective = "";
	var strWhyEbl = "";
	var strRead = "";
	var strWrite = "";
	var strSpeak = "";
	var strListen = "";
	var intPresentSalary = 0;
	
	objTotalExp = document.getElementById("TTL_EXP");
	
	// Most Outer if starts here.
	if(objTotalExp.value > 0)
	{
		objPresentSalary = document.getElementById("PSALARY");
		intPresentSalary = objPresentSalary.value;
		
		if(intPresentSalary == "" || intPresentSalary == 0)
		{
			popup("Present salary can't be empty.");
			objPresentSalary.focus();
			objPresentSalary.style.backgroundColor = bgcolor;
			return false;
		}
		if(isNaN(intPresentSalary))
		{
			popup("Present salary should be numeric.");
			objPresentSalary.focus();
			objPresentSalary.style.backgroundColor = bgcolor;	
			objPresentSalary.value = "";
			return false;
		}
	}
	
	// Object declare and initialization.
	objExpectedSalary = document.getElementById("ESALARY");
	objNoticePeriod = document.getElementById("DJOIN");
	objObjective = document.getElementById("OBJ");
	objWhyEbl = document.getElementById("txtWhyEbl");
	objRead = document.getElementById("READ");
	objWrite = document.getElementById("WRITE");
	objSpeak = document.getElementById("SPEAK");
	objListen = document.getElementById("LISTEN");
	
	// Value of html controls.
	intExpectedSalary = objExpectedSalary.value;
	intNoticePeriod = objNoticePeriod.value;
	strObjective = objObjective.value;
	strWhyEbl = objWhyEbl.value;
	strRead = objRead.value;
	strWrite = objWrite.value;
	strSpeak = objSpeak.value;
	strListen = objListen.value;
	//popup("Test: ");
	// Checking & focusing of html controls.	
	if(intExpectedSalary == "" || intExpectedSalary == 0)
	{
		popup("Expected salary can't be empty.",1050);
		objExpectedSalary.focus()
		objExpectedSalary.style.backgroundColor = bgcolor;	
		return false;
	}
	else
	{
		objExpectedSalary.style.backgroundColor = fgcolor;	
	}
	if(isNaN(intExpectedSalary))
	{
		popup("Expected salary should be numeric.",1050);
		objExpectedSalary.focus();
		objExpectedSalary.style.backgroundColor = bgcolor;	
		objExpectedSalary.value = "";
		return false;
	}
	else
	{
		objExpectedSalary.style.backgroundColor = fgcolor;	
	}
	if(intNoticePeriod == "" || intNoticePeriod == 0)
	{
		popup("Notice period can't be empty.",1050);
		objNoticePeriod.focus();
		objNoticePeriod.style.backgroundColor = bgcolor;	
		return false;
	}
	else
	{
		objNoticePeriod.style.backgroundColor = fgcolor;	
	}
	if(isNaN(intNoticePeriod))
	{
		popup("Notice period should be numeric.",1050);
		objNoticePeriod.focus();
		objNoticePeriod.style.backgroundColor = bgcolor;	
		objNoticePeriod.value = "";
		return false;
	}
	else
	{
		objNoticePeriod.style.backgroundColor = fgcolor;	
	}
	if(strObjective == "")
	{
		popup("Justify your candidature for your desired position can't be empty.",1000);
		objObjective.focus();
	    objObjective.style.backgroundColor = bgcolor;	
		return false;
	}
	else
	{
		objObjective.style.backgroundColor = fgcolor;	
	}
	if(strWhyEbl == "")
	{
		popup("Mention why you choose EBL can't be empty.",980);
		objWhyEbl.focus();
        objWhyEbl.style.backgroundColor = bgcolor;	
		return false;
	}
	else
	{
		objWhyEbl.style.backgroundColor = fgcolor;	
	}
	if(strRead == "S")
	{
		popup("Reading should be selected.",950);
		objRead.focus();
        objRead.style.backgroundColor = bgcolor;	
		return false;
	}
	else
	{
		objRead.style.backgroundColor = fgcolor;	
	}
	if(strWrite == "S")
	{
		popup("Writing should be selected.",950);
		objWrite.focus();
        objWrite.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
		objWrite.style.backgroundColor = fgcolor;	
	}
	if(strSpeak == "S")
	{
		popup("Speaking should be selected.",950);
		objSpeak.focus();
        objSpeak.style.backgroundColor = bgcolor;
		return false;
	}
	else
	{
		objSpeak.style.backgroundColor = fgcolor;	
	}
	if(strListen == "S")
	{
		popup("Listening should be selected.",950);
		objListen.focus();
		objListen.style.backgroundColor = bgcolor;		
		return false;
	}	
	else
	{
		objListen.style.backgroundColor = fgcolor;	
	}	
	return true;
}

// This function is 4 empty check of EBL Referees.
function EmptyEBLReferees()
{
	var EBLRefereesUB = parseInt(document.getElementById("count_eblRef").value);
	var i;
	
	// For loop starts here.
	for(i = 1; i <= EBLRefereesUB; i++)
	{
		// Variable declare and initialization.
		var strEBLRefName = "";
		var strEBLRefDesignation = "";
		var strEBLRefRelation = "";

		// Object declare and initialization.
		objEBLRefName = document.getElementById("EBL_MAN"+i);
		objEBLRefDesignation = document.getElementById("EBL_MAN_DESG"+i);
		objEBLRefRelation = document.getElementById("EBL_MAN_REL"+i);
		
		// Value of html controls.
		strEBLRefName = objEBLRefName.value;
		strEBLRefDesignation = objEBLRefDesignation.value;
		strEBLRefRelation = objEBLRefRelation.value;
				
		// Checking & focusing of html controls.	
		if(strEBLRefName != "" || strEBLRefDesignation != "" || strEBLRefRelation != "")
		{
			if(strEBLRefName == "")
			{
				popup("Reference in EBL Name " + i + " can't be empty.",800);
				objEBLRefName.focus();
                objEBLRefName.style.backgroundColor = bgcolor;	
				return false;
			}
			else
			{
                objEBLRefName.style.backgroundColor = fgcolor;	
			}
			if(strEBLRefDesignation == "")
			{
				popup("Reference in EBL Designation " + i + " can't be empty.",800);
				objEBLRefDesignation.focus();
			    objEBLRefDesignation.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
                objEBLRefDesignation.style.backgroundColor = fgcolor;	
			}
			if(strEBLRefRelation == "")
			{
				popup("Reference in EBL Relation " + i  +" can't be empty.",800);
				objEBLRefRelation.focus();
				objEBLRefRelation.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
                objEBLRefRelation.style.backgroundColor = fgcolor;	
			}
			
		}
		
	}
	// For loop ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 empty check of EBL Interview.
function EmptyEBLInterview()
{
	var EBLInterviewUB = parseInt(document.getElementById("count_EBLPrev").value);
	var i;
	
	// For loop starts here.
	for(i = 1; i <= EBLInterviewUB; i++)
	{
		// Variable declare and initialization.
		var strEBLIPost = "";
		var strEBLIMonth = "";
		var strEBLIYear = "";

		// Object declare and initialization.
		objEBLIPost = document.getElementById("I_POST"+i);
		objEBLIMonth = document.getElementById("I_DATE_M"+i);
		objEBLIYear = document.getElementById("I_DATE_Y"+i);
		
		// Value of html controls.
		strEBLIPost = objEBLIPost.value;
		strEBLIMonth = objEBLIMonth.value;
		strEBLIYear = objEBLIYear.value;
		profile = " of  Previously Interviewed";
				
		// Checking & focusing of html controls.	
		if(strEBLIPost != "" || strEBLIMonth != "S" || strEBLIYear != "S")
		{
			if(strEBLIPost == "")
			{
				popup("Name " + i +profile+ " can't be empty.");
				objEBLIPost.focus();
				objEBLIPost.style.backgroundColor = bgcolor;	
				return false;
			}
			else
			{
				objEBLIPost.style.backgroundColor = fgcolor;	
			}
			if(strEBLIMonth == "S")
			{
				popup("Designation " + i +profile+" can't be empty.");
				objEBLIMonth.focus();
				objEBLIMonth.style.backgroundColor = bgcolor;
				return false;
			}
			else
			{
				objEBLIMonth.style.backgroundColor = fgcolor;	
			}
			if(strEBLIYear == "S")
			{
				popup("Relation " + i +profile+ " can't be empty.");
				objEBLIYear.focus();
				objEBLIYear.style.backgroundColor = bgcolor;	
				return false;
			}
			else
			{
				objEBLIYear.style.backgroundColor = fgcolor;	
			}
			
		}
		
	}
	// For loop ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 empty check of Referees.
function EmptyReferees()
{
	//var RefereesUB = parseInt(document.getElementById("count_ref").value);
	var RefereesUB = 2;
	var i;
	
	// For loop starts here.
	for(i = 1; i <= RefereesUB; i++)
	{
		// Variable declare and initialization.
		var strRName = "";
		var strRPost = "";
		var strRComp = "";
		var strRAdd = "";
		var strRPhone = "";
		var strRMobile = "";
		var strREmail = "";
		var strRelation = "";
		profile = " of  REFEREES " 

		// Object declare and initialization.
		objRName = document.getElementById("R_NAME"+i);
		objRPost = document.getElementById("R_POS"+i);
		objRComp = document.getElementById("R_COMP"+i);
		objRAdd = document.getElementById("R_ADD"+i);
		objRPhone = document.getElementById("R_PHONE"+i);
		objRMobile = document.getElementById("R_CELL"+i);
		objREmail = document.getElementById("R_EMAIL"+i);
		objRelation = document.getElementById("R_KNOW"+i);
		
		// Value of html controls.
		strRName = objRName.value;
		strRPost = objRPost.value;
		strRComp = objRComp.value;
		strRAdd = objRAdd.value;
		strRPhone = objRPhone.value;
		strRMobile = objRMobile.value;
		strREmail = objREmail.value;
		strRelation = objRelation.value;
				
		// Checking & focusing of html controls.	
		if(strRName == "")
		{
			popup("Referee Name " + i +profile+ " can't be empty.",250);
			objRName.focus();
			objRName.style.backgroundColor = bgcolor;	
			return false;
		}
		else
		{
			objRName.style.backgroundColor = fgcolor;	
		}
		if(strRPost == "")
		{
			popup("Referee Designation " + i +profile+ " can't be empty.",250);
			objRPost.focus();
			objRPost.style.backgroundColor = bgcolor;		
			return false;
		}
		else
		{
			objRPost.style.backgroundColor = fgcolor;	
		}
		if(strRComp == "")
		{
			popup("Referee Organization " + i +profile+ " can't be empty.",250);
			objRComp.focus();
			objRComp.style.backgroundColor = bgcolor;	
			return false;
		}
		else
		{
			objRComp.style.backgroundColor = fgcolor;	
		}
		if(strRAdd == "")
		{
			popup("Referee Mailing Address " + i + profile+" can't be empty.",250);
			objRAdd.focus();
			objRAdd.style.backgroundColor = bgcolor;	
			return false;
		}
		else
		{
			objRAdd.style.backgroundColor = fgcolor;	
		}
		if(strRPhone == "")
		{
			popup("Referee Phone Number " + i +profile+ " can't be empty.",250);
			objRPhone.focus();
			objRPhone.style.backgroundColor = bgcolor;		
			return false;
		}
		else
		{
			objRPhone.style.backgroundColor = fgcolor;	
		}
		if(strRMobile == "")
		{
			popup("Referee Cell Number can't be empty.",250);
			objRMobile.focus();
			objRMobile.style.backgroundColor = bgcolor;
			return false;
		}
		else
		{
			objRMobile.style.backgroundColor = fgcolor;	
		}
		if(strREmail == "")
		{
			popup("Referee Email " + i +profile+ " can't be empty.",250);
			objREmail.focus();
	        objREmail.style.backgroundColor = bgcolor;		
			return false;
		}
		else
		{
			objREmail.style.backgroundColor = fgcolor;	
		}
		if(CheckEmail(strREmail) == false)
		{
			popup("Please input a valid Referee email address " + i +profile+ "!",250);
			objREmail.focus();
	        objREmail.style.backgroundColor = bgcolor;		
  			return false;
		}
		else
		{
			objREmail.style.backgroundColor = fgcolor;	
		}
		if(strRelation == "")
		{
			popup("Referee Relation " + i +profile+ " can't be empty.",250);
			objRelation.focus();
	        objRelation.style.backgroundColor = bgcolor;		
			return false;
		}
		else
		{
			objRelation.style.backgroundColor = fgcolor;	
		}
	}
	// For loop ends here.
	return true;
	// Experience block ends here.
}

// This function is 4 password checking
function EmptyPassword()
{
	var strPassword = "";
	var strConfirmPassword = "";

	// Object declare and initialization.
	objPassword = document.getElementById("PWORD");
	objConfirmPassword = document.getElementById("PWORD2");
	
	// Value of html controls.
	strPassword = objPassword.value;
	strConfirmPassword = objConfirmPassword.value;
			
	// Checking & focusing of html controls.	
	if(strPassword == "")
	{
		popup("Password can't be empty.");
		objPassword.focus();
	    objPassword.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objPassword.style.backgroundColor = fgcolor;		
	}
	
	if(strConfirmPassword == "")
	{
		popup("Confirm password can't be empty.");
		objConfirmPassword.focus();
	    objConfirmPassword.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objConfirmPassword.style.backgroundColor = fgcolor;		
	}
	
	if(strPassword != strConfirmPassword)
	{
		popup("Pasword and confirm password should be same.");
		objPassword.focus();
	    objPassword.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objPassword.style.backgroundColor = fgcolor;		
	}
	
}

// This function is 4 uncheck of Job Location.
function Uncheck(chk)
{
	//var intLength = parseInt(chk.length);
	var IsChecked = false;
	
	for (i = 0; i < chk.length; i++)
	{
		if(chk[i].checked)
		{
			IsChecked = true;
		}
		else
		{
			IsChecked = false;
		}
	}
	
	//popup(IsChecked);
	if(IsChecked == true)
	{
		for (i = 0; i < chk.length - 1; i++)
		{
			chk[i].checked = false;
		}
	}
}

// This function is 4 check of Job Location.
function Check(chk)
{
	//var intLength = parseInt(chk.length);
	var IsChecked = false;
	
	for (i = 0; i < chk.length; i++)
	{
		if(chk[i].checked)
		{
			IsChecked = true;
		}
		else
		{
			IsChecked = false;
		}
	}
	
	//popup(IsChecked);
	if(IsChecked == true)
	{
		for (i = 6; i < chk.length; i++)
		{
			chk[i].checked = false;
		}
	}
}

// This function is 4 Other info checking
function EmptyOthers(chk)
{
	// Variable declare and initialization.
	var intPresentSalary = "";
	var intExpectedSalary = "";
	var intNoticePeriod = "";
	var strObjective = "";
	var strWhyEbl = "";
	var strRead = "";
	var strWrite = "";
	var strSpeak = "";
	var strListen = "";
	
	
	// Object declare and initialization.
	objPresentSalary = document.getElementById("PSALARY");
	objExpectedSalary = document.getElementById("ESALARY");
	objNoticePeriod = document.getElementById("DJOIN");
	objObjective = document.getElementById("OBJ");
	objWhyEbl = document.getElementById("txtWhyEbl");
	objRead = document.getElementById("READ");
	objWrite = document.getElementById("WRITE");
	objSpeak = document.getElementById("SPEAK");
	objListen = document.getElementById("LISTEN");
	
	// Value of html controls.
	intPresentSalary = objPresentSalary.value;
	intExpectedSalary = objExpectedSalary.value;
	intNoticePeriod = objNoticePeriod.value;
	strObjective = objObjective.value;
	strWhyEbl = objWhyEbl.value;
	strRead = objRead.value;
	strWrite = objWrite.value;
	strSpeak = objSpeak.value;
	strListen = objListen.value;
	
	//popup(intPresentSalary);
	// Checking & focusing of html controls.
	if(intPresentSalary == "0")
	{
		popup("Present salary can't be zero.");
		objPresentSalary.focus();
	    objPresentSalary.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objPresentSalary.style.backgroundColor = fgcolor;		
	}
	if(isNaN(intPresentSalary))
	{
		popup("Present salary should be numeric.");
		objPresentSalary.focus();
		objPresentSalary.value = "";
	    objPresentSalary.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objPresentSalary.style.backgroundColor = fgcolor;		
	}	
	if(intExpectedSalary == "" || intExpectedSalary == "0")
	{
		popup("Expected salary can't be empty.");
		objExpectedSalary.focus();
	    objExpectedSalary.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objExpectedSalary.style.backgroundColor = fgcolor;		
	}
	if(isNaN(intExpectedSalary))
	{
		popup("Expected salary should be numeric.");
		objExpectedSalary.focus();
		objExpectedSalary.value = "";
	    objExpectedSalary.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objExpectedSalary.style.backgroundColor = fgcolor;		
	}
	if(intNoticePeriod == "" || intNoticePeriod == "0")
	{
		popup("Ready to join can't be empty.");
		objNoticePeriod.focus();
	    objNoticePeriod.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objNoticePeriod.style.backgroundColor = fgcolor;		
	}
	if(isNaN(intNoticePeriod))
	{
		popup("Ready to join should be numeric.");
		objNoticePeriod.focus();
		objNoticePeriod.value = "";
	    objNoticePeriod.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objNoticePeriod.style.backgroundColor = fgcolor;		
	}
	if(strObjective == "")
	{
		popup("Justify your candidature can't be empty.");
		objObjective.focus();
		objObjective.style.backgroundColor = bgcolor;	
		return false;
	}
	else
	{
	    objObjective.style.backgroundColor = fgcolor;		
	}
	if(strObjective.length > 1000)
	{
		popup("Justify your candidature length can't be greater than 1000.");
		objObjective.focus();
	    objObjective.style.backgroundColor = bgcolor;				
		return false;
	}
	else
	{
	    objObjective.style.backgroundColor = fgcolor;		
	}
	if(strWhyEbl == "")
	{
		popup("Mention why you choose EBL can't be empty.");
		objWhyEbl.focus();
	    objWhyEbl.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objWhyEbl.style.backgroundColor = fgcolor;		
	}
	if(strWhyEbl.length > 1000)
	{
		popup("Mention why you choose EBL can't be greater than 1000.");
		objWhyEbl.focus();
	    objWhyEbl.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objWhyEbl.style.backgroundColor = fgcolor;		
	}
	if(strRead == "S")
	{
		popup("Read can't be empty.");
		objRead.focus();
	    objRead.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objRead.style.backgroundColor = fgcolor;		
	}
	if(strWrite == "S")
	{
		popup("Write can't be empty.");
		objWrite.focus();
	    objWrite.style.backgroundColor = bgcolor;		
		return false;
	}
	else
	{
	    objWrite.style.backgroundColor = fgcolor;		
	}
	if(strSpeak == "S")
	{
		popup("Speak can't be empty.");
		objSpeak.focus();
	    objSpeak.style.backgroundColor = bgcolor;		
		return false;
	}
	if(strListen == "S")
	{
		popup("Listen can't be empty.");
		objListen.focus();
		objListen.style.backgroundColor = bgcolor;				
		return false;
	}
	
	
	// 4 EmptyPrevWorkedInEBL block.
	if(EmptyPrevWorkedInEBL() == false)
	{
		return false;
	}
	
	// 4 Job location block.
	if(EmptyJobLoc(chk) == false)
	{
		return false;
	}
	
	// 4 EBL Referees block.
	if(EmptyEBLReferees() == false)
	{
		return false;
	}
	
	// 4 EBL Interview block.
	if(EmptyEBLInterview() == false)
	{
		return false;
	}
	
	return true;
}

// This function is 4 empty check.
function EmptyCheck(chk)
{
	// Function starts here.
	// 4 Exp block.
	if(EmptyExp() == false)
	{
		return false;
	}
	
	// 4 Edu block.
	if(EmptyEdu() == false)
	{
		return false;
	}
	
	// 4 PEdu block.
	if(EmptyPEdu() == false)
	{
		return false;
	}
	
	// 4 Tra block.
	if(EmptyTra() == false)
	{
		return false;
	}
	
	// 4 EmptyPrevWorkedInEBL block.
	if(EmptyPrevWorkedInEBL() == false)
	{
		return false;
	}
	
	// 4 Job location block.
	if(EmptyJobLoc(chk) == false)
	{
		return false;
	}
	
	// 4 Personal block.
	if(EmptyPersonal() == false)
	{
		return false;
	}
	
	// 4 EBL Referees block.
	if(EmptyEBLReferees() == false)
	{
		return false;
	}
	
	// 4 EBL Interview block.
	if(EmptyEBLInterview() == false)
	{
		return false;
	}
	
	// 4 Referees block.
	if(EmptyReferees() == false)
	{
		return false;
	}
	
	return true;
	// Function ends here. 
}


// Letter Count
function letterCount(cotrolName, chrLimit)
{
	cotrolValue = document.getElementById(cotrolName).value ;
	lengthOfControl = parseInt(cotrolValue.length);
	if(lengthOfControl != 0)
	{
		window.status = lengthOfControl ; 
		txtArea = document.getElementById(cotrolName+"_span");
		txtArea.innerHTML = "<a style=\"color:#3300FF;font-family:Arial;font-size:8pt;\">You wrote <b style='color:#FF0000'>"+lengthOfControl+"</b> character(s)</a>" ;
		
		if(lengthOfControl >= parseInt(chrLimit)+1)//if(lengthOfControl >= 200)
		{
				popup("Please stop writing as you are crossing the "+chrLimit+" letter limit!")
		}
	
		if( lengthOfControl > parseInt(chrLimit) )
		{
			nb = document.getElementById(cotrolName).value.substr(0,parseInt(chrLimit));
			txtara = document.getElementById(cotrolName) ; 
			txtara.value =  nb ;
			span_area = document.getElementById( cotrolName + "_span" ) ; 
			span_area.innerHTML ="<a style=\"color:#3300FF;font-family:Arial;font-size:8pt; \">You wrote <b style='color:#FF0000'>" + nb.length + "</b> character(s)</a>" ;
			 //popup(nb)
		}
	}
	else
	{
		window.status = "";
		txtArea = document.getElementById(cotrolName + "_span" ) ; 
		txtArea.innerHTML = "";
	}
}

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    theEvent.preventDefault();
  }
}

function onlyNumbers(e)
{
var keynum;
var keychar;
var numcheck;
 
if(window.event) // IE
  {
  keynum = e.keyCode;
  }
else if(e.which) // Netscape/Firefox/Opera
  {
  keynum = e.which;
  }
keychar = String.fromCharCode(keynum);
numcheck = /\d/;
return numcheck.test(keychar);
}


function intonly(myfield, e, dec)
{
var key;
var keychar;
 
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);
 
// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;
 
// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;
 
 
else
   return false;
}

function resultPoint(myfield, e, dec)
{
var key;
var keychar;
 
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);
 
// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) || (key==46) )
   return true;
 
// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;
 
 
else
   return false;
}




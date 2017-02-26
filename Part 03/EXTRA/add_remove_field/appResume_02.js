/*<SCRIPT LANGUAGE="JavaScript">*/

//function entryOthers(myobj,place)
//{
//    obj_name = "sp_deg"+place;
//	//popup(obj_name);
////for others
//	if(myobj.value == "O")
//	{
//		/*eval(obj_name).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Please mention<br><select name='FOREIGN"+place+"'><option value=USA>USA</option><option value=UK>UK</option></select>";*/
//document.getElementById("sp_deg"+place).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Degree Name</font><br><input type='text' name='ddlDeg1' id='ddlDeg1' maxlength='1' style='width:10px;font-size:7pt;background-color:#F1F7DE '><input type='text' name='ddlDeg2' id='ddlDeg2' maxlength='1'style='width:10px;font-size:7pt;background-color:#F1F7DE '><input type='text' name='ddlDeg3' id='ddlDeg3' maxlength='1' style='width:10px;font-size:7pt;background-color:#F1F7DE '><input type='text' name='ddlDeg4' id='ddlDeg4' maxlength='1' style='width:10px;font-size:7pt;background-color:#F1F7DE '><input type='text' name='ddlDeg10' id='ddlDeg10' maxlength='1' style='width:10px;font-size:7pt;background-color:#F1F7DE '><input type='text' name='ddlDeg6' id='ddlDeg6' maxlength='1' style='width:10px;font-size:7pt;background-color:#F1F7DE '>"
//	}
//	else
//	{
//		document.getElementById("sp_deg"+place).innerHTML = "";
//	}
//}

function entryOthers(myobj,place)
{
    obj_name = "sp_deg"+place;
	
	//alert(obj_name);
	//alert(myobj.value);
//for others
	if(myobj.value == "O")
	{
		//alert(myobj.value);
	document.getElementById("sp_deg"+place).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Degree Name</font><br><input type='text' name='ddlDeg"+place+"' id='ddlDeg"+place+"' style='width:40px;font-size:7pt;background-color:#F1F7DE '>";

	}
	else
	{
		document.getElementById(obj_name).innerHTML = "";
	}
}






/**********************  FOR INSTITUTE FIELD  *********************/
function createEdu(myobj,place)
{
//popup(myobj.value);

	obj_name = "sp_edu"+place;
	//popup(obj_name);
//for others
	if(myobj.value == "O")
	{
		/*eval(obj_name).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Please mention<br><select name='FOREIGN"+place+"'><option value=USA>USA</option><option value=UK>UK</option></select>";*/
		document.getElementById("sp_edu"+place).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Institute Name</font><br><input type='text' name='INS_NAME"+place+"' id='INS_NAME"+place+"' maxlength='255' style='width:160px;font-size:7pt;background-color:#F1F7DE '>"
	}	
// for foreign institute

	else if(myobj.value == "F")
	{
	
		/*eval(obj_name).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Please mention<br><select name='FOREIGN"+place+"'><option value=USA>USA</option><option value=UK>UK</option></select>";*/
		//
	
		//document.all.sp_edu6.innerHTML
		document.getElementById("sp_edu"+place).innerHTML ="<font face='Verdana' color='#FF0000' size='1'>* Campus location<br><select id='CAMPUS"+place+"' name='CAMPUS"+place+"' style='width:170px;font-size:7pt;background-color:#F1F7DE;'>  <option value='Afghanistan' id='AF'>Afghanistan </option>  <option value='Albania' id='AL'>Albania </option>  <option value='Algeria' id='DZ'>Algeria </option>  <option value='American Samoa' id='AS'>American Samoa </option>  <option value='Andorra' id='AD'>Andorra </option>  <option value='Angola' id='AO'>Angola </option>  <option value='Anguilla' id='AI'>Anguilla </option>  <option value='Antarctica' id='AQ'>Antarctica </option>  <option value='Antigua and Barbuda' id='AG'>Antigua and Barbuda</option>  <option value='Argentina' id='AR'>Argentina</option>  <option value='Armenia' id='AM'>Armenia</option>  <option value='Aruba' id='AW'>Aruba</option>  <option value='Australia' id='AU'>Australia</option>  <option value='Austria' id='AT'>Austria</option>  <option value='Azerbaijan' id='AZ'>Azerbaijan</option>  <option value='Bahamas' id='BS'>Bahamas</option>  <option value='Bahrain' id='BH'>Bahrain</option>  <option value='Bangladesh' selected id='BD'>Bangladesh</option>  <option value='Barbados' id='BB'>Barbados</option>  <option value='Belarus' id='BY'>Belarus</option>  <option value='Belgium' id='BE'>Belgium</option>  <option value='Belize' id='BZ'>Belize</option>  <option value='Benin' id='BJ'>Benin</option>  <option value='Bermuda' id='BM'>Bermuda</option>  <option value='Bhutan' id='BT'>Bhutan</option>  <option value='Bolivia' id='BO'>Bolivia</option>  <option value='Bosnia and Herzegovina' id='BA'>Bosnia and Herzegovina</option>  <option value='Botswana' id='BW'>Botswana</option>  <option value='Bouvet Island' id='BV'>Bouvet Island</option>  <option value='Brazil' id='BR'>Brazil</option>  <option value='British Indian Ocean Territory' id='IO'>British Indian Ocean Territory</option>  <option value='Brunei' id='BN'>Brunei</option>  <option value='Bulgaria' id='BG'>Bulgaria</option>  <option value='Burkina Faso' id='BF'>Burkina Faso</option>  <option value='Burundi' id='BI'>Burundi</option>  <option value='Cambodia' id='KH'>Cambodia</option>  <option value='Cameroon' id='CM'>Cameroon</option>  <option value='Canada' id='CA'>Canada</option>  <option value='Cape Verde' id='CV'>Cape Verde</option>  <option value='Cayman Islands' id='KY'>Cayman Islands</option>  <option value='Central African Republic' id='CF'>Central African Republic</option>  <option value='Chad' id='TD'>Chad</option>  <option value='Chile' id='CL'>Chile</option>  <option value='China' id='CN'>China</option>  <option value='Christmas Island' id='CX'>Christmas Island</option>  <option value='Cocos (Keeling) Islands' id='CC'>Cocos (Keeling) Islands</option>  <option value='Colombia' id='CO'>Colombia</option>  <option value='Comoros' id='KM'>Comoros</option>  <option value='Congo' id='CG'>Congo</option>  <option value='Cook Islands' id='CK'>Cook Islands</option>  <option value='Costa Rica' id='CR'>Costa Rica</option>  <option value='Côte d&#39;Ivoire' id='CI'>Côte d&#39;Ivoire</option>  <option value='Croatia (Hrvatska)' id='HR'>Croatia (Hrvatska)</option>  <option value='Cuba' id='CU'>Cuba</option>  <option value='Cyprus' id='CY'>Cyprus</option>  <option value='Czech Republic' id='CZ'>Czech Republic</option>  <option value='Congo (DRC)' id='CD'>Congo (DRC)</option>  <option value='Denmark' id='DK'>Denmark</option>  <option value='Djibouti' id='DJ'>Djibouti</option>  <option value='Dominica' id='DM'>Dominica</option>  <option value='Dominican Republic' id='DO'>Dominican Republic</option>  <option value='East Timor' id='TP'>East Timor</option>  <option value='Ecuador' id='EC'>Ecuador</option>  <option value='Egypt' id='EG'>Egypt</option>  <option value='El Salvador' id='SV'>El Salvador</option>  <option value='Equatorial Guinea' id='GQ'>Equatorial Guinea</option>  <option value='Eritrea' id='ER'>Eritrea</option>  <option value='Estonia' id='EE'>Estonia</option>  <option value='Ethiopia' id='ET'>Ethiopia</option>  <option value='Falkland Islands (Islas Malvinas)' id='FK'>Falkland Islands (Islas Malvinas)</option>  <option value='Faroe Islands' id='FO'>Faroe Islands</option>  <option value='Fiji Islands' id='FJ'>Fiji Islands</option>  <option value='Finland' id='FI'>Finland</option>  <option value='France' id='FR'>France</option>  <option value='French Guiana' id='GF'>French Guiana</option>  <option value='French Polynesia' id='PF'>French Polynesia</option>  <option value='French Southern and Antarctic Lands' id='TF'>French Southern and Antarctic Lands</option>  <option value='Gabon' id='GA'>Gabon</option>  <option value='Gambia' id='GM'>Gambia</option>  <option value='Georgia' id='GE'>Georgia</option>  <option value='Germany' id='DE'>Germany</option>  <option value='Ghana' id='GH'>Ghana</option>  <option value='Gibraltar' id='GI'>Gibraltar</option>  <option value='Greece' id='GR'>Greece</option>  <option value='Greenland' id='GL'>Greenland</option>  <option value='Grenada' id='GD'>Grenada</option>  <option value='Guadeloupe' id='GP'>Guadeloupe</option>  <option value='Guam' id='GU'>Guam</option>  <option value='Guatemala' id='GT'>Guatemala</option>  <option value='Guinea' id='GN'>Guinea</option>  <option value='Guinea-Bissau' id='GW'>Guinea-Bissau</option>  <option value='Guyana' id='GY'>Guyana</option>  <option value='Haiti' id='HT'>Haiti</option>  <option value='Heard Island and McDonald Islands' id='HM'>Heard Island and McDonald Islands</option>  <option value='Honduras' id='HN'>Honduras</option>  <option value='Hong Kong SAR' id='HK'>Hong Kong SAR</option>  <option value='Hungary' id='HU'>Hungary</option>  <option value='Iceland' id='IS'>Iceland</option>  <option value='India' id='IN'>India</option>  <option value='Indonesia' id='ID'>Indonesia</option>  <option value='Iran' id='IR'>Iran</option>  <option value='Iraq' id='IQ'>Iraq</option>  <option value='Ireland' id='IE'>Ireland</option>  <option value='Israel' id='IL'>Israel</option>  <option value='Italy' id='IT'>Italy</option>  <option value='Jamaica' id='JM'>Jamaica</option>  <option value='Japan' id='JP'>Japan</option>  <option value='Jordan' id='JO'>Jordan</option>  <option value='Kazakhstan' id='KZ'>Kazakhstan</option>  <option value='Kenya' id='KE'>Kenya</option>  <option value='Kiribati' id='KI'>Kiribati</option>  <option value='Korea' id='KR'>Korea</option>  <option value='Kuwait' id='KW'>Kuwait</option>  <option value='Kyrgyzstan' id='KG'>Kyrgyzstan</option>  <option value='Laos' id='LA'>Laos</option>  <option value='Latvia' id='LV'>Latvia</option>  <option value='Lebanon' id='LB'>Lebanon</option>  <option value='Lesotho' id='LS'>Lesotho</option>  <option value='Liberia' id='LR'>Liberia</option>  <option value='Libya' id='LY'>Libya</option>  <option value='Liechtenstein' id='LI'>Liechtenstein</option>  <option value='Lithuania' id='LT'>Lithuania</option>  <option value='Luxembourg' id='LU'>Luxembourg</option>  <option value='Macao SAR' id='MO'>Macao SAR</option>  <option value='Macedonia, Former Yugoslav Republic of' id='MK'>Macedonia, Former Yugoslav Republic of</option>  <option value='Madagascar' id='MG'>Madagascar</option>  <option value='Malawi' id='MW'>Malawi</option>  <option value='Malaysia' id='MY'>Malaysia</option>  <option value='Maldives' id='MV'>Maldives</option>  <option value='Mali' id='ML'>Mali</option>  <option value='Malta' id='MT'>Malta</option>  <option value='Marshall Islands' id='MH'>Marshall Islands</option>  <option value='Martinique' id='MQ'>Martinique</option>  <option value='Mauritania' id='MR'>Mauritania</option>  <option value='Mauritius' id='MU'>Mauritius</option>  <option value='Mayotte' id='YT'>Mayotte</option>  <option value='Mexico' id='MX'>Mexico</option>  <option value='Micronesia' id='FM'>Micronesia</option>  <option value='Moldova' id='MD'>Moldova</option>  <option value='Monaco' id='MC'>Monaco</option>  <option value='Mongolia' id='MN'>Mongolia</option>  <option value='Montserrat' id='MS'>Montserrat</option>  <option value='Morocco' id='MA'>Morocco</option>  <option value='Mozambique' id='MZ'>Mozambique</option>  <option value='Myanmar' id='MM'>Myanmar</option>  <option value='Namibia' id='NA'>Namibia</option>  <option value='Nauru' id='NR'>Nauru</option>  <option value='Nepal' id='NP'>Nepal</option>  <option value='Netherlands' id='NL'>Netherlands</option>  <option value='Netherlands Antilles' id='AN'>Netherlands Antilles</option>  <option value='New Caledonia' id='NC'>New Caledonia</option>  <option value='New Zealand' id='NZ'>New Zealand</option>  <option value='Nicaragua' id='NI'>Nicaragua</option>  <option value='Niger' id='NE'>Niger</option>  <option value='Nigeria' id='NG'>Nigeria</option>  <option value='Niue' id='NU'>Niue</option>  <option value='Norfolk Island' id='NF'>Norfolk Island</option>  <option value='North Korea' id='KP'>North Korea</option>  <option value='Northern Mariana Islands' id='MP'>Northern Mariana Islands</option>  <option value='Norway' id='NO'>Norway</option>  <option value='Oman' id='OM'>Oman</option>  <option value='Pakistan' id='PK'>Pakistan</option>  <option value='Palau' id='PW'>Palau</option>  <option value='Panama' id='PA'>Panama</option>  <option value='Papua New Guinea' id='PG'>Papua New Guinea</option>  <option value='Paraguay' id='PY'>Paraguay</option>  <option value='Peru' id='PE'>Peru</option>  <option value='Philippines' id='PH'>Philippines</option>  <option value='Pitcairn Islands' id='PN'>Pitcairn Islands</option>  <option value='Poland' id='PL'>Poland</option>  <option value='Portugal' id='PT'>Portugal</option>  <option value='Puerto Rico' id='PR'>Puerto Rico</option>  <option value='Qatar' id='QA'>Qatar</option>  <option value='Reunion' id='RE'>Reunion</option>  <option value='Romania' id='RO'>Romania</option>  <option value='Russia' id='RU'>Russia</option>  <option value='Rwanda' id='RW'>Rwanda</option>  <option value='Samoa' id='WS'>Samoa</option>  <option value='San Marino' id='SM'>San Marino</option>  <option value='São Tomé and Príncipe' id='ST'>São Tomé and Príncipe</option>  <option value='Saudi Arabia' id='SA'>Saudi Arabia</option>  <option value='Senegal' id='SN'>Senegal</option>  <option value='Serbia and Montenegro' id='YU'>Serbia and Montenegro</option>  <option value='Seychelles' id='SC'>Seychelles</option>  <option value='Sierra Leone' id='SL'>Sierra Leone</option>  <option value='Singapore' id='SG'>Singapore</option>  <option value='Slovakia' id='SK'>Slovakia</option>  <option value='Slovenia' id='SI'>Slovenia</option>  <option value='Solomon Islands' id='SB'>Solomon Islands</option>  <option value='Somalia' id='SO'>Somalia</option>  <option value='South Africa' id='ZA'>South Africa</option>  <option value='South Georgia and the South Sandwich Islands' id='GS'>South Georgia and the South Sandwich Islands</option>  <option value='Spain' id='ES'>Spain</option>  <option value='Sri Lanka' id='LK'>Sri Lanka</option>  <option value='St. Helena' id='SH'>St. Helena</option>  <option value='St. Kitts and Nevis' id='KN'>St. Kitts and Nevis</option>  <option value='St. Lucia' id='LC'>St. Lucia</option>  <option value='St. Pierre and Miquelon' id='PM'>St. Pierre and Miquelon</option>  <option value='St. Vincent and the Grenadines' id='VC'>St. Vincent and the Grenadines</option>  <option value='Sudan' id='SD'>Sudan</option>  <option value='Suriname' id='SR'>Suriname</option>  <option value='Svalbard and Jan Mayen' id='SJ'>Svalbard and Jan Mayen</option>  <option value='Swaziland' id='SZ'>Swaziland</option>  <option value='Sweden' id='SE'>Sweden</option>  <option value='Switzerland' id='CH'>Switzerland</option>  <option value='Syria' id='SY'>Syria</option>  <option value='Taiwan' id='TW'>Taiwan</option>  <option value='Tajikistan' id='TJ'>Tajikistan</option>  <option value='Tanzania' id='TZ'>Tanzania</option>  <option value='Thailand' id='TH'>Thailand</option>  <option value='Togo' id='TG'>Togo</option>  <option value='Tokelau' id='TK'>Tokelau</option>  <option value='Tonga' id='TO'>Tonga</option>  <option value='Trinidad and Tobago' id='TT'>Trinidad and Tobago</option>  <option value='Tunisia' id='TN'>Tunisia</option>  <option value='Turkey' id='TR'>Turkey</option>  <option value='Turkmenistan' id='TM'>Turkmenistan</option>  <option value='Turks and Caicos Islands' id='TC'>Turks and Caicos Islands</option>  <option value='Tuvalu' id='TV'>Tuvalu</option>  <option value='Uganda' id='UG'>Uganda</option>  <option value='Ukraine' id='UA'>Ukraine</option>  <option value='United Arab Emirates' id='AE'>United Arab Emirates</option>  <option value='United Kingdom' id='UK'>United Kingdom</option>  <option value='United States' id='US'>United States</option>  <option value='United States Minor Outlying Islands' id='UM'>United States Minor Outlying Islands</option>  <option value='Uruguay' id='UY'>Uruguay</option>  <option value='Uzbekistan' id='UZ'>Uzbekistan</option>  <option value='Vanuatu' id='VU'>Vanuatu</option>  <option value='Vatican City' id='VA'>Vatican City</option>  <option value='Venezuela' id='VE'>Venezuela</option>  <option value='VietNam' id='VN'>VietNam</option>  <option value='Virgin Islands (British)' id='VG'>Virgin Islands (British)</option>  <option value='Virgin Islands' id='VI'>Virgin Islands</option>  <option value='Wallis and Futuna' id='WF'>Wallis and Futuna</option>  <option value='Yemen' id='YE'>Yemen</option>  <option value='Zambia' id='ZM'>Zambia</option>  <option value='Zimbabwe' id='ZW'>Zimbabwe</option></select><br>* Institute Name<br><input type='text' id='INS_NAME"+place+"' name='INS_NAME"+place+"' maxlength='255' style='width:160px;font-size:7pt;background-color:#F1F7DE'>";
	}
	else
		document.getElementById("sp_edu"+place).innerHTML="";
	return;
}

function createEduAll(myform,place)
{
//
//objt = eval("document.all.spnEdu")//+place)
var i_edu=5;
i_edu=parseInt(myform.count_edu.value);
//alert(i_edu);
if(i_edu < 10) {
	place=i_edu+1;
	//alert(place);
	data_edu="<table width='100%' border='0' cellpadding='3' cellspacing='0' style='border:0px; background-image:none;' align='default'><tr><td valign='top' width ='9%' ><input type='hidden' name='hidID"+place+"' id='hidID"+place+"' value='-1'/><select name='EDULEVEL"+place+"' id='EDULEVEL"+place+"' style='WIDTH:72px' class = 'text' onChange='return LoadDegree(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='1' >Secondary</option><option value='2' >Diploma</option><option value='3' >Higher Sec.</option><option value='4' >Bachelor(Pass)</option><option value='5' >Bachelor(Hons)</option><option value='6' >Masters</option><option value='7' >M Phil</option><option value='8' >Doctoral</option><option value='9' >Other</option></select></td><td valign='top' style='height:30px;' width='11%'><div id='spnDegree"+place+"'><select id='EDUCATION"+place+"' name='EDUCATION"+place+"' style='width:80px;' class='text' onchange= 'entryOthers(this,"+place+");'><option value='S' selected='selected'>Select</option></select><label style='color:#FF0000;'>*</label></div><div id='sp_deg"+place+"'></div></td><td valign='top' style='height:30px;' width='7%'><select id='FYEAR"+place+"' name='FYEAR"+place+"' style='WIDTH:50px' class='text'><option value='S' selected='selected'>year</option>"

	current_year = new Date().getFullYear();
	current_year +=3;
	origin_year = current_year-50;
	for(i = parseInt(current_year) ; i >= origin_year ; i--)
	{
		data_edu  += "<option value='"+i+"'>"+i+"</option>";
	}    
	    data_edu +="</select></td><td valign='top' style='height:30px;' width = '18%' ><select id='INSTITUTE"+place+"' name='INSTITUTE"+place+"' style='WIDTH:110px' onChange='return createEdu(this,"+place+");' class='text'><option value='S' selected='selected'>Select</option><option value='Dhaka Board'>Dhaka Board</option><option value='Jessore Board'>Jessore Board</option><option value='Chittagong Board'>Chittagong Board</option><option value='Rajshahi Board'>Rajshahi Board</option><option value='Comilla Board'>Comilla Board</option><option value='Barishal Board'>Barishal Board</option><option value='Sylhet Board'>Sylhet Board</option><option value='Technical Board'>Technical Board</option><option value='Madrasah Board'>Madrasah Board</option><option value='Ahsanullah University of Science and Technology'>Ahsanullah University of Science and Technology</option><option value='America Bangladesh University'>America Bangladesh University</option><option value='American International University Bangladesh'>American International University Bangladesh</option>    <option value='ASA University Bangladesh'>ASA University Bangladesh</option><option value='Asian University for Women'>Asian University for Women</option><option value='Asian University of Bangladesh'>Asian University of Bangladesh</option><option value='Atish Dipankar University of Science and Technology'>Atish Dipankar University of Science and Technology</option><option value='Bangabandhu Sheikh Mujib Medical University'>Bangabandhu Sheikh Mujib Medical University</option><option value='Bangabandhu Sheikh Mujibur Rahman Agricultural University'>Bangabandhu Sheikh Mujibur Rahman Agricultural University</option><option value='Bangladesh Agricultural University, Mymensingh'>Bangladesh Agricultural University, Mymensingh</option><option value='Bangladesh Islami University'>Bangladesh Islami University</option><option value='Bangladesh Open University'>Bangladesh Open University</option><option value='Bangladesh University'>Bangladesh University</option><option value='Bangladesh University of Business and Technology'>Bangladesh University of Business and Technology</option><option value='Bangladesh University of Engineering and Technology'>Bangladesh University of Engineering and Technology</option><option value='Bangladesh University of Professionals'>Bangladesh University of Professionals</option><option value='Bangladesh University of Textiles'>Bangladesh University of Textiles</option><option value='Begum Gulchemonara Trust University'>Begum Gulchemonara Trust University</option><option value='BGC Trust University Bangladesh, Chittagong'>BGC Trust University Bangladesh, Chittagong</option><option value='BRAC University'>BRAC University</option><option value='Central Women`s University'>Central Women`s University</option><option value='Chittagong University of Engineering and Technology'>Chittagong University of Engineering and Technology</option><option value='Chittagong Veterinary and Animal Sciences University'>Chittagong Veterinary and Animal Sciences University</option>    <option value='City University'>City University</option><option value='Comilla University'>Comilla University</option><option value='Daffodil International University'>Daffodil International University</option><option value='Darul Ihsan University'>Darul Ihsan University</option><option value='Dhaka International University'>Dhaka International University</option><option value='Dhaka University'>Dhaka University</option><option value='Dhaka University of Engineering & Technology'>Dhaka University of Engineering & Technology</option><option value='East Delta University, Chittagong'>East Delta University, Chittagong</option><option value='East West University'>East West University</option><option value='Eastern University'>Eastern University</option><option value='Gono Bishwabidyalay'>Gono Bishwabidyalay</option><option value='Green University of Bangladesh'>Green University of Bangladesh</option><option value='Hajee Mohammad Danesh Science & Technology University'>Hajee Mohammad Danesh Science & Technology University</option><option value='IBA, Dhaka University'>IBA, Dhaka University</option><option value='IBA, Rajshahi University'>IBA, Rajshahi University</option><option value='IBAIS University'>IBAIS University</option><option value='Independent University, Bangladesh'>Independent University, Bangladesh</option><option value='International Islamic University, Chittagong'>International Islamic University, Chittagong</option><option value='International University of Business Agriculture and Technology'>International University of Business Agriculture and Technology</option><option value='Islamic University'>Islamic University</option><option value='Islamic University of Technology'>Islamic University of Technology</option><option value='Jagannath University'>Jagannath University</option><option value='Jahangirnagar University'>Jahangirnagar University</option><option value='Jatiya Kabi Kazi Nazrul Islam University'>Jatiya Kabi Kazi Nazrul Islam University</option><option value='Jessore Science & Technology University'>Jessore Science & Technology University</option><option value='Khulna University'>Khulna University</option><option value='Khulna University of Engineering and Technology'>Khulna University of Engineering and Technology</option><option value='Leading University'>Leading University</option><option value='Manarat International University'>Manarat International University</option><option value='Mawlana Bhasani Science and Technology University'>Mawlana Bhasani Science and Technology University</option><option value='Metropolitan University, Sylhet'>Metropolitan University, Sylhet</option><option value='Military Institute of Science & Technology'>Military Institute of Science & Technology</option><option value='National University' >Nationa University</option><option value='Noakhali Science & Technology University'>Noakhali Science & Technology University</option>option value='North South University'>North South University</option><option value='Northern University Bangladesh'>Northern University Bangladesh</option><option value='Pabna University of Science and Technology'>Pabna University of Science and Technology</option><option value='Patuakhali Science and Technology University'>Patuakhali Science and Technology University</option><option value='Premier University, Chittagong'>Premier University, Chittagong</option><option value='Presidency University'>Presidency University</option><option value='Prime University'>Prime University</option><option value='Primeasia University'>Primeasia University</option><option value='Pundra University of Science and Technology'>Pundra University of Science and Technology</option><option value='Queens University'>Queens University</option><option value='Rajshahi University'>Rajshahi University</option><option value='Rajshahi University of Engineering and Technology'>Rajshahi University of Engineering and Technology</option><option value='Rangpur University'>Rangpur University</option><option value='Royal University of Dhaka'>Royal University of Dhaka</option><option value='Shahjalal University of Science & Technology'>Shahjalal University of Science & Technology</option><option value='Shanto Mariam University of Creative Technology'>Shanto Mariam University of Creative Technology</option><option value='Sher-e-Bangla Agricultural University'>Sher-e-Bangla Agricultural University</option><option value='South Asian University'>South Asian University</option><option value='Southeast University'>Southeast University</option><option value='Southern University of Bangladesh, Chittagong'>Southern University of Bangladesh, Chittagong</option><option value='Stamford University Bangladesh'>Stamford University Bangladesh</option><option value='State University of Bangladesh'>State University of Bangladesh</option><option value='Sylhet Agricultural University'>Sylhet Agricultural University</option><option value='Sylhet International University, Sylhet'>Sylhet International University, Sylhet</option><option value='The Millenium University'>The Millenium University</option><option value='The Peoples University of Bangladesh'>The Peoples University of Bangladesh</option><option value='The University of Asia Pacific'>The University of Asia Pacific</option><option value='United International University'>United International University</option><option value='University of Chittagong'>University of Chittagong</option><option value='University of Development Alternative'>University of Development Alternative</option><option value='University of Information Technology & Science'>University of Information Technology & Science</option><option value='University of Liberal Arts Bangladesh'>University of Liberal Arts Bangladesh</option><option value='University of Science and Technology, Chittagong'>University of Science and Technology, Chittagong</option><option value='University of South Asia'>University of South Asia</option><option value='Uttara University'>Uttara University</option><option value='Victoria University of Bangladesh'>Victoria University of Bangladesh</option><option value='World University of Bangladesh'>World University of Bangladesh</option> <option value='O'>Others</option><option value='F'>Foreign Institute</option></select></td><td valign='top' style='height:30px;' width='8%'><select id='RESULT"+place+"' onChange='return createGrd(this,"+place+");' name='RESULT"+place+"' style='WIDTH:55px' class='text'><option value='S' selected='selected'>Select</option><option value='10'>OnGoing</option><option value='12'>Appeared</option><option value='15'>First</option><option value='14'>Second</option><option value='13'>Third</option><option value='0'>Grade</option></select></td><td valign='top' style='height:30px;' width='25%'><select style='WIDTH:165px' onChange='return createMaj(this,"+place+");' id='SUBJECT"+place+"' name='SUBJECT"+place+"' class='text'><option value='S' selected='selected'>Select</option><option value='Accountancy'>Accountancy</option><option value='Accounting'>Accounting</option><option value='Accounting &amp; Finance'>Accounting &amp; Finance</option><option value='Accounts &amp; Economics'>Accounts &amp; Economics</option><option value='Actuarial Mathematics'>Actuarial Mathematics</option><option value='Actuarial Science'>Actuarial Science</option><option value='Additional Mathematics/Further'>Additional Mathematics/Further</option><option value='Advertising'>Advertising</option><option value='Aeronautical Engineering'>Aeronautical Engineering</option><option value='Analysis &amp; Forex Trading'>Analysis &amp; Forex Trading</option><option value='Applied Chemistry'>Applied Chemistry</option><option value='Applied Genetics'>Applied Genetics</option><option value='Applied Mathematics'>Applied Mathematics</option><option value='Archaeology'>Archaeology</option><option value='Architectural Studies'>Architectural Studies</option><option value='Architecture'>Architecture</option><option value='Art'>Art</option><option value='Art History'>Art History</option><option value='Artificial Intelligence &amp; Software'>Artificial Intelligence &amp; Software</option><option value='Auditing'>Auditing</option><option value='Banking'>Banking</option><option value='Banking Law'>Banking Law</option><option value='Banking Practices'>Banking Practices</option><option value='Banking and Finance'>Banking and Finance</option><option value='Biochemistry'>Biochemistry</option><option value='Biology'>Biology</option><option value='Biotechnology'>Biotechnology</option><option value='Bookkeeping'>Bookkeeping</option><option value='Buddhist Studies (Syl 1)'>Buddhist Studies (Syl 1)</option><option value='Building Services Engineering'>Building Services Engineering</option><option value='Business Accounts'>Business Accounts</option><option value='Business Administration'>Business Administration</option><option value='Business Correspondence / Repo'>Business Correspondence / Repo</option><option value='Business Eco &amp; Busi Info Sys'>Business Eco &amp; Busi Info Sys</option><option value='Business Information Systems'>Business Information Systems</option><option value='Business Law'>Business Law</option><option value='Business Management Systems'>Business Management Systems</option><option value='Business Strategy'>Business Strategy</option><option value='Business Studies'>Business Studies</option><option value='Business Studies &amp; Economics'>Business Studies &amp; Economics</option><option value='Chemical Sciences'>Chemical Sciences</option><option value='Chemical Technical/Engineering'>Chemical Technical/Engineering</option><option value='Chemistry'>Chemistry</option><option value='Chinese'>Chinese</option><option value='Chinese History'>Chinese History</option><option value='Chinese Language'>Chinese Language</option><option value='Chinese Language &amp; Culture'>Chinese Language &amp; Culture</option><option value='Chinese Language &amp; Literature'>Chinese Language &amp; Literature</option><option value='Chinese Literature'>Chinese Literature</option><option value='Civil &amp; Structural Engineering'>Civil &amp; Structural Engineering</option><option value='Civil Engineering'>Civil Engineering</option><option value='Classics &amp; German'>Classics &amp; German</option><option value='Classics &amp; Philosophy'>Classics &amp; Philosophy</option><option value='Commerce'>Commerce</option><option value='Commercial Studies and Admin'>Commercial Studies and Admin</option><option value='Commerical Studies'>Commerical Studies</option><option value='Communication'>Communication</option><option value='Communication, Advertising &amp; Media'>Communication, Advertising &amp; Media</option><option value='Company Secretaryship &amp; Admin'>Company Secretaryship &amp; Admin</option><option value='Comparative Law'>Comparative Law</option><option value='Computer Applications'>Computer Applications</option><option value='Computer Engineering'>Computer Engineering</option><option value='Computer Operation'>Computer Operation</option><option value='Computer Programming'>Computer Programming</option><option value='Computer Science'>Computer Science</option><option value='Computer Simulation Studies'>Computer Simulation Studies</option><option value='Computer Studies'>Computer Studies</option><option value='Computer Systems'>Computer Systems</option><option value='Computers &amp; Statistics'>Computers &amp; Statistics</option><option value='Computing &amp; Information System'>Computing &amp; Information System</option><option value='Corporate Finance'>Corporate Finance</option><option value='Cost Accounting'>Cost Accounting</option><option value='Credit Management / Loan Admin'>Credit Management / Loan Admin</option><option value='Criminology'>Criminology</option><option value='Data Processing'>Data Processing</option><option value='Database'>Database</option><option value='Design'>Design</option><option value='Design &amp; Technology'>Design &amp; Technology</option><option value='Economic History'>Economic History</option><option value='Economics'>Economics</option><option value='Economics &amp; Business Finance'>Economics &amp; Business Finance</option><option value='Economics &amp; Finance'>Economics &amp; Finance</option><option value='Economics &amp; Politics'>Economics &amp; Politics</option><option value='Economics &amp; Public Affairs'>Economics &amp; Public Affairs</option><option value='Economics &amp; Social History'>Economics &amp; Social History</option><option value='Education'>Education</option><option value='Electrical &amp; Electronic Engrg'>Electrical &amp; Electronic Engrg</option><option value='Electrical Engineering'>Electrical Engineering</option><option value='Electronic Engineering'>Electronic Engineering</option><option value='Electronics'>Electronics</option><option value='Electronics &amp; Electricity'>Electronics &amp; Electricity</option><option value='Electronics Telecoms Computing'>Electronics Telecoms Computing</option><option value='Engineering'>Engineering</option><option value='Engineering Science'>Engineering Science</option><option value='English'>English</option><option value='English &amp; American Studies'>English &amp; American Studies</option><option value='English Drama &amp; Med Studs'>English Drama &amp; Med Studs</option><option value='English For Commerce'>English For Commerce</option><option value='English History'>English History</option><option value='English Language (Syl A)'>English Language (Syl A)</option><option value='English Language (Syl B)'>English Language (Syl B)</option><option value='English Literature / Language'>English Literature / Language</option><option value='English Studies &amp; Comparative'>English Studies &amp; Comparative</option><option value='Environmental Design'>Environmental Design</option><option value='Environmental Planning'>Environmental Planning</option><option value='Equality Studies'>Equality Studies</option><option value='Estate Management'>Estate Management</option><option value='European Administration'>European Administration</option><option value='European Business Admin'>European Business Admin</option><option value='European Business Studies'>European Business Studies</option><option value='European Languages &amp; Business'>European Languages &amp; Business</option><option value='European Law'>European Law</option><option value='European Studies'>European Studies</option><option value='Executive Secretarial Studies'>Executive Secretarial Studies</option><option value='Finance'>Finance</option><option value='Financial Decision Analysis'>Financial Decision Analysis</option><option value='Financial Economics'>Financial Economics</option><option value='Financial Law'>Financial Law</option><option value='Financial Services'>Financial Services</option><option value='Fine Arts'>Fine Arts</option><option value='Food &amp; Beverage Service'>Food &amp; Beverage Service</option><option value='French'>French</option><option value='French &amp; Business Studies'>French &amp; Business Studies</option><option value='French &amp; Spanish'>French &amp; Spanish</option><option value='General Business Management'>General Business Management</option><option value='General Science'>General Science</option><option value='General Studies'>General Studies</option><option value='Genetics'>Genetics</option><option value='Geography'>Geography</option><option value='Geography &amp; Geology'>Geography &amp; Geology</option><option value='Geography &amp; Organisation Studs'>Geography &amp; Organisation Studs</option><option value='Geology'>Geology</option><option value='German'>German</option><option value='Government &amp; Public Affairs'>Government &amp; Public Affairs</option><option value='Graphic Design'>Graphic Design</option><option value='Higher Mathematics'>Higher Mathematics</option><option value='History'>History</option><option value='History &amp; Archaeology'>History &amp; Archaeology</option><option value='Home Economics'>Home Economics</option><option value='Hospitality Management / Hotel'>Hospitality Management / Hotel</option><option value='Human Biology'>Human Biology</option><option value='Human Resources'>Human Resources</option><option value='Humanity'>Humanity</option><option value='Import/Export Studies'>Import/Export Studies</option><option value='Industrial Engineering'>Industrial Engineering</option><option value='Industrial Management'>Industrial Management</option><option value='Industrial Relations'>Industrial Relations</option><option value='Information Engineering'>Information Engineering</option><option value='Information Systems'>Information Systems</option><option value='Information Technology'>Information Technology</option><option value='Insurance'>Insurance</option><option value='Interior Design'>Interior Design</option><option value='International Business'>International Business</option><option value='International Economics'>International Economics</option><option value='International Management'>International Management</option><option value='International Relations'>International Relations</option><option value='International Studies'>International Studies</option><option value='International Trade'>International Trade</option><option value='Investment'>Investment</option><option value='Investment Management'>Investment Management</option><option value='Japanese'>Japanese</option><option value='Journalism'>Journalism</option><option value='Journalism &amp; Communication'>Journalism &amp; Communication</option><option value='Language &amp; Communication'>Language &amp; Communication</option><option value='Latin'>Latin</option><option value='Law'>Law</option><option value='Legal Executive Studies'>Legal Executive Studies</option><option value='Liberal Studies'>Liberal Studies</option><option value='Linguistics/Politics'>Linguistics/Politics</option><option value='Management &amp; Business Admin'>Management &amp; Business Admin</option><option value='Management Accountancy'>Management Accountancy</option><option value='Management Information System'>Management Information System</option><option value='Management Information Systems'>Management Information Systems</option><option value='Management Studies/Science'>Management Studies/Science</option><option value='Mandarin'>Mandarin</option><option value='Marketing &amp; Finance'>Marketing &amp; Finance</option><option value='Marketing &amp; International Busi'>Marketing &amp; International Busi</option><option value='Marketing Management'>Marketing Management</option><option value='Marketing/Sales'>Marketing/Sales</option><option value='Mathematical Bus Analysis'>Mathematical Bus Analysis</option><option value='Mathematics &amp; Management'>Mathematics &amp; Management</option><option value='Mathematics for Decision Making'>Mathematics for Decision Making</option><option value='Mathematics, Statistics &amp; Compu'>Mathematics, Statistics &amp; Compu</option><option value='Mathematics/Arithmetic'>Mathematics/Arithmetic</option><option value='Maths &amp; Computing'>Maths &amp; Computing</option><option value='Mechanical Engineering'>Mechanical Engineering</option><option value='Metalwork'>Metalwork</option><option value='Modern Langauges'>Modern Langauges</option><option value='Music / Theory Of Music'>Music / Theory Of Music</option><option value='Natural Sciences'>Natural Sciences</option><option value='New Technology'>New Technology</option><option value='Office Studies/Management'>Office Studies/Management</option><option value='Operational Research'>Operational Research</option><option value='Organizational Analysis &amp; Behav'>Organizational Analysis &amp; Behav</option><option value='Personnel Management'>Personnel Management</option><option value='Pharmacology'>Pharmacology</option><option value='Philosophy'>Philosophy</option><option value='Philosophy Politics Economics'>Philosophy Politics Economics</option><option value='Phys Recreation &amp; Geography'>Phys Recreation &amp; Geography</option><option value='Physics'>Physics</option><option value='Political Economy'>Political Economy</option><option value='Political Science'>Political Science</option><option value='Politics &amp; History'>Politics &amp; History</option><option value='Principles Of Accounts'>Principles Of Accounts</option><option value='Private Secretaries'>Private Secretaries</option><option value='Production &amp; Industrial Engrg'>Production &amp; Industrial Engrg</option><option value='Project Management'>Project Management</option><option value='Property Management'>Property Management</option><option value='Psychology'>Psychology</option><option value='Public Administration'>Public Administration</option><option value='Public Relations'>Public Relations</option><option value='Pure Mathematics'>Pure Mathematics</option><option value='Quantitative Analysis'>Quantitative Analysis</option><option value='Quantitative Economics'>Quantitative Economics</option><option value='Religion/Religious Studies/B.K'>Religion/Religious Studies/B.K</option><option value='Russian &amp; French'>Russian &amp; French</option><option value='Safety Management'>Safety Management</option><option value='Science'>Science</option><option value='Secretarial Studies'>Secretarial Studies</option><option value='Securities Investment'>Securities Investment</option><option value='Shorthand'>Shorthand</option><option value='Social Anthropology'>Social Anthropology</option><option value='Social Science'>Social Science</option><option value='Social Work'>Social Work</option><option value='Sociology'>Sociology</option><option value='Software Engineering'>Software Engineering</option><option value='Spanish'>Spanish</option><option value='Statistics'>Statistics</option><option value='Strategic Marketing &amp; Busi Mgmnt'>Strategic Marketing &amp; Busi Mgmnt</option><option value='Structural Engineering'>Structural Engineering</option><option value='Supervisory Management'>Supervisory Management</option><option value='System Analysis'>System Analysis</option><option value='Taxation'>Taxation</option><option value='Teaching'>Teaching</option><option value='Technical Drawing'>Technical Drawing</option><option value='Telecommunication'>Telecommunication</option><option value='Textile Technology'>Textile Technology</option><option value='Training Management'>Training Management</option><option value='Translation'>Translation</option><option value='Transport'>Transport</option><option value='Typewriting'>Typewriting</option><option value='Unknown'>Unknown</option><option value='Word Processing'>Word Processing</option><option value='Others'>Others</option></select></td><td valign='top' style='height:30px;' width='12%'><input name='AWARD"+place+"' type='text' class='text' id='AWARD"+place+"' style='width:80px;' size='10' /></td>  </tr>  <tr><td valign='top'></td><td valign='top'></td><td valign='top'></td><td valign='top'></td><td valign='top' id='sp_edu"+place+"'></td><td valign='top' id='sp_grd"+place+"'></td><td valign='top' id='sp_maj"+place+"'></td><td valign='top' id='sp_maj"+place+"'></td>  </tr></table>"

/*alert('Opening new window....');
xy=window.open();
xy.document.write(data_edu);
*/

} // if
if (document.layers) {
document.layers.cust_edu1.document.write(data_edu);
document.layers.cust_edu1.document.close();
myform.count_edu.value = ++i;
}
else {
if (document.all || document.getElementById) {
//alert(i_edu);
document.getElementById("remove_edu").disabled = false;
i_edu_f=i_edu+1;
switch (i_edu_f)
{
	/*case 1:cust_edu1.innerHTML = data_edu;
	break;
	case 2:cust_edu2.innerHTML = data_edu;
	break;
	
	case 3:cust_edu3.innerHTML = data_edu;
	break;
	*/
	
	case 4:document.getElementById('cust_edu4').innerHTML = data_edu;
	break;
	case 5:document.getElementById('cust_edu5').innerHTML = data_edu;
	break;
	case 6:document.getElementById('cust_edu6').innerHTML = data_edu;
	break;
	case 7:document.getElementById('cust_edu7').innerHTML = data_edu;
	break;
	case 8:document.getElementById('cust_edu8').innerHTML = data_edu;
	break;
	case 9:document.getElementById('cust_edu9').innerHTML = data_edu;
	break;
	case 10:document.getElementById('cust_edu10').innerHTML = data_edu;
	break;
	default:alert('Sorry! But no more can be added.');;
	myform.count_edu.value = --i_edu;
	break;
	}
	myform.count_edu.value = ++i_edu;
 	}//if
	}//else
	//alert("Edu Seed Now "+myform.count_edu.value);
}// function
/**********************  FOR GRADE FIELD  *********************/

function createGrd(myobj,place)
{
//popup(myobj.value);
//popup(place);

	obj_name = "sp_grd"+place;

	if(myobj.value == "0")
	{
		document.getElementById("sp_grd"+place).innerHTML="<font face='Arial Narrow' color='#FF0000' size='1'>* Please mention (Grade and CGPA)</font><br><select id='GRADE"+place+"' name='GRADE"+place+"' style='width:40px;font-size:7pt;background-color:#F1F7DE'><option value=A+>A+</option><option value=A>A</option><option value=A->A-</option><option value=B+>B+</option><option value=B>B</option><option value=B->B-</option><option value=C+>C+</option><option value=C>C</option><option value=C->C-</option><option value=D+>D+</option><option value=D>D</option><option value=D->D-</option></select><input type='text' name='PERCENT"+place+"' id='PERCENT"+place+"' value='' size='5' maxlength='4' style='width:20px;font-size:7pt;background-color:#F1F7DE' onKeyPress='return resultPoint(this, event)'>";
	}
	else if(myobj.value == "S")
	{
		document.getElementById("sp_grd"+place).innerHTML="";
	}
	else if(myobj.value == "10" || myobj.value == "12")
	{
		document.getElementById("sp_grd"+place).innerHTML="<font face='Arial' color='#FF0000' size='1'>* Mention result <select id='OnGoing"+place+"' name ='OnGoing"+place+"' class='text'><option value='S' selected = 'selected'>Select</option><option value='15'>First Class</option><option value='14'>Second Class</option><option value='13'>Third Class</option><option value='2.5'>GPA 2.5-2.75</option><option value='2.76'>GPA 2.76-3.0</option><option value='3.01'>GPA 3.01-3.25</option><option value='3.26'>GPA 3.26-3.5</option><option value='3.56'>GPA 3.56-3.75</option><option value='3.76'>GPA 3.76-4.0</option>";
	     //	var futureYear = new Date.getFullYear();
		//var futureYear1 = parseInt(futureYear) + 1 ;
		//document.getElementById('FYEAR'+place).options[0].selected = true;
	}	
	else if(myobj.value != "0" && myobj.value != "12")
	{
		document.getElementById("sp_grd"+place).innerHTML="<font face='Arial' color='#FF0000' size='1'>* Mention % of marks</font><br><input type='text' name='PERCENT"+place+"' id='PERCENT"+place+"' value='' maxlength='5' size='5' style='width:50px;font-size:7pt;background-color:#F1F7DE' onKeyPress='return resultPoint(this, event)'>";
	}
	else
	{
		document.getElementById("sp_grd"+place).innerHTML="";
	}
	return;
}


function createMaj(myMaj,place)
{
//popup(myMaj.value);

	obj_name = "sp_maj"+place;
//for others
	if(myMaj.value == "Others")
	{
		/*eval(obj_name).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Please mention<br><select name='FOREIGN"+place+"'><option value=USA>USA</option><option value=UK>UK</option></select>";*/
		//popup()
		document.getElementById("sp_maj"+place).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Major area</font><br><input type='text' name='MAJOR"+place+"' id='MAJOR"+place+"' style='width:150px;font-size:7pt;background-color:#F1F7DE '>"
	}	
	else
		document.getElementById("sp_maj"+place).innerHTML="";
	return;
}


/**********************  FOR EXPERIENCE FIELD  *********************/
/*******************************************************************/

function createForm_exp(myform)
{
	data_exp = "";    
	inter = "'";
	var i_exp=1;
	i_exp=parseInt(myform.count_exp.value);
	//popup('Exp: '+i_exp);
	if(i_exp < 10)
	{
		data_exp="<table width='100%' border='0' style='border:0px;'>  <tr><td colspan='4' bgcolor='#D5EAFF' align='left'><input type='hidden' name='hidID"+(i_exp+1)+"' id='hidID"+(i_exp+1)+"' value='-1'/><strong>Work Experience "+(i_exp+1)+"</strong></td>  </tr>  <tr><td align='left'>Organization Name</td><td align='left'><input class='text' type='text' name='COMPANY"+(i_exp+1)+"' id='COMPANY"+(i_exp+1)+"' style='width:150px;' /></td><td align='left'>Type of Employment</td><td align='left'><select name='EXP_TYPE"+(i_exp+1)+"' id='EXP_TYPE"+(i_exp+1)+"' style='WIDTH:152px'><option value='S' selected='selected'>Select</option><option value='P'>Part Time</option><option value='F'>Permanent</option><option value='C'>Contractual</option></select></td>  </tr>  <tr><td align='left'>Organization Type</td><td align='left'><select name='EXP_AREA"+(i_exp+1)+"' id='EXP_AREA"+(i_exp+1)+"' style='WIDTH:152px'><option value='S' selected='selected'>Select</option><option value='B'>Bank</option><option value='F'>Financial Inst.</option><option value='M'>MNC</option><option value='C'>FMCG</option><option value='E'>Education</option><option value='G'>Govt.</option><option value='O'>Others</option></select></td><td align='left'>Position Held</td><td align='left'><input class='text' type='text' name='EXP_POST"+(i_exp+1)+"' id='EXP_POST"+(i_exp+1)+"' style='width:150px;' /></td>  </tr>  <tr><td align='left'>Department</td><td align='left'><input class='text' type='text' name='DEPT"+(i_exp+1)+"' id='DEPT"+(i_exp+1)+"' style='width:150px;' /></td><td align='left'>Unit</td><td align='left'><input class='text' type='text' name='UNIT"+(i_exp+1)+"' id='UNIT"+(i_exp+1)+"' style='width:150px;' /></td>  </tr>  <tr><td align='left'>Major responsibilities</td><td align='left'><textarea class='textarea' name='DUTY"+(i_exp+1)+"' cols='20' rows='2' id='DUTY"+(i_exp+1)+"' style='width:150px;'></textarea></td><td align='left'>Organization Address</td><td align='left'><textarea class='textarea' name='CLOCATION"+(i_exp+1)+"' cols='20' rows='2' id='CLOCATION"+(i_exp+1)+"' style='width:150px;'></textarea></td>  </tr>  <tr><td align='left'>Job Location</td><td align='left'><input class='text' type='text' name='JOB_LOC"+(i_exp+1)+"' id='JOB_LOC"+(i_exp+1)+"' style='width:150px;' /></td><td align='left'>Key Achievement</td><td align='left'><textarea class='textarea' name='ACHIEVE"+(i_exp+1)+"' cols='20' rows='2' id='ACHIEVE"+(i_exp+1)+"' style='width:150px;'></textarea></td>  </tr>  <tr><td align='left'>Name of Supervisor</td><td align='left'><input class='text' type='text' name='SUPER_NAME"+(i_exp+1)+"' id='SUPER_NAME"+(i_exp+1)+"' style='width:150px;' /></td><td align='left'>Supervisor's Contact Number</td><td align='left'><input class='text' type='text' name='SUPER_PHONE"+(i_exp+1)+"' id='SUPER_PHONE"+(i_exp+1)+"' style='width:150px;' /></td>  </tr>  <tr><td align='left'>Supervisor's Email</td><td align='left'><input class='text' type='text' name='SUPER_EMAIL"+(i_exp+1)+"' id='SUPER_EMAIL"+(i_exp+1)+"' style='width:150px;' /></td><td align='left'>Any reservation contacting your empmoyer</td><td align='left'><select name='RESERVATION"+(i_exp+1)+"' id='RESERVATION"+(i_exp+1)+"' style='WIDTH:152px'><option value='S' selected='selected'>Select</option><option value='Y'>Yes</option><option value='N'>No</option></select></td>  </tr>  <tr><td align='left'>Served From</td><td align='left'><select name='EFROM_D"+(i_exp+1)+"' id='EFROM_D"+(i_exp+1)+"' style='WIDTH:43px'><option value='S' selected='selected'>day</option><option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option><option value='10' >10</option><option value='11' >11</option><option value='12' >12</option><option value='13' >13</option><option value='14' >14</option><option value='15' >15</option><option value='16' >16</option><option value='17' >17</option><option value='18' >18</option><option value='19' >19</option><option value='20' >20</option><option value='21' >21</option><option value='22' >22</option><option value='23' >23</option><option value='24' >24</option><option value='25' >25</option><option value='26' >26</option><option value='27' >27</option><option value='28' >28</option><option value='29' >29</option><option value='30' >30</option><option value='31' >31</option></select>&nbsp;<select name='EFROM_M"+(i_exp+1)+"' id='EFROM_M"+(i_exp+1)+"' style='WIDTH:45px'>  <option value='S' selected='selected'>mon</option>  <option value='01' >Jan</option>  <option value='02' >Feb</option>  <option value='03' >Mar</option>  <option value='04' >Apr</option>  <option value='05' >May</option>  <option value='06' >Jun</option>  <option value='07' >Jul</option>  <option value='08' >Aug</option>  <option value='09' >Sep</option>  <option value='10' >Oct</option>  <option value='11' >Nov</option>  <option value='12' >Dec</option></select><select id='EFROM_Y"+(i_exp+1)+"' name='EFROM_Y"+(i_exp+1)+"' style='width:47px'>  <option value='S' selected='selected'>year</option>"

	current_year = new Date().getFullYear();
		origin_year = current_year-50;
		for(i = parseInt(current_year) ; i >= origin_year ; i--)
		{
			//document.write(i + '<br>');
			data_exp  += "<option value='"+i+"'>"+i+"</option>";
		}

		data_exp +="</select><label style='color:#FF0000;'></label></td><td align='left'><label style='color:#FF0000;'></label>Served Till  <label style='color:#FF0000;'></label></td><td align='left'><select name='ETO_D"+(i_exp+1)+"' id='ETO_D"+(i_exp+1)+"' style='WIDTH:43px'><option value='S' selected='selected'>day</option><option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option><option value='10' >10</option><option value='11' >11</option><option value='12' >12</option><option value='13' >13</option><option value='14' >14</option><option value='15' >15</option><option value='16' >16</option><option value='17' >17</option><option value='18' >18</option><option value='19' >19</option><option value='20' >20</option><option value='21' >21</option><option value='22' >22</option><option value='23' >23</option><option value='24' >24</option><option value='25' >25</option><option value='26' >26</option><option value='27' >27</option><option value='28' >28</option><option value='29' >29</option><option value='30' >30</option><option value='31' >31</option></select>&nbsp;<select name='ETO_M"+(i_exp+1)+"' id='ETO_M"+(i_exp+1)+"' style='WIDTH:45px'>  <option value='S' selected='selected'>mon</option>  <option value='01' >Jan</option>  <option value='02' >Feb</option>  <option value='03' >Mar</option>  <option value='04' >Apr</option>  <option value='05' >May</option>  <option value='06' >Jun</option>  <option value='07' >Jul</option>  <option value='08' >Aug</option>  <option value='09' >Sep</option>  <option value='10' >Oct</option>  <option value='11' >Nov</option>  <option value='12' >Dec</option></select><select id='ETO_Y"+(i_exp+1)+"' name='ETO_Y"+(i_exp+1)+"' style='WIDTH:47px'>  <option value='S' selected='selected'>year</option>"

	current_year = new Date().getFullYear();
		origin_year = current_year-50;
		for(i = parseInt(current_year) ; i >= origin_year ; i--)
		{
			//document.write(i + '<br>');
			data_exp  += "<option value='"+i+"'>"+i+"</option>";
		}
		mm = new Date().getMonth();																																								
		dd = new Date().getDate();
		yy = new Date().getFullYear();
		fDt = (mm + 1) + '/' + dd + '/' + yy
	
		data_exp +="</select><input type='checkbox' name='CURRENT"+(i_exp+1)+"' id='CURRENT"+(i_exp+1)+"'  onclick='DisbleServeTill("+(i_exp+1)+")'  style='border:0px; vertical-align:middle'/>Till now</td>  </tr>  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>  </tr></table>"
		
		data_exp_old="<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td colspan='4' height='20'>&nbsp;</td></tr><tr><td colspan='4' height='23'><b><u>Work Experience "+(i_exp+1)+"</u></b></td> </tr> <tr> <td width='18%'>Employer</td> <td width='35%'><input class='text' id='COMPANY"+(i_exp+1)+"' name='COMPANY"+(i_exp+1)+"' maxlength='200' /></td> <td width='14%'>Position Held</td> <td width='33%'><input class='text' name='EPOSITION"+(i_exp+1)+"' size='22' maxlength='150' id='EPOSITION"+(i_exp+1)+"' /></td> </tr> <tr> <td width='18%'>Industry</td> <td width='35%'> <select id='BUSINESS"+(i_exp+1)+"' name='BUSINESS"+(i_exp+1)+"' style='FONT-SIZE:7pt;WIDTH:100px'> <option value='no' selected='selected'>Select </option> <option value='Oil &amp; Gas'>Oil & Gas </option> <option value='Energy/Power Development'>Energy/Power Development </option> <option value='Insurance/Banking'>Insurance/Banking </option> <option value='Telecommunication'>Telecommunication </option> <option value='Airlines'>Airlines </option> <option value='Defense'>Defense </option> <option value='Construction/Cement'>Construction/Cement </option> <option value='Real Estate'>Real Estate </option> <option value='NGO'>NGO </option> <option value='United Nations'>United Nations </option> <option value='Information Technology'>Information Technology </option> <option value='Shipping'>Shipping </option> <option value='Logistics'>Logistics </option> <option value='Distribution'>Distribution </option> <option value='Media'>Media </option> <option value='Press'>Press </option> <option value='Automobile'>Automobile </option> <option value='Entertainment'>Entertainment </option> <option value='Travel/Tourism'>Travel/Tourism </option> <option value='Healthcare'>Healthcare </option> <option value='Law Enforcement'>Law Enforcement </option> <option value='Legal Advisory'>Legal Advisory </option> <option value='Pharmaceutical'>Pharmaceutical </option> <option value='Garments/Textile'>Garments/Textile </option> <option value='FMCG'>FMCG </option> <option value='Research/Consultancy'>Research/Consultancy </option> <option value='International Trade'>International Trade </option> <option value='Agriculture'>Agriculture </option> <option value='Fertilizer'>Fertilizer </option> <option value='Chemical/Pesticides'>Chemical/Pesticides </option> <option value='Service'>Service </option> <option value='Others'>Others</option> </select> </td> <td width='14%'>Department</td> <td width='33%'><input class='text' name='DEPT"+(i_exp+1)+"' size='22' maxlength='150' id='DEPT"+(i_exp+1)+"' /></td> </tr> <tr> <td width='18%' height='37'>Major Responsibilities</td> <td colspan='3' height='37'><textarea class='textarea' name='DUTY"+(i_exp+1)+"' id='DUTY"+(i_exp+1)+"' cols='40'></textarea></td> </tr> <tr> <td width='18%'>Job Location</td> <td width='35%'> <select name='CLOCATION"+(i_exp+1)+"' id='CLOCATION"+(i_exp+1)+"' style='FONT-SIZE:7pt;WIDTH:70px'> <option value='Select' selected='selected'>Select</option> <option value='Overseas'>Overseas</option> <option value='Local'>Local</option> </select> </td> <td width='14%'>Key Achievement</td> <td width='33%'><input class='text' name='ACHIEVE"+(i_exp+1)+"' type='text' id='ACHIEVE"+(i_exp+1)+"' size='30' maxlength='255' /></td> </tr> <tr> <td width='18%' height='32'>Served From</td> <td width='35%' height='32'> <select id='EFM"+(i_exp+1)+"' name='EFM"+(i_exp+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'> <option value='mon' selected='selected'>mon</option> <option value='01'>Jan</option> <option value='02'>Feb</option> <option value='03'>Mar</option> <option value='04'>Apr</option> <option value='05'>May</option> <option value='06'>Jun</option> <option value='07'>Jul</option> <option value='08'>Aug</option> <option value='09'>Sep</option> <option value='10'>Oct</option> <option value='11'>Nov</option> <option value='12'>Dec</option> </select> <select id='EFY"+(i_exp+1)+"' name='EFY"+(i_exp+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'><option value='year' selected>year</option>"
		current_year = new Date().getFullYear();
		origin_year = current_year-50;
		for(i = parseInt(current_year) ; i >= origin_year ; i--)
		{
			//document.write(i + '<br>');
			data_exp_old  += "<option value='"+i+"'>"+i+"</option>";
		}
		data_exp_old +="</select> </td> <td width='14%' height='32'>Served Till</td> <td width='33%' height='32'> <select id='ETM"+(i_exp+1)+"' name='ETM"+(i_exp+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'> <option value='mon' selected='selected'>mon</option> <option value='01'>Jan</option> <option value='02'>Feb</option> <option value='03'>Mar</option> <option value='04'>Apr</option> <option value='05'>May</option> <option value='06'>Jun</option> <option value='07'>Jul</option> <option value='08'>Aug</option> <option value='09'>Sep</option> <option value='10'>Oct</option> <option value='11'>Nov</option> <option value='12'>Dec</option> </select> <select id='ETY"+(i_exp+1)+"' name='ETY"+(i_exp+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'><option value='year' selected>year</option>"
		current_year = new Date().getFullYear();
		origin_year = current_year-50;
		for(i = parseInt(current_year) ; i >= origin_year ; i--)
		{
			//document.write(i + '<br>');
			data_exp_old  += "<option value='"+i+"'>"+i+"</option>";
		}
		mm=new Date().getMonth();																																											
		dd=new Date().getDate();   
		yy=new Date().getFullYear();
		fDt=(mm+1)+'/'+dd+'/'+yy
		data_exp_old +="</select>(now<input class='rem_border' type='checkbox' name='CUR_DATE"+(i_exp+1)+"' id='CUR_DATE"+(i_exp+1)+"' value='"+fDt+"' onclick='nowOpt("+(i_exp+1)+")'/>)</td></tr></table>"
		//popup(fDt);
	}
	
	if (document.layers)
	{
		document.layers.cust_exp1.document.write(data_exp);
		document.layers.cust_exp1.document.close();
		myform.count_exp.value = ++i;
	}
	else
	{
		if (document.all || document.getElementById)
		{
			document.getElementById("remove_exp").disabled = false;
			i_exp_f = i_exp+1;
			switch (i_exp_f){
				//case 1:document.getElementById("cust_exp1").innerHTML = data_exp;
				//break;
				case 2:document.getElementById("cust_exp2").innerHTML = data_exp;
				break;
				case 3:document.getElementById("cust_exp3").innerHTML = data_exp;
				break;
				case 4:document.getElementById("cust_exp4").innerHTML = data_exp;
				break;
				case 5:document.getElementById("cust_exp5").innerHTML = data_exp;
				break;
				case 6:document.getElementById("cust_exp6").innerHTML = data_exp;
				break;
				case 7:document.getElementById("cust_exp7").innerHTML = data_exp;
				break;
				case 8:document.getElementById("cust_exp8").innerHTML = data_exp;
				break;
				case 9:document.getElementById("cust_exp9").innerHTML = data_exp;
				break;
				case 10:document.getElementById("cust_exp10").innerHTML = data_exp;
				break;
				default:popup('Sorry! But no more can be added.');;
				myform.count_exp.value = --i_exp;
				break;		
		}
			//document.all.TBL_EXP.style.backgroundColor='#003399'
			myform.count_exp.value = ++i_exp;
		}//if
	}//else
}//function


/********************  FOR TRAINING FIELD  *********************/
/****************************************************************/
function createForm_tra(myform) {
data_tra = "";    
inter = "'";
var i_tra=1;
i_tra=parseInt(myform.count_tra.value);
//popup(i_tra);
if(i_tra < 6)
{
	data_tra = "<table width='100%' border='0' cellpadding='0' cellspacing='0' style='border:0px; background-image:none;' align='default'><tr><td height='5px'></td></tr><tr >  <td valign='top' width='20%'><input type='hidden' name='hidTID"+(i_tra+1)+"' id='hidTID"+(i_tra+1)+"' value='-1' /><input name='T_NAME"+(i_tra+1)+"' type='text' class='text' id='T_NAME"+(i_tra+1)+"' style='width:80px;' size='10' /></td>  <td valign='top' width='20%'><input type='text'  class='text' name='T_INSTITUTE"+(i_tra+1)+"' id='T_INSTITUTE"+(i_tra+1)+"' style='width:150px;'></td>  <td valign='top' width='20%'><input type='text' class='text' name='T_LOC"+(i_tra+1)+"' id='T_LOC"+(i_tra+1)+"' style='width:150px;'></td>  <td valign='top' width='15%'><input type='text' class='text' name='T_LENGTH"+(i_tra+1)+"' id='T_LENGTH"+(i_tra+1)+"' style='width:50px;'>     day</td>  <td valign='top' width='10%'><select id='T_YEAR"+(i_tra+1)+"' name='T_YEAR"+(i_tra+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'><option value='S' selected>year</option>"  
	current_year = new Date().getFullYear();
	current_year +=3;
	origin_year = current_year-50;
	for(i = parseInt(current_year) ; i >= origin_year ; i--)
	{
		data_tra += "<option value='"+i+"'>"+i+"</option>";
	}
	data_tra +="</select></td><td valign='top' width='20%'><input name='T_RESULT"+(i_tra+1)+"' type='text' class='text' id='T_RESULT"+(i_tra+1)+"' style='width:80px;' size='10' /></td>  </tr></table>"
	
	
	/*<table  width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td valign='top'><input name='TNAME"+(i_tra+1)+"' type='text' class='text' id='TNAME"+(i_tra+1)+"' style='width:200px;' size='40' maxlength='255' /></td> <td valign='top'><input name='TINSTITUTE"+(i_tra+1)+"' type='text' class='text' id='TINSTITUTE"+(i_tra+1)+"' style='width:200px;' size='40' maxlength='255' /></td> <td valign='top'><select name='DURATION"+(i_tra+1)+"' id='DURATION"+(i_tra+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'> <option value='year' selected>year </option>"
	data_tra +="</select></td> <td valign='top'><select id='TRA_LOC"+(i_tra+1)+"' name='TRA_LOC"+(i_tra+1)+"' style='FONT-SIZE:7pt;WIDTH:70px'> <option value='Select' selected='selected'>Select . . .</option> <option value='Overseas'>Overseas Ins.</option> <option value='Local'>Local Ins.</option> <option value='Company'>In Company</option> </select></td></tr></table>"*/
/*
popup('Opening new window....');
xy=window.open();
xy.document.write(data_tra);
*/
}
if (document.layers) {
document.layers.cust_tra1.document.write(data_tra);
document.layers.cust_tra1.document.close();
myform.count_tra.value = ++i;
}
else {
	if (document.all || document.getElementById) {
	i_tra_f=i_tra+1;
	document.getElementById("remove_tra").disabled = false;
	//popup(i_tra_f);
	switch (i_tra_f){
		/*case 1:cust_tra1.innerHTML = data_tra;
		break;
		case 2:cust_tra2.innerHTML = data_tra;
		break;
		case 3:cust_tra3.innerHTML = data_tra;
		break;*/
		case 2:document.getElementById("cust_tra2").innerHTML = data_tra;
		break;
		case 3:document.getElementById("cust_tra3").innerHTML = data_tra;
		break;
		case 4:document.getElementById("cust_tra4").innerHTML = data_tra;
		break;
		case 5:document.getElementById("cust_tra5").innerHTML = data_tra;
		break;
		/*case 8:document.getElementById("cust_tra8").innerHTML = data_tra;
		break;
		case 9:document.getElementById("cust_tra9").innerHTML = data_tra;
		break;
		case 10:document.getElementById("cust_tra10").innerHTML = data_tra;
		break;*/
		default:popup('Sorry! But no more can be added.');;
		myform.count_tra.value = --i_tra;
		break;
	}

myform.count_tra.value = ++i_tra;
 		}//if
	}//else

}//function


/********************  FOR EBL REF FIELD  *********************/
/****************************************************************/
function createEBLRef(myform) {
data_eblRef = "";    
inter = "'";
var i_eblRef=1;
i_eblRef=parseInt(myform.count_eblRef.value);
//popup(i_tra);
if(i_eblRef < 6)
{
	data_eblRef = "<table width='100%' border='0' cellpadding='0' cellspacing='0' style='border:0px; background-image:none;' align='default'><tr><td height='5px'></td></tr> <tr><td valign='top'><input type='hidden' name='hidRefID"+(i_eblRef+1)+"' id='hidRefID"+(i_eblRef+1)+"' value='-1' /><input name='EBL_MAN"+(i_eblRef+1)+"' type='text' class='text' id='EBL_MAN"+(i_eblRef+1)+"' style='width:200px;' size='10' /></td><td colspan='2' valign='top'><input type='text' class='text' name='EBL_MAN_DESG"+(i_eblRef+1)+"' id='EBL_MAN_DESG"+(i_eblRef+1)+"' style='width:150px;' /></td><td colspan='5' valign='top'><input type='text' class='text' name='EBL_MAN_REL"+(i_eblRef+1)+"' id='EBL_MAN_REL"+(i_eblRef+1)+"' style='width:150px;' /></td>  </tr></table>"  
}
if (document.layers) {
document.layers.cust_eblRef1.document.write(data_eblRef);
document.layers.cust_eblRef1.document.close();
myform.count_eblRef.value = ++i;
}
else 
{
	if (document.all || document.getElementById) 
	{
		i_eblRef_f=i_eblRef+1;
		document.getElementById("remove_eblRef").disabled = false;
		//popup(i_tra_f);
		switch (i_eblRef_f)
		{
			/*case 1:cust_tra1.innerHTML = data_tra;
			break;
			case 2:cust_tra2.innerHTML = data_tra;
			break;
			case 3:cust_tra3.innerHTML = data_tra;
			break;*/
			case 2:document.getElementById("cust_eblRef2").innerHTML = data_eblRef;
			break;
			case 3:document.getElementById("cust_eblRef3").innerHTML = data_eblRef;
			break;
			case 4:document.getElementById("cust_eblRef4").innerHTML = data_eblRef;
			break;
			case 5:document.getElementById("cust_eblRef5").innerHTML = data_eblRef;
			break;
			/*case 8:document.getElementById("cust_tra8").innerHTML = data_tra;
			break;
			case 9:document.getElementById("cust_tra9").innerHTML = data_tra;
			break;
			case 10:document.getElementById("cust_tra10").innerHTML = data_tra;
			break;*/
			default:popup('Sorry! But no more can be added.');;
			myform.count_eblRef.value = --i_eblRef;
			break;
		}

		myform.count_eblRef.value = ++i_eblRef;
 	}//if
}//else

}//function


/********************  FOR PREVIOUS WORK IN EBL FIELD  *********************/
/****************************************************************/
function createPrevWork_EBL(myform) {
data_EBLPrev = "";    
inter = "'";
var i_EBLPrev=1;
i_EBLPrev=parseInt(myform.count_EBLPrev.value);
//popup(i_tra);
if(i_EBLPrev < 6)
{
	data_EBLPrev = "<table width='100%' border='0' cellpadding='3' cellspacing='0' style='border:0px; background-image:none;' align='default'><tr><td height='5px'></td></tr><tr><td width='50%' align='center' valign='top'><input name='I_POST"+(i_EBLPrev+1)+"' type='text' class='text' id='I_POST"+(i_EBLPrev+1)+"' style='width:200px;' size='10'/><input type='hidden' name='hidIPrevID"+(i_EBLPrev+1)+"' id='hidIPrevID"+(i_EBLPrev+1)+"' value='-1' /></td><td width='25%' valign='top' align='right' width='15%' colspan='2'><select name='I_DATE_M"+(i_EBLPrev+1)+"' id='I_DATE_M"+(i_EBLPrev+1)+"' style='FONT-SIZE:10px;WIDTH:75px'  class='text' ><option value='S' selected='selected'>mon</option><option value='01' >Jan</option><option value='02' >Feb</option><option value='03' >Mar</option><option value='04' >Apr</option><option value='05' >May</option><option value='06' >Jun</option><option value='07' >Jul</option><option value='08' >Aug</option><option value='09' >Sep</option><option value='10' >Oct</option><option value='11' >Nov</option><option value='12' >Dec</option></select><label style='color:#FF0000;'></label></td><td width='25%'  valign='top' align='left' colspan = '5'><label style='color:#FF0000;'></label><select id='I_DATE_Y"+(i_EBLPrev+1)+"' name='I_DATE_Y"+(i_EBLPrev+1)+"' style='FONT-SIZE:10px;WIDTH:75px'  class='text' ><option value='S' selected='selected'>year</option>"  
	current_year = new Date().getFullYear();
	//current_year +=3;
	origin_year = 1992; //current_year-50;
	for(i = parseInt(current_year) ; i >= origin_year ; i--)
	{
		data_EBLPrev += "<option value='"+i+"'>"+i+"</option>";
	}
	data_EBLPrev +="</select></td>  </tr></table>"
}
if (document.layers) {
document.layers.cust_EBLPrev1.document.write(data_EBLPrev);
document.layers.cust_EBLPrev1.document.close();
myform.count_EBLPrev.value = ++i;
}
else {
	if (document.all || document.getElementById) {
	i_EBLPrev_f=i_EBLPrev+1;

	 document.getElementById("remove_EBLPrev").disabled = false;
	
	//popup(i_tra_f);
	switch (i_EBLPrev_f){
		/*case 1:cust_tra1.innerHTML = data_tra;
		break;
		case 2:cust_tra2.innerHTML = data_tra;
		break;
		case 3:cust_tra3.innerHTML = data_tra;
		break;*/
		case 2:document.getElementById("cust_EBLPrev2").innerHTML = data_EBLPrev;
		break;
		case 3:document.getElementById("cust_EBLPrev3").innerHTML = data_EBLPrev;
		break;
		case 4:document.getElementById("cust_EBLPrev4").innerHTML = data_EBLPrev;
		break;
		case 5:document.getElementById("cust_EBLPrev5").innerHTML = data_EBLPrev;
		break;
		/*case 8:document.getElementById("cust_tra8").innerHTML = data_tra;
		break;
		case 9:document.getElementById("cust_tra9").innerHTML = data_tra;
		break;
		case 10:document.getElementById("cust_tra10").innerHTML = data_tra;
		break;*/
		default:popup('Sorry! But no more can be added.');;
		myform.count_EBLPrev.value = --i_EBLPrev;
		break;
	}

myform.count_EBLPrev.value = ++i_EBLPrev;
 		}//if
	}//else

}//function


/********************  FOR CLITERACY FIELD  *********************/
/***************************************************************
function createForm_com(myform) {
data_com = "";    
inter = "'";
var i_com=1;
i_com=parseInt(myform.hide_com.value);

if(i_com < 10) {

data_com="<table align='center' width='100%'>"
data_com +="<tr>"
data_com +="<td align='left' width='63%'><input size='50' name='COMDESC"+(i_com+1)+"'></td>" 
data_com +="<td align='left' width='37%'><select name='COMLEVEL"+(i_com+1)+"'>" 
data_com +="<option value='na' selected>Select</option>"
data_com +="<option value='Excellent'>Excellent</option>"
data_com +="<option value='Very Good'>Very Good</option>"
data_com +="<option value='Good'>Good</option>"
data_com +="<option value='Moderate'>Moderate</option>"
data_com +="<option value='Poor'>Poor</option>"
data_com +="</select></td>" 
data_com +="</tr>"
data_com +="</table>"
}

if (document.layers) {
document.layers.cust_com1.document.write(data_com);
document.layers.cust_com1.document.close();
myform.hide_com.value = ++i_com;
}
else {
if (document.all) {
switch (i_com){
	case 1:cust_com1.innerHTML = data_com;
	break;
	case 2:cust_com2.innerHTML = data_com;
	break;
	case 3:cust_com3.innerHTML = data_com;
	break;
	case 4:cust_com4.innerHTML = data_com;
	break;
	case 5:cust_com5.innerHTML = data_com;
	break;
	case 6:cust_com6.innerHTML = data_com;
	break;
	case 7:cust_com7.innerHTML = data_com;
	break;
	case 8:cust_com8.innerHTML = data_com;
	break;
	case 9:cust_com9.innerHTML = data_com;
	break;
	case 10:cust_com10.innerHTML = data_com;
	break;
	default:popup('Sorry! But no more can be added.');;
	myform.hide_com.value = --i_com;
	break;
	}
myform.hide_com.value = ++i_com;
 		}//if
	}//else

}//function
*/

/**********************  FOR PROFEDU FIELD  *********************/
/****************************************************************/
function createForm_pedu(myform) {
data_pedu = "";    
inter = "'";
//var i_pedu=1;
i_pedu=parseInt(myform.count_pedu.value);
//popup(i_pedu);
if(i_pedu < 5) 
{
	data_pedu="<table width='100%' border='0' cellpadding='3' cellspacing='0' style='border:0px; background-image:none;'><tr><td height='5px'></td></tr><tr><td valign='top' width='15%'><input type='hidden' name='hidID"+(i_pedu+1)+"' id='hidID"+(i_pedu+1)+"' value='-1' /><input name='P_DEGREE"+(i_pedu+1)+"' type='text' class='text' id='P_DEGREE"+(i_pedu+1)+"' style='width:80px;' size='10' /></td><td width='15%' valign='top'><input class='text' type='text' name='P_INST"+(i_pedu+1)+"' id='P_INST"+(i_pedu+1)+"' style='width:100px;' /></td><td width='20%' valign='top'><input class='text' type='text' name='P_LOC"+(i_pedu+1)+"' id='P_LOC"+(i_pedu+1)+"' style='width:150px;' /></td><td valign='top' width = '10%'><select id='P_YEAR"+(i_pedu+1)+"' name='P_YEAR"+(i_pedu+1)+"' style='WIDTH:50px' class='text'>  <option value='S' selected='selected'>year</option>"
	current_year = new Date().getFullYear();
	current_year +=3;
	origin_year = current_year-50;
	for(i = parseInt(current_year) ; i >= origin_year ; i--)
	{
		//document.write(i + '<br>');
		data_pedu += "<option value='"+i+"'>"+i+"</option>";
	}
	
	data_pedu += "</select></td><td valign='top' width='20%'><input class='text' type='text' name='P_SUB"+(i_pedu+1)+"' id='P_SUB"+(i_pedu+1)+"' style='width:150px;' /></td><td valign='top' width='20%'><input name='P_RESULT"+(i_pedu+1)+"' type='text' class='text' id='P_RESULT"+(i_pedu+1)+"' style='width:80px;' size='10' /></td>  </tr></table>"


/* <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td valign='top'><input name='PEDU"+(i_pedu+1)+"' type='text' class='text' id='PEDU"+(i_pedu+1)+"' style='width:100px;' size='20' maxlength='255' /></td><td valign='top'><input name='PINSTITUTE"+(i_pedu+1)+"' type='text' class='text' id='PINSTITUTE"+(i_pedu+1)+"' style='width:100px;' size='20' maxlength='255' /></td><td valign='top'><SELECT id=PFM"+(i_pedu+1)+" name=PFM"+(i_pedu+1)+" style='FONT-SIZE:7pt;WIDTH:50px'> <OPTION value=mon selected>mon</OPTION><OPTION value=01>Jan</OPTION> <OPTION value=02>Feb</OPTION> <OPTION value=03>Mar</OPTION><OPTION value=04>Apr</OPTION> <OPTION value=05>May</OPTION> <OPTION value=06>Jun</OPTION><OPTION value=07>Jul</OPTION> <OPTION value=08>Aug</OPTION> <OPTION value=09>Sep</OPTION><OPTION value=10>Oct</OPTION> <OPTION value=11>Nov</OPTION> <OPTION value=12>Dec</OPTION></SELECT></td> <td valign='top'> <select id='PFY"+(i_pedu+1)+"' name='PFY"+(i_pedu+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'> <option value='year' selected>year </option>"
data_pedu +="</select></td> <td valign='top'><SELECT name=PTM"+(i_pedu+1)+" id=PTM"+(i_pedu+1)+" style='FONT-SIZE:7pt;WIDTH:50px'> <OPTION value=mon selected>mon</OPTION> <OPTION value=01>Jan</OPTION> <OPTION value=02>Feb</OPTION> <OPTION value=03>Mar</OPTION> <OPTION value=04>Apr</OPTION> <OPTION value=05>May</OPTION> <OPTION value=06>Jun</OPTION> <OPTION value=07>Jul</OPTION> <OPTION value=08>Aug</OPTION> <OPTION value=09>Sep</OPTION> <OPTION value=10>Oct</OPTION> <OPTION value=11>Nov</OPTION> <OPTION value=12>Dec</OPTION></SELECT></td> <td valign='top'><select id='PTY"+(i_pedu+1)+"' name='PTY"+(i_pedu+1)+"' style='FONT-SIZE:7pt;WIDTH:50px'> <option value='year' selected>year </option>"

current_year = new Date().getFullYear();
current_year +=3;
origin_year = current_year-50;
for(i = parseInt(current_year) ; i >= origin_year ; i--)
{
	//document.write(i + '<br>');
	data_pedu += "<option value='"+i+"'>"+i+"</option>";
}
data_pedu +="</select></td> <td valign='top'><SELECT id=PPLACE"+(i_pedu+1)+" name=PPLACE"+(i_pedu+1)+" style='FONT-SIZE:7pt;WIDTH:70px'> <OPTION value=Select selected>Select . . .</OPTION> <OPTION value=Overseas>Overseas Ins.</OPTION> <OPTION value=Local>Local Ins.</OPTION> <OPTION value=Company>In Company</OPTION></SELECT></td> </tr></table>"
*/

}
if (document.layers) 
{
	document.layers.cust_pedu1.document.write(data_pedu);
	document.layers.cust_pedu1.document.close();
	myform.count_pedu.value = ++i_pedu;
	//popup('Pedu:document '+i_pedu);
}
else 
{
	if (document.all || document.getElementById) 
	{
		i_pedu_f=i_pedu+1;
		document.getElementById("remove_pedu").disabled = false;
		switch (i_pedu_f)
		{
			//case 1:cust_pedu1.innerHTML = data_pedu;
			//break;
			case 2:document.getElementById("cust_pedu2").innerHTML = data_pedu;
			break;
			case 3:document.getElementById("cust_pedu3").innerHTML = data_pedu;
			break;
			case 4:document.getElementById("cust_pedu4").innerHTML = data_pedu;
			//popup('Pedu: '+i_pedu);
			break;
			case 5:document.getElementById("cust_pedu5").innerHTML = data_pedu;
			break;
			default:popup('Sorry! But no more can be added.');
			myform.count_pedu.value = --i_pedu;
			break;
		}
		myform.count_pedu.value = ++i_pedu;
		//popup('Pedu: '+myform.count_pedu.value);
 	}//if
}//else
}//function

/*</SCRIPT>*/


/*<SCRIPT LANGUAGE="JavaScript">*/
/*function test(myform){
//popup(form1.count_exp.value);

//popup("H ah ah ah aha");

if (document.all.count_exp){
vExp=form1.count_exp.value;
//popup('Exp No '+vExp);
	for (i=vExp; i>=1; i--)
	{
		/*
		popup('Exp HTML '+document.all.cust_exp+vExp.innerHTML);
		eval('document.all.cust_exp'+vExp).innerHTML="";
		document.form1.count_exp.value=i-1;
		popup('I '+i);
		*/

/*
		switch (i){
		case 1:document.getElementById("cust_exp1").innerHTML ="";
		break;
		case 2:document.getElementById("cust_exp2").innerHTML = "";
		break;
		case 3:document.getElementById("cust_exp3").innerHTML = "";
		break;
		case 4:document.getElementById("cust_exp4").innerHTML = "";
		break;
		case 5:document.getElementById("cust_exp5").innerHTML = "";
		break;
		case 6:document.getElementById("cust_exp6").innerHTML = "";
		break;
		case 7:document.getElementById("cust_exp7").innerHTML = "";
		break;
		case 8:document.getElementById("cust_exp8").innerHTML = "";
		break;
		case 9:document.getElementById("cust_exp9").innerHTML = "";
		break;
		case 10:document.getElementById("cust_exp10").innerHTML = "";
		break;
		}//case
	}//for

document.all.SPN_EXP.innerHTML="";
document.all.EXP_ALL.innerHTML="";
document.all.EXP_BUT.innerHTML="";

//document.all.cust_exp3.innerHTML=""
}//if vexp>1
document.all.TBL_EXP.style.backgroundColor='#FBA803' 
}//f\unction



function createTblExpOpt()
{
//popup("1");
document.all.SPN_EXP.innerHTML="<table width=100% border=0 cellpadding=0 cellspacing=0 bgcolor=#19B5F1><tr> <td width=5% height=24 valign=middle>&nbsp;</td><td colspan=2 valign=middle><strong><font color=#003366 size=2 face=Verdana>Please mention your profession and total duration of experience-</font></strong></td></tr><tr> <td>&nbsp;</td><td width=3%><font face=Verdana>&nbsp;</font></td><td width=92%><strong><font color=#660000 size=1 face=Verdana>Profession: <select name=PROFESSION onchange=createExpProf(this);><option value='Accounts Professional' selected>Accounts Professional </option><option value='Administration/Transport' selected>Administration/Transport </option><option value='Advisory'>Advisory</option><option value='Architect'>Architect</option><option value='Artiste'>Artiste</option><option value='Business Process Reengineering'>Business Process Reengineering</option><option value='Chemical Engineering'>Chemical Engineering</option><option value='Cinematography'>Cinematography</option><option value='Civil/Construction Engineering'>Civil/Construction Engineering</option><option value='Commercial'>Commercial</option><option value='Compensation Management'>Compensation Management</option><option value='Corporate Affairs'>Corporate Affairs</option><option value='Corporate Sales'>Corporate Sales</option><option value='Corporate Strategy'>Corporate Strategy</option><option value='Customer Service'>Customer Service</option><option value='Defense Professional'>Defense Professional</option><option value='Drilling Engineering'>Drilling Engineering</option><option value='Electrical &amp; Electronics Engineering'>Electrical &amp; Electronics Engineering</option><option value='Environment &amp; Safety Engineering'>Environment &amp; Safety Engineering</option><option value='Event Management'>Event Management</option><option value='Exploration'>Exploration</option><option value='External Affairs/Public Relations'>External Affairs/Public Relations</option><option value='Fashion Designing'>Fashion Designing</option><option value='Finance Professional'>Finance/Accounts Professional</option><option value='Geologist'>Geologist</option><option value='Head Hunting'>Head Hunting</option><option value='Health Engineering'>Health Engineering</option><option value='HR/Personnel'>HR/Personnel</option><option value='Industrial Relations'>Industrial Relations</option><option value='Interior Decoration'>Interior Decoration</option><option value='IT Professional'>IT Professional</option><option value='Law enforcement Professional'>Law enforcement Professional</option><option value='Legal'>Legal</option><option value='Logistics'>Logistics</option><option value='Marketing'>Marketing</option><option value='Mechanical Engineering'>Mechanical Engineering</option><option value='Medical Practitioner'>Medical Practitioner</option><option value='Medical Surgeon'>Medical Surgeon</option><option value='Negotiator'>Negotiator</option><option value='Operations'>Operations</option><option value='Organizational Development'>Organizational Development</option><option value='Petroleum Engineering'>Petroleum Engineering</option><option value='Pharmacist'>Pharmacist</option><option value='Physicist'>Physicist</option><option value='Procurement &amp; Contracts'>Procurement &amp; Contracts</option><option value='Project Management'>Project Management</option><option value='Protocol'>Protocol</option><option value='Quality Control'>Quality Control</option><option value='Receptionist'>Receptionist</option><option value='Research &amp; Development (R&amp;D)'>Research &amp; Development (R&amp;D)</option><option value='Reservoir Engineering'>Reservoir Engineering</option><option value='Sales'>Sales</option><option value='Secretarial'>Secretarial</option><option value='Security'>Security</option><option value='Telecommunication Professional'>Telecommunication Professional</option><option value='Travel and Tourism'>Travel and Tourism</option><option value='Visual Artist'>Visual Artist</option><option value='Others'>Others</option> </select></font></strong><font color=#660000 size=1 face=Verdana>(Select Others if your profession is not in the list)</font><br><span name=PROF_OTH id=PROF_OTH></span></td></tr><tr> <td height=24>&nbsp;</td><td><font face=Verdana>&nbsp;</font></td><td colspan=2><strong><font color=#660000 size=1 face=Verdana>Experience duration: <select name=EXP_YR><option value=Select>Select</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option><option value=13>13</option><option value=14>14</option><option value=15>15</option><option value=16>16</option><option value=17>17</option><option value=18>18</option><option value=19>19</option><option value=20>20</option><option value=21>21</option><option value=22>22</option><option value=23>23</option><option value=24>24</option><option value=25>25</option><option value=26>26</option><option value=27>27</option><option value=28>28</option><option value=29>29</option><option value=30>30</option><option value=31>31</option><option value=32>32</option><option value=33>33</option><option value=34>34</option><option value=35>35</option><option value=34>34</option><option value=35>35</option><option value=36>36</option><option value=37>37</option><option value=0>0</option>	</select><font color=#330000>Year(s)</font> <select name=EXP_MON><option value=Select>Select</option><option value=12>12</option><option value=11>11</option><option value=10>10</option><option value=9>9</option><option value=8>8</option><option value=7>7</option><option value=6>6</option><option value=5>5</option><option value=4>4</option><option value=3>3</option><option value=2>2</option><option value=1>1</option></select><font color=#330000>Month</font>(s)</font></strong></td></tr></table>";
//popup("2");
}


function createExpProf(myProf)
{	//popup("FUNCTION");
	//obj_name = "PROF_OTH";
	if(myProf.value == "Others")
	{
		/*eval(obj_name).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Please mention<br><select name='FOREIGN"+place+"'><option value=USA>USA</option><option value=UK>UK</option></select>";*/
		//popup("IF");
/*		document.all.PROF_OTH.innerHTML="<font face='Verdana' color='#FFFFFF' size='1'>* Please mention profession name here <input type='text' name='PROF_OTH_TXT' style='width:170px;font-size:7pt;background-color:#F1F7DE '>"
	}	
	else
	{
		document.all.PROF_OTH.innerHTML="";
	}
}
*/
function validate(form)
{
	var NAME1=form.NAME.value;//popup(NAME1);
	var FNAME1=form.FNAME.value;//popup(FNAME1);
	var BIRTHA=document.getElementById("BIRTH1").options[document.getElementById("BIRTH1").selectedIndex].value;//popup(BIRTHA);
	var BIRTHB=document.getElementById("BIRTH2").options[document.getElementById("BIRTH2").selectedIndex].value;//popup(BIRTHB);
	var BIRTHC=document.getElementById("BIRTH3").options[document.getElementById("BIRTH3").selectedIndex].value;//popup(BIRTHC);
	
	var CADD1=form.CADD.value;//popup(CADD1);
	var PADD1=form.PADD.value;//popup(PADD1);
	//var DPHONE1=form.DPHONE.value;
	var EPHONE1=form.HOME_PHONE.value;//popup(EPHONE1);
	var NATION1=form.NATION.value;//popup(NATION1);
	var E_MAIL1=form.E_MAIL.value;//popup(E_MAIL1);
	
	//var JOINA=form.JOIN1.options.value;
	//var JOINB=form.JOIN2.options.value;
	//var JOINC=form.JOIN3.options.value;
	//var EDUHA=form.EDUH.options.value;
	//var PASSWORD1=form.PASSWORD.value;
	//var PASSWORD21=form.PASSWORD2.value;

	//  OK ////

	if(NAME1=="")	
	{       
		popup('Name field cannot be blank!');
		form.NAME.focus();
		return false;
	}

	if(FNAME1=="")	
	{       
		popup('Mention Father`s  Name!');
		form.FNAME.focus();
		return false;
	}

	if(NATION1=="")	
	{       
		popup('Mention your Nationality!');
		form.NATION.focus();
		return false;
	}

// birth date
	if((BIRTHA!="day" && BIRTHB!="mon" && BIRTHC!="year") || (BIRTHA=="day" && BIRTHB=="mon" && BIRTHC=="year"))
	{
		//popup('OK');
	}
	else
	{
		popup(' Fill properly BIRTH date field!');
		document.getElementById("BIRTH1").focus();
		return false;
	}
	
	if(EPHONE1=="")	
	{       
		popup('Mention your Contact Phone no.!');
		form.HOME_PHONE.focus();
		return false;
	}

// email strt
	if(E_MAIL1 == "")
	{
		popup("Please give only one e-mail address ");
		document.form1.E_MAIL.focus();
		return false;
	}
	
	if(E_MAIL1 != "")
	{
		dv = E_MAIL1 ;
		
		if((dv.indexOf('www.', 0) >= 0) ||(dv.indexOf(':', 0) >= 0) || (dv.indexOf(';', 0) >= 0) ||(dv.indexOf('<', 0) >= 0) ||(dv.indexOf('>', 0) >= 0) ||(dv.indexOf('\\', 0) >= 0) ||(dv.indexOf(',', 0) >= 0) ||(dv.indexOf(' ', 0) >= 0) ||(dv.indexOf('/', 0) >= 0) ||(dv.indexOf('@', 0) == -1) || (dv.indexOf('.', 0) == -1)) 
		{
			// msg += "Invalid e-mail!";
			popup("Invalid e-mail! Please mention one valid Email");
			document.form1.E_MAIL.focus();
			return false;
		}
	}

// email end
	if(CADD1=="")	
	{       
		popup('Correspondence Address field cannot be blank!');
		form.CADD.focus();
		return false;
	}

	if(PADD1=="")	
	{       
		popup('Permanent Address field cannot be blank!');
		form.PADD.focus();
		return false;
	}

//vEx=form1.count_exp.value;
//var number=1;
	
	//CHECKING ACADEMIC INFORMATION
	
	cnt_edu=parseInt(form.count_edu.value);
	//popup('Total Edu row: '+cnt_edu);
	for(numbr=1; numbr<=cnt_edu; numbr++)
	{
			var EDULEV = document.getElementById("EDULEVEL"+numbr).options[document.getElementById("EDULEVEL"+numbr).selectedIndex].value;
			var EDUCATION_1 = eval("form.EDUCATION"+numbr).value;
			var FYEAR_1 = eval("form.FYEAR"+numbr).options[eval("form.FYEAR"+numbr).options.selectedIndex].value;
			var INSTITUTE_1  = eval("form.INSTITUTE"+numbr).options[eval("form.INSTITUTE"+numbr).selectedIndex].value;
			var RESULT_1  = eval("form.RESULT"+numbr).options[eval("form.RESULT"+numbr).selectedIndex].value;
			var SUB = eval("form.SUBJECT"+numbr).options[eval("form.SUBJECT"+numbr).selectedIndex].value;
		
		//popup('Val in for-loop: '+numbr);
		//if((numbr==1 && document.getElementById("EDULEVEL"+numbr).options[document.getElementById("EDULEVEL"+numbr).selectedIndex].value=="no") || (numbr==1 && document.getElementById("EDULEVEL"+numbr).options[document.getElementById("EDULEVEL"+numbr).selectedIndex].value!="no") || (numbr!=1 && document.getElementById("EDULEVEL"+numbr).options[document.getElementById("EDULEVEL"+numbr).selectedIndex].value!="no"))
		if(numbr==1 || (numbr > 1 && (EDULEV != "no" || EDUCATION_1!="" || FYEAR_1 !="year" || INSTITUTE_1 !="no" || RESULT_1 !=1 || SUB !="Select")))
		{
			//popup('in if');
			//popup('Edulevel '+numbr+' Value: '+document.getElementById("EDULEVEL"+numbr).options[document.getElementById("EDULEVEL"+numbr).selectedIndex].value);
			//var EDUCATION_1 = eval("form.EDUCATION"+numbr).value;
			//var FYEAR_1 = eval("form.FYEAR"+numbr).options[eval("form.FYEAR"+numbr).options.selectedIndex].value;
			//var INSTITUTE_1  = eval("form.INSTITUTE"+numbr).options[eval("form.INSTITUTE"+numbr).selectedIndex].value;//document.getElementById("INSTITUTE"+numbr).options[document.getElementById("INSTITUTE"+numbr).selectedIndex].value;
			//var RESULT_1  = eval("form.RESULT"+numbr).options[eval("form.RESULT"+numbr).selectedIndex].value;
					
			if(eval("form.EDULEVEL"+numbr).value=="no")
			{
				popup("Please provide the Edulevel");
				eval("form.EDULEVEL"+numbr).focus();
				return false ;
			}
			if(EDUCATION_1 ==  "" )
			{
				popup("Please provide the Exam / Degree Title");
				eval("form.EDUCATION"+numbr).focus();
				return false ;
			}//EDUCATION_1 ==  ""
	
			if(FYEAR_1 ==  "year" )
			{
				popup("Please provide the year of passing");
				eval("form.FYEAR"+numbr).focus();
				return false ;
			}//FYEAR_1 ==  "year"
	
			if(INSTITUTE_1 ==  "no" )
			{
				popup("Please select name of institution from the list ");
				eval("form.INSTITUTE"+numbr).focus();
				return false ;
			}//INSTITUTE_1 ==  "no" 
	
			if(INSTITUTE_1 !=  "no" )
			{
			
			/*
			if(INSTITUTE_1 == "Foreign Institute" )
			{
			//form.FOREIGN1.
			}//INSTITUTE_1 == "Foreign Institute"
			else
			*/
				//popup(INSTITUTE_1);
				if(INSTITUTE_1 == "others" || INSTITUTE_1 == "Foreign Institute")
				{ 
					if(eval("form.FOREIGN"+numbr).value == "")
					{
						popup("Please provide the institution name");
						eval("form.FOREIGN"+numbr).focus();
						return false ;
					}//form.FOREIGN1.value == ""	
			  
				}//INSTITUTE_1 == "others" 
			}//INSTITUTE_1 !=  "no" 
	
			// if result is other than grade check isnan
			if(RESULT_1 == "1")
			{
				popup("Please select your result.");
				eval("form.RESULT"+numbr).focus();
				return false ;
			}
			else
			{
				if(RESULT_1 == "15" || RESULT_1 == "13" || RESULT_1 == "14")
				{
					if(eval("form.PERCENT"+numbr))
					{
					if(eval("form.PERCENT"+numbr).value == "" || isNaN(eval("form.PERCENT"+numbr).value))
						{
							popup("Please provide percentage in number only.");
							eval("form.PERCENT"+numbr).value="";
							eval("form.PERCENT"+numbr).focus();
							return false ;
						} // if result is other than grade check isnan
					}// if exists
				}
				if(RESULT_1 == "0" )
				{
					if(eval("form.RESULT_ALT"+numbr).value == "" || isNaN(eval("form.RESULT_ALT"+numbr).value) )
					{
						popup("Please provide the  CGPA in number.");
						eval("form.RESULT_ALT"+numbr).value="";
						eval("form.RESULT_ALT"+numbr).focus();
						return false ;
					} //form.RESULT_ALT1.value == ""
				}
			} // End of Else
	//RESULT_1 ==  "0"
	// * * /
	/*  if(eval("form.PERCENT"+numbr).value == "")
	{
		popup("Please provide the  Percentage of Total marks ");
		eval("form.PERCENT"+numbr).focus();
		return false ;
	} //form.RESULT_ALT1.value == ""
	
	 if(eval("form.PERCENT"+numbr).value != "" & isNaN(eval("form.PERCENT"+numbr).value))
	{
		popup("Please provide only number ");
		eval("form.PERCENT"+numbr).value="";
		eval("form.PERCENT"+numbr).focus();
		return false ;
	} //form.PERCENT.value == ""
	*/
			if(eval("form.SUBJECT"+numbr).value =="Select")
			{
				popup("Please provide the Major Subject.");
				eval("form.SUBJECT"+numbr).focus();
				return false ;
			} //form.RESULT_ALT1.value == ""

			if(eval("form.SUBJECT"+numbr).value =="Others")
			{
				//if(eval("form.MAJOR"+numbr).value =="")
				if(document.getElementById("MAJOR"+numbr).value=="")
				{
					//popup(eval("form.MajorOther"+numbr).value)
					popup("Please provide your Major Subject that is not in the list ");
					//eval("form.MajorOther"+numbr).value="";
					eval("form.MAJOR"+numbr).focus();
					return false ;
				}
			} //form.RESULT_ALT1.value == ""
		} // End of If Clause
	} // End of For Loop
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************************************************************************************************************************************//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Paused by Auny on 1.7.06 to check whether above block of code works here - copied from SCB

var EDUCATIONA=form.EDUCATION1.value;
var INSTITUTEA=form.INSTITUTE1.value;
var FYEARA=form.FYEAR1.value;
//var TYEARA=form.TYEAR1.value;
var GRADEA=form.RESULT1.options[form.RESULT1.options.selectedIndex].value;
var SUBJECTA=form.SUBJECT1.options[form.SUBJECT1.options.selectedIndex].value;
var m=0;
var t=0;
if(EDUCATIONA=="")
{
 popup(' YOU MUST FILL UP MOST RECENT EDUCATION HERE!');
		form.EDUCATION1.focus();
		return false;

}
if(EDUCATIONA!="")
{   
if(FYEARA=="" || INSTITUTEA=="no" )	
{       
 popup(' YEAR AND INSTITUTE MUST BE FILLED!');
		form.INSTITUTE1.focus();
		return false;
}
if(FYEARA.length != 2 && FYEARA.length != 4)
{
popup(' INPUT SHOULD BE TWO OR FOUR NUMERIC!');
form.FYEAR1.focus();
return false;

}
for(t=0 ; t < FYEARA.length ; t++)
{

flag=0;
for(temp=0 ; temp < 10 ; temp++)
{
if(FYEARA.charAt(t)==temp )
{
	flag=1;
	break;
}
}
if(flag == 0)
{
popup(' Please mention the year of passing!');
form.FYEAR1.focus();
return false;				
}
}//inner main for

if(GRADEA == "1" )
{
popup("Please fillup your result");
form.RESULT1.focus();
return false;
}

if( SUBJECTA == "Select")
{
popup("please fillup your SUBJECT");
form.SUBJECT1.focus();
return false;
}

}	*/ //Paused by auny on 1.7.06
/******************************  EXP FIELD MUST  *************************
if(COMPANYA=="")  	
{       
popup('Mention at least one experience information properly!');
		form.COMPANY1.focus();
		return false;
}
****************************** end EXP FIELD MUST   *************************/

//************************* PEDU PORTION ***************************************
	var ttl_pedu=parseInt(form.count_pedu.value);
	//popup("Total PEDU: "+ttl_pedu);
	var pn;
	for(pn=1; pn<=ttl_pedu; pn++)
	{	//popup("In FOR");
		if(document.getElementById("PEDU"+pn).value != "" || document.getElementById("PINSTITUTE"+pn).value != "" || document.getElementById("PFM"+pn).options[document.getElementById("PFM"+pn).selectedIndex].value!="mon" || document.getElementById("PFY"+pn).options[document.getElementById("PFY"+pn).selectedIndex].value!="year" || document.getElementById("PTM"+pn).options[document.getElementById("PTM"+pn).selectedIndex].value!="mon" || document.getElementById("PTY"+pn).options[document.getElementById("PTY"+pn).selectedIndex].value!="year" || document.getElementById("PPLACE"+pn).options[document.getElementById("PPLACE"+pn).selectedIndex].value!="Select")
		{
			if(document.getElementById("PEDU"+pn).value == "")
			{
				popup("Please mention Name of Degree in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PEDU"+pn).focus();
				return false;
			}
			if(document.getElementById("PINSTITUTE"+pn).value == "")
			{
				popup("Please mention Name of Institute in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PINSTITUTE"+pn).focus();
				return false;
			}
			if(document.getElementById("PFM"+pn).options[document.getElementById("PFM"+pn).selectedIndex].value=="mon")
			{
				popup("Please mention From Month in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PFM"+pn).focus();
				return false;
			}
			if(document.getElementById("PFY"+pn).options[document.getElementById("PFY"+pn).selectedIndex].value=="year")
			{
				popup("Please mention From Year in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PFY"+pn).focus();
				return false;
			}
			if(document.getElementById("PTM"+pn).options[document.getElementById("PTM"+pn).selectedIndex].value=="mon")
			{
				popup("Please mention To Month in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PTM"+pn).focus();
				return false;
			}
			if(document.getElementById("PTY"+pn).options[document.getElementById("PTY"+pn).selectedIndex].value=="year")
			{
				popup("Please mention From Year in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PTY"+pn).focus();
				return false;
			}
			if(document.getElementById("PPLACE"+pn).options[document.getElementById("PPLACE"+pn).selectedIndex].value=="Select")
			{
				popup("Please mention Location in the row number "+pn+" of the \nProfessional Qualification block.");
				document.getElementById("PPLACE"+pn).focus();
				return false;
			}
		}
	}
//************************ END OF PEDU PORTION *********************************

//************************ TRAINING PORTION *********************************
//TNAME, TINSTITUTE, DURATION, TRA_LOC
	var ttl_tra=parseInt(form.count_tra.value);
	//popup('Total Tra Val: '+ttl_tra);
	for(tn=1; tn<=ttl_tra; tn++)
	{
		//popup('Training no. '+tn);
		if(document.getElementById("TNAME"+tn).value!="" || document.getElementById("TINSTITUTE"+tn).value!="" || document.getElementById("DURATION"+tn).options[document.getElementById("DURATION"+tn).selectedIndex].value!="year" || document.getElementById("TRA_LOC"+tn).options[document.getElementById("TRA_LOC"+tn).selectedIndex].value!="Select")
		{
			if(document.getElementById("TNAME"+tn).value=="")
			{
				popup("Please write the Name of training in row "+tn);
				document.getElementById("TNAME"+tn).focus();
				return false;
			}
			if(document.getElementById("TINSTITUTE"+tn).value=="")
			{
				popup("Please write the Institute Name of training in row "+tn);
				document.getElementById("TINSTITUTE"+tn).focus();
				return false;		
			}
			if(document.getElementById("DURATION"+tn).options[document.getElementById("DURATION"+tn).selectedIndex].value=="year")
			{
				popup("Please mention Year in the row number "+tn+" \nof the Training block.");
				document.getElementById("DURATION"+tn).focus();
				return false;
			}
			if(document.getElementById("TRA_LOC"+tn).options[document.getElementById("TRA_LOC"+tn).selectedIndex].value=="Select")
			{
				popup("Please mention Location in the row number "+tn+" \nof the Training block.");
				document.getElementById("TRA_LOC"+tn).focus();
				return false;
			}
		}	
	}
//************************ END OF TRAINING PORTION *********************************

//**************************  EXP FIELD not MUST but if not blank *************************
	//popup("exp stsrt "+form.EXP[1].value)
	//if(form.EXP[1].checked)//if(form.COMPANY1)			
	//{ //popup("exp checked")
		/*if(form.EXP_YR.value == "Select" || form.EXP_MON.value  == "Select" )
		/{
			popup("Please fillup properly your experience duration");
			form.EXP_MON.focus();
			return false;
		}//Please fillup properly your experience duration
		*/
	var cnt_exp=parseInt(form.count_exp.value);
	//popup("EXP: "+cnt_exp);
	for(i=1;i<=cnt_exp;i++)
	{
		//popup("yes");
		var ttc=form.COMPANY1.value;
		var COMPANYA=document.getElementById("COMPANY"+i).value;
		//popup("TTC: "+ttc);
		//if(COMPANYA != "")  	
		//{    
		var EPOSITION1A = document.getElementById("EPOSITION"+i).value;//popup(EPOSITION1A);EPOSITION1
		 //var BUSINESS1A = document.getElementById("BUSINESS"+i).options[document.getElementById("BUSINESS"+i).selectedIndex].value;//popup(BUSINESS1A);					 
		var DEPT1A = document.getElementById("DEPT"+i).value;//popup(DEPT1A);
		var DUTY1A = document.getElementById("DUTY"+i).value;//popup(DUTY1A);
		 //var CLOCATION1A = document.getElementById("CLOCATION"+i).options[document.getElementById("CLOCATION"+i).selectedIndex].value;//popup(CLOCATION1A);
		var ACHIEVE1A = document.getElementById("ACHIEVE"+i).value;//popup(ACHIEVE1A);
		// var EFM1A = document.getElementById("EFM"+i).options[document.getElementById("EFM"+i).selectedIndex].value;//popup(EFM1A);
		 //var EFY1A = document.getElementById("EFY"+i).options[document.getElementById("EFY"+i).selectedIndex].value;//popup(EFY1A);
		//var ETM1A = document.getElementById("ETM"+i).options[document.getElementById("ETM"+i).selectedIndex].value;//popup(ETM1A);
		var ETY1A = document.getElementById("ETY"+i).options[document.getElementById("ETY"+i).selectedIndex].value;//popup(ETY1A);
		var CUR_DATE1A = document.getElementById("CUR_DATE"+i).value;//popup(CUR_DATE1A);
		//popup('Continue: '+CUR_DATE1A);	 
		if(document.getElementById("CUR_DATE"+i).checked)
		{	//popup('First If');
			if(COMPANYA != "" || EPOSITION1A!="" ||document.getElementById("BUSINESS"+i).options[document.getElementById("BUSINESS"+i).selectedIndex].value!="no" || DEPT1A!="" || DUTY1A!="" || document.getElementById("CLOCATION"+i).options[document.getElementById("CLOCATION"+i).selectedIndex].value!="Select" || ACHIEVE1A!="" || document.getElementById("CUR_DATE1").value==1)
			 {
				if(COMPANYA == "")
				{
					popup("Please mention name of the EMPLOYER in experience block "+i+" !");
					document.getElementById("COMPANY"+i).focus();
					return false;
				}
				if(EPOSITION1A=="")
				{
					popup("Please mention POSITION HELD in experience block "+i+" !");
					document.getElementById("EPOSITION"+i).focus();
					return false;				
				}
				if(document.getElementById("BUSINESS"+i).options[document.getElementById("BUSINESS"+i).selectedIndex].value=="no")
				{
					popup("Please select the INDUSTRY in experience block "+i+" !");
					document.getElementById("BUSINESS"+i).focus();
					return false;				
				}
				if(DEPT1A=="")
				{
					popup("Please mention DEPARTMENT name in experience block "+i+" !");
					document.getElementById("DEPT"+i).focus();
					return false;				
				}
				if(DUTY1A=="")
				{
					popup("Please write MAJOR RESPONSIBILITIES in experience block "+i+" !");
					document.getElementById("DUTY"+i).focus();
					return false;				
				}
				if(document.getElementById("CLOCATION"+i).options[document.getElementById("CLOCATION"+i).selectedIndex].value=="Select")
				{
					popup("Please select JOB LOCATION in experience block "+i+" !");
					document.getElementById("CLOCATION"+i).focus();
					return false;				
				}
				if(ACHIEVE1A=="")
				{
					popup("Please mention KEY ACHIEVEMENT in experience block "+i+" !");
					document.getElementById("ACHIEVE"+i).focus();
					return false;				
				}
			 }//if check 
		}
		else
		{	//popup('Else Exp: [Employer = '+COMPANYA+' Position = '+EPOSITION1A+'Industry = '+document.getElementById("BUSINESS"+i).options[document.getElementById("BUSINESS"+i).selectedIndex].value+' Dept = '+DEPT1A+'Duty = '+DUTY1A+'Location = '+document.getElementById("CLOCATION"+i).options[document.getElementById("CLOCATION"+i).selectedIndex].value+' Achievement = '+ACHIEVE1A+' From Month = '+document.getElementById("EFM"+i).options[document.getElementById("EFM"+i).selectedIndex].value+' From Year = '+document.getElementById("EFY"+i).options[document.getElementById("EFY"+i).selectedIndex].value+' To Month= '+document.getElementById("ETM"+i).options[document.getElementById("ETM"+i).selectedIndex].value+' To Year = '+ document.getElementById("ETY"+i).options[document.getElementById("ETY"+i).selectedIndex].value);
																																																																																																																																																																																																				  
			if(COMPANYA != "" || EPOSITION1A!="" ||document.getElementById("BUSINESS"+i).options[document.getElementById("BUSINESS"+i).selectedIndex].value!="no" || DEPT1A!="" || DUTY1A!="" || document.getElementById("CLOCATION"+i).options[document.getElementById("CLOCATION"+i).selectedIndex].value!="Select" || ACHIEVE1A!="" || document.getElementById("EFM"+i).options[document.getElementById("EFM"+i).selectedIndex].value!="mon" || document.getElementById("EFY"+i).options[document.getElementById("EFY"+i).selectedIndex].value!="year" || document.getElementById("ETM"+i).options[document.getElementById("ETM"+i).selectedIndex].value != "mon" || document.getElementById("ETY"+i).options[document.getElementById("ETY"+i).selectedIndex].value != "year")
			{
				if(COMPANYA == "")
				{
					popup("Please mention name of the EMPLOYER in experience block "+i+"!");
					document.getElementById("COMPANY"+i).focus();
					return false;
				}
				if(EPOSITION1A=="")
				{
					popup("Please mention POSITION HELD in experience block "+i+"!");
					document.getElementById("EPOSITION"+i).focus();
					return false;				
				}
				//popup(document.getElementById("BUSINESS"+i).selectedIndex + "" + i)
				if(document.getElementById("BUSINESS"+i).options[document.getElementById("BUSINESS"+i).selectedIndex].value=="no")
				{
					popup("Please select the INDUSTRY in experience block "+i+" !");
					document.getElementById("BUSINESS"+i).focus();
					return false;				
				}
				if(DEPT1A=="")
				{
					popup("Please mention DEPARTMENT name in experience block "+i+" !");
					document.getElementById("DEPT"+i).focus();
					return false;				
				}
				if(DUTY1A=="")
				{
					popup("Please write MAJOR RESPONSIBILITIES in experience block "+i+" !");
					document.getElementById("DUTY"+i).focus();
					return false;				
				}
				if(document.getElementById("CLOCATION"+i).options[document.getElementById("CLOCATION"+i).selectedIndex].value=="Select")
				{
					popup("Please select JOB LOCATION in experience block "+i+" !");
					document.getElementById("CLOCATION"+i).focus();
					return false;				
				}
				if(ACHIEVE1A=="")
				{
					popup("Please mention KEY ACHIEVEMENT in experience block "+i+" !");
					document.getElementById("ACHIEVE"+i).focus();
					return false;				
				}
				if(document.getElementById("EFM"+i).options[document.getElementById("EFM"+i).selectedIndex].value=="mon")
				{
					popup("Please select MONTH of SERVED FROM in experience block "+i+" !");
					document.getElementById("EFM"+i).focus();
					return false;				
				}
				if(document.getElementById("EFY"+i).options[document.getElementById("EFY"+i).selectedIndex].value=="year")
				{
					popup("Please select YEAR of SERVED FROM in experience block "+i+" !");
					document.getElementById("EFY"+i).focus();
					return false;				
				}
				if(document.getElementById("ETM"+i).options[document.getElementById("ETM"+i).selectedIndex].value=="mon")
				{
					popup("Please select MONTH of SERVED TO in experience block "+i+" !");
					document.getElementById("ETM"+i).focus();
					return false;				
				}
				if(document.getElementById("ETY"+i).options[document.getElementById("ETY"+i).selectedIndex].value=="year")
				{
					popup("Please select YEAR of SERVED TO in experience block "+i+" !");
					document.getElementById("ETY"+i).focus();
					return false;				
				}
			}
		}
	/*else if((ETM1A=="mon" || ETY1A=="year") & !form.CUR_DATE1.checked)
		{
		popup("!!!!!!!!!!!!!!!!");
		form.ETM1.focus();
		return false;
		} //  others blank 
	*/  
	 //popup('Mention your position properly!');
	   // form.EPOSITION1.focus();
	 //   return false;
//}//companya
	//}//if exits
	} //for
//************************** end EXP FIELD not MUST but if not blank *****				


	//SALARY CHECK
	var cSal = document.getElementById("CUR_SAL").value;
	if(cSal != "" && isNaN(cSal))
	{
		popup("Please mention only numeric value for PRESENT SALARY");
		document.getElementById("CUR_SAL").focus();
		return false;
	}
	var eSal = document.getElementById("EXPECTED_SAL").value;
	if(eSal == "" || isNaN(eSal))
	{
		popup("Please mention only numeric value for EXPECTED SALARY");
		document.getElementById("EXPECTED_SAL").focus();
		return false;
	}
	
	
	//JOINING DATE CHECKING
	var joinDay=document.getElementById("JOIN_DAY").options[document.getElementById("JOIN_DAY").selectedIndex].value;
	var joinMon=document.getElementById("JOIN_MON").options[document.getElementById("JOIN_MON").selectedIndex].value;
	var joinYr=document.getElementById("JOIN_YR").options[document.getElementById("JOIN_YR").selectedIndex].value;
	
	if(joinDay!="day" && joinMon!="mon" && joinYr!="year")
	{
		//Alright
	}
	else
	{
		if(joinDay=="day")
		{
			popup('Please select your Joining Date.');
			form.JOIN_DAY.focus();
			return false;		
		}
		if(joinMon=="mon")
		{
			popup('Please select your Joining Date.');
			form.JOIN_MON.focus();
			return false;		
		}
		if(joinYr=="year")
		{
			popup('Please select your Joining Date.');
			form.JOIN_YR.focus();
			return false;		
		}
	}
	
//password strt	
	var PASS1=document.getElementById("PWORD").value;//popup(PASS1);
	var PASS2=document.getElementById("PWORD2").value;//form.PWORD1.value;popup(PASS2);
	//popup(PASS1);
	//popup(PASS2);
	if(PASS1=="" || PASS2=="")
	{
		popup('Please enter your PASSWORD.');
		document.getElementById("PWORD").focus();
		return false;
	}
	
	if(PASS1!=PASS2)
	{
		popup('Please be sure of your PASSWORD \n Enter same PASSWORD in the fields');
		document.getElementById("PWORD").focus;
		return false;
	}
	//password  end
	
	
	return true;
} // end of validate func()


function wrt_dy_DESC_yr()
{
	current_year = new Date().getFullYear();
	//popup(current_year);
	year_dy_value = "";

	origin_year = parseInt(current_year)-50;
	for(i = parseInt(current_year)+3 ; i >= origin_year ; i--)
	{
		//document.write(i + '<br>');
		year_dy_value  += "<option value='"+i+"'>"+i+"</option>";
	}
    //year_dy_value  += "</select>";
    return year_dy_value;
//document.write(year_dy_value);	
}// end wrt_dy_DESC_yr()

list_yea="<option value='year' selected>year </option>";
list_yea +=wrt_dy_DESC_yr();

/*
function createExp()
{
	var cd=dd;
	//popup(cd);
	
	document.all.EXP_ALL.innerHTML="<table width='90%' border='0' cellspacing='1' cellpadding='0' align='center' bgcolor='#DB193D'>  <tr bgcolor='#DB193D'>    <td height='12' bgcolor='#DB193D'> <div align='center'><font face='Arial, Helvetica, sans-serif'><b><font color='#006666' size='4'>       <font size='3' color='#FFFFFF'>WORK EXPERIENCE</font></font></b></font></div></td></tr><tr bgcolor='#FFFFFF'>   <td bgcolor='19B5F1'> <div align='center'>       <table width='97%' border='0' cellspacing='0' cellpadding='3' align='center' bgcolor='19B5F1'>        <tr>           <td colspan='4' height='23'> <div align='center'><font size='2'><font size='1' face='Verdana' color='#990033'>N. B.: Please use seperate Career Path profile/s for each position               held in the same company.</font></font></div></td>        </tr>        <tr>           <td colspan='4' height='23'> <font size='2'><b><font face='Verdana' color='#174082'>Work             Experience 1</font><font size='1' color='#174082'><font face='Verdana'>             </font></font></b></font> </td>        </tr>        <tr>           <td width='18%'><font face='Verdana'><b><font color='#FFFFFF' size='1'><font color='#000000'>Employer</font></font></b></font></td>          <td width='35%'><b><font face='Verdana, Arial, Helvetica, sans-serif' color='#000000' size='1'>             <input type='text' id='COMPANY1' name='COMPANY1'  maxlength='200'>            </font></b></td>          <td width='14%'><font face='Verdana'><b><font color='#000000' size='1'>Position Held </font></b></font></td> <td width='33%'><b><font face='Verdana, Arial, Helvetica, sans-serif' color='#000000' size='1'>             <input type='text' id='EPOSITION1' name='EPOSITION1' size='22'   maxlength='150'>            </font></b></td>        </tr>        <tr>           <td width='18%'><font face='Verdana'><b><font color='#FFFFFF' size='1'><font color='#000000'>Industry</font></font></b></font></td>          <td width='35%'><b><font face='Verdana, Arial, Helvetica, sans-serif' color='#000000' size='1'>             <select id='BUSINESS1' name='BUSINESS1'>              <option value='no' selected>Select </option>              <option value='Oil & Gas'>Oil & Gas </option>              <option value='Energy/Power Development'>Energy/Power Development               </option>              <option value='Insurance/Banking'>Insurance/Banking </option>              <option value='Telecommunication'>Telecommunication </option>              <option value='Airlines'>Airlines </option>              <option value='Defense'>Defense </option>              <option value='Construction/Cement'>Construction/Cement </option>              <option value='Real Estate'>Real Estate </option>              <option value='NGO'>NGO </option>              <option value='United Nations'>United Nations </option>              <option value='Information Technology'>Information Technology               </option>              <option value='Shipping'>Shipping </option>              <option value='Logistics'>Logistics </option>              <option value='Distribution'>Distribution </option>              <option value='Media'>Media </option>              <option value='Press'>Press </option>              <option value='Automobile'>Automobile </option>              <option value='Entertainment'>Entertainment </option>              <option value='Travel/Tourism'>Travel/Tourism </option>              <option value='Healthcare'>Healthcare </option>              <option value='Law Enforcement'>Law Enforcement </option>              <option value='Legal Advisory'>Legal Advisory </option>              <option value='Pharmaceutical'>Pharmaceutical </option>              <option value='Garments/Textile'>Garments/Textile </option>              <option value='FMCG'>FMCG </option>              <option value='Research/Consultancy'>Research/Consultancy </option>              <option value='International Trade'>International Trade </option>              <option value='Agriculture'>Agriculture </option>              <option value='Fertilizer'>Fertilizer </option>              <option value='Chemical/Pesticides'>Chemical/Pesticides </option>              <option value='Service'>Service </option>              <option value='Others'>Others</option></select>            </font></b></td>          <td width='14%'><font face='Verdana'><b><font color='#FFFFFF' size='1'><font color='#000000'>Department</font></font></b></font></td>          <td width='33%'><b><font face='Verdana, Arial, Helvetica, sans-serif' color='#000000' size='1'>             <input type='text' name='DEPT1' id='DEPT1' size='22'  maxlength='150'>            </font></b></td></tr>        <tr><td width='18%' height='37'><font face='Verdana'><b><font color='#000000' size='1'>Major             Responsibilities</font></b></font></td>          <td colspan='3' height='37'><b><font face='Verdana, Arial, Helvetica, sans-serif' color='#000000' size='1'>             <textarea class='textarea' name='DUTY1' id='DUTY1' cols='40'></textarea></font></b></td></tr>        <tr><td width='18%'><font face='Verdana'><b><font color='#FFFFFF' size='1'><font color='#000000'>Job Location</font></font></b></font></td>          <td width='35%'><b><font face='Verdana, Arial, Helvetica, sans-serif' color='#000000' size='1'><select name='CLOCATION1' id='CLOCATION1'><option value='Select'>Select</option> <option value='Overseas'>Overseas</option>              <option value='Local'>Local</option>            </select>            </font></b></td>          <td width='14%'><strong><font size='1' face='Verdana'>Key Achievement</font></strong></td>          <td width='33%'><input name='ACHIEVE1' type='text' id='ACHIEVE1' size='30' maxlength='255'></td>        </tr>        <tr>           <td width='18%' height='32'><font size='1' face='Verdana'><b>Served             From</b></font></td>          <td width='35%' height='32'> <font size='1'><b><font face='Verdana, Arial, Helvetica, sans-serif'>             <select id='EFM1' name='EFM1'>              <option value='mon' selected>mon</option>              <option value='01'>Jan</option>              <option value='02'>Feb</option>              <option value='03'>Mar</option>              <option value='04'>Apr</option>              <option value='05'>May</option>              <option value='06'>Jun</option>              <option value='07'>Jul</option>              <option value='08'>Aug</option>              <option value='09'>Sep</option>              <option value='10'>Oct</option>              <option value='11'>Nov</option>              <option value='12'>Dec</option>            </select>            </font><font size='1'><b><font face='Verdana, Arial, Helvetica, sans-serif'>             <select id='EFY1' name='EFY1'>"+list_yea+"</select>            </font></b></font><font face='Verdana, Arial, Helvetica, sans-serif'>             </font></b></font></td>          <td width='14%' height='32'><font size='1' face='Verdana'><b>Served             Till</b></font></td>          <td width='33%' height='32'> <font size='1'><b><font face='Verdana, Arial, Helvetica, sans-serif'>             <select name='ETM1'>              <option value='mon' selected>mon</option>              <option value='01'>Jan</option>              <option value='02'>Feb</option>              <option value='03'>Mar</option>              <option value='04'>Apr</option>              <option value='05'>May</option>              <option value='06'>Jun</option>              <option value='07'>Jul</option>              <option value='08'>Aug</option>              <option value='09'>Sep</option>              <option value='10'>Oct</option>              <option value='11'>Nov</option>              <option value='12'>Dec</option>            </select>            <select name='ETY1'>"+list_yea+"</select>            (now             <input class='rem_border' type='checkbox' name='CUR_DATE1' value='"+cd+"'>            )</font></b></font></td>        </tr>        <tr>           <td colspan='4' height='32'>&nbsp;</td>        </tr>      </table>      <font size='2'><b> <font size='1' face='Verdana' color='#006666'> </font></b></font><font face='Verdana' color='#006666'>   </font></div></td></tr></table>"
	document.all.EXP_BUT.innerHTML="<br><table width='77%' align='center' cellpadding='0' cellspacing='0'>        <tr>           <td colspan='2'> <div align='center'><font face='Verdana' size='2' color='#0000FF'>               <input type='hidden' name='count_exp' value='1'>              <input type='hidden' name='count_exp' value='1'>              </font>               <input type=button name='add_exp' value='Add more (if needed)' onClick='createForm_exp(form1);'>            </div></td>        </tr>      </table>"
}

function countChoices(myform,objbox)
{
	i=parseInt(myform.hide_box.value);

	if(objbox.checked)
	{
		myform.hide_box.value=++i;
		//popup(parseInt(myform.hide_box.value));
	}
	
	if(!objbox.checked)
	{
		myform.hide_box.value=--i;
		//popup(parseInt(myform.hide_box.value));
	}
	/* strt---- job binding 2
	if(parseInt(myform.hide_box.value) > 3){
	popup("You can\'t select more than \n two jobs to apply !");
	objbox.checked = false;
	myform.hide_box.value=--i;
		} end---- job binding 2*/
		
		/**/ //strt---- job binding 1
	/*
	if(parseInt(myform.hide_box.value) > 4)
	{
		popup("You can\'t select more than \n three preferred areas!");
		objbox.checked = false;
		myform.hide_box.value=--i;
	} //end---- job binding 1
}
*/

function countWrkPref(myform,objbox)
{
	i=parseInt(myform.work_box.value);

	if(objbox.checked)
	{
		myform.work_box.value=++i;
		//popup(parseInt(myform.hide_box.value));
	}
	
	if(!objbox.checked)
	{
		myform.work_box.value=--i;
		//popup(parseInt(myform.hide_box.value));
	}
	/* strt---- job binding 2
	if(parseInt(myform.hide_box.value) > 3){
	popup("You can\'t select more than \n two jobs to apply !");
	objbox.checked = false;
	myform.hide_box.value=--i;
		} end---- job binding 2*/
		
		/**/ //strt---- job binding 1
	if(parseInt(myform.work_box.value) > 4)
	{
		popup("You can\'t select more than \n three preferred work areas!");
		objbox.checked = false;
		myform.work_box.value=--i;
	} 
		//end---- job binding 1
}

function countLetter(frm_nm, nm, chr_lmt)
{
	//popup(nm);E_CUR = nm;eval(nm);//nm;document.form1.
	//popup(E_CUR.value)
	//tfVal = parseInt(E_CUR.value.length);tfVal = parseInt(document.form1.nm.value.length);
	//popup(nm.Source());
	//popup(frm_nm + nm + chr_lmt);
	//ev_v = eval("document." + frm_nm +"."+ nm +".value") ;
	form_name = frm_nm.id ;
	ev_v = eval("document."+form_name+"."+ nm +".value")
	//popup( ev_v);
	tfVal = parseInt(ev_v.length);//tfVal = parseInt(document.form1.nm.value.length);
	if(tfVal != 0)
	{
		window.status = tfVal ; 
		txt_area = document.getElementById(nm+"_sp1");
		txt_area.innerHTML = "<a style=\"color:#3300FF;font-family=Arial;font-size:8pt; position:relative; left: -1px;\">You wrote <b>"+tfVal+"</b> character(s)</a>" ;
		//document.all.sp1.innerHTML = tfVal ;
		//eval("document.all."+nm+"_sp1.innerHTML") = tfVal ;
		 
		//window.status = tfVal + 1;
		if(tfVal >= parseInt(chr_lmt)+1)//if(tfVal >= 200)
		{
				popup("Please stop writing as you are crossing the "+chr_lmt+" letter limit!")
		}
	
		if(tfVal > parseInt(chr_lmt))
		{
			nb = eval("document.form1."+nm+".value").substr(0,parseInt(chr_lmt));
			txtara = eval("document.form1."+nm) ;
			txtara.value =  nb;
			span_area = eval("document.all."+nm+"_sp1");
			span_area.innerHTML ="<a style=\"color:#3300FF;font-family=Arial;font-size:8pt; position:relative; left: -1px;\">You wrote <b>"+nb.length+"</b> character(s)</a>" ;
			 //popup(nb)
		}
	}
	else
	{
		window.status = "";
		txt_area = eval("document.all."+nm+"_sp1");
		txt_area.innerHTML = "";
		//document.all.sp1.innerHTML = "";
	}
}//end countLetter fnc

// FUNCTION FOR NOW OPTION IN EXP BLOCKS
	function nowOpt(mynum)
	{
		myn=parseInt(mynum);
		//popup(myn);
		if(document.getElementById('CUR_DATE'+myn).checked)
		{
			//popup('True');
			document.getElementById('ETM'+myn).disabled=true;
			document.getElementById('ETY'+myn).disabled=true;
		}
		else
		{
			document.getElementById('ETM'+myn).disabled=false;
			document.getElementById('ETY'+myn).disabled=false;
			//popup('False');
		}
	}
	
/*function createEdu(myobj,place)
{
	obj_name = "sp_edu"+place;
	if(myobj.value == "Others")
	{
		document.getElementById("sp_edu"+place).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Institute Name</font><br><input type='text' name='txtUniversity"+place+"' id='txtUniversity"+place+"' maxlength='255' style='width:150px;font-size:7pt;background-color:#F1F7DE'>"
	}	

	else if(myobj.value == "Foreign")
	{
		document.getElementById("sp_edu"+place).innerHTML ="<font face='Verdana' color='#FF0000' size='1'>* Campus location<br><select id='ddlCountry"+place+"' name='ddlCountry"+place+"' style='width:150px;font-size:7pt;background-color:#F1F7DE;'>  <option value='Afghanistan' id='AF'>Afghanistan </option>  <option value='Albania' id='AL'>Albania </option>  <option value='Algeria' id='DZ'>Algeria </option>  <option value='American Samoa' id='AS'>American Samoa </option>  <option value='Andorra' id='AD'>Andorra </option>  <option value='Angola' id='AO'>Angola </option>  <option value='Anguilla' id='AI'>Anguilla </option>  <option value='Antarctica' id='AQ'>Antarctica </option>  <option value='Antigua and Barbuda' id='AG'>Antigua and Barbuda</option>  <option value='Argentina' id='AR'>Argentina</option>  <option value='Armenia' id='AM'>Armenia</option>  <option value='Aruba' id='AW'>Aruba</option>  <option value='Australia' id='AU'>Australia</option>  <option value='Austria' id='AT'>Austria</option>  <option value='Azerbaijan' id='AZ'>Azerbaijan</option>  <option value='Bahamas' id='BS'>Bahamas</option>  <option value='Bahrain' id='BH'>Bahrain</option>  <option value='Bangladesh' selected id='BD'>Bangladesh</option>  <option value='Barbados' id='BB'>Barbados</option>  <option value='Belarus' id='BY'>Belarus</option>  <option value='Belgium' id='BE'>Belgium</option>  <option value='Belize' id='BZ'>Belize</option>  <option value='Benin' id='BJ'>Benin</option>  <option value='Bermuda' id='BM'>Bermuda</option>  <option value='Bhutan' id='BT'>Bhutan</option>  <option value='Bolivia' id='BO'>Bolivia</option>  <option value='Bosnia and Herzegovina' id='BA'>Bosnia and Herzegovina</option>  <option value='Botswana' id='BW'>Botswana</option>  <option value='Bouvet Island' id='BV'>Bouvet Island</option>  <option value='Brazil' id='BR'>Brazil</option>  <option value='British Indian Ocean Territory' id='IO'>British Indian Ocean Territory</option>  <option value='Brunei' id='BN'>Brunei</option>  <option value='Bulgaria' id='BG'>Bulgaria</option>  <option value='Burkina Faso' id='BF'>Burkina Faso</option>  <option value='Burundi' id='BI'>Burundi</option>  <option value='Cambodia' id='KH'>Cambodia</option>  <option value='Cameroon' id='CM'>Cameroon</option>  <option value='Canada' id='CA'>Canada</option>  <option value='Cape Verde' id='CV'>Cape Verde</option>  <option value='Cayman Islands' id='KY'>Cayman Islands</option>  <option value='Central African Republic' id='CF'>Central African Republic</option>  <option value='Chad' id='TD'>Chad</option>  <option value='Chile' id='CL'>Chile</option>  <option value='China' id='CN'>China</option>  <option value='Christmas Island' id='CX'>Christmas Island</option>  <option value='Cocos (Keeling) Islands' id='CC'>Cocos (Keeling) Islands</option>  <option value='Colombia' id='CO'>Colombia</option>  <option value='Comoros' id='KM'>Comoros</option>  <option value='Congo' id='CG'>Congo</option>  <option value='Cook Islands' id='CK'>Cook Islands</option>  <option value='Costa Rica' id='CR'>Costa Rica</option>  <option value='Côte d&#39;Ivoire' id='CI'>Côte d&#39;Ivoire</option>  <option value='Croatia (Hrvatska)' id='HR'>Croatia (Hrvatska)</option>  <option value='Cuba' id='CU'>Cuba</option>  <option value='Cyprus' id='CY'>Cyprus</option>  <option value='Czech Republic' id='CZ'>Czech Republic</option>  <option value='Congo (DRC)' id='CD'>Congo (DRC)</option>  <option value='Denmark' id='DK'>Denmark</option>  <option value='Djibouti' id='DJ'>Djibouti</option>  <option value='Dominica' id='DM'>Dominica</option>  <option value='Dominican Republic' id='DO'>Dominican Republic</option>  <option value='East Timor' id='TP'>East Timor</option>  <option value='Ecuador' id='EC'>Ecuador</option>  <option value='Egypt' id='EG'>Egypt</option>  <option value='El Salvador' id='SV'>El Salvador</option>  <option value='Equatorial Guinea' id='GQ'>Equatorial Guinea</option>  <option value='Eritrea' id='ER'>Eritrea</option>  <option value='Estonia' id='EE'>Estonia</option>  <option value='Ethiopia' id='ET'>Ethiopia</option>  <option value='Falkland Islands (Islas Malvinas)' id='FK'>Falkland Islands (Islas Malvinas)</option>  <option value='Faroe Islands' id='FO'>Faroe Islands</option>  <option value='Fiji Islands' id='FJ'>Fiji Islands</option>  <option value='Finland' id='FI'>Finland</option>  <option value='France' id='FR'>France</option>  <option value='French Guiana' id='GF'>French Guiana</option>  <option value='French Polynesia' id='PF'>French Polynesia</option>  <option value='French Southern and Antarctic Lands' id='TF'>French Southern and Antarctic Lands</option>  <option value='Gabon' id='GA'>Gabon</option>  <option value='Gambia' id='GM'>Gambia</option>  <option value='Georgia' id='GE'>Georgia</option>  <option value='Germany' id='DE'>Germany</option>  <option value='Ghana' id='GH'>Ghana</option>  <option value='Gibraltar' id='GI'>Gibraltar</option>  <option value='Greece' id='GR'>Greece</option>  <option value='Greenland' id='GL'>Greenland</option>  <option value='Grenada' id='GD'>Grenada</option>  <option value='Guadeloupe' id='GP'>Guadeloupe</option>  <option value='Guam' id='GU'>Guam</option>  <option value='Guatemala' id='GT'>Guatemala</option>  <option value='Guinea' id='GN'>Guinea</option>  <option value='Guinea-Bissau' id='GW'>Guinea-Bissau</option>  <option value='Guyana' id='GY'>Guyana</option>  <option value='Haiti' id='HT'>Haiti</option>  <option value='Heard Island and McDonald Islands' id='HM'>Heard Island and McDonald Islands</option>  <option value='Honduras' id='HN'>Honduras</option>  <option value='Hong Kong SAR' id='HK'>Hong Kong SAR</option>  <option value='Hungary' id='HU'>Hungary</option>  <option value='Iceland' id='IS'>Iceland</option>  <option value='India' id='IN'>India</option>  <option value='Indonesia' id='ID'>Indonesia</option>  <option value='Iran' id='IR'>Iran</option>  <option value='Iraq' id='IQ'>Iraq</option>  <option value='Ireland' id='IE'>Ireland</option>  <option value='Israel' id='IL'>Israel</option>  <option value='Italy' id='IT'>Italy</option>  <option value='Jamaica' id='JM'>Jamaica</option>  <option value='Japan' id='JP'>Japan</option>  <option value='Jordan' id='JO'>Jordan</option>  <option value='Kazakhstan' id='KZ'>Kazakhstan</option>  <option value='Kenya' id='KE'>Kenya</option>  <option value='Kiribati' id='KI'>Kiribati</option>  <option value='Korea' id='KR'>Korea</option>  <option value='Kuwait' id='KW'>Kuwait</option>  <option value='Kyrgyzstan' id='KG'>Kyrgyzstan</option>  <option value='Laos' id='LA'>Laos</option>  <option value='Latvia' id='LV'>Latvia</option>  <option value='Lebanon' id='LB'>Lebanon</option>  <option value='Lesotho' id='LS'>Lesotho</option>  <option value='Liberia' id='LR'>Liberia</option>  <option value='Libya' id='LY'>Libya</option>  <option value='Liechtenstein' id='LI'>Liechtenstein</option>  <option value='Lithuania' id='LT'>Lithuania</option>  <option value='Luxembourg' id='LU'>Luxembourg</option>  <option value='Macao SAR' id='MO'>Macao SAR</option>  <option value='Macedonia, Former Yugoslav Republic of' id='MK'>Macedonia, Former Yugoslav Republic of</option>  <option value='Madagascar' id='MG'>Madagascar</option>  <option value='Malawi' id='MW'>Malawi</option>  <option value='Malaysia' id='MY'>Malaysia</option>  <option value='Maldives' id='MV'>Maldives</option>  <option value='Mali' id='ML'>Mali</option>  <option value='Malta' id='MT'>Malta</option>  <option value='Marshall Islands' id='MH'>Marshall Islands</option>  <option value='Martinique' id='MQ'>Martinique</option>  <option value='Mauritania' id='MR'>Mauritania</option>  <option value='Mauritius' id='MU'>Mauritius</option>  <option value='Mayotte' id='YT'>Mayotte</option>  <option value='Mexico' id='MX'>Mexico</option>  <option value='Micronesia' id='FM'>Micronesia</option>  <option value='Moldova' id='MD'>Moldova</option>  <option value='Monaco' id='MC'>Monaco</option>  <option value='Mongolia' id='MN'>Mongolia</option>  <option value='Montserrat' id='MS'>Montserrat</option>  <option value='Morocco' id='MA'>Morocco</option>  <option value='Mozambique' id='MZ'>Mozambique</option>  <option value='Myanmar' id='MM'>Myanmar</option>  <option value='Namibia' id='NA'>Namibia</option>  <option value='Nauru' id='NR'>Nauru</option>  <option value='Nepal' id='NP'>Nepal</option>  <option value='Netherlands' id='NL'>Netherlands</option>  <option value='Netherlands Antilles' id='AN'>Netherlands Antilles</option>  <option value='New Caledonia' id='NC'>New Caledonia</option>  <option value='New Zealand' id='NZ'>New Zealand</option>  <option value='Nicaragua' id='NI'>Nicaragua</option>  <option value='Niger' id='NE'>Niger</option>  <option value='Nigeria' id='NG'>Nigeria</option>  <option value='Niue' id='NU'>Niue</option>  <option value='Norfolk Island' id='NF'>Norfolk Island</option>  <option value='North Korea' id='KP'>North Korea</option>  <option value='Northern Mariana Islands' id='MP'>Northern Mariana Islands</option>  <option value='Norway' id='NO'>Norway</option>  <option value='Oman' id='OM'>Oman</option>  <option value='Pakistan' id='PK'>Pakistan</option>  <option value='Palau' id='PW'>Palau</option>  <option value='Panama' id='PA'>Panama</option>  <option value='Papua New Guinea' id='PG'>Papua New Guinea</option>  <option value='Paraguay' id='PY'>Paraguay</option>  <option value='Peru' id='PE'>Peru</option>  <option value='Philippines' id='PH'>Philippines</option>  <option value='Pitcairn Islands' id='PN'>Pitcairn Islands</option>  <option value='Poland' id='PL'>Poland</option>  <option value='Portugal' id='PT'>Portugal</option>  <option value='Puerto Rico' id='PR'>Puerto Rico</option>  <option value='Qatar' id='QA'>Qatar</option>  <option value='Reunion' id='RE'>Reunion</option>  <option value='Romania' id='RO'>Romania</option>  <option value='Russia' id='RU'>Russia</option>  <option value='Rwanda' id='RW'>Rwanda</option>  <option value='Samoa' id='WS'>Samoa</option>  <option value='San Marino' id='SM'>San Marino</option>  <option value='São Tomé and Príncipe' id='ST'>São Tomé and Príncipe</option>  <option value='Saudi Arabia' id='SA'>Saudi Arabia</option>  <option value='Senegal' id='SN'>Senegal</option>  <option value='Serbia and Montenegro' id='YU'>Serbia and Montenegro</option>  <option value='Seychelles' id='SC'>Seychelles</option>  <option value='Sierra Leone' id='SL'>Sierra Leone</option>  <option value='Singapore' id='SG'>Singapore</option>  <option value='Slovakia' id='SK'>Slovakia</option>  <option value='Slovenia' id='SI'>Slovenia</option>  <option value='Solomon Islands' id='SB'>Solomon Islands</option>  <option value='Somalia' id='SO'>Somalia</option>  <option value='South Africa' id='ZA'>South Africa</option>  <option value='South Georgia and the South Sandwich Islands' id='GS'>South Georgia and the South Sandwich Islands</option>  <option value='Spain' id='ES'>Spain</option>  <option value='Sri Lanka' id='LK'>Sri Lanka</option>  <option value='St. Helena' id='SH'>St. Helena</option>  <option value='St. Kitts and Nevis' id='KN'>St. Kitts and Nevis</option>  <option value='St. Lucia' id='LC'>St. Lucia</option>  <option value='St. Pierre and Miquelon' id='PM'>St. Pierre and Miquelon</option>  <option value='St. Vincent and the Grenadines' id='VC'>St. Vincent and the Grenadines</option>  <option value='Sudan' id='SD'>Sudan</option>  <option value='Suriname' id='SR'>Suriname</option>  <option value='Svalbard and Jan Mayen' id='SJ'>Svalbard and Jan Mayen</option>  <option value='Swaziland' id='SZ'>Swaziland</option>  <option value='Sweden' id='SE'>Sweden</option>  <option value='Switzerland' id='CH'>Switzerland</option>  <option value='Syria' id='SY'>Syria</option>  <option value='Taiwan' id='TW'>Taiwan</option>  <option value='Tajikistan' id='TJ'>Tajikistan</option>  <option value='Tanzania' id='TZ'>Tanzania</option>  <option value='Thailand' id='TH'>Thailand</option>  <option value='Togo' id='TG'>Togo</option>  <option value='Tokelau' id='TK'>Tokelau</option>  <option value='Tonga' id='TO'>Tonga</option>  <option value='Trinidad and Tobago' id='TT'>Trinidad and Tobago</option>  <option value='Tunisia' id='TN'>Tunisia</option>  <option value='Turkey' id='TR'>Turkey</option>  <option value='Turkmenistan' id='TM'>Turkmenistan</option>  <option value='Turks and Caicos Islands' id='TC'>Turks and Caicos Islands</option>  <option value='Tuvalu' id='TV'>Tuvalu</option>  <option value='Uganda' id='UG'>Uganda</option>  <option value='Ukraine' id='UA'>Ukraine</option>  <option value='United Arab Emirates' id='AE'>United Arab Emirates</option>  <option value='United Kingdom' id='UK'>United Kingdom</option>  <option value='United States' id='US'>United States</option>  <option value='United States Minor Outlying Islands' id='UM'>United States Minor Outlying Islands</option>  <option value='Uruguay' id='UY'>Uruguay</option>  <option value='Uzbekistan' id='UZ'>Uzbekistan</option>  <option value='Vanuatu' id='VU'>Vanuatu</option>  <option value='Vatican City' id='VA'>Vatican City</option>  <option value='Venezuela' id='VE'>Venezuela</option>  <option value='VietNam' id='VN'>VietNam</option>  <option value='Virgin Islands (British)' id='VG'>Virgin Islands (British)</option>  <option value='Virgin Islands' id='VI'>Virgin Islands</option>  <option value='Wallis and Futuna' id='WF'>Wallis and Futuna</option>  <option value='Yemen' id='YE'>Yemen</option>  <option value='Zambia' id='ZM'>Zambia</option>  <option value='Zimbabwe' id='ZW'>Zimbabwe</option></select><br>* Institute Name<br><input type='text' id='txtUniversity"+place+"' name='txtUniversity"+place+"' maxlength='255' style='width:150px;font-size:7pt;background-color:#F1F7DE'>";
	}
	else
	{
		document.getElementById("sp_edu"+place).innerHTML="";
	}
	return;
}*/

/**********************  FOR GRADE FIELD  *********************/
function createGrd_prev(myobj, place)
{
//Removed - kept in line 267
	objResultPoint = document.getElementById("txtResultPoint"+place);
	if(myobj.value == "12")
	{
		objResultPoint.disabled = true;
		//objResultPoint.style.background = "#FFEE00";
	}
	else
	{
		objResultPoint.disabled = false;
		//objResultPoint.style.background = "#FFFFFF";
	}
	return;
}

function LoadDegree(myobj, place)
{
	objDegree = "spnDegree"+place;
	objResult = "spnResult"+place;
	strValue = myobj.value;
	//popup(objDegree);
	
	if(strValue == 1)
	{
		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px' class ='text'><option value='S' selected='selected'>Select</option><option value='SSC'>SSC</option><option value='Dakhil'>Dakhil</option><option value='O Level'>O Level</option><option value='Vocational'>Vocational</option><option value='Equivalent'>Equivalent</option></select> ";
/*		document.getElementById(objResult).innerHTML = "<select name='ddlResult"+place+"' id='ddlResult"+place+"' style='FONT-SIZE:7pt;WIDTH:60px'><option value='-1' selected='selected'>Select</option><option value='15'>First</option><option value='14'>Second</option><option value='13'>Third</option><option value='0'>Grade</option></select> ";
		document.getElementById("spnDoctorate"+place).innerHTML = "";*/
	}
	
  else if(strValue == 2)
	{
		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px' class ='text'><option value='S' selected='selected'>Select</option><option value='BM'>Business Management</option><option value ='O'>Others</option></select> ";
	}
	
	
	else if(strValue == 3)
	{
		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px' class ='text'><option value='S' selected='selected'>Select</option><option value='HSC'>HSC</option><option value='Alim'>Alim</option><option value='Business Management'>Business Management</option><option value='A Level'>A Level</option><option value='Equivalent'>Equivalent</option></select> ";
		/*document.getElementById(objResult).innerHTML = "<select name='ddlResult"+place+"' id='ddlResult"+place+"' style='FONT-SIZE:7pt;WIDTH:60px'><option value='-1' selected='selected'>Select</option><option value='15'>First</option><option value='14'>Second</option><option value='13'>Third</option><option value='0'>Grade</option></select> ";
		document.getElementById("spnDoctorate"+place).innerHTML = "";*/
	}
  else if(strValue == 4)
	{
		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px'  class ='text' onchange='entryOthers(this,3);'><option value='S' selected='selected'>Select</option><option value='BCom'>BCom</option><option value='BSS'>BSS</option><option value='BA'>BA</option><option value='BSc'>BSc</option><option value='O'>Others</option></select> ";
	
	}
	else if(strValue == 5)
	{
			document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px' class ='text'  onchange='entryOthers(this,3);'><option value='S' selected='selected'>Select</option><option value='BCom'>BCom</option><option value='BSS'>BSS</option><option value='BA'>BA</option><option value='BSc'>BSc</option><option value='BBA'>BBA</option><option value='BBS'>BBS</option><option value='O'>Others</option></select> ";
	/*	<option value='Bachelor(Hons)'>Bachelor(Hons)</option>
	document.getElementById(objResult).innerHTML = "<select name='ddlResult"+place+"' id='ddlResult"+place+"' style='FONT-SIZE:7pt;WIDTH:60px'><option value='-1' selected='selected'>Select</option><option value='15'>First</option><option value='14'>Second</option><option value='13'>Third</option><option value='0'>Grade</option></select> ";
		document.getElementById("spnDoctorate"+place).innerHTML = "";*/
	}
	else if(strValue == 6)
	{	
		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px' class ='text'  onchange='entryOthers(this,4);' ><option value='S' selected='selected'>Select</option><option value='MBA'>MBA</option><option value='MBM'>MBM</option><option value='MBS'>MBS</option><option value='MCom'>MCom</option><option value='MSc'>MSc</option><option value='MSS'>MSS</option><option value='MA'>MA</option><option value='MS'>MS</option><option value='O'>Others</option></select> ";
		/*<option value='MCom'>MCom</option>
		document.getElementById(objResult).innerHTML = "<select name='ddlResult"+place+"' id='ddlResult"+place+"' style='FONT-SIZE:7pt;WIDTH:60px' onChange='return createGrd(this,"+place+");'><option value='-1' selected='selected'>Select</option><option value='15'>First</option><option value='14'>Second</option><option value='13'>Third</option><option value='12'>Appeared</option><option value='0'>Grade</option></select> ";
		document.getElementById("spnDoctorate"+place).innerHTML = "";*/
	}
	else if(strValue == 7 ||  strValue == 8 || strValue == 9)
	{
		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='WIDTH:80px' class ='text' onchange='entryOthers(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='O'>Others</option></select> ";
		/*document.getElementById(objResult).innerHTML = "<select name='ddlResult"+place+"' id='ddlResult"+place+"' style='FONT-SIZE:7pt;WIDTH:60px' onChange='return createGrd(this,"+place+");'><option value='-1' selected='selected'>Select</option><option value='15'>First</option><option value='14'>Second</option><option value='13'>Third</option><option value='12'>Appeared</option><option value='0'>Grade</option></select> ";*/
	}
	else
	{
//		document.getElementById(objDegree).innerHTML = "<select name='EDUCATION"+place+"' id='EDUCATION"+place+"' style='FONT-SIZE:7pt;WIDTH:60px' ><option value='S' selected='selected'>Select</option></select> ";
//		document.getElementById(objResult).innerHTML = "<select name='ddlResult"+place+"' id='ddlResult"+place+"' style='FONT-SIZE:7pt;WIDTH:60px'><option value='-1' selected='selected'>Select</option></select> ";
//		document.getElementById("spnDoctorate"+place).innerHTML = "";
	}
	
}
// 
//function LoadJubject(myobj, place)
//{
//	objSubject = "spnSubject"+place;
//	strValue = myobj.value;
//	//popup(strValue);
//	/*   */
//	if(strValue == "MBM" || strValue == "BCom(Pass)" || strValue == "BA(Pass)" || strValue == "BSS(Pass)" || strValue == "BSc(Pass)")
//	{
//		//popup(strValue);
//		//document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' ><option value='NA'>NA</option></select> ";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}
//	
//	else if(strValue == "MBS" || strValue == "BBS")
//	{
//		//document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' ><option value='S'>Select</option><option value='Management'>Management</option><option value='Accounting'>Accounting</option><option value='Marketing'>Marketing</option><option value='Finance'>Finance</option><option value='Banking'>Banking</option><option value='Human Resource Management'>Human Resource Management</option><option value='Management Information System'>Management Information System</option><option value='International Business'>International Business</option><option value='Strategic Management'>Strategic Management</option></select> ";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}
//	
//	/*  */
//	else if(strValue == "HSC" || strValue == "Alim" || strValue == "Business Management" || strValue == "A Level" || strValue == "Equivalent" || strValue == "SSC" || strValue == "Dakhil" || strValue == "Dakhil" || strValue == "O Level" || strValue == "Vocational")
//	{
//		//document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' ><option value='S'>Select</option><option value='Science'>Science</option><option value='Commerce'>Commerce</option><option value='Humanities'>Humanities</option><option value='Business Management'>Business Management</option><option value='Business Studies'>Business Studies</option></select> ";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}
//	
//	
//	else if(strValue == "BBA" || strValue == "MBA")
//	{
//	//	document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' onchange='return LoadOthers(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='Accounting'>Accounting</option><option value='Management'>Management</option><option value='Finance'>Finance</option><option value='Marketing'>Marketing</option><option value='Human Resource Management'>Human Resource Management</option><option value='Accounting Information System'>Accounting Information System</option><option value='Management Information System'>Management Information System</option><option value='Banking'>Banking</option><option value='International Business'>International Business</option><option value='Bank Management'>Bank Management</option><option value='Others'>Others</option></select> ";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}
//	else if(strValue == "Bachelor(Hons)" || strValue == "Masters")
//	{
//		//document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' onchange='return LoadOthers(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='CSE'>CSE</option><option value='Economics'>Economics</option><option value='Accounting'>Accounting</option><option value='Management'>Management</option><option value='Finance'>Finance</option><option value='Marketing'>Marketing</option><option value='English'>English</option><option value='Banking'>Banking</option><option value='Statistics'>Statistics</option><option value='Law'>Law</option><option value='Mathematics'>Mathematics</option><option value='Mechanical Engg.'>Mechanical Engg.</option><option value='Electrical Engg.'>Electrical Engg.</option><option value='Civil Engg.'>Civil Engg.</option><option value='Others'>Others</option></select> ";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}	
///// REMOVED AND KEPT AT THE END OF THIS PAGE (Line 273)
//	else if(strValue == "Others")
//	{
//	//	document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' onchange='return LoadOthers(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='Others'>Others</option></select> ";
//		document.getElementById("spnDoctorate"+place).innerHTML = "<input name='txtDoctorate"+place+"' type='text' class='text' id='txtDoctorate"+place+"' style='width:70px;' />";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}
//	else
//	{
//		//document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' ><option value='S' selected='selected'>Select</option></select> ";
//		document.getElementById("spnDoctorate"+place).innerHTML = "";
//		document.getElementById("spnOthers"+place).innerHTML = "";
//	}
//}

function LoadOthers(myobj, place)
{
	objOthers = "spnOthers"+place;
	strValue = myobj.value;
	//popup(objOthers);
	
	/*  */ 
	if(strValue == "Others")
	{
		document.getElementById(objOthers).innerHTML = "<input name='txtOthers"+place+"' type='text' class='text' id='txtOthers"+place+"' style='width:70px;' />";
	}
	
	else
	{
		document.getElementById(objOthers).innerHTML = "";
	}
}

function createMaj(myMaj,place)
{
//popup(myMaj.value);

	obj_name = "sp_maj"+place;
//for others
	if(myMaj.value == "Others")
	{
		/*eval(obj_name).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Please mention<br><select name='ddlCountry"+place+"'><option value=USA>USA</option><option value=UK>UK</option></select>";*/
		//popup()
		document.getElementById("sp_maj"+place).innerHTML="<font face='Verdana' color='#FF0000' size='1'>* Major area</font><br><input type='text' name='MAJOR"+place+"' id='MAJOR"+place+"' style='width:150px;font-size:7pt;background-color:#F1F7DE '>"
	}	
	else
		document.getElementById("sp_maj"+place).innerHTML="";
	return;
}



function countLetter(frm_nm, nm, chr_lmt)
{
	//popup(nm);E_CUR = nm;eval(nm);//nm;document.form1.
	//popup(E_CUR.value)
	//tfVal = parseInt(E_CUR.value.length);tfVal = parseInt(document.form1.nm.value.length);
	//popup(nm.Source());
	//popup(frm_nm + nm + chr_lmt);
	//ev_v = eval("document." + frm_nm +"."+ nm +".value") ;
	form_name = frm_nm.id ;
	ev_v = eval("document."+form_name+"."+ nm +".value")
	//popup( ev_v);
	tfVal = parseInt(ev_v.length);//tfVal = parseInt(document.form1.nm.value.length);
	if(tfVal != 0)
	{
		window.status = tfVal ; 
		txt_area = document.getElementById(nm+"_sp1");
		txt_area.innerHTML = "<a style=\"color:#3300FF;font-family=Arial;font-size:8pt; position:relative; left: -1px;\">You wrote <b>"+tfVal+"</b> character(s)</a>" ;
		//document.all.sp1.innerHTML = tfVal ;
		//eval("document.all."+nm+"_sp1.innerHTML") = tfVal ;
		 
		//window.status = tfVal + 1;
		if(tfVal >= parseInt(chr_lmt)+1)//if(tfVal >= 200)
		{
				popup("Please stop writing as you are crossing the "+chr_lmt+" letter limit!")
		}
	
		if(tfVal > parseInt(chr_lmt))
		{
			nb = eval("document.form1."+nm+".value").substr(0,parseInt(chr_lmt));
			txtara = eval("document.form1."+nm) ;
			txtara.value =  nb;
			span_area = eval("document.all."+nm+"_sp1");
			span_area.innerHTML ="<a style=\"color:#3300FF;font-family=Arial;font-size:8pt; position:relative; left: -1px;\">You wrote <b>"+nb.length+"</b> character(s)</a>" ;
			 //popup(nb)
		}
	}
	else
	{
		window.status = "";
		txt_area = eval("document.all."+nm+"_sp1");
		txt_area.innerHTML = "";
		//document.all.sp1.innerHTML = "";
	}
}//end countLetter fnc


function Validate()
{
	var objTrakingNo, objOtherExp, objTotalExp
	objTrakingNo = document.getElementById("txtTrakingNo");
	objPassword = document.getElementById("txtPassword");
			
	if(objTrakingNo.value == "")
	{
		popup("Traking No. can't empty.");
		objTrakingNo.focus();
		return false;
	}
	else if(isNaN(objTrakingNo.value))
	{
		popup("Traking No. should be numeric.");
		objTrakingNo.focus();
		objTrakingNo.value = "";
		return false;
	}
	if(objPassword.value == "")
	{
		popup("Password can't empty.");
		objPassword.focus();
		return false;
	}
	
	return true;
	
}
/// NOT NEEDED CODE KEEPING ASIDE
/*	else if(strValue == "Masters")
	{
		document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:120px' onchange='return LoadOthers(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='Economics'>Economics</option><option value='CSE'>CSE</option><option value='Others'>Others</option></select> ";
		document.getElementById("spnOthers"+place).innerHTML = "";
	}
*/	

/*
	else if(strValue == "BA(Pass)" || strValue == "BSS(Pass)" || strValue == "BSc(Pass)")
	{
		document.getElementById(objSubject).innerHTML = "<select name='ddlSubject"+place+"' id='ddlSubject"+place+"' style='FONT-SIZE:7pt;WIDTH:110px' onchange='return LoadOthers(this,"+place+");'><option value='S' selected='selected'>Select</option><option value='Economics'>Economics</option><option value='English'>English</option><option value='Others'>Others</option></select> ";
		document.getElementById("spnOthers"+place).innerHTML = "";
	}
	*/

//obj_name = "sp_grd"+place;

	/*if(myobj.value == "0")
	{
		document.getElementById("sp_grd"+place).innerHTML="<font face='Arial' color='#FF0000' size='1'>* Please Mention CGPA</font><br><input type='text' name='txtResultPoint"+place+"' id='txtResultPoint"+place+"' maxlength='5' size='5' style='width:50px;font-size:7pt;background-color:#F1F7DE' >";
	}
	else if(myobj.value == "-1" || myobj.value == "12")
	{
		document.getElementById("sp_grd"+place).innerHTML="";
	}
	else
	{
		document.getElementById("sp_grd"+place).innerHTML="<font face='Arial' color='#FF0000' size='1'>* Please Mention Marks(%)</font><br><input type='text' name='txtResultPoint"+place+"' id='txtResultPoint"+place+"' maxlength='5' size='5' style='width:50px;font-size:7pt;background-color:#F1F7DE' >";
	}*/
	
	
//END OF FUNCTION

/*</SCRIPT>*/


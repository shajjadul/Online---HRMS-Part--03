<?php
//SHOW A DATABASE ON A PDF FILE
//CREATED BY: Carlos Vasquez S.
//E-MAIL: cvasquez@cvs.cl
//CVS TECNOLOGIA E INNOVACION
//SANTIAGO, CHILE

require('fpdf.php');

//Connect to your database
include("conectmysql.php");

//Select the Products you want to show in your PDF file
    $today_date=$_GET['cd'];
	$mktime=mktime()+6*3600;
	//$today_date=gmdate("Y-m-d",$mktime);

$result01=mysql_query("SELECT emp_attendance.emp_id, emp_attendance.emp_atten_date, emp_attendance.emp_atten_time, emp_attendance.message, add_employee.emp_department
FROM emp_attendance
INNER JOIN add_employee
ON emp_attendance.emp_id=add_employee.emp_id and
emp_attendance.emp_atten_date='$today_date' and emp_attendance.status='1' and add_employee.emp_department=1 and emp_attendance.emp_id!='18-02-14' and emp_attendance.emp_id!='01-04-14' ORDER BY emp_attendance.emp_atten_moment DESC");
$number_of_products = mysql_num_rows($result01);

	$month_array=array("01"=>"January","02"=>"February","03"=>"March","04"=>"April","05"=>"May","06"=>"June","07"=>"July","08"=>"August","09"=>"September","10"=>"October","11"=>"November","12"=>"December");	
	
     list($emp_y,$emp_m,$emp_d)=explode("-",$today_date);
	 $emp_month=$month_array[$emp_m];
	 $Today=$emp_d." ".$emp_month." ".$emp_y;


//Initialize the 3 columns and the total
$EmployeeID = "";
$EmployeeName = "";
$EnterTime = "";
$CauseOfDelay = "";
$ExitTime = "";

//For each row, add the field to the corresponding column
while($row01 = mysql_fetch_array($result01))
{
   $result02=mysql_query("select * from emp_attendance where emp_atten_date='$today_date' and emp_id='$row01[0]' and status='2'");
   $row02=mysql_fetch_array($result02);
   $result03=mysql_query("SELECT * FROM add_employee WHERE emp_id='$row01[0]'");
   $row03=mysql_fetch_array($result03);
	
	
		  if($row01[2]<'12:00:00')
		  {
		   $Enter=$row01[2]." AM";
		  }
		  else
		  {
			  list($h,$m,$s)=explode(":",$row01[2]);
			  $pm_h=$h-12;
			  if(strlen($pm_h)==1)
			  {
			  $pm_time="0".$pm_h.":".$m.":".$s." "."PM";
		      $Enter=$pm_time;
			  }
			  else
			  {
			  $pm_time=$pm_h.":".$m.":".$s." "."PM";
		      $Enter=$pm_time;
			  }
		  }

	
	
	
		if($row02[3]!="")
		{
		  if($row02[3]<'12:00:00')
		  {
		   $Exit=$row02[3]." AM";
		  }
		  else
		  {
			  list($h,$m,$s)=explode(":",$row02[3]);
			  $pm_h=$h-12;
			  if(strlen($pm_h)==1)
			  {
			  $pm_time="0".$pm_h.":".$m.":".$s." "."PM";
		      $Exit=$pm_time;
			  }
			  else
			  {
			  $pm_time=$pm_h.":".$m.":".$s." "."PM";
		      $Exit=$pm_time;
			  }
		  }
		}
		else
		{
		   $Exit=$row02[3];
		}
	
	
	
	
	$ID = $row01[0];
	$EmName = $row03[1];
	$EnTime = $Enter;
	$CaDelay =substr($row01[3],0,30);
	$ExTime =$Exit;

	$EmployeeID = $EmployeeID.$ID."\n";
	$EmployeeName = $EmployeeName.$EmName."\n";
	$EnterTime = $EnterTime.$EnTime."\n";
	$CauseOfDelay = $CauseOfDelay.$CaDelay."\n";
	$ExitTime = $ExitTime.$ExTime."\n";

}






$resultgm01=mysql_query("SELECT emp_attendance.emp_id, emp_attendance.emp_atten_date, emp_attendance.emp_atten_time, emp_attendance.message, add_employee.emp_department
FROM emp_attendance
INNER JOIN add_employee
ON emp_attendance.emp_id=add_employee.emp_id and
emp_attendance.emp_atten_date='$today_date' and emp_attendance.status='1' and add_employee.emp_department=2 ORDER BY emp_attendance.emp_atten_moment DESC");
$number_of_productsgm = mysql_num_rows($resultgm01);


//Initialize the 3 columns and the total
$EmployeeIDgm = "";
$EmployeeNamegm = "";
$EnterTimegm = "";
$CauseOfDelaygm = "";
$ExitTimegm = "";

//For each row, add the field to the corresponding column
while($rowgm01 = mysql_fetch_array($resultgm01))
{
   $resultgm02=mysql_query("select * from emp_attendance where emp_atten_date='$today_date' and emp_id='$rowgm01[0]' and status='2'");
   $rowgm02=mysql_fetch_array($resultgm02);
   $resultgm03=mysql_query("SELECT * FROM add_employee WHERE emp_id='$rowgm01[0]'");
   $rowgm03=mysql_fetch_array($resultgm03);
	
	
		  if($rowgm01[2]<'12:00:00')
		  {
		   $Entergm=$rowgm01[2]." AM";
		  }
		  else
		  {
			  list($hgm,$mgm,$sgm)=explode(":",$rowgm01[2]);
			  $pm_hgm=$hgm-12;
			  if(strlen($pm_hgm)==1)
			  {
			  $pm_timegm="0".$pm_hgm.":".$mgm.":".$sgm." "."PM";
		      $Entergm=$pm_timegm;
			  }
			  else
			  {
			  $pm_timegm=$pm_hgm.":".$mgm.":".$sgm." "."PM";
		      $Entergm=$pm_timegm;
			  }
		  }

	
	
	
		if($rowgm02[3]!="")
		{
		  if($rowgm02[3]<'12:00:00')
		  {
		   $Exitgm=$rowgm02[3]." AM";
		  }
		  else
		  {
			  list($hgm,$mgm,$sgm)=explode(":",$rowgm02[3]);
			  $pm_hgm=$hgm-12;
			  if(strlen($pm_hgm)==1)
			  {
			  $pm_timegm="0".$pm_hgm.":".$mgm.":".$sgm." "."PM";
		      $Exitgm=$pm_timegm;
			  }
			  else
			  {
			  $pm_timegm=$pm_hgm.":".$mgm.":".$sgm." "."PM";
		      $Exitgm=$pm_timegm;
			  }
		  }
		}
		else
		{
		   $Exitgm=$rowgm02[3];
		}
	
	
	
	
	$IDgm = $rowgm01[0];
	$EmNamegm = $rowgm03[1];
	$EnTimegm = $Entergm;
	$CaDelaygm =substr($rowgm01[3],0,30);
	$ExTimegm =$Exitgm;

	$EmployeeIDgm = $EmployeeIDgm.$IDgm."\n";
	$EmployeeNamegm = $EmployeeNamegm.$EmNamegm."\n";
	$EnterTimegm = $EnterTimegm.$EnTimegm."\n";
	$CauseOfDelaygm = $CauseOfDelaygm.$CaDelaygm."\n";
	$ExitTimegm = $ExitTimegm.$ExTimegm."\n";

}








$resultgos01=mysql_query("SELECT emp_attendance.emp_id, emp_attendance.emp_atten_date, emp_attendance.emp_atten_time, emp_attendance.message, add_employee.emp_department
FROM emp_attendance
INNER JOIN add_employee
ON emp_attendance.emp_id=add_employee.emp_id and
emp_attendance.emp_atten_date='$today_date' and emp_attendance.status='1' and add_employee.emp_department=3 ORDER BY emp_attendance.emp_atten_moment DESC");
$number_of_productsgos = mysql_num_rows($resultgos01);


//Initialize the 3 columns and the total
$EmployeeIDgos = "";
$EmployeeNamegos = "";
$EnterTimegos = "";
$CauseOfDelaygos = "";
$ExitTimegos = "";

//For each row, add the field to the corresponding column
while($rowgos01 = mysql_fetch_array($resultgos01))
{
   $resultgos02=mysql_query("select * from emp_attendance where emp_atten_date='$today_date' and emp_id='$rowgos01[0]' and status='2'");
   $rowgos02=mysql_fetch_array($resultgos02);
   $resultgos03=mysql_query("SELECT * FROM add_employee WHERE emp_id='$rowgos01[0]'");
   $rowgos03=mysql_fetch_array($resultgos03);
	
	
		  if($rowgos01[2]<'12:00:00')
		  {
		   $Entergos=$rowgos01[2]." AM";
		  }
		  else
		  {
			  list($hgos,$mgos,$sgos)=explode(":",$rowgos01[2]);
			  $pm_hgos=$hgos-12;
			  if(strlen($pm_hgos)==1)
			  {
			  $pm_timegos="0".$pm_hgos.":".$mgos.":".$sgos." "."PM";
		      $Entergos=$pm_timegos;
			  }
			  else
			  {
			  $pm_timegos=$pm_hgos.":".$mgos.":".$sgos." "."PM";
		      $Entergos=$pm_timegos;
			  }
		  }

	
	
	
		if($rowgos02[3]!="")
		{
		  if($rowgos02[3]<'12:00:00')
		  {
		   $Exitgos=$rowgos02[3]." AM";
		  }
		  else
		  {
			  list($hgos,$mgos,$sgos)=explode(":",$rowgos02[3]);
			  $pm_hgos=$hgos-12;
			  if(strlen($pm_hgos)==1)
			  {
			  $pm_timegos="0".$pm_hgos.":".$mgos.":".$sgos." "."PM";
		      $Exitgos=$pm_timegos;
			  }
			  else
			  {
			  $pm_timegos=$pm_hgos.":".$mgos.":".$sgos." "."PM";
		      $Exitgos=$pm_timegos;
			  }
		  }
		}
		else
		{
		   $Exitgos=$rowgos02[3];
		}
	
	
	
	
	$IDgos = $rowgos01[0];
	$EmNamegos = $rowgos03[1];
	$EnTimegos = $Entergos;
	$CaDelaygos =substr($rowgos01[3],0,30);
	$ExTimegos =$Exitgos;

	$EmployeeIDgos = $EmployeeIDgos.$IDgos."\n";
	$EmployeeNamegos = $EmployeeNamegos.$EmNamegos."\n";
	$EnterTimegos = $EnterTimegos.$EnTimegos."\n";
	$CauseOfDelaygos = $CauseOfDelaygos.$CaDelaygos."\n";
	$ExitTimegos = $ExitTimegos.$ExTimegos."\n";

}








$resultgit01=mysql_query("SELECT emp_attendance.emp_id, emp_attendance.emp_atten_date, emp_attendance.emp_atten_time, emp_attendance.message, add_employee.emp_department
FROM emp_attendance
INNER JOIN add_employee
ON emp_attendance.emp_id=add_employee.emp_id and
emp_attendance.emp_atten_date='$today_date' and emp_attendance.status='1' and add_employee.emp_department=4 ORDER BY emp_attendance.emp_atten_moment DESC");
$number_of_productsgit = mysql_num_rows($resultgit01);


//Initialize the 3 columns and the total
$EmployeeIDgit = "";
$EmployeeNamegit = "";
$EnterTimegit = "";
$CauseOfDelaygit = "";
$ExitTimegit = "";

//For each row, add the field to the corresponding column
while($rowgit01 = mysql_fetch_array($resultgit01))
{
   $resultgit02=mysql_query("select * from emp_attendance where emp_atten_date='$today_date' and emp_id='$rowgit01[0]' and status='2'");
   $rowgit02=mysql_fetch_array($resultgit02);
   $resultgit03=mysql_query("SELECT * FROM add_employee WHERE emp_id='$rowgit01[0]'");
   $rowgit03=mysql_fetch_array($resultgit03);
	
	
		  if($rowgit01[2]<'12:00:00')
		  {
		   $Entergit=$rowgit01[2]." AM";
		  }
		  else
		  {
			  list($hgit,$mgit,$sgit)=explode(":",$rowgit01[2]);
			  $pm_hgit=$hgit-12;
			  if(strlen($pm_hgit)==1)
			  {
			  $pm_timegit="0".$pm_hgit.":".$mgit.":".$sgit." "."PM";
		      $Entergit=$pm_timegit;
			  }
			  else
			  {
			  $pm_timegit=$pm_hgit.":".$mgit.":".$sgit." "."PM";
		      $Entergit=$pm_timegit;
			  }
		  }

	
	
	
		if($rowgit02[3]!="")
		{
		  if($rowgit02[3]<'12:00:00')
		  {
		   $Exitgit=$rowgit02[3]." AM";
		  }
		  else
		  {
			  list($hgit,$mgit,$sgit)=explode(":",$rowgit02[3]);
			  $pm_hgit=$hgit-12;
			  if(strlen($pm_hgit)==1)
			  {
			  $pm_timegit="0".$pm_hgit.":".$mgit.":".$sgit." "."PM";
		      $Exitgit=$pm_timegit;
			  }
			  else
			  {
			  $pm_timegit=$pm_hgit.":".$mgit.":".$sgit." "."PM";
		      $Exitgit=$pm_timegit;
			  }
		  }
		}
		else
		{
		   $Exitgit=$rowgit02[3];
		}
	
	
	
	
	$IDgit = $rowgit01[0];
	$EmNamegit = $rowgit03[1];
	$EnTimegit = $Entergit;
	$CaDelaygit =substr($rowgit01[3],0,30);
	$ExTimegit =$Exitgit;

	$EmployeeIDgit = $EmployeeIDgit.$IDgit."\n";
	$EmployeeNamegit = $EmployeeNamegit.$EmNamegit."\n";
	$EnterTimegit = $EnterTimegit.$EnTimegit."\n";
	$CauseOfDelaygit = $CauseOfDelaygit.$CaDelaygit."\n";
	$ExitTimegit = $ExitTimegit.$ExTimegit."\n";

}









$resultoass01=mysql_query("SELECT emp_attendance.emp_id, emp_attendance.emp_atten_date, emp_attendance.emp_atten_time, emp_attendance.message, add_employee.emp_department
FROM emp_attendance
INNER JOIN add_employee
ON emp_attendance.emp_id=add_employee.emp_id and
emp_attendance.emp_atten_date='$today_date' and emp_attendance.status='1' and add_employee.emp_department=1 and (emp_attendance.emp_id='18-02-14' or emp_attendance.emp_id='01-04-14') ORDER BY emp_attendance.emp_atten_moment DESC");
$number_of_productsoass = mysql_num_rows($resultoass01);


//Initialize the 3 columns and the total
$EmployeeIDoass = "";
$EmployeeNameoass = "";
$EnterTimeoass = "";
$CauseOfDelayoass = "";
$ExitTimeoass = "";

//For each row, add the field to the corresponding column
while($rowoass01 = mysql_fetch_array($resultoass01))
{
   $resultoass02=mysql_query("select * from emp_attendance where emp_atten_date='$today_date' and emp_id='$rowoass01[0]' and status='2'");
   $rowoass02=mysql_fetch_array($resultoass02);
   $resultoass03=mysql_query("SELECT * FROM add_employee WHERE emp_id='$rowoass01[0]'");
   $rowoass03=mysql_fetch_array($resultoass03);
	
	
		  if($rowoass01[2]<'12:00:00')
		  {
		   $Enteroass=$rowoass01[2]." AM";
		  }
		  else
		  {
			  list($hoass,$moass,$soass)=explode(":",$rowoass01[2]);
			  $pm_hoass=$hoass-12;
			  if(strlen($pm_hoass)==1)
			  {
			  $pm_timeoass="0".$pm_hoass.":".$moass.":".$soass." "."PM";
		      $Enteroass=$pm_timeoass;
			  }
			  else
			  {
			  $pm_timeoass=$pm_hoass.":".$moass.":".$soass." "."PM";
		      $Enteroass=$pm_timeoass;
			  }
		  }

	
	
	
		if($rowoass02[3]!="")
		{
		  if($rowoass02[3]<'12:00:00')
		  {
		   $Exitoass=$rowoass02[3]." AM";
		  }
		  else
		  {
			  list($hoass,$moass,$soass)=explode(":",$rowoass02[3]);
			  $pm_hoass=$hoass-12;
			  if(strlen($pm_hoass)==1)
			  {
			  $pm_timeoass="0".$pm_hoass.":".$moass.":".$soass." "."PM";
		      $Exitoass=$pm_timeoass;
			  }
			  else
			  {
			  $pm_timeoass=$pm_hoass.":".$moass.":".$soass." "."PM";
		      $Exitoass=$pm_timeoass;
			  }
		  }
		}
		else
		{
		   $Exitoass=$rowoass02[3];
		}
	
	
	
	
	$IDoass = $rowoass01[0];
	$EmNameoass = $rowoass03[1];
	$EnTimeoass = $Enteroass;
	$CaDelayoass =substr($rowoass01[3],0,30);
	$ExTimeoass =$Exitoass;

	$EmployeeIDoass = $EmployeeIDoass.$IDoass."\n";
	$EmployeeNameoass = $EmployeeNameoass.$EmNameoass."\n";
	$EnterTimeoass = $EnterTimeoass.$EnTimeoass."\n";
	$CauseOfDelayoass = $CauseOfDelayoass.$CaDelayoass."\n";
	$ExitTimeoass = $ExitTimeoass.$ExTimeoass."\n";

}









mysql_close();





//Create a new PDF file
$pdf=new FPDF();
$pdf->AddPage();

//Fields Name position
$Y_Fields_Name_position = 45;
//Table position, under Fields Name
$Y_Table_Position = 57;
 $pdf->Image("../image/logo_gg.png",10,6,40);
 $pdf->SetFont("Arial","B","15");
 $pdf->SetFont('Arial','B',25);
 $pdf->Write(12,"                     Evolution Group Limited ");
 
$pdf->SetFont("Arial","","");
$pdf->SetY(33);
$pdf->Cell(0,0,"",1,1,"");
 
 
 $pdf->SetFont('Arial','B',14);
 $pdf->SetY(35);
 $pdf->Cell(0,10,"Employee attendence on ".$Today,0,1,"C");
//First create each Field Name
//Gray color filling each Field Name box
$pdf->SetFillColor(232,232,232);
//Bold Font for Field Name
$pdf->SetFont('Arial','B',10);
$pdf->SetY($Y_Fields_Name_position);
$pdf->SetX(10);
$pdf->Cell(30,6,'Employee ID',1,0,'L',1);
$pdf->SetX(40);
$pdf->Cell(55,6,'Employee Name',1,0,'L',1);
$pdf->SetX(95);
$pdf->Cell(25,6,'Enter Time',1,0,'L',1);
$pdf->SetX(120);
$pdf->Cell(55,6,'Cause of Delay',1,0,'L',1);
$pdf->SetX(175);
$pdf->Cell(25,6,'Exit Time',1,0,'L',1);
$pdf->Ln();

 $pdf->SetFont('Arial','B',10);
 $pdf->SetY(51);
 $pdf->Cell(0,6," Evolution Group Limited",1,1,"C");

//Now show the 3 columns
$pdf->SetFont('Arial','',10);
$pdf->SetY($Y_Table_Position);
$pdf->SetX(10);
$pdf->MultiCell(30,6,$EmployeeID,1);
$pdf->SetY($Y_Table_Position);
$pdf->SetX(40);
$pdf->MultiCell(55,6,$EmployeeName,1);
$pdf->SetY($Y_Table_Position);
$pdf->SetX(95);
$pdf->MultiCell(25,6,$EnterTime,1);
$pdf->SetY($Y_Table_Position);
$pdf->SetX(120);
$pdf->MultiCell(55,6,$CauseOfDelay,1);
$pdf->SetY($Y_Table_Position);
$pdf->SetX(175);
$pdf->MultiCell(25,6,$ExitTime,1);


//Create lines (boxes) for each ROW (Product)
//If you don't use the following code, you don't create the lines separating each row
$i = 0;
$pdf->SetY($Y_Table_Position);
while ($i < $number_of_products)
{
	$pdf->SetX(10);
	$pdf->MultiCell(190,6,'',1);
	$i = $i +1;
}





$Y_Fields_Name_positiongm=($number_of_products*6)+57;
$Y_Table_Positiongm=($number_of_products*6)+63;

 $pdf->SetFont('Arial','B',10);
 $pdf->SetY($Y_Fields_Name_positiongm);
 $pdf->Cell(0,6," Evolution Migration Ltd.",1,1,"C");

//Now show the 3 columns
$pdf->SetFont('Arial','',10);
$pdf->SetY($Y_Table_Positiongm);
$pdf->SetX(10);
$pdf->MultiCell(30,6,$EmployeeIDgm,1);
$pdf->SetY($Y_Table_Positiongm);
$pdf->SetX(40);
$pdf->MultiCell(55,6,$EmployeeNamegm,1);
$pdf->SetY($Y_Table_Positiongm);
$pdf->SetX(95);
$pdf->MultiCell(25,6,$EnterTimegm,1);
$pdf->SetY($Y_Table_Positiongm);
$pdf->SetX(120);
$pdf->MultiCell(55,6,$CauseOfDelaygm,1);
$pdf->SetY($Y_Table_Positiongm);
$pdf->SetX(175);
$pdf->MultiCell(25,6,$ExitTimegm,1);


$i = 0;
$pdf->SetY($Y_Table_Positiongm);
while ($i < $number_of_productsgm)
{
	$pdf->SetX(10);
	$pdf->MultiCell(190,6,'',1);
	$i = $i +1;
}





$Y_Fields_Name_positiongos=($number_of_products*6)+($number_of_productsgm*6)+63;
$Y_Table_Positiongos=($number_of_products*6)+($number_of_productsgm*6)+69;

 $pdf->SetFont('Arial','B',10);
 $pdf->SetY($Y_Fields_Name_positiongos);
 $pdf->Cell(0,6," Evolution Overseas Studies Ltd.",1,1,"C");

//Now show the 3 columns
$pdf->SetFont('Arial','',10);
$pdf->SetY($Y_Table_Positiongos);
$pdf->SetX(10);
$pdf->MultiCell(30,6,$EmployeeIDgos,1);
$pdf->SetY($Y_Table_Positiongos);
$pdf->SetX(40);
$pdf->MultiCell(55,6,$EmployeeNamegos,1);
$pdf->SetY($Y_Table_Positiongos);
$pdf->SetX(95);
$pdf->MultiCell(25,6,$EnterTimegos,1);
$pdf->SetY($Y_Table_Positiongos);
$pdf->SetX(120);
$pdf->MultiCell(55,6,$CauseOfDelaygos,1);
$pdf->SetY($Y_Table_Positiongos);
$pdf->SetX(175);
$pdf->MultiCell(25,6,$ExitTimegos,1);


$i = 0;
$pdf->SetY($Y_Table_Positiongos);
while ($i < $number_of_productsgos)
{
	$pdf->SetX(10);
	$pdf->MultiCell(190,6,'',1);
	$i = $i +1;
}





$Y_Fields_Name_positiongit=($number_of_products*6)+($number_of_productsgm*6)+($number_of_productsgos*6)+69;
$Y_Table_Positiongit=($number_of_products*6)+($number_of_productsgm*6)+($number_of_productsgos*6)+75;



 $pdf->SetFont('Arial','B',10);
 $pdf->SetY($Y_Fields_Name_positiongit);
 $pdf->Cell(0,6," Evolution IT Ltd.",1,1,"C");

//Now show the 3 columns
$pdf->SetFont('Arial','',10);
$pdf->SetY($Y_Table_Positiongit);
$pdf->SetX(10);
$pdf->MultiCell(30,6,$EmployeeIDgit,1);
$pdf->SetY($Y_Table_Positiongit);
$pdf->SetX(40);
$pdf->MultiCell(55,6,$EmployeeNamegit,1);
$pdf->SetY($Y_Table_Positiongit);
$pdf->SetX(95);
$pdf->MultiCell(25,6,$EnterTimegit,1);
$pdf->SetY($Y_Table_Positiongit);
$pdf->SetX(120);
$pdf->MultiCell(55,6,$CauseOfDelaygit,1);
$pdf->SetY($Y_Table_Positiongit);
$pdf->SetX(175);
$pdf->MultiCell(25,6,$ExitTimegit,1);


$i = 0;
$pdf->SetY($Y_Table_Positiongit);
while ($i < $number_of_productsgit)
{
	$pdf->SetX(10);
	$pdf->MultiCell(190,6,'',1);
	$i = $i +1;
}





$Y_Fields_Name_positionoass=($number_of_products*6)+($number_of_productsgm*6)+($number_of_productsgos*6)+($number_of_productsgit*6)+75;
$Y_Table_Positionoass=($number_of_products*6)+($number_of_productsgm*6)+($number_of_productsgos*6)+($number_of_productsgit*6)+81;



 $pdf->SetFont('Arial','B',10);
 $pdf->SetY($Y_Fields_Name_positionoass);
 $pdf->Cell(0,6,"Office Assistant of  Evolution Group Ltd.",1,1,"C");

//Now show the 3 columns
$pdf->SetFont('Arial','',10);
$pdf->SetY($Y_Table_Positionoass);
$pdf->SetX(10);
$pdf->MultiCell(30,6,$EmployeeIDoass,1);
$pdf->SetY($Y_Table_Positionoass);
$pdf->SetX(40);
$pdf->MultiCell(55,6,$EmployeeNameoass,1);
$pdf->SetY($Y_Table_Positionoass);
$pdf->SetX(95);
$pdf->MultiCell(25,6,$EnterTimeoass,1);
$pdf->SetY($Y_Table_Positionoass);
$pdf->SetX(120);
$pdf->MultiCell(55,6,$CauseOfDelayoass,1);
$pdf->SetY($Y_Table_Positionoass);
$pdf->SetX(175);
$pdf->MultiCell(25,6,$ExitTimeoass,1);


$i = 0;
$pdf->SetY($Y_Table_Positionoass);
while ($i < $number_of_productsoass)
{
	$pdf->SetX(10);
	$pdf->MultiCell(190,6,'',1);
	$i = $i +1;
}








$pdf->Output();
?>

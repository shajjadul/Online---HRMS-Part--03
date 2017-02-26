<?php
//SHOW A DATABASE ON A PDF FILE
//CREATED BY: Carlos Vasquez S.
//E-MAIL: cvasquez@cvs.cl
//CVS TECNOLOGIA E INNOVACION
//SANTIAGO, CHILE

require('fpdf.php');

//Connect to your database
include("conectmysql.php");
$slipID=$_GET['slip'];
//Select the Products you want to show in your PDF file
	   $result01=mysql_query("select * from emp_salary_slip01 where EmpSalSlip01Id='$slipID'");
	   
	   $field01=mysql_fetch_array($result01);
	   
	   $result02=mysql_query("select * from add_employee where emp_id='$field01[1]'");
	   //$row01=mysql_num_rows($result01);
	   $field02=mysql_fetch_array($result02);
	   
		$month_array=array("01"=>"January","02"=>"February","03"=>"March","04"=>"April","05"=>"May","06"=>"June","07"=>"July","08"=>"August","09"=>"September","10"=>"October","11"=>"November","12"=>"December");	
		list($emp_y,$emp_m)=explode("-",$field01[4]);
		$emp_month=$month_array[$emp_m];
		$month= $emp_month." ".$emp_y;
		
		
	   $result=mysql_query("select * from emp_salary_slip02 where EmpSalIdenti='$field01[0]'");
	   //$row01=mysql_num_rows($result01);
	   $field=mysql_fetch_array($result);
		
	   $result03=mysql_query("select * from emp_salary_slip03 where EmpSalIdenti='$field01[0]'");
	   //$row01=mysql_num_rows($result01);
	   $field03=mysql_fetch_array($result03);
	   $totaladdition=$field03[2]+$field03[3]+$field03[4]+$field03[5]+$field03[6]+$field03[7]+$field03[8];
	   
	   
	   $result04=mysql_query("select * from emp_salary_slip04 where EmpSalIdenti='$field01[0]'");
	   //$row01=mysql_num_rows($result01);
	   $field04=mysql_fetch_array($result04);
	   $totaldeduction=$field04[2]+$field04[3]+$field04[4]+$field04[5]+$field04[6];
	   
	   $netsalary=$totaladdition-$totaldeduction;

/* Convert taka in word */ 
function convert_number($number) 
{ 
    if (($number < 0) || ($number > 999999999)) 
    { 
    throw new Exception("Number is out of range");
    } 

    $Gn = floor($number / 1000000);  /* Millions (giga) */ 
    $number -= $Gn * 1000000; 
    $kn = floor($number / 1000);     /* Thousands (kilo) */ 
    $number -= $kn * 1000; 
    $Hn = floor($number / 100);      /* Hundreds (hecto) */ 
    $number -= $Hn * 100; 
    $Dn = floor($number / 10);       /* Tens (deca) */ 
    $n = $number % 10;               /* Ones */ 

    $res = ""; 

    if ($Gn) 
    { 
        $res .= convert_number($Gn) . " Million"; 
    } 

    if ($kn) 
    { 
        $res .= (empty($res) ? "" : " ") . 
            convert_number($kn) . " Thousand"; 
    } 

    if ($Hn) 
    { 
        $res .= (empty($res) ? "" : " ") . 
            convert_number($Hn) . " Hundred"; 
    } 

    $ones = array("", "One", "Two", "Three", "Four", "Five", "Six", 
        "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", 
        "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eightteen", 
        "Nineteen"); 
    $tens = array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", 
        "Seventy", "Eigthy", "Ninety"); 

    if ($Dn || $n) 
    { 
        if (!empty($res)) 
        { 
            $res .= " "; 
        } 

        if ($Dn < 2) 
        { 
            $res .= $ones[$Dn * 10 + $n]; 
        } 
        else 
        { 
            $res .= $tens[$Dn]; 

            if ($n) 
            { 
                $res .= "-" . $ones[$n]; 
            } 
        } 
    } 

    if (empty($res)) 
    { 
        $res = "zero"; 
    } 

    return $res; 
} 


$cheque_amt = $netsalary; 

if($cheque_amt==round($cheque_amt))
{
try
    {
    $convertamount=convert_number($cheque_amt)." Taka Only";
    }
catch(Exception $e)
    {
    $convertamount=$e->getMessage();
    }
}
else
{
	$pieces = explode(".", $cheque_amt);
try
    {
		if(strlen($pieces[1])==1)
		{
        $convertamount=convert_number($pieces[0])." Taka  and ".convert_number($pieces[1].'0')." Paisa Only" ;
		}
		else
		{
        $convertamount=convert_number($pieces[0])." Taka  and ".convert_number($pieces[1])." Paisa Only" ;
		}
    }
catch(Exception $e)
    {
    $convertamount=$e->getMessage();
    }
	
}
/*End Convert taka in word */



mysql_close();





//Create a new PDF file
$pdf=new FPDF();
$pdf->AddPage();

//Fields Name position
$Y_Fields_Name_position = 85;
//Table position, under Fields Name
$Y_Table_Position = 93;

 $pdf->Image("../image/logo_gg.png",10,6,40);
 $pdf->SetFont("Arial","B","15");
 $pdf->SetFont('Arial','B',25);
 $pdf->Write(12,"                     Evolution Group Limited ");

$pdf->SetFont("Arial","","");
$pdf->SetY(35);
$pdf->Cell(0,0,"",1,1,"");

$pdf->SetFont('Arial','B',12);
$pdf->SetY(45);
$pdf->Write(7,"Employee Name: ");
$pdf->SetFont('Arial','',12);
$pdf->Write(7,$field02[1]);
$pdf->Ln();
$pdf->SetFont('Arial','B',12);
$pdf->Write(7,"Designation: ");
$pdf->SetFont('Arial','',12);
$pdf->Write(7,$field01[2]);
$pdf->Ln();
$pdf->SetFont('Arial','B',12);
$pdf->Write(7,"Department: ");
$pdf->SetFont('Arial','',12);
$pdf->Write(7,$field01[3]);
$pdf->Ln();
$pdf->SetFont('Arial','B',12);
$pdf->Write(7,"Month: ");
$pdf->SetFont('Arial','',12);
$pdf->Write(7,$emp_month."        ");

$pdf->SetFont('Arial','B',12);
$pdf->Write(7,"Year: ");
$pdf->SetFont('Arial','',12);
$pdf->Write(7,$emp_y);
$pdf->Ln();

$pdf->SetFillColor(232,232,232);
$pdf->SetFont('Arial','',10.5);
$pdf->SetY(77);
$pdf->SetX(10);
$pdf->Cell(25,6,'Total days: '.$field[2],1,0,'L',1);
$pdf->SetX(35);
$pdf->Cell(30,6,'Working days: '.$field[3],1,0,'L',1);
$pdf->SetX(65);
$pdf->Cell(22,6,'Holidays: '.$field[4],1,0,'L',1);
$pdf->SetX(87);
$pdf->Cell(21,6,'Leaves: '.$field[5],1,0,'L',1);
$pdf->SetX(107);
$pdf->Cell(26,6,'Un Leaves: '.$field[6],1,0,'L',1);
$pdf->SetX(133);
$pdf->Cell(24,6,'Presents: '.$field[7],1,0,'L',1);
$pdf->SetX(156);
$pdf->Cell(24,6,'Absences: '.$field[8],1,0,'L',1);
$pdf->SetX(180);
$pdf->Cell(20,6,'Delays: '.$field[9],1,0,'L',1);
$pdf->Ln();

//First create each Field Name
//Gray color filling each Field Name box
$pdf->SetFillColor(232,232,232);
//Bold Font for Field Name
$pdf->SetFont('Arial','B',12);
$pdf->SetY($Y_Fields_Name_position);
$pdf->SetX(10);
$pdf->Cell(95,8,'Earnings',1,0,'C',1);
$pdf->SetX(105);
$pdf->Cell(95,8,'Deductions',1,0,'C',1);
$pdf->Ln();



//Now show the 3 columns
$pdf->SetFont('Arial','',12);
$pdf->SetY($Y_Table_Position);
$pdf->SetX(10);
$pdf->Cell(65,7,'Basic Salary',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[2],1);
$pdf->SetX(105);
$pdf->Cell(65,7,'Absence',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$field04[2],1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(100);
$pdf->SetX(10);
$pdf->Cell(65,7,'House allowance',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[3],1);
$pdf->SetX(105);
$pdf->Cell(65,7,'Delay',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$field04[3],1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(107);
$pdf->SetX(10);
$pdf->Cell(65,7,'Medical allowance',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[4],1);
$pdf->SetX(105);
$pdf->Cell(65,7,'Provident Fund',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$field04[4],1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(114);
$pdf->SetX(10);
$pdf->Cell(65,7,'Conveyance',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[5],1);
$pdf->SetX(105);
$pdf->Cell(65,7,'Profession Tax',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$field04[5],1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(121);
$pdf->SetX(10);
$pdf->Cell(65,7,'Remuneration',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[6],1);
$pdf->SetX(105);
$pdf->Cell(65,7,'Others',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$field04[6],1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(128);
$pdf->SetX(10);
$pdf->Cell(65,7,'Festival bonus',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[7],1);
$pdf->SetX(105);
$pdf->SetFont('Arial','B',12);
$pdf->Cell(65,7,'Total Deduction',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$totaldeduction,1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(135);
$pdf->SetX(10);
$pdf->Cell(65,7,'Others',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$field03[8],1);
$pdf->SetX(105);
$pdf->Cell(95,7,'',1);
$pdf->Ln();

$pdf->SetFont('Arial','',12);
$pdf->SetY(142);
$pdf->SetX(10);
$pdf->SetFont('Arial','B',12);
$pdf->Cell(65,7,'Total Addition',1);
$pdf->SetX(75);
$pdf->Cell(30,7,$totaladdition,1);
$pdf->SetX(105);
$pdf->Cell(65,7,'Net Salary',1);
$pdf->SetX(170);
$pdf->Cell(30,7,$netsalary,1);
$pdf->Ln();

$pdf->SetY(152);
$pdf->SetFont('Arial','B',12);
$pdf->Write(7,"In Words: ".$convertamount);
$pdf->Ln();

$pdf->Output();
?>

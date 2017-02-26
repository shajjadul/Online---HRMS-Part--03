
<?php
     $value=$_GET['q'];
	 include '../../dbase/class.dbase.php';
	 $conn=new dbase;
	 $conn->connection();
	 $result = mysql_query("SELECT * FROM app_personal_info WHERE app_email='$value'");
	 @$gg=mysql_fetch_array($result);
     if($gg)
	 {
	    print "<img src='../icon/Cross_mark.png'> <span style='color:#F00; font-family:Verdana, Geneva, sans-serif; font-size:12px; font-style:italic;'>This email already exists! Try another.</span>";
	 }
	?> 
	               
<?php 
session_start();
session_destroy();
?>
<?php
	include '../../dbase/class.dbase.php';
	$conn=new dbase;
	$conn->connection();
	$app_id=$_GET['app'];
	$result01=mysql_query("SELECT * FROM app_personal_info WHERE app_id='$app_id'");
    $rows01=mysql_fetch_array($result01);
	$result02=mysql_query("SELECT * FROM app_photo WHERE app_id='$app_id'");
    $rows02=mysql_fetch_array($result02);
?>
<div style="width:980px; min-height:450px; margin: 1px 10px 10px 10px;"><!--Page Area -->

<div style="margin-top:50px; font-size:36px; font-family:Tahoma, Geneva, sans-serif; text-align:center;">
Congratulation!
</div>

<div style="margin-top:15px; font-size:20px; font-family:Tahoma, Geneva, sans-serif; text-align:center;">
 <img src="../../appimage/<?php echo $rows02[2];?>" height="150" width="150"  border="0"/><br>
<?php echo strtoupper($rows01[2]);?><br>
Your track no. is: <span style="color:#FF0000;"><?php echo $rows01[1];?></span>
</div>
<div style="margin-top:15px; font-family:Tahoma, Geneva, sans-serif; text-align:center;">
Save this tracking no. for further inquiry.
</div>

</div><!--Page Area End-->


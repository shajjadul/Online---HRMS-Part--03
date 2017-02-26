<?php
session_start();
$kk=$_SESSION['user'];
if(empty($_SESSION['user'])){exit(header("location:app_info_form.php"));} 
?>


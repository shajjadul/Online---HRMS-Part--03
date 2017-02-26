<?php
	ob_start();
?>
    <?php include("../config/config.php");?>
    <?php
	$app_id=$_POST['app_id'];
	//########### PERSONAL INFORMATION ###############
    $name=$_POST['first_name'];
    $father_name=$_POST['father_name'];
    $mother_name=$_POST['mother_name'];
    $present_address=$_POST['present_address'];
    $permanent_address=$_POST['permanent_address'];
    $home_phone=$_POST['home_phone'];
    $email=$_POST['email'];
    $birth_date=$_POST['birth_date'];
    $nationality=$_POST['nationality'];
    $national_id_no=$_POST['national_id_no'];
    $religion=$_POST['religion'];
    $marital_status=$_POST['marital_status'];
    $gender=$_POST['gender'];
    $blood_group=$_POST['blood_group'];
	
//########### SCHOLASTIC STATUS ###############
    $noe_ssc=$_POST['noe_ssc'];
    $gs_ssc=$_POST['gs_ssc'];
    $res_ssc=$_POST['res_ssc'];
    $gpa_ssc=$_POST['gpa_ssc'];
    $gpa_outof_ssc=$_POST['gpa_outof_ssc'];
    $bu_ssc=$_POST['bu_ssc'];
    $pass_ssc=$_POST['pass_ssc'];
	
    $noe_hsc=$_POST['noe_hsc'];
    $gs_hsc=$_POST['gs_hsc'];
    $res_hsc=$_POST['res_hsc'];
    $gpa_hsc=$_POST['gpa_hsc'];
    $gpa_outof_hsc=$_POST['gpa_outof_hsc'];
    $bu_hsc=$_POST['bu_hsc'];
    $pass_hsc=$_POST['pass_hsc'];
	
    $noe_bsc=$_POST['noe_bsc'];
    $gs_bsc=$_POST['gs_bsc'];
    $res_bsc=$_POST['res_bsc'];
    $gpa_bsc=$_POST['gpa_bsc'];
    $gpa_outof_bsc=$_POST['gpa_outof_bsc'];
    $bu_bsc=$_POST['bu_bsc'];
    $pass_bsc=$_POST['pass_bsc'];
	
    $noe_msc=$_POST['noe_msc'];
    $gs_msc=$_POST['gs_msc'];
    $res_msc=$_POST['res_msc'];
    $gpa_msc=$_POST['gpa_msc'];
    $gpa_outof_msc=$_POST['gpa_outof_msc'];
    $bu_msc=$_POST['bu_msc'];
    $pass_msc=$_POST['pass_msc'];
	
	
	
    $extracurriculamactivities=$_POST['extracurriculamactivities'];
    $otherskills=$_POST['otherskills'];
	
//########### EXPERIENCE ###############
    $COMPANY1=$_POST['COMPANY1'];
    $EXP_TYPE1=$_POST['EXP_TYPE1'];
    $EXP_AREA1=$_POST['EXP_AREA1'];
    $EXP_POST1=$_POST['EXP_POST1'];
    $DEPT1=$_POST['DEPT1'];
    $UNIT1=$_POST['UNIT1'];
    $JOB_LOC1=$_POST['JOB_LOC1'];
    $SUPER_NAME1=$_POST['SUPER_NAME1'];
    $SUPER_PHONE1=$_POST['SUPER_PHONE1'];
    $SUPER_EMAIL1=$_POST['SUPER_EMAIL1'];
    $RESERVATION1=$_POST['RESERVATION1'];
    $EFROM_D1=$_POST['EFROM_D1'];
	
	if($_POST['disb']=="1")
	{
    $ETO_D1=$_POST['disb'];
	}
	else
	{
    $ETO_D1=$_POST['ETO_D1'];
	}
	
    //$ETO_D1=$_POST['ETO_D1'];
    $DUTY1=$_POST['DUTY1'];
    $ACHIEVE1=$_POST['ACHIEVE1'];
    $CLOCATION1=$_POST['CLOCATION1'];
	
//########### REFERENCES ###############
    $R_NAME1=$_POST['R_NAME1'];
    $R_POS1=$_POST['R_POS1'];
    $R_COMP1=$_POST['R_COMP1'];
    $R_ADD1=$_POST['R_ADD1'];
    $R_PHONE1=$_POST['R_PHONE1'];
    $R_CELL1=$_POST['R_CELL1'];
    $R_EMAIL1=$_POST['R_EMAIL1'];
    $R_KNOW1=$_POST['R_KNOW1'];
	
	
    $R_NAME2=$_POST['R_NAME2'];
    $R_POS2=$_POST['R_POS2'];
    $R_COMP2=$_POST['R_COMP2'];
    $R_ADD2=$_POST['R_ADD2'];
    $R_PHONE2=$_POST['R_PHONE2'];
    $R_CELL2=$_POST['R_CELL2'];
    $R_EMAIL2=$_POST['R_EMAIL2'];
    $R_KNOW2=$_POST['R_KNOW2'];
	
//########### PASSWORD ###############

    //$app_id=$_POST['app_id'];
    //$app_pass=$_POST['reapppass'];
	
//########### PHOTO ###############
$old_image_name=$_POST['image_name'];
$picture=$_FILES['image_file'];

if($picture['size']!=0)
{
	if($_FILES["image_file"]["size"] <= 30720)
	{
	$known_photo_types = array( 
							'image/pjpeg' => 'jpg',
							'image/jpeg' => 'jpg',
							'image/gif' => 'gif',
							'image/bmp' => 'bmp',
							'image/x-png' => 'png',
							'image/png' => 'png'
							   );
	$main_image_type=$picture['type'];
	$main_image_extension= $known_photo_types[$main_image_type];
	$picture_name=$app_id.".".$main_image_extension;
	copy($picture['tmp_name'], "../../appimage"."/".$picture_name);	
	}
	
	else
	{
		$mess="message=Sorry! Image size should not exceed 30KB";
		exit(header("Location:app_info_form.php?$mess"));
	}
}
else
{
	    $picture_name=$old_image_name;
}
	
	include '../../dbase/class.dbase.php';
	$conn=new dbase;
	$conn->connection();
	
	include '../../dbase/class.query.php';
	$query=new insert;
	
	//$result=mysql_query("SELECT * FROM add_apployee WHERE app_id='$apployeeid'");
   // $rows=mysql_num_rows($result);
	
	
	//########### EDIT PERSONAL INFORMATION ###############
	$table_name01="app_personal_info";
	$update_field01="app_name='$name',app_father_name='$father_name',app_mother_name='$mother_name',app_present_address='$present_address',app_permanent_address='$permanent_address',app_cell_no='$home_phone',app_email='$email',app_birth_date='$birth_date',app_nationality='$nationality',app_national_id_no='$national_id_no',app_religion='$religion',app_marital_status='$marital_status',app_gender='$gender',blood_group='$blood_group'";
	$identification01="app_id='$app_id'";
	$query->DynamicUpdate($table_name01,$update_field01,$identification01);
	
		
//########### EDIT SCHOLASTIC STATUS ###############

	$table_name02="app_scholastic_status";
	$update_field0201="app_name_of_exam='$noe_ssc',app_group_sub='$gs_ssc',app_result='$res_ssc',app_marks_gpa='$gpa_ssc',app_gpa_outof='$gpa_outof_ssc',app_board_uni='$bu_ssc',app_pass_year='$pass_ssc'";
	$identification0201="app_id='$app_id' and app_position='1'";
	$query->DynamicUpdate($table_name02,$update_field0201,$identification0201);
		
		
	$update_field0202="app_name_of_exam='$noe_hsc',app_group_sub='$gs_hsc',app_result='$res_hsc',app_marks_gpa='$gpa_hsc',app_gpa_outof='$gpa_outof_hsc',app_board_uni='$bu_hsc',app_pass_year='$pass_hsc'";
	$identification0202="app_id='$app_id' and app_position='2'";
	$query->DynamicUpdate($table_name02,$update_field0202,$identification0202);


	$update_field0203="app_name_of_exam='$noe_bsc',app_group_sub='$gs_bsc',app_result='$res_bsc',app_marks_gpa='$gpa_bsc',app_gpa_outof='$gpa_outof_bsc',app_board_uni='$bu_bsc',app_pass_year='$pass_bsc'";
	$identification0203="app_id='$app_id' and app_position='3'";
	$query->DynamicUpdate($table_name02,$update_field0203,$identification0203);


	$update_field0204="app_name_of_exam='$noe_msc',app_group_sub='$gs_msc',app_result='$res_msc',app_marks_gpa='$gpa_msc',app_gpa_outof='$gpa_outof_msc',app_board_uni='$bu_msc',app_pass_year='$pass_msc'";
	$identification0204="app_id='$app_id' and app_position='4'";
	$query->DynamicUpdate($table_name02,$update_field0204,$identification0204);
	
	
	$table_name03="app_extra_status";
	$update_field03="extracurriculamactivities='$extracurriculamactivities',otherskills='$otherskills'";
	$identification03="app_id='$app_id'";
	$query->DynamicUpdate($table_name03,$update_field03,$identification03);
	

//########### EDIT EXPERIENCE ###############
	$table_name04="app_experience";
	$update_field04="app_company='$COMPANY1',app_exp_type='$EXP_TYPE1',app_exp_area='$EXP_AREA1',app_exp_post='$EXP_POST1',app_department='$DEPT1',app_unit='$UNIT1',app_job_location='$JOB_LOC1',app_super_name='$SUPER_NAME1',app_super_phone='$SUPER_PHONE1',app_super_email='$SUPER_EMAIL1',app_reservation='$RESERVATION1',app_serve_from='$EFROM_D1',app__serve_to='$ETO_D1',app_duty='$DUTY1',app_achieve='$ACHIEVE1',app_orga_address='$CLOCATION1'";
	$identification04="app_id='$app_id'";
	$query->DynamicUpdate($table_name04,$update_field04,$identification04);
	

//###########EDIT REFERENCES ###############
	$table_name05="app_references";
	$update_field0501="app_ref_name='$R_NAME1',app_ref_desig='$R_POS1',app_ref_orga='$R_COMP1',app_ref_address='$R_ADD1',app_ref_phone_no='$R_PHONE1',app_ref_cell_no='$R_CELL1',app_ref_email='$R_EMAIL1',app_ref_relation='$R_KNOW1'";
	$identification0501="app_id='$app_id' and position='1'";
	$query->DynamicUpdate($table_name05,$update_field0501,$identification0501);
	
	$update_field0502="app_ref_name='$R_NAME2',app_ref_desig='$R_POS2',app_ref_orga='$R_COMP2',app_ref_address='$R_ADD2',app_ref_phone_no='$R_PHONE2',app_ref_cell_no='$R_CELL2',app_ref_email='$R_EMAIL2',app_ref_relation='$R_KNOW2'";
	$identification0502="app_id='$app_id' and position='2'";
	$query->DynamicUpdate($table_name05,$update_field0502,$identification0502);
//########### PHOTO ###############

	$table_name06="app_photo";
	$update_field06="image_name='$picture_name'";
	$identification06="app_id='$app_id'";
	$query->DynamicUpdate($table_name06,$update_field06,$identification06);
		
	
	
	//list($table_id,$name,$apployeeid,$email,$joiningdate,$designation,$department,$message)=mysql_fetch_row($result);
	
	
	
    $mess="message=Congratulation! All of your informations updated successfully.";
	exit(header("Location:app_resume_show.php?app=$app_id&&$mess"));
?>




<? ob_flush(); ?> 
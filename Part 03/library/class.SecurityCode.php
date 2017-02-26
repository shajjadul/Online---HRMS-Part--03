<?php
class SecurityCode
{
function Generator($lenth)
{
$number=array("A","B","C","D","E","F","G","H","I","J","K","L","N","M","O","P","Q","R","S","U","V","T","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0");

for($i=0; $i<$lenth; $i++)
{
$rand_value=rand(0,61);
$rand_number=$number["$rand_value"];

if(empty($con))
{ $con=$rand_number;}
else{$con="$con"."$rand_number";}



}

return $con;

}



function NumGenerator($lenth)
{
$number=array("1","2","3","4","5","6","7","8","9","0");
echo "<table ><tr><td>";
for($i=0; $i<$lenth; $i++)
{
$rand_value=rand(0,9);
$rand_number=$number["$rand_value"];

if(empty($con))
{ $con=$rand_number;}
else{$con="$con"."$rand_number";}

$this->Style($rand_number);

}
echo"</td> </tr></table> $con";
}


function FreeGenerator($lenth)
{
$number=array("A","B","C","D","E","F","G","H","I","J","K","L","N","M","O","P","Q","R","S","U","V","T","W","X","Y","Z");
echo "<table><tr><td>";
for($i=0; $i<$lenth; $i++)
{
$rand_value=rand(0,25);
$rand_number=$number["$rand_value"];

if(empty($con))
{ $con=$rand_number;}
else{$con="$con"."$rand_number";}

$this->Style($rand_number);

}
echo"</td> </tr></table> $con";
}






function Style($digit)
{
$color=array("#FF0000","#000080","#800000","#FF8000","#574DB9");
$rand_color_num=rand(0,4);
$rand_color=$color["$rand_color_num"];
$rand_size_num=rand(4,5);
echo"<font color=$rand_color size=$rand_size_num>$digit</font>";
return;
}


}

?>
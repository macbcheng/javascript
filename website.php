<!DOCTYPE html>
<html>
<body>



<p>練習網頁2<p>
<?php
$x = 5895;
var_dump($x);
?>

<p>練習網頁3<p>

<?php
$x = 5985;
var_dump(is_int($x));

echo"<br>";
?>
<p>練習網頁4<p>
<?php
$x2 = 10.365;
var_dump(is_float($x));
?>
<p>練習網頁5<p>
<?php
define("GREETING", "Welcome to schools.com");
echo GREETING;
?>

<br><br>
<p>練習網頁6<p>
<?php
define("cars", ["GoRock","BMW","Toyota"]);
echo cars[0];
 ?>
<br>

<p>練習網頁7<p>
<?php
$t = date("H");

if ($t<"20") {
  echo "Have a good day";
}
?>
<br>

<p>練習網頁8<p>
<?php
$x = 1;
while($x<=5){
  echo "The number is: $x<br>";
  $x++;
}
?>
<p>練習網頁9<p>
<?php
$x=1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
?>
<p>練習網頁10<p>
<?php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?>
<p>練習網頁11<p>
<?php
$age= array("Peter"=>"20","Ben"=>"32","Michael"=>"23");

foreach($age as $x => $val)


</body>
</html>

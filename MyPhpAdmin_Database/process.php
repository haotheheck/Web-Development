<?php

//creating database to connect from my local computer to MyPhpAdmin
//Using example of how John keating have demonstrated us to get into it
$host = "webcourse.cs.nuim.ie";
$dbusername = "u190230";
$dbpassword = "thaiqui6noh6Phoh";
$dbname = "cs230_u190230";



    //connecting
    $conn = new mysqli ($host, $dbusername,$dbpassword, $dbname);
//if it does not connect then it will just say connect error
if(mysqli_connect_error()){
    die('connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
}


?>
<?php
//pluging the database from MyPhpAdmin
include ("process.php");

//creating const for ID
$id = $_GET['id'];

if(!empty($id)){

    //Sql Query to delete 1 row of the data
    $query = "DELETE FROM USERNAME WHERE id='$id'";

    //if delete then the console will say successfully
    if(mysqli_query($conn,$query)){
        echo "You have delete user";
        header("Location:index.php");
    }else{
        // Or else it will say that I have fail to delete it
        echo "You have failed to delete ";
        header("Location:index.php");

    }


}



?>
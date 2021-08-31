<?php
//pluging the database from MyPhpAdmin
include "process.php";

//once the form button is clicked. It should process the form 
if(isset($_POST['update'])){

    $title = $_POST['title'];
    $firstName = $_POST['firstName']; 
    $surName =$_POST['surName'];
    $mobileNumber = $_POST['mobileNumber'];
    $emailAddress = $_POST['emailAddress'];
    $addressLine1 = $_POST['addressLine1'];
    $addressLine2 = $_POST['addressLine2'];
    $Town =  $_POST['town'];
    $County = $_POST['county'];
    $Eircode = $_POST['eircode'];

    //writing sql query to update my data from my database
    $sql = "UPDATE 'USERNAME' SET `title`='$title',`firstName`='$firstName',`surName`='$surName',`mobileNumber`='$mobileNumber',
    `emailAddress`='$emailAddress',`addressLine1`='$addressLine1',`addressLine2`='$addressLine2',`town`='$Town',`county`='$County',`eircode`='$Eircode' 
    WHERE 'id' = '$User_id'";

    //declaring sql query 
    $result = $conn->query($sql);

    if($result == TRUE){
        //if successful the console will echo that the record is successful
        echo "Record updated Successfully.";
        header("Location:index.php");
    }
    else{
        //or else it will fail and then redirect back to index.php 
        echo"Error: ".$sql."<br>".$conn->error;
        header("Location:index.php");
    }
    $conn->close();
}

//once I retrive id into a form of Url then we should be able to update the record in the database
If(isset($_GET['id'])){
    $User_id = $_GET['id'];


    //sql query 
    $sql ="SELECT * FROM USERNAME WHERE id='$id'";

    //Declaring Sql to get data
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
        //rendering all the data in the row 
        $id = $_row['id'];
        $title = $_row['title'];
        $firstName = $_row['firstName']; 
        $surName =$_row['surName'];
        $mobileNumber = $_row['mobileNumber'];
        $emailAddress = $_row['emailAddress'];
        $addressLine1 = $_row['addressLine1'];
        $addressLine2 = $_row['addressLine2'];
        $Town =  $_row['town'];
        $County = $_row['county'];
        $Eircode = $_row['eircode'];
        }

    ?>    



<html>
<body>
 

<!-- Copy and paste from add.php and compile it together with the form-->
<!-- then after that using Php to echo out all the const  -->
<h2>User Update Form</h2>


<form action ="" method="POST">
    
    <fieldset>
            <legend> Personal Information </legend>
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Mx") echo "checked";?>
            value="Mx">Mx 
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Ms") echo "checked";?>
            value="Ms">Ms
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Mr") echo "checked";?>
            value="Mr">Mr
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Mrs") echo "checked";?>
            value="Mrs">Mrs
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Miss") echo "checked";?>
            value="Miss">Miss
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Dr") echo "checked";?>
            value="Dr">Dr
            <input type="radio" name="title"
            <?php if (isset($title) && $title=="Other") echo "checked";?>
            value="Other">Other
        <br><br>
                First Name: <input type= "text" name = "firstName" value="<?php echo $firstName; ?>"><br><br>
                Surname: <input type= "text" name = "surName" value="<?php echo $surName; ?>" ><br><br>
                Mobile Number: <input type= "text" name = "mobileNumber" value="<?php echo $mobileNumber; ?>"><br><br>
                Email Address: <input type= "text" name = "emailAddress" value="<?php echo $emailAddress; ?>"><br><br>
                Address Line 1: <input type= "text" name = "addressLine1" value="<?php echo $addressLine1; ?>"><br><br>
                Address Line 2: <input type= "text" name = "addressLine2" value="<?php echo $addressLine2; ?>"><br><br>
                Town: <input type= "text" name = "town" value="<?php echo $Town; ?>"><br><br>
                County: <input type= "text" name = "county" value="<?php echo $County; ?>"><br><br>
                Eircode: <input type= "text" name = "eircode" value="<?php echo $Eircode; ?>"><br><br>
                <input type="submit" value = "Update" name="update" >
    </fieldset>
</form>

</body>
 

</html>


    <?php
    }else{
        echo "No record being recorded";
        //if there is no Id being added into the database then it redirect to the Index.php
        header("Location:index.php");
    }
}
?>

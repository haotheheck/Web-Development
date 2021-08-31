<?php
//pluging the database from MyPhpAdmin
include "process.php";
//connecting the form to my database in order to sucessfully Insert data into USERNAME
if(isset($_POST['submit'])){

        $title = $_POST['title'];
        $firstName = $_POST['firstName']; 
        $surName =$_POST['surName'];
        $mobileNumber = $_POST['mobileNumber'];
        $emailAddress = $_POST['emailAddress'];
        $addressLine1 = $_POST['addressLine1'];
        $addressLine2 = $_POST['addressLine2'];
        $town =  $_POST['town'];
        $county = $_POST['county'];
        $eircode = $_POST['eircode'];

        //sql query to Insert data into my USERNAME 
        $sql = "INSERT INTO USERNAME(title, firstName, surName, mobileNumber, emailAddress, addressLine1, addressLine2, town, county, eircode)
        VALUES('$title', '$firstName', '$surName', '$mobileNumber', '$emailAddress', '$addressLine1', '$addressLine2', '$town', '$county', '$eircode')";
          //Declaring Sql 
        $result = $conn->query($sql);
        //if successful the console will echo that the record have been added into it. 
        if($result == TRUE){
            echo "New record have been added.";
            header("Location:index.php");
        }
        else{
                    //if unsuccessful the console will echo that the record is Error and shoudl redirect back to the index.php
            echo"Error: ".$sql."<br>".$conn->error;
            header("Location:index.php");
        }
        $conn->close();
}

?>

<html>
<head>
</head>
<body>
<h2>Users Form</h2>

<!-- Creating an form -->
<form action ="" method="POST">
    <fieldset>
            <legend> Personal Information </legend>
            <!-- creating an radio option for user to insert their title name instead of typing out -->
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
        <!-- creating an input for user to insert their details  -->
                First Name: <input type= "text" name = "firstName"><br><br>
                Surname: <input type= "text" name = "surName"><br><br>
                Mobile Number: <input type= "text" name = "mobileNumber"><br><br>
                Email Address: <input type= "text" name = "emailAddress"><br><br>
                Address Line 1: <input type= "text" name = "addressLine1"><br><br>
                Address Line 2: <input type= "text" name = "addressLine2"><br><br>
                Town: <input type= "text" name = "town"><br><br>
                County: <input type= "text" name = "county"><br><br>
                Eircode: <input type= "text" name = "eircode"><br><br>
                <input type="submit" name="submit" value = "Submit">
    </fieldset>
</form>

</body>
 

</html>
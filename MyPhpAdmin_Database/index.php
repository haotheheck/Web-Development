<?php
//pluging the database from MyPhpAdmin
include "process.php";
//Sql query to load up database from USERNAME
$sql ="SELECT * FROM USERNAME";

//Declaring Sql query
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>

<!-- Latest compiled and minified CSS -->
<!--  Creating a database Viewing Page  -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <title> Database Viewing Page </title> 
</head> 

<body><!-- database  -->
        <div class = "container">
            <h2> Users </h2>

            <table class = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Mobile Number</th>
                        <th>Email Address</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>Town</th>
                        <th>County</th>
                        <th>Eircode</th>
                    </tr>
                </thead>

                <tbody>
                    <?php //rendering all the data in the row
                        if ($result ->num_rows > 0){
                            while ($row = $result -> fetch_assoc()){
                    ?>
                                <tr>
                                <td><?php echo $row['id'] ?></td>
                                <td><?php echo $row['title'] ?></td>
                                <td><?php echo $row['firstName'] ?></td>
                                <td><?php echo $row['surName'] ?></td>
                                <td><?php echo $row['mobileNumber'] ?></td>
                                <td><?php echo $row['emailAddress'] ?></td>
                                <td><?php echo $row['addressLine1'] ?></td>
                                <td><?php echo $row['addressLine2'] ?></td>
                                <td><?php echo $row['town'] ?></td>
                                <td><?php echo $row['county'] ?></td>
                                <td><?php echo $row['eircode'] ?></td>
                                <!-- creating class buttons -->
                                 <!-- Linking to add.php , update.php and delete.php -->
                                <td><a class ="btn btn-primary" href ="add.php?id=<?php echo $row['id'] ?>"> Add</a>
                                &nbsp;
                                <a class ="btn btn-success" href ="update.php?id=<?php echo $row['id'] ?>"> Update</a>
                                &nbsp;
                                <a class ="btn btn-danger" href ="delete.php?id=<?php echo $row['id'] ?>"> Delete</a></td>
                    
                    <?php        }
                        }
                    ?>



                    </tr>
                </tbody>

            </table> 

        </div>


</body>

</html>

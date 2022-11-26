<?php
include("connection.php");
<<<<<<< Updated upstream
if(isset($_GET["username"])){ 
    $username = $_GET["username"];
    $query = $mysqli -> prepare("SELECT * from users WHERE username = ?");
    $query -> bind_param("s", $username);
=======

if(isset($_GET["username"]) && isset($_GET["password"])){ 
    $username = $_GET["username"];
    $password = $_GET["password"];
    $query = $mysqli -> prepare("SELECT * from users WHERE username = ? AND password = ?");
    $query -> bind_param("ss", $username, $password);
>>>>>>> Stashed changes
    $query -> execute();
    $array = $query->get_result();
    $response = [];
    while($user = $array->fetch_assoc()){
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        $response[] = $user;
    }

    echo json_encode($response); 
}else{
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
    die("Error");
}























?>
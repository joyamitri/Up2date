<?php
include("connection.php");
if(isset($_GET["username"])){ 
    $username = $_GET["username"];
    $query = $mysqli -> prepare("SELECT * from users WHERE username = ?");
    $query -> bind_param("s", $username);
    $query -> execute();
    $array = $query->get_result();
    $response = [];
    while($user = $array->fetch_assoc()){
        $response[] = $user;
    }

    echo json_encode($response); 
}else{
    die("Error");
}























?>
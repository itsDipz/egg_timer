<?php
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $parameter = file_get_contents("php://input", 0);
        $decoded_parameter = json_decode($parameter, true);
        $the_id = $decoded_parameter["the_id"];
        $the_array_of_json_data = json_decode(file_get_contents("./data.json",0),true);
        for ($i=0; $i < count($the_array_of_json_data) ; $i++) { 
            if($the_array_of_json_data[$i]["id"] == $the_id){
                header("Content-Type: application/json");
                echo json_encode($the_array_of_json_data[$i]);
                exit();
            }
        }
    }

?>
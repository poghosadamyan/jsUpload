<?php

if(move_uploaded_file($_FILES["file"]["tmp_name"], './uploads/'.$_FILES["file"]["name"])){
    $response = 'http://'.$_SERVER['HTTP_HOST'].'/uploads/'.$_FILES["file"]["name"];

} else {
    $response ='error';
}

echo $response;
exit;

?>






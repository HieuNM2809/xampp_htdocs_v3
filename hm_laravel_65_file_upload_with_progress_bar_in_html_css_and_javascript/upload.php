<?php
header("Access-Control-Allow-Origin: *"); // Cho phép truy cập từ mọi nguồn
header("Access-Control-Allow-Methods: POST"); // Cho phép sử dụng phương thức POST
header("Access-Control-Allow-Headers: Content-Type"); // Cho phép sử dụng header Content-Type


if(isset($_FILES['file1'])){
    $file_name =  $_FILES['file1']['name'];
    $tmp_name = $_FILES['file1']['tmp_name'];
    $file_up_name = time().$file_name;
    move_uploaded_file($tmp_name, "files/".$file_up_name);
}
?>
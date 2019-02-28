<?php
$file='notes/'.$_POST['file'];

file_put_contents($file, $_POST['text']);

header("Content-Type: application/json; charset=UTF-8");

// if file is saved //
$out = array();
if(file_get_contents($file) == $_POST['text']){
    $out = array(Error=>false);
}else{
    $out = array(Error=>true);
}
echo json_encode($out);
?>

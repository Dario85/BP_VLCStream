<?php
$config = $_GET['config'];
$config = str_replace("\\", "", $config);
echo $config;

$fp = fopen('result.json', 'w');
fwrite($fp, $config);
fclose($fp);

?>
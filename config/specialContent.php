<?php

$request = $_GET['request'];

switch ($request) {
    case 0:
        $fp = fopen('specialContent.json', 'w');
		fwrite($fp, '{"specialContentUrl": "none"}');
		fclose($fp);
        break;
    case 1:
        $fp = fopen('specialContent.json', 'w');
		fwrite($fp, '{"specialContentUrl": "spot.html"}');
		fclose($fp);
        break;
}

?>
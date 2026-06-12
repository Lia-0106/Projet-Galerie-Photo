<?php

$requestMethod = $_SERVER['REQUEST_METHOD'] ;
$path = $_SERVER['PATH_INFO'] ;
$path = substr($path, 1) ;
$ressource = explode('/', $path) ;

$test = $requestMethod . " " . $ressource[0] ;

  header('Content-Type: text/plain; charset=utf-8') ;
  header('Cache-control: no-store, no-cache, must-revalidate') ;
  header('Pragma: no-cache') ;
  header('HTTP/1.1 200 OK') ;

echo $test ;
exit ;

?>
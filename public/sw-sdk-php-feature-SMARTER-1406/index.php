<?php
require_once 'SWSDK.php';
use SWServices\Authentication\AuthenticationService as Authentication;
use SWServices\Stamp\EmisionTimbrado as EmisionTimbrado;

header('Content-type: text/plain');
$params = array(
    "url"=>"http://services.test.sw.com.mx",
    "user"=>"yadira.delarosa@bqsenergy.com",
    "password"=> "BQS+SW"
      );
echo "\n\n------------Token---------------------\n\n";
try{
    Authentication::auth($params);
	$result = Authentication::Token();
	
	if($result->status == "success") {
            echo $result->data->token;
            
    } 
    else {
            echo $result->message;
	}
}
catch(Exception $e){
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

    EmisionTimbrado::Set($params);
    $xml = file_get_contents('./xmlTest.xml');
    $resultadoIssue = EmisionTimbrado::EmisionTimbradoV4($xml);
    var_dump($resultadoIssue);
?>
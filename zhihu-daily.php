<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');

if (empty($_SERVER['QUERY_STRING']) || substr($_SERVER['QUERY_STRING'], 0, 5) !== '/api/') {
    http_response_code(404);
    die;
}

$ch = curl_init('https://news-at.zhihu.com' . $_SERVER['QUERY_STRING']);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_HEADER => true,
]);
$response = curl_exec($ch);
http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));
echo substr($response, curl_getinfo($ch, CURLINFO_HEADER_SIZE));
curl_close($ch);
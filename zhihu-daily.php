<?php
header('Access-Control-Allow-Origin:*');

if (empty($_SERVER['QUERY_STRING']) || substr($_SERVER['QUERY_STRING'], 0, 5) !== '/api/') {
    http_response_code(404);
    die;
}

$ch = curl_init('https://news-at.zhihu.com' . $_SERVER['QUERY_STRING']);
$headers = [];
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_HEADER => true,
    // Can PHP cURL retrieve response headers AND body in a single request?
    // https://stackoverflow.com/questions/9183178#answer-41135574
    CURLOPT_HEADERFUNCTION => function ($curl, $header) use (&$headers) {
        $len = strlen($header);
        $header = explode(':', $header, 2);
        if (count($header) >= 2) $headers[strtolower(trim($header[0]))][] = trim($header[1]);
        return $len;
    }
]);
$response = curl_exec($ch);

http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));
unset($headers['set-cookie']);
foreach ($headers as $key => $value) {
    foreach ($value as $val) {
        header($key . ':' . $val);
    }
}

echo substr($response, curl_getinfo($ch, CURLINFO_HEADER_SIZE));
curl_close($ch);

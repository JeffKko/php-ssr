<?php
$time_start = microtime(true);

$template_html = file_get_contents('src/index.template.html');
$vue_source = file_get_contents('lib/vue.js');
$renderer_source = file_get_contents('lib/basic.js');
$axios_source = file_get_contents('lib/axios.min.js');
$app_source = file_get_contents('dist/server-bundle.js');
$content = file_get_contents('http://localhost/~jeff/php-ssr/db/test.json');
$result  = json_decode($content);


class Utility {
  function writeFile($html) {
    file_put_contents("result/ssr.html", $html);
  }
  function echo($str) {
    echo $str;
  }
}

$v8 = new V8Js();

$v8->utility = new Utility;
$v8->template = $template_html;
$v8->context = $result;

$v8->executeString('var process = { env: { VUE_ENV: "server", NODE_ENV: "production" }}; this.global = { process: process };');
$v8->executeString($vue_source);
$v8->executeString($renderer_source);
$v8->executeString($axios_source);
$v8->executeString($app_source);

$execution_time = (microtime(true) - $time_start) * 1000;
echo 'Total execution time in ' . $execution_time . 'ms' . "\n";
?>
<?php
$time_start = microtime(true);

$vue_source = file_get_contents('lib/vue.js');
$renderer_source = file_get_contents('lib/basic.js');
$app_source = file_get_contents('app-server.js');

class Context {
  var $goodsName = "【元麻布農園】 手作り豆腐キット いいね！~~";
  var $goodsDescription = "ご家庭で、気軽に作りたてのお豆腐をお楽しみいただける「手作り豆腐キット」。この冬は、親子でお豆腐作りにチャレンジしませんか？手作りを通して、大豆の旬や身近な食材の成り立ちをご家庭で楽しく学びましょう。";
  var $goodsImage = "http://www.megalos.co.jp/blog/wp-content/uploads/2016/08/160810_1.jpg";
  var $price = "5,000円";
  var $shipping = "500円";
  var $sellerNick = "rita_pupu";
  var $sellerEvaluate = "15532";
  var $sellerGoodsCount = "753";

  function writeFile($html) {
    file_put_contents("result/ssr.html", $html);
  }
}


$v8 = new V8Js();
$v8->context = new Context;

$v8->executeString('var process = { env: { VUE_ENV: "server", NODE_ENV: "production" }}; this.global = { process: process };');
$v8->executeString($vue_source);
$v8->executeString($renderer_source);
$v8->executeString($app_source);

$execution_time = (microtime(true) - $time_start) * 1000;
echo 'Total execution time in ' . $execution_time . 'ms' . "\n";
?>
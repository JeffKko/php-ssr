<?php
for ($i=0; $i < 20; $i++) {
  exec("php ssr-cache.php > /dev/null &");
  echo $i;
}
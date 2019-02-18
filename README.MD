#

## 前置安裝

* nodejs
* php 7.1 (以上)
* v8
* v8js (for php)

[可參考](https://jeffkko.github.io/blog/#/posts/5)

## 安裝依賴

```
$npm install
$npm install -g parcel-bundler
```

## run a local server (給 puppeteer 爬的 demo page)

```
$npm run serve
```

demo page url:
http://localhost:1234/client.html


## build

if need bundle again:

```
$npm run build
```

entry `/src/server-entry.js`, `/src/client-entry.js`

output `/dist/server-bundle.js`, `/dist/client-bundle.js`

## how to test


### php ssr

```
$npm run ssr
```
or

```
$php ssr-cache.php
```

### puppeteer

```
$npm run puppeteer
```

or

```
$cd puppeteer
$node index.js [url]
```
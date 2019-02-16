parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i='\n<div id="app" class="activity">\n\n  <div class="row">\n    <div class="col-8">\n      <div class="goods-info">\n        <h1 class="activity__title">\n          <span class="badge badge-default">買う</span> {{ goodsName }}\n        </h1>\n        <div class="activity__numbers">\n          <div>価格：<span class="accent">{{ price }}</span></div>\n          <div>送料：<span class="accent">{{ shipping }}</span></div>\n        </div>\n      </div>\n      <div class="gooods-gallery">\n        <img class="top-image" :src="goodsImage"/>\n      </div>\n      <div class="activity__subtitle">\n        {{ goodsDescription }}\n      </div>\n    </div>\n    <div class="col-4">\n      <div class="seller-info">\n        <div class="seller-info-header">賣家資訊</div>\n        <div class="seller-info-body">\n          <ul>\n            <li>{{ sellerNick }} ({{ sellerEvaluate }})</li>\n            <li>賣場首頁</li>\n            <li>全部商品： {{ sellerGoodsCount }}</li>\n            <li>評價分數： {{ sellerEvaluate }} (查看)</li>\n            <li>關於我</li>\n            <li>\n  <div v-for="value in 10">\n    <div v-for="value in 10">\n      <div v-for="value in 10">\n        <div v-for="value in 10">\n        {{value}}\n          <div v-for="value2 in 10">\n          {{value + value2}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="activity__subscribe-block">\n    <div class="text-center mb-2">\n      <a\n        href="javascript:;"\n        class="btn subscribe-button"\n        @click.prevent="showPopup">\n        この商品を購入する\n      </a>\n    </div>\n    <div>\n      <div>ご不明点やご質間などありましたら、お電話でも承っておりますので、お気軽にお電話下さい。</div>\n      <div>TEL: 03-6434-9554<br>株式会社アスラボ（担当　柴田・中家・近藤）</div>\n    </div>\n  </div>\n\n  <div class="activity__important-notice">\n    <h5 class="activity__heading">注意事項・お知らせ</h5>\n    <p class="activity__info-text">お届け期間：3～5日</p>\n  </div>\n</div>\n',e=()=>new Vue({template:i,data:{goodsName:PHP.context.$goodsName,goodsDescription:PHP.context.$goodsDescription,goodsImage:PHP.context.$goodsImage,price:PHP.context.$price,shipping:PHP.context.$shipping,sellerNick:PHP.context.$sellerNick,sellerEvaluate:PHP.context.$sellerEvaluate,sellerGoodsCount:PHP.context.$sellerGoodsCount},mounted(){axios.get(`db/test.json?${(new Date).getTime()}`).then(i=>{this.sellerNick=i.data.sellerNick,this.sellerEvaluate=i.data.sellerEvaluate,this.sellerGoodsCount=i.data.sellerGoodsCount})},methods:{showPopup(){alert("缺貨中~~~~~~")}}});exports.default=e;
},{}],"lLDo":[function(require,module,exports) {
"use strict";var e=t(require("./app.js"));function t(e){return e&&e.__esModule?e:{default:e}}const n=(0,e.default)();renderVueComponentToString(n,(e,t)=>{const n=`\n  <!DOCTYPE html>\n  <html lang="zh-hant-tw">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <meta http-equiv="X-UA-Compatible" content="ie=edge">\n      <title>v8 test</title>\n      <link rel="stylesheet" href="css/main.css">\n    </head>\n    <body>\n      <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="/">ホーム</a></li>\n        <li class="breadcrumb-item"><a href="/goods">買う</a></li>\n        <li class="breadcrumb-item active">【元麻布農園】 手作り豆腐キット いいね！</li>\n      </ol>\n      ${t}\n    </body>\n  </html>\n  `;PHP.context.__call("writeFile",[n])});
},{"./app.js":"A2T1"}]},{},["lLDo"], null)
var template = `
<div id="app" class="activity">

  <div class="row">
    <div class="col-8">
      <div class="goods-info">
        <h1 class="activity__title">
          <span class="badge badge-default">買う</span> {{ goodsName }}
        </h1>
        <div class="activity__numbers">
          <div>価格：<span class="accent">{{ price }}</span></div>
          <div>送料：<span class="accent">{{ shipping }}</span></div>
        </div>
      </div>
      <div class="gooods-gallery">
        <img class="top-image" :src="goodsImage"/>
      </div>
      <div class="activity__subtitle">
        {{ goodsDescription }}
      </div>
    </div>
    <div class="col-4">
      <div class="seller-info">
        <div class="seller-info-header">賣家資訊</div>
        <div class="seller-info-body">
          <ul>
            <li>{{ sellerNick }} ({{ sellerEvaluate }})</li>
            <li>賣場首頁</li>
            <li>全部商品： {{ sellerGoodsCount }}</li>
            <li>評價分數： {{ sellerEvaluate }} (查看)</li>
            <li>關於我</li>
            <li>
  <div v-for="value in 10">
    <div v-for="value in 10">
      <div v-for="value in 10">
        <div v-for="value in 10">
        {{value}}
          <div v-for="value2 in 10">
          {{value + value2}}
          </div>
        </div>
      </div>
    </div>
  </div>
</li>

          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="activity__subscribe-block">
    <div class="text-center mb-2">
      <a
        href="javascript:;"
        class="btn subscribe-button"
        @click.prevent="showPopup">
        この商品を購入する
      </a>
    </div>
    <div>
      <div>ご不明点やご質間などありましたら、お電話でも承っておりますので、お気軽にお電話下さい。</div>
      <div>TEL: 03-6434-9554<br>株式会社アスラボ（担当　柴田・中家・近藤）</div>
    </div>
  </div>

  <div class="activity__important-notice">
    <h5 class="activity__heading">注意事項・お知らせ</h5>
    <p class="activity__info-text">お届け期間：3～5日</p>
  </div>
</div>
`

export default () => {

  return new Vue({
    template,
    data: {
      goodsName: PHP.context.$goodsName,
      goodsDescription: PHP.context.$goodsDescription,
      goodsImage: PHP.context.$goodsImage,
      price: PHP.context.$price,
      shipping: PHP.context.$shipping,
      sellerNick: PHP.context.$sellerNick,
      sellerEvaluate: PHP.context.$sellerEvaluate,
      sellerGoodsCount: PHP.context.$sellerGoodsCount,
    },
    mounted() {
      axios.get(`db/test.json?${new Date().getTime()}`)
        .then(res => {
          this.sellerNick = res.data.sellerNick
          this.sellerEvaluate = res.data.sellerEvaluate
          this.sellerGoodsCount = res.data.sellerGoodsCount
        })
    },
    methods: {
      showPopup() {
        alert('缺貨中~~~~~~')
      }
    }
  })
}
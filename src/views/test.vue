<style scoped>
.wrap {
  /* background: #f2f2f2; */
}
.qq {
  margin-bottom: 100px;
}
.box {
  background: red;
  width: 0.7rem;
  height: 200px;
  color: #fff;
  line-height: 200px;
  text-align: center;
  font-size: 24px;
}
.tips_box {
  width: 92%;
  margin-left: 4%;
  height: 480px;
  margin-top: 50px;
  background: #fff;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 0.3rem 0.15rem;
}
.tips_box_title2 {
  font-size: 0.14rem;
  color: #ff5618;
  margin-top: 0.17rem;
}
.tips_box_txt {
  font-size: 0.14rem;
  color: #333333;
  margin-top: 0.1rem;
  line-height: 0.24rem;
}
table {
  width: 100%;
  height: 2.55rem;
  margin-top: 13px;
}
table,
td,
th {
  border: 1px solid #f1f2f3;
  font-size: 0.12rem;
  color: #333333;
}
.special_color {
  color: #ff342e;
}
.special_left {
  margin-right: 0.18rem;
}
.justify {
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
}
/* tab */
.new_tab {
  margin-top: 0.5rem;
}
>>> .van-tab {
  width: 0.7rem;
  font-weight: bold;
}
>>> .van-tabs--line .van-tabs__wrap {
  height: 0.3rem;
}
>>> .van-tabs__line {
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
}
>>> .van-tabs__wrap {
  border-bottom: 0.01rem solid #f3f2f2;
}
</style>
<template>
  <div class="wrap">
    <!-- <div class="qq"
         @click="toTest">
      test to qq
    </div>
    <div class="qq"
         @@touchstart='weChat'>
      test to weixin
    </div>
    <a href="mqqwpa://im/chat?chat_type=wpa">唤起移动端 qq</a> -->

    <div class="level_swiper">
      <swiper ref="mySwiper"
              :options="option1"
              @slideChange="slideChange">
        <swiper-slide class="benefitBox"
                      v-for="(item, index) in 6"
                      :key="index"
                      @click.native="clickSwiper(index)">
          <div class="box">item{{ index }}</div>
          <!-- @click="clickSwiper(index)" -->
        </swiper-slide>
      </swiper>
      <div>{{ txt }}</div>
      <div class="tips_box">
        <div class="tips_box_title2">充值低成本</div>
        <div class="tips_box_txt">
          充值券 开卡后即送充值全档优惠券 会员期内有效 <br />
          抢单券 开卡后即刻发送至账户 会员期内有效 <br />
          每日接单券 开卡后每日可领会员专属抢单优惠 每日有效
        </div>
        <table border="1"
               align="center">
          <colgroup>
            <col />
            <col style="background-color:rgb(255, 223, 185,0.2)" />
            <col />
          </colgroup>
          <tr align="center">
            <td></td>
            <td>钻石会员</td>
            <td>黄金会员</td>
          </tr>
          <tr align="center">
            <td rowspan="5">充值券</td>
            <td>
              <div class="justify">
                <span>
                  <span>满1198</span>
                  <span class="special_color ">减350元</span>
                </span>
                <span>x2</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>满1198减250元</span>
                <span> x2</span>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <div class="justify">
                <span>满698</span>
                <span class="special_color">减200元</span>
                <span>x2</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>满698减130元</span>
                <span>x2</span>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <div class="justify">
                <span>
                  <span>满388</span>
                  <span class="special_color">减100元</span>
                </span>
                <span>x2</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>满388减60元</span>
                <span>x2</span>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <div class="justify">
                <span><span>满298</span>
                  <span class="special_color">减50元</span>
                </span>
                <span>x2</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>满298减30元</span>
                <span>x2</span>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <div class="justify">
                <span>
                  <span>满198</span>
                  <span class="special_color">减30元 </span>
                </span>
                <span> x2</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>满198减10元</span>
                <span>x2</span>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>抢单券</td>
            <td>
              <div class="justify">
                <span>100元抢单券</span>
                <span class="special_color"> x2</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>100元抢单券</span>
                <span class="special_color"> x2</span>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>每日接单券</td>
            <td>
              <div class="justify">
                <span>满35减5元</span>
                <span class="special_color">每日x5</span>
              </div>
            </td>
            <td>
              <div class="justify">
                <span>满35减5元</span>
                <span class="special_color">每日x3</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- tab -->
    <div class="new_tab">
      <van-tabs v-model="active"
                swipeable
                title-active-color="#2F2F2F"
                title-inactive-color="#BCBCBC">
        <van-tab title="充值券">内容 1</van-tab>
        <van-tab title="抢单券">内容 2</van-tab>
        <van-tab title="退单券">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      txt: "test",
      arrTest: ["1", "2", "3", "4", "5", "6"],
      txt: "",
      option1: {
        slidesPerView: 3, //显示slide的数量
        centeredSlides: true, //居中显示
        initialSlide: 0, //初始索引
        spaceBetween: 50, //间距
      },
      active: 1,
    };
  },
  created () { },
  mounted () {
    this.txt = this.arrTest[this.$refs.mySwiper.swiper.activeIndex];
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: {
    clickSwiper (index) {
      this.$refs.mySwiper.swiper.activeIndex = index;
      console.log(this.$refs.mySwiper.swiper.activeIndex);
      this.txt = this.arrTest[this.$refs.mySwiper.swiper.activeIndex];
    },
    slideChange () {
      console.log(this.$refs.mySwiper.swiper.activeIndex);
      this.txt = this.arrTest[this.$refs.mySwiper.swiper.activeIndex];
    },
    toTest () {
      window.location.href = "https://jq.qq.com/?_wv=1027&k=1HLDQdNj";
    },
    weChat () {
      location.href = "weixin://";
    },
  },
};
</script>

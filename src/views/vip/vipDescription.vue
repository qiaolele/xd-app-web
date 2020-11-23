<style scoped>
.wrap {
  background: #f2f2f2;
  font-family: PingFangSC-Regular, PingFang SC;
}
.box {
  width: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box_shadow {
  opacity: 0.5;
}
.box_img {
  width: 0.5rem;
  margin-top: 0.3rem;
}
.box_title {
  font-size: 0.12rem;
  transform: scale(0.9);
  margin-top: 0.1rem;
}
/* wrap */
.tips_box {
  width: 92%;
  margin-left: 4%;
  height: 480px;
  background: #fff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.1rem;
  padding: 0.3rem 0.15rem;
}
.bg_title {
  font-size: 0.18rem;
  color: #333;
  font-weight: 600;
  z-index: 1;
  background: linear-gradient(#fff, #ffdfb9);
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
.sign_box {
  width: 100%;
  margin-top: 0.14rem;
  display: flex;
  justify-content: center;
}
.sign {
  width: 0;
  height: 0;
  border: 0.1rem solid;
  border-color: transparent transparent #fff;
}
</style>
<template>
  <div class="wrap">
    <swiper ref="mySwiper"
            :options="option1"
            @slideChange="slideChange">
      <swiper-slide class="benefitBox"
                    v-for="item in arrList"
                    :key="item.id"
                    @click.native="clickSwiper(item.id)">
        <div class="box"
             :class="{ box_shadow: activeIndex != item.id }">
          <img class="box_img"
               :src="item.img"
               alt="" />
          <p class="box_title">{{ item.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="sign_box">
      <div class="sign"></div>
    </div>
    <div class="tips_box">
      <span class="bg_title">{{ arrList[activeIndex].desTitle }}</span>
      <div class="tips_box_title2">{{ arrList[activeIndex].desSubTitle }}</div>
      <div v-if="activeIndex != 1"
           class="tips_box_txt">
        {{ arrList[activeIndex].desTxt }}
      </div>
      <div v-else
           class="tips_box_txt">
        充值券 开卡后即送充值全档优惠券 会员期内有效 <br />
        抢单券 开卡后即刻发送至账户 会员期内有效 <br />
        每日接单券 开卡后每日可领会员专属抢单优惠 每日有效
      </div>
      <table v-if="activeIndex == 1"
             border="1"
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
              <span class="special_color"> x4</span>
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
              <span>满35减3元</span>
              <span class="special_color">每日x5</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 0, //当前位置
      arrList: [
        {
          id: 0,
          img: require("@/assets/img/vip/vip_explain_1.png"),
          title: "智能匹配订单",
          desTitle: "智能匹配订单",
          desSubTitle: "获客快又准",
          desTxt: "实时订单优先匹配 每日最高10单",
        },
        {
          id: 1,
          img: require("@/assets/img/vip/vip_explain_2.png"),
          title: "超值充值券",
          desTitle: "专享优惠券",
          desSubTitle: "充值低成本",
          desTxt: "",
        },
        {
          id: 2,
          img: require("@/assets/img/vip/vip_explain_3.png"),
          title: "充值折扣",
          desTitle: "充值折扣",
          desSubTitle: "获客折上折",
          desTxt: "充值无门槛98折 可与充值券同用",
        },
        {
          id: 3,
          img: require("@/assets/img/vip/vip_explain_4.png"),
          title: "精准筛选",
          desTitle: "精准筛选",
          desSubTitle: "获客更高效",
          desTxt: "仅会员可用筛选项，轻松发现目标客户",
        },
        {
          id: 4,
          img: require("@/assets/img/vip/vip_explain_5.png"),
          title: "退单无忧",
          desTitle: "退单无忧",
          desSubTitle: "获客有保障",
          desTxt: "每接10单即可获得1张无理由退单卡",
        },
        {
          id: 5,
          img: require("@/assets/img/vip/vip_explain_6.png"),
          title: "专属客服",
          desTitle: "专属客服",
          desSubTitle: "获客更省心",
          desTxt: "会员专属客服",
        },
      ],
      option1: {
        slidesPerView: 5, //显示slide的数量
        centeredSlides: true, //居中显示
        initialSlide: 0, //初始索引
        spaceBetween: 0, //间距
      },
    };
  },
  created () {
    this.util.title("会员权益说明");
  },
  mounted () {
    this.activeIndex = this.$refs.mySwiper.swiper.activeIndex;
  },
  computed: {},
  methods: {
    clickSwiper (index) {
      this.$refs.mySwiper.swiper.activeIndex = index;
      this.activeIndex = this.$refs.mySwiper.swiper.activeIndex;
    },
    slideChange () {
      this.activeIndex = this.$refs.mySwiper.swiper.activeIndex;
      console.log(this.$refs.mySwiper.swiper.activeIndex);
    },
  },
};
</script>

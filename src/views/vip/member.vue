<style scoped>
.wrap {
  /* background: #f2f2f2; */
  font-family: PingFangSC-Regular, PingFang SC;
  padding-bottom: 0.2rem;
}
.top {
  width: 100%;
  height: 2.7rem;
  position: relative;
}
.top_bg1 {
  background: url('../../assets/img/vip/vip_bg1.png') no-repeat center center;
  background-size: 100% 100%;
}
.top_bg2 {
  background: url('../../assets/img/vip/vip_bg2.png') no-repeat center center;
  background-size: 100% 100%;
}
.notice-swipe {
  height: 30px;
  line-height: 0.3rem;
  font-size: 13px;
}
>>> .van-notice-bar {
  height: 0.3rem;
  background: rgba(255, 59, 0, 0.15);
  color: #fff;
}
/*  */
.header {
  width: 100%;
  padding: 0 0.15rem;
  display: flex;
}
.header_left {
  width: 53%;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 0.1rem;
}
.check_left_index0 {
  height: 0.6rem;
  background: url('../../assets/img/vip/left_fir.png') no-repeat center center;
  background-size: 100% 100%;
}
.check_left_index1 {
  height: 0.5rem;
  background: url('../../assets/img/vip/right_fir.png') no-repeat center center;
  background-size: 100% 100%;
  padding-right: 0.3rem;
}
.header_right {
  width: 53%;
  position: absolute;
  bottom: 0;
  right: 0.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 0.3rem;
}
.check_right_index0 {
  height: 0.5rem;
  background: url('../../assets/img/vip/left_sed.png') no-repeat center center;
  background-size: 100% 100%;
}
.check_right_index1 {
  height: 0.6rem;
  background: url('../../assets/img/vip/right_sed.png') no-repeat center center;
  background-size: 100% 100%;
  z-index: 1;
}
.left_txt {
  color: #3a3a3a;
  font-size: 0.16rem;
  font-weight: 600;
}
.left_txt_dis,
.right_txt_dis {
  color: #b3b3b3;
  font-size: 0.12rem;
  text-transform: Uppercase;
  /* margin-top: 0.06rem; */
}
.right_txt {
  color: #717171;
  font-size: 0.16rem;
}
.tip_icon {
  width: 0.52rem;
  position: absolute;
  bottom: 0;
}
.main_box {
  padding: 0 0.15rem;
}
.main {
  height: 3.3rem;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0.1rem 0.1rem;
  padding: 0.1rem 0;
  position: relative;
}
.discrib {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
}
.dis_icon {
  width: 0.4rem;
}
.dis_tips_one {
  font-size: 0.12rem;
  line-height: 0.12rem;
  color: #2f2f2f;
  margin-top: 0.08rem;
}
.dis_tips_two {
  color: #999999;
  font-size: 0.12rem;
  line-height: 0.12rem;
  transform: scale(0.9);
  margin-top: 0.07rem;
}
.vip_btn {
  width: 94%;
  height: 0.7rem;
  background: url('../../assets/img/vip/vip_button.png') no-repeat center center;
  background-size: 100% 100%;
  margin-left: 3%;
  margin-top: 0.25rem;
  display: flex;
  line-height: 0.7rem;
  position: relative;
  margin-bottom: 0.2rem;
}
.vip_btn_left {
  color: #ffffff;
  /* margin-left: 0.33rem; */
  font-size: 0.14rem;
  font-weight: 600;
  position: absolute;
  left: 8%;
}
.vip_btn_money {
  font-size: 0.24rem;
}
.old_money {
  display: inline-block;
  font-size: 0.12rem;
  transform: scale(0.7);
  text-decoration: line-through;
  font-weight: 400;
}
.open_member {
  color: #ffdaa1;
  font-size: 0.16rem;
  font-weight: 600;
  /* margin-left: 17%; */
  position: absolute;
  left: 68%;
}
.tips_bot {
  width: 100%;
  height: 0.3rem;
  background: #f9f9f9;
  border-radius: 0 0 0.1rem 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 0.14rem;
  margin-top: 0.15rem;
}
.tips_bot img {
  width: 0.08rem;
  margin-left: 0.06rem;
}
/* 弹窗 */
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
}
.wrapper {
  width: 100%;
  height: 4.08rem;
  background: #fff;
  border-radius: 0.1rem 0.1rem 0 0;
  padding: 0 0.2rem;
  position: absolute;
  bottom: 0;
}
.close_toast {
  width: 0.16rem;
  position: absolute;
  right: 0.12rem;
  top: 0.25rem;
}
.toast_title {
  font-size: 0.18rem;
  color: #2f2f2f;
  font-weight: 600;
  margin-top: 0.3rem;
  text-align: center;
}
.toast_price {
  margin-top: 0.1rem;
  text-align: center;
}
.toast_price span:first-child {
  color: #333333;
  font-size: 0.24rem;
}
.toast_price span:last-child {
  color: #3a3a3a;
  font-size: 0.42rem;
  font-weight: 600;
  margin-left: 0.05rem;
  font-family: DINAlternate-Bold, DINAlternate;
}
/*  */
.pay_mode {
  margin-top: 0.1rem;
}
.mode_title {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: bold;
  padding-bottom: 0.05rem;
}
.mode_title2 {
  color: #363636;
  font-size: 0.16rem;
  font-weight: bold;
}
.save_pay {
  width: 0.52rem;
  height: 0.16rem;
  background: rgba(255, 74, 38, 1);
  border-radius: 0.02rem 0 0.1rem 0;
  color: #ffffff;
  font-size: 0.11rem;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
}
.choose_mode {
  margin-top: 0.1rem;
}
.mode_bot:last-child {
  border-bottom: none;
}
.mode_bot {
  padding-bottom: 0.15rem;
  border-bottom: 0.01rem solid #f6f7f8;
}
.mode_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.15rem;
}
.alipay {
  display: flex;
  align-items: center;
}
.alipay span {
  font-size: 0.16rem;
  color: #2f2f2f;
  margin-left: 0.1rem;
}
.alipay_img {
  width: 0.3rem;
  height: 0.3rem;
}
.choose_alipay_img {
  width: 0.26rem;
  height: 0.26rem;
}
.sure_server {
  color: #999999;
  font-size: 0.14rem;
  margin-top: 0.05rem;
}
.pay_money {
  width: 96%;
  height: 0.5rem;
  margin-left: 2%;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.25rem;
  color: #ffffff;
  font-size: 0.16rem;
  font-weight: 600;
  text-align: center;
  line-height: 0.5rem;
  margin-top: 0.3rem;
}
.card {
  background: #ffffff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.1);
  margin-top: 0.15rem;
  margin-bottom: 0.2rem;
  border-radius: 0.1rem;
  padding-top: 0.2rem;
}
.card_title1 {
  color: #2f2f2f;
  font-size: 0.18rem;
  text-align: center;
  font-weight: 600;
}
.card_title2 {
  color: #999999;
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.02rem;
  margin-bottom: 0.15rem;
}
.card_img {
  display: flex;
  justify-content: space-around;
  padding: 0 0.1rem;
  margin-bottom: 0.1rem;
}
.card_img img {
  width: 47%;
  height: 0.7rem;
}
</style>
<template>
  <div class="wrap">
    <div class="top"
         :class="{ top_bg1: checkIndex == 0, top_bg2: checkIndex == 1 }">
      <van-notice-bar left-icon="volume-o"
                      :scrollable="false"
                      v-if="lunboList.length>0">
        <van-swipe vertical
                   class="notice-swipe"
                   :autoplay="3000"
                   :show-indicators="false">
          <van-swipe-item v-for="item in lunboList"
                          :key="item.id">
            {{ item.memberRoration }}
          </van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <div class="header">
        <div class="header_left"
             :class="{
            check_left_index0: checkIndex == 0,
            check_left_index1: checkIndex == 1,
          }"
             @click="checkleft">
          <div :class="{ left_txt: checkIndex == 0, right_txt: checkIndex == 1 }">
            钻石会员
          </div>
          <div class="left_txt_dis"
               v-if="checkIndex == 0">Diamond</div>
          <img v-show="checkIndex == 0"
               class="tip_icon"
               src="@/assets/img/vip/tip_icon.png"
               alt="" />
        </div>
        <div class="header_right"
             :class="{
            check_right_index0: checkIndex == 0,
            check_right_index1: checkIndex == 1,
          }"
             @click="checkRight">
          <div :class="{ left_txt: checkIndex == 1, right_txt: checkIndex == 0 }">
            黄金会员
          </div>
          <div class="right_txt_dis"
               v-if="checkIndex == 1">Noble gold</div>
          <img v-show="checkIndex == 1"
               class="tip_icon"
               src="@/assets/img/vip/tip_icon.png"
               alt="" />
        </div>
      </div>
    </div>
    <div class="main_box">
      <div class="main">
        <van-row gutter="20">
          <van-col span="8"
                   v-for="(item, index) in explain"
                   :key="index">
            <div class="discrib">
              <img class="dis_icon"
                   :src="item.img"
                   alt="" />
              <p class="dis_tips_one">{{ item.mainTitle }}</p>
              <p class="dis_tips_two">{{ item.subtitle }}</p>
            </div>
          </van-col>
        </van-row>
        <div class="vip_btn">
          <div class="vip_btn_left">
            <span>¥</span>
            <span class="vip_btn_money">{{ memberMoney }}</span>
            <span>/季</span>
            <span class="old_money">原价¥{{ prepared }}</span>
          </div>
          <div class="open_member"
               @click="showToast = true">立即开通</div>
        </div>
      </div>
      <div class="card">
        <p class="card_title1">开卡立得升级礼包</p>
        <p class="card_title2">{{checkIndex == 0?4:2}}张总价值{{checkIndex == 0?400:200}}元专享抢单券</p>
        <div class="card_img">
          <img src="@/assets/img/vip/card_icon.png"
               alt="">
          <img src="@/assets/img/vip/card_icon.png"
               alt="">
        </div>
        <div class="card_img"
             v-if="checkIndex == 0">
          <img src="@/assets/img/vip/card_icon.png"
               alt="">
          <img src="@/assets/img/vip/card_icon.png"
               alt="">
        </div>
        <div class="tips_bot">
          <span @click="toVipDes">{{checkIndex == 0?'钻石会员':'黄金会员'}}6大权益说明</span>
          <img src="@/assets/img/vip/vip_enter_icon.png"
               alt="" />
        </div>
      </div>
    </div>
    <van-overlay :show="showToast"
                 @click="showToast = false">
      <div class="wrapper"
           @click.stop>
        <img @click="showToast = false"
             class="close_toast"
             src="@/assets/img/vip/close_toast.png"
             alt="" />
        <p class="toast_title">支付金额</p>
        <p class="toast_price">
          <span>¥</span>
          <span>{{ memberMoney }}</span>
        </p>
        <div class="pay_mode">
          <p class="mode_title">支付方式</p>
          <div class="choose_mode">
            <div v-for="item in payList"
                 :key="item.num"
                 :class="{ mode_bot: item.show }">
              <div class="mode_list"
                   @click="toCheckPay(item.num)"
                   v-if="item.show">
                <div class="alipay">
                  <img class="alipay_img"
                       :src="item.icon"
                       alt="" />
                  <span>{{ item.name }}</span>
                </div>
                <img class="choose_alipay_img"
                     :src="
                    choosePayWay == item.num
                      ? chooseModeImgApp2
                      : chooseModeImgApp
                  "
                     alt="" />
              </div>
            </div>
          </div>
        </div>
        <p class="sure_server"
           @click="toMemberService">
          确认支付表示您已阅读并同意《会员服务协议》
        </p>
        <div class="pay_money"
             @click="payMoney">确定支付</div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
// const regexp = /(?:\.0*|(\.\d+?)0+)$/;

export default {
  data () {
    return {
      showToast: false, //弹窗
      checkIndex: 0, //0：钻石会员；1：黄金会员
      memberId: 2,//选择会员的id
      memberMoney: 0, //会员付款金额
      prepared: 0, //原价
      memberInfo: [],
      lunboList: [],
      explain: [
        {
          img: require("@/assets/img/vip/vip_icon_1.png"),
          mainTitle: "智能匹配订单",
          subtitle: "获客快人一步",
        },
        {
          img: require("@/assets/img/vip/vip_icon_2.png"),
          mainTitle: "4000元专享券",
          subtitle: "直省4000元",
        },
        {
          img: require("@/assets/img/vip/vip_icon_3.png"),
          mainTitle: "充值折扣",
          subtitle: "无门槛98折",
        },
        {
          img: require("@/assets/img/vip/vip_icon_4.png"),
          mainTitle: "精准筛选",
          subtitle: "高效获客",
        },
        {
          img: require("@/assets/img/vip/vip_icon_5.png"),
          mainTitle: "退单无忧",
          subtitle: "无理由退单",
        },
        {
          img: require("@/assets/img/vip/vip_icon_6.png"),
          mainTitle: "专属客服",
          subtitle: "优质服务",
        },
      ],
      choosePayWay: 1, //0:app内购 1:支付宝 2：微信
      chooseModeImgApp: require("@/assets/img/icon_choice1.png"),
      chooseModeImgApp2: require("@/assets/img/icon_choice2.png"),
      payList: [
        {
          name: "App内购买",
          icon: require("@/assets/img/icon_applepay.png"),
          num: 0,
          show: false,
        },
        {
          name: "支付宝",
          icon: require("@/assets/img/icon_alipay.png"),
          num: 1,
          show: true,
        },
        {
          name: "微信支付",
          icon: require("@/assets/img/icon_wecat_pay.png"),
          num: 2,
          show: false,
        },
      ],
    };
  },
  created () {
    this.util.title("VIP会员");
    this.getLunbo();
    this.getMemberInfo();
  },
  mounted () { },
  computed: {},
  methods: {
    getLunbo () {
      this.$get("/app/admin/v1/member/rotationInfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.lunboList = res.data;
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getMemberInfo () {
      this.$get("/app/admin/v1/member/memberLevelfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.memberInfo = res.data;
            this.memberId = this.memberInfo[0].id;
            // this.memberMoney = this.memberInfo[0].content.replace(regexp, '$1');
            this.memberMoney = this.memberInfo[0].content;
            this.prepared = this.memberInfo[0].prepared;
            console.log(this.memberMoney);
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    checkleft () {
      this.checkIndex = 0;
      this.explain[1].mainTitle = "4000元专享券";
      this.explain[1].subtitle = "直省4000元";
      this.memberId = this.memberInfo[this.checkIndex].id;
      // this.memberMoney = this.memberInfo[this.checkIndex].content.replace(regexp, '$1');
      this.memberMoney = this.memberInfo[this.checkIndex].content;
      this.prepared = this.memberInfo[this.checkIndex].prepared;
    },
    checkRight () {
      this.checkIndex = 1;
      this.explain[1].mainTitle = "2000元专享券";
      this.explain[1].subtitle = "直省2000元";
      this.memberId = this.memberInfo[this.checkIndex].id;
      // this.memberMoney = this.memberInfo[this.checkIndex].content.replace(regexp, '$1');
      this.memberMoney = this.memberInfo[this.checkIndex].content;
      this.prepared = this.memberInfo[this.checkIndex].prepared;
    },
    toCheckPay (num) {
      this.choosePayWay = num;
    },
    payMoney () {
      console.log(this.choosePayWay, this.memberId);
      if (this.choosePayWay == 1) {
        //支付宝
        this.$post(
          "/app/v1/pay/aliPay/member?content=" + this.memberMoney + '&id=' + this.memberId
        ).then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.showToast = false;
            let param = {
              str1: res.data,
              str2: 'vip'
            }
            try {
              window.webkit.messageHandlers.newAliPay.postMessage(param); //ios
            } catch (err) {
              window.AppJs.newAliPay(res.data, 'vip'); //android
            }
          } else {
            this.util.toast({ msg: res.msg, type: "fail" });
          }
        });
      } else if (this.choosePayWay == 2) {
        //微信
        this.$post("/app/v1/pay/wxpay/member?content=" + this.memberMoney + '&id=' + this.memberId)
          .then(
            (res) => {
              console.log(res);
              if (res.code == 200) {
                this.showToast = false;
                let param = {
                  str1: res.data,
                  str2: 'vip'
                }
                try {
                  window.webkit.messageHandlers.newWeChatPay.postMessage(param); //ios
                } catch (err) {
                  window.AppJs.newWeChatPay(JSON.stringify(res.data), 'vip'); //android
                }
              } else {
                this.util.toast({ msg: res.msg, type: "fail" });
              }
            }
          );
      } else if (this.choosePayWay == 0) {
        window.webkit.messageHandlers.inAppPurchase.postMessage(
          this.memberMoney
        );
      }
    },
    toVipDes () {
      this.$router.push({
        path: "/vip/vipDescription",
      });
    },
    toMemberService () {
      window.location.href = "/agreeHtml/memberService.html";
    },
  },
};
</script>

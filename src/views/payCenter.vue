<style scoped>
.pay {
  padding: 0 0.15rem;
}
.pay_top {
  width: 100%;
  height: 1.08rem;
  background: linear-gradient(
    135deg,
    rgba(255, 156, 13, 1) 0%,
    rgba(255, 86, 24, 1) 100%
  );
  border-radius: 0.1rem;
  margin-top: 0.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my_money_txt {
  font-size: 0.16rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.my_award {
  display: flex;
  align-items: center;
}
.my_award img {
  width: 0.25rem;
  height: 0.22rem;
}
.my_money {
  font-size: 0.36rem;
  font-weight: bold;
  color: #ffffff;
  margin-left: 0.08rem;
}
.choose_pay {
  margin-top: 0.15rem;
}
.choose_box {
  /* width: 1.08rem; */
  width: 100%;
  height: 0.88rem;
  background: #fff;
  margin-top: 0.1rem;
  border-radius: 0.02rem;
  border: 0.01rem solid rgba(239, 239, 239, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.can_award {
  display: flex;
  align-items: center;
  margin-bottom: -2px;
}
.can_award img {
  width: 0.18rem;
  height: 0.16rem;
}
.can_award span {
  color: #363636;
  font-weight: bold;
  margin-left: 0.02rem;
}
.gold_fz {
  font-size: 0.26rem;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.txt_fz {
  font-size: 0.18rem;
}
.need_momey {
  font-size: 0.16rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  color: #999999;
  font-weight: 400;
}
.click_box {
  background: rgba(255, 238, 231, 1);
  border: 0.01rem solid rgba(255, 86, 24, 1);
}
.click_box_font {
  color: #ff5618;
}
.pay_mode {
  margin-top: 0.3rem;
}
.mode_title {
  color: #363636;
  font-size: 0.16rem;
  font-weight: bold;
  padding-bottom: 0.1rem;
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
.mode_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.1rem;
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
.new_tip {
  margin-top: 0.2rem;
  display: flex;
  align-items: start;
}
.pay_tips {
  font-size: 0.16rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2f2f2f;
  display: flex;
  align-items: center;
  /* min-width: 35%; */
}
.pay_tips img {
  width: 0.14rem;
  height: 0.14rem;
  margin-left: 0.04rem;
}
.pay_toast {
  max-width: 59%;
  font-size: 0.11rem;
  transform: scale(0.9);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  border-radius: 0.04rem;
  padding: 0.06rem 0.08rem;
}
.pay_btn {
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 156, 13, 1) 0%,
    rgba(255, 86, 24, 1) 100%
  );
  border-radius: 0.25rem;
  color: #ffffff;
  font-size: 0.16rem;
  line-height: 0.5rem;
  text-align: center;
  margin-top: 0.3rem;
}
.pay_title {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: bold;
  padding-bottom: 0.05rem;
}
</style>
<template>
  <div class="pay">
    <div class="choose_pay">
      <p class="pay_title">充值金额</p>
      <van-row gutter="10">
        <van-col span="8"
                 v-for="(item, index) in goldList"
                 :key="index">
          <div class="choose_box"
               :class="{ click_box: cardActive == index }"
               @click="choosePayMoney(item.id, index, item.money)">
            <div class="can_award">
              <span class="gold_fz">{{ item.gold }}</span>
              <span class="txt_fz">币</span>
            </div>
            <p class="need_momey"
               :class="{ click_box_font: cardActive == index }">
              ￥{{ item.money }}
            </p>
            <div class="save_pay"
                 v-if="index == 0 && item.hasFirst == 1">
              首充优惠
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="pay_mode">
      <p class="mode_title">支付方式</p>
      <!-- 展示一个 -->
      <div class="choose_mode">
        <div v-for="(item, index) in payList"
             :key="index">
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
                choosePayWay == item.num ? chooseModeImgApp2 : chooseModeImgApp
              "
                 alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="new_tip">
      <div class="pay_tips"
           @click="payTips=!payTips">
        <!-- <p class="mode_title">支付方式</p> -->
        <span class="mode_title2">购买注意事项</span>
        <img src="@/assets/img/icon_tip.png"
             alt="">
      </div>
      <div v-show="payTips"
           class="pay_toast">购买的金币仅限本平台抢单使用，且限购买人使用，不得转让、转赠、提现或退款</div>
    </div>
    <div class="pay_btn"
         @click="payMoney">
      立即充值
    </div>
  </div>
</template>
<script>
import icon_choice1 from "../assets/img/icon_choice1.png";
import icon_choice2 from "../assets/img/icon_choice2.png";
import alipay from "../assets/img/icon_alipay.png";
import appPay from "../assets/img/icon_applepay.png";
import wechat from "../assets/img/icon_wecat_pay.png";

export default {
  data () {
    return {
      cardActive: 1,
      chooseMode: true,
      chooseModeImgApp: icon_choice1,
      chooseModeImgApp2: icon_choice2,
      goldList: [],
      money: 0,
      os: 1, //1安卓 2苹果
      goldid: 2,
      choosePayWay: 1, //0:app内购 1:支付宝 2：微信
      userId: "",
      channel: "",
      udid: "",
      payList: [
        {
          name: "App内购买",
          icon: appPay,
          num: 0,
          show: false,
        },
        {
          name: "支付宝",
          icon: alipay,
          num: 1,
          show: false,
        },
        {
          name: "微信支付",
          icon: wechat,
          num: 2,
          show: false,
        },
      ],
      payTips: false,
      appVersion: "",//当前app传过来的版本号
      newAndVersion: false,//安卓版本号
      newAppVersion: false,//是否为新版本号ios
      appVersionNew: false,//版本号是否大于1.0.1
    };
  },
  created () {
    this.userId = this.$route.query.userId;
    this.util.title("充值中心");
    this.getGold();
    this.os = localStorage.getItem("os");
    this.channel = localStorage.getItem("channel");
    this.udid =
      this.os == 1
        ? localStorage.getItem("androidId")
        : localStorage.getItem("udid");

    this.appVersion = localStorage.getItem('appVersion');
    this.checkPluginNew(this.appVersion, '1.1.1');//ios大于等于 1.1.1 内购 并且appstore
    this.checkPluginNewVersion(this.appVersion, '1.0.1')//ios大于等于 1.0.1 内购 并且appstore1
    this.checkPlugin(this.appVersion, '1.0.2');//安卓版本号大于1.0.2 显示微信
    if (this.os == 1) {
      //安卓
      this.payList[0].show = false;
      this.payList[1].show = true;
      if (this.newAndVersion) {
        // this.payList[2].show = true;
      }
      this.choosePayWay = 1;
    } else {
      if (this.channel == 'appstore1' && this.appVersionNew) {//版本大于等于 1.0.1显示内购
        // this.channel == 'appstore' && this.newAppVersion //版本大于等于 1.1.1显示内购
        this.payList[0].show = true;
        // this.payList[1].show = true;
        // this.payList[2].show = true;
        this.choosePayWay = 0;
      } else {//支付宝
        this.payList[1].show = true;
        this.choosePayWay = 1;
      }
    }
  },
  methods: {
    toNum (a) {
      var a = a.toString();
      var c = a.split('.');
      var num_place = ["", "0", "00", "000", "0000"], r = num_place.reverse();
      for (var i = 0;i < c.length;i++) {
        var len = c[i].length;
        c[i] = r[len] + c[i];
      }
      var res = c.join('');
      return res;
    },
    checkPlugin (a, b) {//版本大于1.0.2
      if (a == 'undefined') {
        return this.newAndVersion = false;
      }
      var a = this.toNum(a);
      var b = this.toNum(b);
      if (a == b) {
        return this.newAndVersion = false;
      } else if (a > b) {
        return this.newAndVersion = true;
      } else {
        return this.newAndVersion = false;
      }
    },
    checkPluginNew (a, b) {//版本等于1.0.0
      var a = this.toNum(a);
      var b = this.toNum(b);
      if (a == b) {
        return this.newAppVersion = true;
      } else if (a > b) {
        return this.newAppVersion = true;
      } else {
        return this.newAppVersion = false;
      }
    },
    checkPluginNewVersion (a, b) {//版本等于1.0.1
      var a = this.toNum(a);
      var b = this.toNum(b);
      if (a == b) {
        return this.appVersionNew = true;
      } else if (a > b) {
        return this.appVersionNew = true;
      } else {
        return this.appVersionNew = false;
      }
    },
    getGold () {
      this.$get("/app/v1/appGold/getByStatus")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.goldList = res.data;
            this.money = this.goldList[1].money;
            this.goldid = this.goldList[1].id;
            //埋点
            this.toCountPoint("h5_vouchercenter_view");
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    choosePayMoney (id, index, money) {
      this.goldid = id;
      this.cardActive = index;
      this.money = money;
    },
    toCheckPay (num) {
      this.choosePayWay = num;
      console.log(this.choosePayWay);
    },
    payMoney () {
      //埋点
      this.toCountPoint("h5_vouchercenter_deposit_click");
      if (this.choosePayWay == 1) {
        console.log(this.goldid, this.choosePayWay, "支付宝支付");
        try {
          window.webkit.messageHandlers.aliPay.postMessage(this.goldid); //ios
        } catch (err) {
          window.AppJs.aliPay(this.goldid); //android
        }
      } else if (this.choosePayWay == 2) {
        console.log(this.goldid, this.choosePayWay, "微信支付");
        try {
          window.webkit.messageHandlers.weChatPay.postMessage(this.goldid); //ios
        } catch (err) {
          window.AppJs.weChatPay(this.goldid); //android
        }
      } else if (this.choosePayWay == 0) {
        console.log(this.goldid, this.choosePayWay, "app内购", this.money);
        window.webkit.messageHandlers.inAppPurchase.postMessage(this.money)
      }
    },
    //统计埋点
    toCountPoint (eventKey) {
      let param = {
        event_key: eventKey,
        app_market_channel: this.channel,
        udid: this.udid,
        user_id: this.userId,
      };
      this.$get("/app/api/v1/newEventTrace", param)
        .then((res) => {
          if (res.code == 200) {
          } else {
            this.util.toast({ msg: res.message });
          }
        })
        .catch((error) => { });
    },
  },
};
</script>

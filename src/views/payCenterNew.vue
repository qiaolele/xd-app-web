<style scoped>
.pay {
  padding: 0.15rem 0.1rem;
  background: #f8f8f8;
  font-family: PingFangSC-Regular, PingFang SC;
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
  background: #fff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.1rem;
  padding: 0.15rem 0.1rem;
}
.choose_box {
  /* width: 1.08rem; */
  width: 100%;
  height: 0.88rem;
  background: #fff;
  margin-top: 0.1rem;
  border-radius: 0.06rem;
  border: 0.01rem solid #e6e6e6;
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
  /* font-size: 0.26rem; */
  font-size: 0.22rem;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.txt_fz {
  /* font-size: 0.18rem; */
  font-size: 0.2rem;
}
.need_momey {
  font-size: 0.16rem;
  /* font-family: PingFangSC-Semibold, PingFang SC; */
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
.choose_tickets {
  margin-top: 0.1rem;
  padding: 0.15rem 0.1rem;
  background: #ffffff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.1rem;
}
.coupon_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.1rem;
  font-size: 0.16rem;
}
.discount_top {
  margin-top: 0.15rem;
}
.coupon_left {
  color: #2f2f2f;
}
.coupon_left_img {
  width: 0.14rem;
  height: 0.14rem;
  margin-left: 0.04rem;
}
.coupon_right {
  display: flex;
  align-items: center;
  color: #999999;
}
.discount_price {
  color: #ff5618;
}
.coupon_right img {
  width: 0.12rem;
  margin-left: 0.04rem;
  margin-right: -0.04rem;
}
.pay_mode {
  margin-top: 0.1rem;
  padding: 0.15rem 0.1rem;
  background: #ffffff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.1rem;
}
.mode_title {
  color: #363636;
  font-size: 0.16rem;
  font-weight: bold;
  padding-bottom: 0.1rem;
  display: flex;
  align-items: center;
  position: relative;
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
.first_pay {
  width: 0.45rem;
  position: absolute;
  left: -0.01rem;
  top: -0.07rem;
}
.choose_mode {
  margin-top: 0.1rem;
}
.mode_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
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
  margin-top: 0.15rem;
  margin-bottom: 1rem;
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
.pay_toast_more {
  position: absolute;
  left: 1.1rem;
  top: 0;
}
.pay_title {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: bold;
  padding-bottom: 0.05rem;
  display: flex;
  justify-content: space-between;
}
.pay_detail {
  display: flex;
  align-items: center;
  color: #999999;
  font-weight: 400;
}
.pay_detail img {
  width: 0.12rem;
  margin-left: 0.02rem;
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
.pay_button {
  width: 100%;
  height: 0.5rem;
  background: #ffffff;
  box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
}
.btn_left {
  width: 64%;
  text-align: right;
  line-height: 0.5rem;
  margin-right: 0.1rem;
  color: #333333;
  font-size: 0.12rem;
}
.pay_money {
  color: #ff6119;
  font-size: 0.18rem;
  margin-left: 0.02rem;
  font-weight: 600;
  text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.1);
}
.btn_right {
  width: 36%;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 0.16rem;
  font-weight: 600;
  text-align: center;
  line-height: 0.5rem;
}
/* 弹层 */
>>> .van-popup {
  width: 100%;
  height: 65%;
  background: #f6f6f6;
  border-radius: 0.1rem 0.1rem 0 0;
}
.wrap {
  background: #f6f6f6;
  font-family: PingFangSC-Regular, PingFang SC;
}
.popup_title {
  color: #2f2f2f;
  font-size: 0.16rem;
  padding-left: 0.15rem;
  margin-top: 0.3rem;
  font-weight: 600;
}
.ticket_use {
  padding: 0.15rem 0.15rem;
  margin-bottom: 1rem;
}
.ticket_box {
  width: 100%;
  height: 1.06rem;
  background: #ffffff;
  border-radius: 0.08rem;
  margin-bottom: 0.1rem;
  display: flex;
  align-items: center;
  position: relative;
}
.ticket_left {
  padding: 0 0.2rem 0 0.15rem;
  border-right: 0.01rem solid #f3f3f3;
  text-align: center;
}
.ticket_money {
  color: #ff5618;
}
.ticket_money span:first-child {
  font-size: 0.16rem;
}
.ticket_money span:last-child {
  font-size: 0.32rem;
  font-weight: 600;
  margin-left: 0.01rem;
}
.ticket_tips {
  color: #999999;
  font-size: 0.12rem;
}
.ticket_mid {
  margin-left: 0.18rem;
  color: #999999;
  font-size: 0.12rem;
}
.ticket_mid p:first-child {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.not_use {
  width: 0.77rem;
  height: 0.16rem;
  color: #999999;
  line-height: 0.16rem;
  text-align: center;
  font-size: 0.12rem;
  transform: scale(0.8);
  background: #f2f2f2;
  border-radius: 0.08rem;
  font-weight: 400;
}
.img_box {
  width: 0.26rem;

  margin-left: 0.1rem;
}
.img_box img {
  width: 100%;
}
.sure_btn {
  width: 92%;
  height: 0.5rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.25rem;
  color: #ffffff;
  font-size: 0.16rem;
  font-weight: 600;
  line-height: 0.5rem;
  text-align: center;
  position: fixed;
  left: 4%;
  bottom: 0.35rem;
}
.no_data {
  text-align: center;
  margin-top: 0.9rem;
}
.no_data img {
  width: 1.2rem;
}
.no_data p {
  color: #999999;
  font-size: 0.16rem;
  margin-top: 0.15rem;
}
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
.wrapper_toast {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.wrap {
  height: 100%;
  overflow: scroll;
}
</style>
<template>
  <div class="pay">
    <div class="choose_pay">
      <div class="pay_title">
        <span>充值金额</span>
        <div class="pay_detail"
             @click="toDetail">
          <span>交易明细</span>
          <img src="@/assets/img/vip/right_icon.png"
               alt="">
        </div>
      </div>
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
            <img v-if="index == 0 && item.hasFirst == 1"
                 class="first_pay"
                 src="@/assets/img/img_money_first.png"
                 alt="" />
            <!-- <div class="save_pay"
                 v-if="index == 0 && item.hasFirst == 1">
              首充优惠
            </div> -->
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="choose_tickets"
         v-if="couponInfo.discount!=1">
      <div class="mode_title">
        <span @click="couponTips=!couponTips">请选择优惠券</span>
        <img class="coupon_left_img"
             @click="couponTips=!couponTips"
             src="@/assets/img/icon_tip.png"
             alt="" />
        <div class="pay_toast pay_toast_more"
             v-if="couponTips">
          实付金额=金币金额x{{couponInfo.discount}}-可用优惠券金额
        </div>
      </div>
      <div class="coupon_box">
        <div class="coupon_left">优惠券</div>
        <div class="coupon_right"
             @click="cilckTicket">
          <span>{{
            couponInfo.price == 0 ? "无可用优惠券" : "-¥" + couponInfo.price
          }}</span>
          <img src="@/assets/img/vip/right_icon.png"
               alt="" />
        </div>
      </div>
      <div class="coupon_box discount_top">
        <div class="coupon_left">VIP充值{{ couponInfo.discount * 100 }}折</div>
        <div class="coupon_right discount_price"
             v-if="couponInfo.discountMoney">
          -¥{{ couponInfo.discountMoney }}
        </div>
      </div>
    </div>
    <div class="pay_mode">
      <p class="mode_title2">支付方式</p>
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
           @click="payTips = !payTips">
        <!-- <p class="mode_title">支付方式</p> -->
        <span class="mode_title2">购买注意事项</span>
        <img src="@/assets/img/icon_tip.png"
             alt="" />
      </div>
      <div v-show="payTips"
           class="pay_toast">
        购买的金币仅限本平台抢单使用，且限购买人使用，不得转让、转赠、提现或退款
      </div>
    </div>
    <!-- <div class="pay_btn"
         @click="payMoney">
      立即充值
    </div> -->
    <div class="pay_button">
      <div class="btn_left">
        <span>实付</span>
        <span class="pay_money">¥{{ couponInfo.goldCount }}</span>
      </div>
      <div class="btn_right"
           @click="payNow">立即充值</div>
    </div>
    <van-overlay :show="showLoading">
      <div class="wrapper_toast">
        <van-loading color="#1989fa"
                     type="spinner" />
      </div>
    </van-overlay>
    <!-- 弹层 -->
    <van-popup v-model="showPopup"
               position="bottom">
      <div class="wrap">
        <p class="popup_title">选择优惠券</p>
        <div class="no_data"
             v-if="listInfo.length == 0">
          <img src="@/assets/img/img_no_date.png"
               alt="" />
          <p>暂无优惠券</p>
        </div>
        <div v-else>
          <div class="ticket_use">
            <div class="ticket_box"
                 v-for="item in listInfo"
                 :key="item.id"
                 @click="chooseTicket(item.flag, item.id)">
              <div class="ticket_left">
                <p class="ticket_money">
                  <span>¥</span>
                  <span>{{ item.price }}</span>
                </p>
                <p class="ticket_tips">满{{ item.conditions }}可用</p>
              </div>
              <div class="ticket_mid">
                <p>
                  <span>{{ item.name }}</span>
                  <span v-if="item.flag == 0"
                        class="not_use">不满足条件</span>
                </p>
                <p>有效期至{{ item.expirTime }}</p>
                <p>{{ item.purpose }}</p>
              </div>
              <div class="img_box">
                <img v-if="item.flag != 0"
                     class="choose_alipay_img"
                     :src="activeIndex == item.id ? checked : unChecked"
                     alt="" />
              </div>
            </div>
          </div>
          <div class="sure_btn"
               @click="sureTicket">确认</div>
        </div>
      </div>
    </van-popup>
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
      cardActive: 1, //充值金额
      chooseModeImgApp: icon_choice1,
      chooseModeImgApp2: icon_choice2,
      goldList: [], //充值金额配置
      money: 0, //充值金额
      os: 1, //1安卓 2苹果
      goldid: 2, //充值金额的goldid
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
      payTips: false, //注意事项
      couponTips: false,//优惠券提示
      appVersion: "", //当前app传过来的版本号
      newAndVersion: false, //安卓版本号
      newAppVersion: false, //是否为新版本号ios
      appVersionNew: false,//版本号是否大于1.0.1
      couponInfo: {}, //匹配优惠券详情
      showPopup: false, //显示弹层
      listInfo: [], //优惠券列表
      activeIndex: "", //默认选中的优惠券id
      checked: require("../assets/img/icon_choice2.png"),
      unChecked: require("../assets/img/icon_choice1.png"),
      showLoading: false, //展示loading
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

    this.appVersion = localStorage.getItem("appVersion");
    this.checkPluginNew(this.appVersion, "1.0.9"); //ios大于等于 1.0.9 内购 并且appstore
    this.checkPluginNewVersion(this.appVersion, '1.0.1')//ios大于等于 1.0.1 内购 并且appstore1
    this.checkPlugin(this.appVersion, "1.0.2"); //安卓版本号大于1.2.0 显示微信
    if (this.os == 1) {
      //安卓
      this.payList[0].show = false;
      this.payList[1].show = true;
      if (this.newAndVersion) {
        // this.payList[2].show = true;
      }
      this.choosePayWay = 1;
    } else {
      if (this.channel == "appstore" && this.newAppVersion //版本大于等于 1.0.9显示内购
        || this.channel == 'appstore1' && this.appVersionNew) {//版本大于等于 1.0.1显示内购
        this.payList[0].show = true;
        // this.payList[1].show = true;
        // this.payList[2].show = true;
        this.choosePayWay = 0;
      } else {
        //支付宝
        this.payList[1].show = true;
        this.choosePayWay = 1;
      }
    }
  },
  methods: {
    toNum (a) {
      var a = a.toString();
      var c = a.split(".");
      var num_place = ["", "0", "00", "000", "0000"],
        r = num_place.reverse();
      for (var i = 0;i < c.length;i++) {
        var len = c[i].length;
        c[i] = r[len] + c[i];
      }
      var res = c.join("");
      return res;
    },
    checkPlugin (a, b) {
      //版本大于1.0.2
      if (a == "undefined") {
        return (this.newAndVersion = false);
      }
      var a = this.toNum(a);
      var b = this.toNum(b);
      if (a == b) {
        return (this.newAndVersion = false);
      } else if (a > b) {
        return (this.newAndVersion = true);
      } else {
        return (this.newAndVersion = false);
      }
    },
    checkPluginNew (a, b) {
      //版本等于1.0.0
      var a = this.toNum(a);
      var b = this.toNum(b);
      if (a == b) {
        return (this.newAppVersion = true);
      } else if (a > b) {
        return (this.newAppVersion = true);
      } else {
        return (this.newAppVersion = false);
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
      //获取金币配置
      this.$get("/app/v1/appGold/getByStatus")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.goldList = res.data;
            this.money = this.goldList[1].money;
            this.goldid = this.goldList[1].id;
            this.matchingTicket(this.goldid);
            //埋点
            this.toCountPoint("h5_vouchercenter_view");
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    choosePayMoney (id, index, money) {
      //选择充值金额
      console.log(id, index);
      this.goldid = id;
      this.cardActive = index;
      this.money = money;
      this.matchingTicket(this.goldid);
    },
    toCheckPay (num) {
      //选择支付方式
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
        window.webkit.messageHandlers.inAppPurchase.postMessage(this.money);
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
    matchingTicket (couponId, goldId) {
      //优惠价格
      let param = {
        goldId: this.goldid,
      };
      this.showLoading = true;
      this.$get("/app/admin/v1/member/couponUserPipei", param)
        .then((res) => {
          console.log(res);
          this.showLoading = false;
          if (res.code == 200) {
            this.couponInfo = res.data;
            if (this.couponInfo.couponId) {
              this.activeIndex = this.couponInfo.couponId;
            } else {
              this.activeIndex = "";
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    cilckTicket () {
      //点击查看优惠券
      this.getTicketInfo(this.goldid);
    },
    swipeRight () {
      console.log("right");
      this.showPopup = false;
    },
    chooseTicket (flag, num) {
      if (flag != 0) {
        this.activeIndex = num;
        // this.getNewTicketInfo();
      }
    },
    toDetail () {
      window.location.href = '/costDetail';
    },
    getNewTicketInfo () {
      //获取选中优惠券信息
      this.showLoading = true;
      this.$get("/app/admin/v1/member/couponUserPipei", {
        couponId: this.activeIndex,
        goldId: this.goldid,
      })
        .then((res) => {
          console.log(res);
          this.showLoading = false;
          if (res.code == 200) {
            this.couponInfo = res.data;
            this.showPopup = false;
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getTicketInfo (goldid) {
      //获取优惠券信息
      this.$get("/app/admin/v1/member/couponDetail", { goldId: goldid })
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.showPopup = true;
            this.listInfo = res.data;
            // 排序
            // this.listInfo = [];
            // var list1 = res.data.filter(item => item.flag == 1);
            // var list2 = res.data.filter(item => item.flag == 0);
            // this.listInfo = this.listInfo.concat(list1).concat(list2);
            if (
              this.listInfo.filter(
                (item) => item.id == this.couponInfo.couponId
              ).length > 0
            ) {
              this.activeIndex = this.listInfo.filter(
                (item) => item.id == this.couponInfo.couponId
              )[0].id;
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    sureTicket () {
      if (this.listInfo.filter((item) => item.flag == 1).length > 0) {
        this.getNewTicketInfo();
      } else {
        this.showPopup = false;
      }
    },
    payNow () {
      //付款
      console.log(this.choosePayWay, this.activeIndex, this.goldid);
      if (this.choosePayWay == 1) {
        //支付宝
        console.log(this.couponInfo.goldCount, this.activeIndex);
        this.$post(
          "/app/v1/pay/aliPay/coupon?goldCount=" +
          this.couponInfo.goldCount +
          "&couponId=" +
          this.activeIndex + "&goldId=" + this.goldid
        ).then((res) => {
          console.log(res);
          if (res.code == 200) {
            let param = {
              str1: res.data,
              str2: ''
            }
            try {
              window.webkit.messageHandlers.newAliPay.postMessage(param); //ios
            } catch (err) {
              window.AppJs.newAliPay(res.data, ''); //android
            }
          } else {
            this.util.toast({ msg: res.msg, type: "fail" });
          }
        });
      } else if (this.choosePayWay == 2) {
        //微信支付
        this.$post(
          "/app/v1/pay/wxpay/coupon?goldCount=" +
          this.couponInfo.goldCount +
          "&couponId=" +
          this.activeIndex + "&goldId=" + this.goldid
        ).then((res) => {
          console.log(res);
          if (res.code == 200) {
            let param = {
              str1: res.data,
              str2: ''
            }
            try {
              window.webkit.messageHandlers.newWeChatPay.postMessage(param); //ios
            } catch (err) {
              window.AppJs.newWeChatPay(JSON.stringify(res.data), ''); //android
            }
          } else {
            this.util.toast({ msg: res.msg, type: "fail" });
          }
        });
      } else if (this.choosePayWay == 0) {
        window.webkit.messageHandlers.inAppPurchase.postMessage(
          this.couponInfo.goldCount
        );
      }
    },
  },
};
</script>

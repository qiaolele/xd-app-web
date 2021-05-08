<style scoped>
.wrap {
  font-family: PingFangSC-Regular, PingFang SC;
  background: #f8f8f8;
  padding-bottom: 0.45rem;
}
.weekly_img {
  width: 100%;
  height: auto;
}
.box {
  width: 92%;
  background: #fff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.04);
  border-radius: 0.1rem;
  margin-left: 4%;
  margin-top: -90%;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem 0.18rem;
  text-align: center;
}
.title_img {
  width: 1.56rem;
}
.tip_img {
  width: 100%;
  margin-top: 0.25rem;
}
.btn {
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.16rem;
  font-weight: 600;
  color: #ffffff;
}
.page_tips {
  margin-top: 0.25rem;
  font-size: 0.12rem;
  font-weight: 400;
  color: #999999;
  line-height: 0.18rem;
  text-align: left;
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
  position: relative;
}
.has_deduc {
  height: 0.24rem;
  background: #ffeee7;
  border-radius: 0.12rem 0.12rem 0.12rem 0.04rem;
  line-height: 0.24rem;
  text-align: center;
  font-size: 0.12rem;
  color: #ff8a18;
  font-weight: 400;
  padding: 0 0.04rem;
  position: absolute;
  right: 0;
  top: -0.08rem;
}

/* 弹窗 */
.wrapper_toast {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
}
.toast_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71%;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.1rem;
  margin-top: -0.3rem;
}
.toast_tips {
  margin: 0.24rem 0;
  font-size: 0.16rem;
  line-height: 0.26rem;
  padding: 0 0.15rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #2f2f2f;
  text-align: center;
}
.toast_btns {
  width: 100%;
  height: 0.46rem;
  line-height: 0.46rem;
  border-top: 0.01rem solid #f0f0f0;
  display: flex;
}
.toast_btns div:first-child {
  border-right: 0.01rem solid #f0f0f0;
  color: #2f2f2f;
}
.toast_btns div {
  width: 49%;
  text-align: center;
  font-weight: 600;
  font-size: 0.16rem;
  color: #ff5618;
}
</style>
<template>
  <div class="wrap">
    <img class="weekly_img"
         src="@/assets/img/weekly_member_bg.png"
         alt="">
    <div class="box">
      <img class="title_img"
           src="@/assets/img/weekly_member_title.png"
           alt="">
      <img class="tip_img"
           src="@/assets/img/weekly_tip_img.png"
           alt="">
      <div class="btn"
           @click="buyWeekly">获取周卡</div>
      <div class="page_tips">
        1、会员体验卡有效期为7天；<br>
        2、活动仅限新用户参与，每人只能购买一次体验卡；<br>
        3、购买体验卡之前需完成信贷经理认证；<br>
        4、用户购买体验卡后，每天可免费抢单1次，直到第7天止；<br>
        5、会员可享受智能匹配功能，精准获客。<br>
        *本活动最终解释权归展业帮所有，如有疑问请联系客服
      </div>
    </div>
    <!--  -->
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
          <span>{{content}}</span>
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
             @click="payMoney">
          确定支付
        </div>
      </div>
    </van-overlay>
    <!-- 弹框 -->
    <van-overlay :show="showHomePage"
                 @click="showHomePage = false">
      <div class="wrapper_toast">
        <div @click.stop
             class="toast_box">
          <p class="toast_tips">您还未完成信贷经理认证，请先前往认证</p>
          <div class="toast_btns">
            <div @click="showHomePage = false">取消</div>
            <div @click="toHomePage">去认证</div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showToast: false, //弹窗
      showHomePage: false,//实名认证弹窗
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
      choosePayWay: 1, //0:app内购 1:支付宝 2：微信
      chooseModeImgApp: require("@/assets/img/icon_choice1.png"),
      chooseModeImgApp2: require("@/assets/img/icon_choice2.png"),
      isAuth: false,//是否认证过
      content: '',//付款价格
      memberId: 18,//周卡会员的id
    }
  },
  created () {
    this.util.title("会员体验卡");
    this.getWeeklyMember();
    this.getUserInfo();
  },
  methods: {
    toCheckPay (num) {
      this.choosePayWay = num;
    },
    buyWeekly () {
      if (!this.isAuth) {
        this.showHomePage = true;
      } else {
        this.showToast = true;
      }
    },
    payMoney () {
      console.log(this.choosePayWay);
      if (this.choosePayWay == 1) {
        //支付宝
        this.$post(
          "/app/v1/pay/aliPay/member?content=" + this.content + '&id=' + this.memberId
        ).then((res) => {
          // console.log(res);
          if (res.code == 200) {
            this.showToast = false;
            if (res.data) {
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
              this.$emit('update-page');
            }
          } else {
            this.util.toast({ msg: res.msg, type: "fail" });
          }
        });
      } else if (this.choosePayWay == 2) {
        //微信
        this.$post("/app/v1/pay/wxpay/member?content=" + this.content + '&id=' + this.memberId)
          .then(
            (res) => {
              // console.log(res);
              if (res.code == 200) {
                this.showToast = false;
                if (res.data) {
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
                  this.$emit('update-page');
                }
              } else {
                this.util.toast({ msg: res.msg, type: "fail" });
              }
            }
          );
      } else if (this.choosePayWay == 0) {
        window.webkit.messageHandlers.inAppPurchase.postMessage(
          this.content
        );
      }
    },
    getWeeklyMember () {
      this.$get("/app/admin/v1/member/memberZhoukaInfo").then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.content = res.data.content;
          this.memberId = res.data.id;
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    toMemberService () {
      window.location.href = "/agreeHtml/memberService.html";
    },
    getUserInfo () {//判断用户是否认证过
      this.$get("/app/v1/user/getByUserId").then((res) => {
        // console.log(res);
        if (res.code == 200) {
          if (res.data.authStatus == 2) {//认证过
            this.isAuth = true;
          } else {//未认证过
            this.isAuth = false;
          }
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    toHomePage () {//去实名认证
      try {
        window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=3&id=0'); //ios
      } catch (err) {
        window.AppJs.toClientPath('product_manager_index/?Page=3&id=0'); //android
      }
    }
  },
}
</script>
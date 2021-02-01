<style scoped>
.wrap {
  background: #f2f2f2;
  background: #fff;
  font-family: PingFangSC-Regular, PingFang SC;
  padding-bottom: 0.3rem;
}
.top {
  width: 100%;
  height: 2.8rem;
  background: #ffca57;
  position: relative;
}
.top_card {
  position: absolute;
  bottom: 0;
  left: 4%;
  width: 92%;
  height: 1.8rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.level_type_gold {
  background-image: url('../../assets/img/vip/vip_card_bg1.png');
}
.level_type_dlamond {
  background-image: url('../../assets/img/vip/vip_card_bg2.png');
}
.member_type {
  color: #ffde95;
  font-size: 0.2rem;
  margin-left: 0.2rem;
  line-height: 0.2rem;
}
.member_icon {
  width: 94%;
  margin-top: 0.8rem;
  margin-left: 3%;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.15rem 0;
  height: 0.8rem;
}
.info_left {
  display: flex;
  align-items: center;
}
.info_left img {
  width: 0.4rem;
  height: 0.4rem;
  border: 0.02rem solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
.member_info {
  color: #351300;
  margin-left: 0.1rem;
}
.member_info p:first-child {
  font-size: 0.2rem;
  font-weight: 600;
}
.member_info p:last-child {
  font-size: 0.14rem;
}
.member_pay {
  width: 0.76rem;
  height: 0.28rem;
  text-align: center;
  line-height: 0.28rem;
  color: #4e1000;
  font-size: 0.14rem;
  border-radius: 0.15rem;
  border: 0.01rem solid #3c1200;
}
.top_toast {
  width: 100%;
  position: absolute;
  bottom: -0.02rem;
}
.get_ticket {
  padding: 0 0.15rem;
  margin-top: 0.2rem;
}
.get_ticket span:first-child {
  color: #2f2f2f;
  font-size: 0.18rem;
  font-weight: 600;
}
.get_ticket span:last-child {
  color: #adadad;
  font-size: 0.14rem;
  margin-left: 0.06rem;
}
.tickets {
  margin-top: 0.17rem;
  padding-left: 0.15rem;
  width: 100%;
  overflow: scroll;
  white-space: nowrap;
}
.tickets::-webkit-scrollbar {
  display: none;
}
.ticket_info {
  width: 24%;
  height: 0.92rem;
  background: #fff7ed;
  border-radius: 0.08rem;
  border: 0.01rem solid #f6edda;
  margin-right: 0.1rem;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.ticket_price {
  color: #ff5618;
  margin-top: 0.1rem;
}
.ticket_price span:first-child {
  font-size: 0.16rem;
  line-height: 0.16rem;
}
.ticket_price span:last-child {
  font-size: 0.32rem;
  margin-left: 0.01rem;
  font-weight: 600;
  line-height: 0.32rem;
}
.ticket_detail {
  color: #9d8061;
  font-size: 0.12rem;
  transform: scale(0.8);
  text-align: center;
  margin-top: 0.01rem;
}
.btn_ticket {
  width: 100%;
  height: 0.28rem;
  text-align: center;
  line-height: 0.28rem;
  color: #2f2f2f;
  font-size: 0.12rem;
  background: #ffca57;
  border-radius: 0 0 0.06rem 0.06rem;
  position: absolute;
  bottom: 0;
}
.has_ticket {
  background: #ffe0a1;
}
.other_tickets {
  padding: 0 0.15rem;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other_tickets_left {
  color: #2f2f2f;
  font-size: 0.18rem;
  font-weight: 600;
}
.other_tickets_right {
  color: #adadad;
  font-size: 0.14rem;
  display: flex;
  align-items: center;
}
.other_tickets_right img {
  width: 0.12rem;
  margin-left: 0.04rem;
}
/* tab */
.new_tab {
  margin-top: 0.2rem;
}
>>> .van-tab {
  width: 0.8rem;
  font-weight: bold;
  font-size: 0.16rem;
}
>>> .van-tabs--line .van-tabs__wrap {
  height: 0.3rem;
}
>>> .van-tabs__line {
  /* width: 0.24rem; */
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
}
>>> .van-tabs__wrap {
  border-bottom: 0.01rem solid #f3f2f2;
}
>>> .van-tabs__nav {
  display: inline-flex;
}
/* 使用优惠券 */
.ticket_use {
  padding: 0.14rem 0.15rem;
}
/* .ticket_box {
  width: 100%;
  height: 1.06rem;
  background: #ffffff;
  box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.ticket_left {
  padding: 0 0.15rem;
  border-right: 0.01rem solid #f3f3f3;
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
}
.ticket_right {
  width: 0.5rem;
  height: 0.22rem;
  background: #ff5618;
  border-radius: 0.11rem;
  text-align: center;
  line-height: 0.22rem;
  color: #ffffff;
  font-size: 0.12rem;
}
.ticket_num {
  width: 0.36rem;
  height: 0.18rem;
  background: rgba(255, 85, 0, 0.2);
  border-radius: 0 0.08rem 0 0.08rem;
  color: #ff5618;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.18rem;
  position: absolute;
  top: 0;
  right: 0;
}
.no_data_box {
  text-align: center;
}
.no_date {
  width: 1.2rem;
  margin-top: 0.13rem;
}
.no_data_box p {
  color: #a3a3a3;
  font-size: 0.16rem;
  margin-top: 0.15rem;
} */
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
>>> .van-popup--bottom {
  border-radius: 0.1rem 0.1rem 0 0;
}
.toast_box {
  /* height: 4.86rem; */
}
.toast_top {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
  padding: 0 0.1rem;
}
.toast_top span {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: 600;
  line-height: 0.16rem;
}
.toast_top img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.02rem;
}
.vip_level {
  width: 100%;
  padding: 0 0.05rem;
}
.vip_level img {
  width: 100%;
}
.choose_title {
  display: flex;
  align-items: center;
  padding: 0 0.1rem;
}
.choose_title img {
  width: 0.22rem;
}
.choose_icon {
  width: 0.03rem;
  height: 0.18rem;
  background: #ff5618;
}
.choose_title span {
  font-size: 0.14rem;
  color: #999;
  line-height: 0.14rem;
  font-weight: 600;
  margin-left: 0.08rem;
}
.pay_box {
  padding: 0 0.1rem;
  display: flex;
  margin-top: 0.12rem;
}
.pay_way {
  width: 1.2rem;
  height: 0.5rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.1rem;
  position: relative;
}
.choose_pay_way {
  background: rgba(255, 228, 228, 0.24);
  border: 0.01rem solid #ff4022;
}
.pay_icon {
  width: 0.2rem;
}
.pay_name {
  color: #333;
  font-size: 0.14rem;
  font-weight: 600;
  line-height: 0.14rem;
  margin-left: 0.08rem;
}
.pay_choose {
  width: 0.19rem;
  position: absolute;
  right: 0;
  bottom: 0;
}
.agreement {
  color: #999999;
  font-size: 0.12rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
  line-height: 0.12rem;
}
.pay_btn {
  width: 86%;
  height: 0.5rem;
  margin-left: 7%;
  margin-top: 0.3rem;
  margin-bottom: 0.39rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.25rem;
  color: #fff;
  font-size: 0.16rem;
  font-weight: 600;
  line-height: 0.5rem;
  text-align: center;
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
  top: -0.1rem;
}
</style>
<template>
  <div class="wrap">
    <div class="top">
      <div class="info">
        <div class="info_left">
          <img src="@/assets/img/vip/head_icon.png"
               alt="" />
          <div class="member_info">
            <p>{{ userInfo.name }}</p>
            <p>{{ endTime }}到期</p>
          </div>
        </div>
        <div class="member_pay"
             @click="moreVip"
             v-if="this.leftDay<=10">立即续费</div>
      </div>
      <div class="top_card"
           :class="{'level_type_gold':userInfo.memberLevel=='黄金会员','level_type_dlamond':userInfo.memberLevel=='钻石会员'}"
           @click="toDescript">
        <img class="member_icon"
             src="@/assets/img/vip/vip_img_icon.png"
             alt="" />
      </div>
      <img class="top_toast"
           src="@/assets/img/vip/vip_img_rdian.png"
           alt="" />
    </div>
    <div class="middle">
      <div class="get_ticket">
        <span>每日抢单券</span>
        <span>每日可领5张，当日有效</span>
      </div>
      <div class="tickets">
        <div class="ticket_info"
             v-for="item in grabbingList"
             :key="item.id"
             @click="getCoupon(item.id)">
          <div class="ticket_price">
            <span>¥</span>
            <span>{{userInfo.memberLevel=='黄金会员'?3:5}}</span>
          </div>
          <p class="ticket_detail">满{{userInfo.memberLevel=='黄金会员'?30:35}}元可用</p>
          <div class="btn_ticket"
               :class="{
              has_ticket:
                couponList.filter((status) => status.remark == item.id).length >
                0,
            }">
            <!-- {{
              couponList.filter((status) => status.remark == item.id).length > 0
                ? "已领取"
                : "立即领取"
            }} -->
            {{getTicketStatus(item.id)}}
          </div>
        </div>
      </div>
    </div>
    <div class="other_tickets">
      <span class="other_tickets_left">其他优惠券</span>
      <div class="other_tickets_right"
           @click="useDetail">
        <span>查看使用明细</span>
        <img src="@/assets/img/vip/right_icon.png"
             alt="" />
      </div>
    </div>
    <!-- tab -->
    <div class="new_tab">
      <van-tabs v-model="active"
                swipeable
                title-active-color="#2F2F2F"
                title-inactive-color="#BCBCBC"
                line-width="24px">
        <van-tab title="充值券">
          <div class="ticket_use">
            <!-- <div class="ticket_box">
              <div class="ticket_left">
                <p class="ticket_money">
                  <span>¥</span>
                  <span>350</span>
                </p>
                <p class="ticket_tips">满1198元可用</p>
              </div>
              <div class="ticket_mid">
                <p>专享充值券</p>
                <p>充值折扣</p>
                <p>有效期至2020-11-07 00:00</p>
              </div>
              <div class="ticket_right">去使用</div>
              <div class="ticket_num">2张</div>
            </div> -->
            <Tickets :arrList="rechargeList"
                     :type="1"></Tickets>
          </div>
        </van-tab>
        <van-tab title="抢单券">
          <div class="ticket_use">
            <Tickets :arrList="getTicketList"
                     :type="2"></Tickets>
          </div>
        </van-tab>
        <van-tab title="退单券">
          <div class="ticket_use">
            <Tickets :arrList="chargebackList"
                     :type="3"></Tickets>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 续费弹窗 -->
    <van-popup v-model="showToast"
               position="bottom">
      <div class="toast_box">
        <div class="toast_top">
          <span>选择会员</span>
          <img src="@/assets/img/vip/close_toast.png"
               alt=""
               @click="showToast=false">
        </div>
        <div class="vip_level">
          <div @click="chooseVip(1)">
            <img :src="require(`@/assets/img/vip/vip_zs${vipActive}.png`)"
                 alt="">
          </div>
          <div @click="chooseVip(2)">
            <img :src="require(`@/assets/img/vip/vip_hj${vipActive}.png`)"
                 alt="">
          </div>
        </div>
        <div class="choose_title">
          <!-- <img src="@/assets/img/vip/vip_choose_icon.png"
               alt=""> -->
          <div class="choose_icon"></div>
          <span>选择支付方式</span>
        </div>
        <div class="pay_box">
          <div class="pay_way"
               v-for="item in payList"
               :key="item.num"
               @click="choosePayWay(item.num)"
               :class="{'choose_pay_way':item.num == payActive}"
               v-show="item.showPay">
            <img class="pay_icon"
                 :src="item.icon"
                 alt="">
            <span class="pay_name">{{item.name}}</span>
            <img v-show="item.num == payActive"
                 class="pay_choose"
                 src="@/assets/img/vip/pay_choose.png"
                 alt="">
          </div>
        </div>
        <span class="agreement"
              @click="toMemberService">确认支付表示您已阅读并同意《会员服务协议》</span>
        <div class="pay_btn"
             @click="renew">
          确定支付{{payMoney}}元
          <div class="has_deduc"
               v-if="memberRemark">{{memberRemark}}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Tickets from "../../components/tickets";
import moment from "moment";
import alipay from "../../assets/img/vip/icon_alipay.png";
import wechat from "../../assets/img/vip/icon_wx.png";

export default {
  components: {
    Tickets,
  },
  data () {
    return {
      active: 0, //tab切换
      userInfo: {}, //以后会员信息
      endTime: "", //到期时间
      grabbingList: [
        //会员每日可领抢单券
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
      ],
      couponList: [], //会员已领抢单券
      rechargeList: [], //充值券列表
      getTicketList: [], //抢单券列表
      chargebackList: [], //退单券
      os: 1,//1安卓  2ios
      today: moment().format("YYYY-MM-DD HH:mm:ss"),//当前时间
      leftDay: 20,//剩余时间
      showToast: false,//弹窗展示
      vipActive: 1,//1钻石会员 2黄金会员
      payMoney: 0,//需要续费支付的钱
      memberRemark: '',//是否抵扣文案
      payActive: 0,//0 支付宝 1微信
      payList: [
        {
          name: "支付宝",
          icon: alipay,
          num: 0,
          showPay: true
        },
        {
          name: "微信支付",
          icon: wechat,
          num: 1,
          showPay: false
        },
      ],
      memberList: [],//会员列表
      memberId: 2,//选择会员的id
    };
  },
  created () {
    this.os = localStorage.getItem("os");
    this.util.title("会员中心");
    this.getMemberInfo();
    this.getMember();
    this.getCouponList();
    this.rechargeTicket(2);
    this.rechargeTicket(3);
    this.rechargeTicket(4);
  },
  mounted () { },
  computed: {},
  methods: {
    choosePayWay (num) {//选择支付方式
      this.payActive = num;
    },
    chooseVip (level) {//选择充值vip等级
      this.vipActive = level;
      console.log(level)
      this.payMoney = this.memberList[this.vipActive - 1].content;
      this.memberRemark = this.memberList[this.vipActive - 1].remark;
      this.memberId = this.memberList[this.vipActive - 1].id;
    },
    moreVip () {//立即续费
      this.showToast = true;
    },
    toMemberService () {//会员协议
      window.location.href = "/agreeHtml/memberService.html";
    },
    getMemberInfo () {
      //获取用户会员信息
      this.$get("/app/admin/v1/member/memberInfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.userInfo = res.data[0];
            this.endTime = this.userInfo.expiryTime.split(" ")[0];
            console.log(this.userInfo.expiryTime.split(" "));
            this.leftDay = moment(this.userInfo.expiryTime).diff(moment(this.today), 'days')
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getCouponList () {
      //获取已领取的抢单券信息
      this.$get("/app/admin/v1/member/couponList")
        .then((res) => {
          // console.log(res);
          if (res.code == 200) {
            this.couponList = res.data;
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getCoupon (id) {
      //点击获取抢单券
      if (!this.couponList.filter((status) => status.remark == id).length) {
        this.$get("/app/admin/v1/member/coupon", { remark: id })
          .then((res) => {
            console.log(res);
            if (res.code == 200) {
              this.util.toast({ msg: "领取成功" });
              this.getCouponList();
            } else {
              this.util.toast({ msg: res.message, type: "fail" });
            }
          })
          .catch((err) => { });
      }
    },
    rechargeTicket (typeState) {
      //获取充值券信息
      this.$get("/app/admin/v1/member/couponInfo", { typeState: typeState })
        .then((res) => {
          // console.log(res);
          if (res.code == 200) {
            if (typeState == 2) {
              //抢单券
              this.getTicketList = res.data;
            } else if (typeState == 3) {
              //充值券
              this.rechargeList = res.data;
            } else if (typeState == 4) {
              //退单券
              this.chargebackList = res.data;
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getTicketStatus (id) {
      if (this.couponList.filter((status) => status.remark == id).length > 0) {
        if (this.couponList.filter((status) => status.remark == id)[0].state == 1) {
          return '已领取';
        } else if (this.couponList.filter((status) => status.remark == id)[0].state == 2) {
          return '已使用';
        }
      } else {
        return "立即领取";
      }
    },
    getMember () {//获取会员信息
      this.$get("/app/admin/v1/member/memberLevelfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.memberList = res.data;
            this.payMoney = this.memberList[0].content;
            this.memberRemark = this.memberList[0].remark;
            this.memberId = this.memberList[0].id;
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    renew () {//续费
      if (this.payActive == 0) {//支付宝
        this.$post(
          "/app/v1/pay/aliPay/member?content=" + this.payMoney + '&id=' + this.memberId
        ).then((res) => {
          console.log(res);
          this.showToast = false;
          if (res.code == 200) {
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
              this.getMemberInfo();
              this.getMember();
              this.getCouponList();
              this.rechargeTicket(2);
              this.rechargeTicket(3);
              this.rechargeTicket(4);
            }
          } else {
            this.util.toast({ msg: res.msg, type: "fail" });
          }
        });
      } else if (this.payActive == 1) {//微信
        this.$post("/app/v1/pay/wxpay/member?content=" + this.payMoney + '&id=' + this.memberId)
          .then(
            (res) => {
              console.log(res);
              this.showToast = false;
              if (res.code == 200) {
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
                  this.getMemberInfo();
                  this.getMember();
                  this.getCouponList();
                  this.rechargeTicket(2);
                  this.rechargeTicket(3);
                  this.rechargeTicket(4);
                }
              } else {
                this.util.toast({ msg: res.msg, type: "fail" });
              }
            }
          );
      }
    },
    useDetail () {
      this.$router.push({
        path: "/vip/usageDetails",
      });
    },
    toDescript () {
      this.$router.push({
        path: "/vip/vipDescription",
      });
    }
  },
};
</script>

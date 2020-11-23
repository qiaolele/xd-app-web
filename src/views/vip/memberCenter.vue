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
        <!-- <div class="member_pay">立即续费</div> -->
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
  </div>
</template>
<script>
import Tickets from "../../components/tickets";

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
    };
  },
  created () {
    this.os = localStorage.getItem("os");
    this.util.title("会员中心");
    this.getMemberInfo();
    this.getCouponList();
    this.rechargeTicket(2);
    this.rechargeTicket(3);
    this.rechargeTicket(4);
  },
  mounted () { },
  computed: {},
  methods: {
    getMemberInfo () {
      //获取用户会员信息
      this.$get("/app/admin/v1/member/memberInfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.userInfo = res.data[0];
            this.endTime = this.userInfo.expiryTime.split(" ")[0];
            console.log(this.userInfo.expiryTime.split(" "));
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
          console.log(res);
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
          console.log(res);
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

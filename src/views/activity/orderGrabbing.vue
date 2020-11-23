<style scoped>
.wrap {
  background: #fff1d7;
  font-family: PingFangSC-Regular, PingFang SC;
  padding-bottom: 0.1rem;
}
.colon {
  display: inline-block;
  margin: 0 0.04rem;
  color: #ea3122;
  line-height: 0.44rem;
  font-size: 0.44rem;
  margin-top: -0.1rem;
}
.block {
  display: inline-block;
  width: 0.34rem;
  color: #ea3122;
  font-size: 0.44rem;
  text-align: center;
  line-height: 0.54rem;
  background: url('../../assets/img/img_time_bg.png') no-repeat center center;
  background-size: 100% 100%;
}
.block_left {
  margin-left: 0.02rem;
}
.page_bg {
  width: 100%;
}
.box {
  padding: 0 0.1rem;
  margin-top: -0.3rem;
  display: flex;
}
.main {
  width: 100%;
  /* height: 4.4rem; */
  background: #ea3122;
  border-radius: 0.08rem;
  padding: 0 0.08rem 0.08rem;
}
.time_bg_icon {
  width: 78%;
  margin-left: 11%;
  margin-top: 0.15rem;
}
.time_box {
  background: #ffffff;
  border-radius: 0.06rem;
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0.1rem 0.1rem;
}
>>> .van-count-down {
  display: flex;
  align-items: center;
}
.top_time {
  margin-top: 0.3rem;
}
.btn {
  width: 272px;
  height: 0.4rem;
  background: #d6d6d6;
  border-radius: 0.2rem;
  color: #ffffff;
  font-size: 0.18rem;
  font-weight: 600;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.19rem;
}
.can_click {
  background: #ea3122;
  color: #ffffff;
}
.rules {
  width: 100%;
  background: #ffeed3;
  border-radius: 0.02rem;
  margin-top: 0.2rem;
  padding: 0.1rem 0.05rem;
}
.rules img {
  width: 64%;
  margin-left: 18%;
  margin-top: 0.05rem;
}
.rules div {
  color: #99361b;
  font-size: 0.12rem;
  margin-top: 0.15rem;
  line-height: 0.19rem;
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
  <div class="wrap"
       v-show="showPage">
    <img class="page_bg"
         src="@/assets/img/time_bg_new.png"
         alt="">
    <div class="box">
      <div class="main">
        <img class="time_bg_icon"
             src="@/assets/img/time_bg_icon.png"
             alt="">
        <div class="time_box">
          <div class="top_time">
            <van-count-down :time="time"
                            @finish="finish()">
              <template #default="timeData">
                <!-- <div>{{timeData}}</div> -->
                <span class="block">{{ timeData.hours>=10?timeData.hours.toString().substring(0,1):0 }}</span>
                <span class="block block_left">{{ timeData.hours>=10?timeData.hours.toString().substring(1,2):timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes>=10?timeData.minutes.toString().substring(0,1):0}}</span>
                <span class="block block_left">{{ timeData.minutes>=10?timeData.minutes.toString().substring(1,2):timeData.minutes}}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds>=10?timeData.seconds.toString().substring(0,1):0 }}</span>
                <span class="block block_left">{{ timeData.seconds>=10?timeData.seconds.toString().substring(1,2):timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <div class="btn"
               :class="{'can_click':timeOver}"
               @click="toList">
            {{timeOver?'立即进入':hours+'点整开抢'}}
          </div>
          <div class="rules">
            <img src="@/assets/img/activty_rules_icon.png"
                 alt="">
            <div>
              1. 参加活动请确保已升级至最新版本：安卓1.0.7以上 、iOS1.0.8以上。未升级无法参与活动；<br>
              2. 活动时间：09:00-09:01、12:00-12:01、18:00-18:01；<br>
              3. 活动的订单价格为1金币，且仅限活动页面订单；<br>
              4. 普通用户每个时间段仅有1次机会，VIP用户每个时间段有3次机会；<br>
              5. VIP用户可筛选定位城市的订单；<br>
              6. 活动的订单不可申请退单；
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <van-overlay :show="toastShow"
                 @click="toastShow = false">
      <div class="wrapper_toast">
        <div @click.stop
             class="toast_box">
          <p class="toast_tips">您还未完成信贷经理认证，请先前往认证</p>
          <div class="toast_btns">
            <div @click="toastShow = false">取消</div>
            <div @click="toHomePage">去认证</div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data () {
    return {
      showPage: false,
      time: 0,
      timeNew: '10',
      hours: 0,
      timeOver: false,
      toastShow: false,//弹窗
      isAuth: false,//是否认证过
    }
  },
  created () {
    this.util.title("限时限量抢单活动");
    // console.log(new Date(this.timeNew * 1000))
    this.getTime();
    this.getUserInfo();
  },
  methods: {
    getTime () {
      this.$get("/app/v1/order/startCountdown").then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.showPage = true;
          this.time = res.data.startCountdown * 1000;
          this.timeNew = res.data.startCountdown * 1000;
          // this.time = 10000;
          // this.timeNew = 10000;
          let getHour = moment(res.data.endTime).hour();
          this.hours = getHour;
          // if (getHour >= 10) {
          //   this.hours = getHour;
          // } else {
          //   this.hours = getHour.toString();//.replace(/\b(0+)/gi, "")
          //   console.log(this.hours)
          // }
          console.log(moment(res.data.endTime).hour())
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    getUserInfo () {
      this.$get("/app/v1/user/getByUserId").then((res) => {
        console.log(res);
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
    finish () {
      console.log(this.time, this.timeNew)
      if (this.time == this.timeNew) {
        // this.util.toast({ msg: '倒计时结束' });
        this.timeOver = true;
      }
    },
    toList () {
      if (this.timeOver && this.isAuth) {
        this.$router.push({
          path: "/activity/grabbingList",
        });
      } else if (this.timeOver && !this.isAuth) {
        this.toastShow = true;
      }
    },
    toHomePage () {
      try {
        window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=3&id=0'); //ios
      } catch (err) {
        window.AppJs.toClientPath('product_manager_index/?Page=3&id=0'); //android
      }
    }
  }
}
</script>



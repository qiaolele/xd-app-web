<style scoped>
.wrap {
  background: #f6f7f8;
  font-family: PingFangSC-Regular, PingFang SC;
}
.top {
  width: 100%;
  height: 3rem;
  background: url('../assets/img/credit_bg.png') no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.credit_rules {
  width: 0.56rem;
  height: 0.26rem;
  background: #ff6811;
  border-radius: 0.3rem 0 0 0.3rem;
  font-size: 0.14rem;
  color: #ffffff;
  line-height: 0.26rem;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0.15rem;
}
.top_icon {
  /* width: 66%; */
  width: 2.5rem;
  /* height: 1.53rem; */
  background: url('../assets/img/credit_bg_icon5.png') no-repeat center center;
  background-size: 100% 100%;
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_fir {
  background: url('../assets/img/credit_bg_icon1.png') no-repeat center center;
  background-size: 100% 100%;
}
.top_sec {
  background: url('../assets/img/credit_bg_icon2.png') no-repeat center center;
  background-size: 100% 100%;
}
.top_thr {
  background: url('../assets/img/credit_bg_icon3.png') no-repeat center center;
  background-size: 100% 100%;
}
.top_fth {
  background: url('../assets/img/credit_bg_icon4.png') no-repeat center center;
  background-size: 100% 100%;
}
.top_fif {
  background: url('../assets/img/credit_bg_icon5.png') no-repeat center center;
  background-size: 100% 100%;
}
.top_num {
  font-size: 0.44rem;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #ffffff;
  line-height: 0.46rem;
  margin-top: 0.53rem;
  display: flex;
  align-items: center;
}
.top_num span {
  font-size: 0.36rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  line-height: 0.36rem;
}
.top_level {
  width: 1.16rem;
  height: 0.28rem;
  background: #ffffff;
  border-radius: 0.02rem;
  margin-top: 0.05rem;
  font-size: 0.2rem;
  font-weight: 600;
  color: #ff6615;
  text-align: center;
  line-height: 0.28rem;
  border-radius: 0.18rem;
}
.top_time {
  font-size: 0.12rem;
  color: #ffffff;
  line-height: 0.14rem;
  margin-top: 0.11rem;
}
.box {
  padding: 0 0.15rem;
  margin-top: -0.8rem;
  position: relative;
  padding-bottom: 0.2rem;
}
.task {
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 0.14rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.04rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.1rem;
}
.task_icon {
  width: 1.26rem;
  margin-top: 0.24rem;
  margin-bottom: 0.1rem;
}
.list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list_left {
  display: flex;
}
.list_left img {
  width: 0.4rem;
  height: 0.4rem;
}
.list_right {
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-bottom: 0.01rem solid #f6f7f8;
  margin-left: 0.1rem;
  padding: 0.15rem 0;
}
.list:last-child .list_right {
  border-bottom: none;
}
.task_info {
  /* margin-left: 0.1rem; */
}
.task_title {
  font-size: 0.16rem;
  font-weight: 600;
  color: #363636;
  line-height: 0.16rem;
}
.task_add_num {
  font-size: 0.12rem;
  color: #999999;
  line-height: 0.12rem;
  margin-top: 0.1rem;
}
.list_btn {
  width: 0.72rem;
  height: 0.3rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.15rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.14rem;
  font-weight: 600;
  color: #ffffff;
}
.list_btn_com {
  background: #cacaca;
}
.interest {
  width: 100%;
  height: 199px;
  background: #ffffff;
  border-radius: 0.04rem;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.1rem;
}
.interest_icon {
  width: 1.26rem;
  margin-top: 0.24rem;
  margin-bottom: 0.1rem;
}
.credit_details {
  width: 100%;
  height: 0.44rem;
  background: #ffffff;
  border-radius: 0.04rem;
  margin-top: 0.1rem;
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.14rem;
  color: #999999;
}
</style>

<template>
  <div class="wrap">
    <div class="top">
      <div class="credit_rules"
           @click="toRules">规则</div>
      <div class="top_icon"
           :class="{'top_fir':parseFloat(info.creditCount)<=100&&parseFloat(info.creditCount)>0,
                    'top_sec':parseFloat(info.creditCount)<200&&parseFloat(info.creditCount)>100,
                    'top_thr':parseFloat(info.creditCount)<=300&&parseFloat(info.creditCount)>200,
                    'top_fth':parseFloat(info.creditCount)<=400&&parseFloat(info.creditCount)>300,
                    'top_fif':parseFloat(info.creditCount)>400}">
        <p class="top_num">{{parseFloat(info.creditCount)}}</p>
        <div class="top_level">{{info.status==0?'信用良好':'信用较差'}}</div>
        <p class="top_time">评估时间：{{info.time}}</p>
      </div>
    </div>
    <div class="box">
      <div class="task">
        <img class="task_icon"
             src="@/assets/img/credit_task.png"
             alt="">
        <div class="list"
             v-for="item in listArr"
             :key="item.busType">
          <div class="list_left">
            <img :src="require(`@/assets/img/credit_task_icon${item.busType-1}.png`)"
                 alt="">
          </div>
          <div class="list_right">
            <div class="task_info">
              <p class="task_title">{{item.title}}</p>
              <p class="task_add_num">{{item.description}}</p>
            </div>
            <div class="list_btn"
                 :class="{'list_btn_com':item.status==1}"
                 @click="doTask(item.busType,item.status)">{{item.status==1?'已完成':'去加分'}}</div>
          </div>
        </div>
      </div>
      <div class="interest">
        <img class="interest_icon"
             src="@/assets/img/credit_interest.png"
             alt="">
        <div class="list"
             v-for="item in memberArr"
             :key="item.id">
          <div class="list_left">
            <img v-if="item.id==1"
                 src="@/assets/img/credit_insert.png"
                 alt="">
            <img v-if="item.id==2"
                 src="@/assets/img/credit_task_icon1.png"
                 alt="">
          </div>
          <div class="list_right">
            <div class="task_info">
              <p class="task_title">¥{{item.money}} {{item.title}}</p>
              <p class="task_add_num">{{item.description}}</p>
            </div>
            <div class="list_btn"
                 :class="{'list_btn_com':item.status!=1}"
                 @click="exchangeMember(item.status,item.id)">
              <span v-if="item.status==0">不可兑换</span>
              <span v-if="item.status==1">立即兑换</span>
              <span v-if="item.status==2">已兑换</span>
            </div>
          </div>
        </div>
      </div>
      <div class="credit_details"
           @click="toDetail">查看信用分明细</div>
    </div>
    <!-- 是否封号 -->
    <Prohibit :titleToast="titleToast"
              :titleTips="titleTips"></Prohibit>
  </div>
</template>

<script>
import Prohibit from '../components/prohibit'

export default {
  components: {
    Prohibit
  },
  data () {
    return {
      titleToast: false,//封号弹窗
      titleTips: '',//封号信息
      listArr: [],//任务列表
      memberArr: [],//会员列表
      info: {},//所有信息
    }
  },
  created () {
    this.util.title("信用分");
    this.getInfo();
  },
  methods: {
    getInfo () {
      this.$get("/app/v1/credit/index")
        .then((res) => {
          console.log(res)
          if (res.code == 200) {
            this.info = res.data;
            this.listArr = res.data.tasks;
            this.memberArr = res.data.interests;
          } else {
            // this.util.toast({ msg: res.msg });
            this.titleTips = res.msg;
            this.titleToast = true;
          }
        })
        .catch((error) => { });
    },
    doTask (busType, status) {
      if (status == 0) {
        if (busType == 1) {//信贷经理认证
          try {
            window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=3&id=0'); //ios
          } catch (err) {
            window.AppJs.toClientPath('product_manager_index/?Page=3&id=0'); //android
          }
        } else if (busType == 2) {//成为会员
          console.log('huiyuan')
          this.$router.push({
            path: "/vip/userMember",
          });
        } else if (busType == 3) {//充值
          this.$router.push({
            path: "/payCenterNew",
          });
        } else if (busType == 4) {//邀请好友
          this.$router.push({
            path: "/activity/inviteFriends",
          });
        } else if (busType == 5) {//抢单 跳转到首页
          try {
            window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=3&id=0'); //ios
          } catch (err) {
            window.AppJs.toClientPath('product_manager_index/?Page=3&id=0'); //android
          }
        }
      }
    },
    exchangeMember (status, id) {
      if (status == 1) {
        this.$get("/app/v1/credit/exchange", { id: id })
          .then((res) => {
            console.log(res)
            if (res.code == 200) {
              this.util.toast({ msg: '兑换成功', type: "fail" });
              this.getInfo();
            } else {
              this.util.toast({ msg: res.msg });
            }
          })
          .catch((error) => { });
      }
    },
    toDetail () {
      this.$router.push({
        path: "/file/transactionDetail",
      });
    },
    toRules () {
      this.$router.push({
        path: '/file/creditRules'
      })
    }
  },
}
</script>


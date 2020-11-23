<style scoped>
.common {
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Regular, PingFang SC;
  background: url('../../assets/img/vip/feedback_img_bg.png') no-repeat center
    center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.success_img {
  width: 0.9rem;
  margin-top: 0.9rem;
}
.success_tip1 {
  color: #2f2f2f;
  font-weight: 600;
  font-size: 0.24rem;
  margin-top: 0.23rem;
}
.success_tip2 {
  color: #2f2f2f;
  font-weight: 600;
  font-size: 0.3rem;
  margin-top: 0.15rem;
}
.btn {
  width: 52%;
  height: 0.5rem;
  background: #343434;
  border-radius: 0.25rem;
  margin-top: 0.44rem;
  color: #ffdfaa;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.5rem;
  font-weight: 600;
}
</style>
<template>
  <div class="common">
    <img class="success_img"
         :src="status==1?successImg:failImg"
         alt="">
    <p class="success_tip1">{{status==1?'恭喜您，已成功开通':'购买出错啦'}}</p>
    <p class="success_tip2"
       v-if="status==1">{{memberType}}</p>
    <p class="success_tip2"
       v-else>请重新尝试</p>
    <div class="btn"
         @click="ckickBtn">{{status==1?'进入会员中心':'重新购买'}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      successImg: require('../..//assets/img/vip/icon_feed_success.png'),
      failImg: require('../../assets/img/vip/icon_feed_fail.png'),
      status: 1,//0: 充值失败；1:充值成功
      memberType: ''
    };
  },
  created () {
    this.status = this.$route.query.status;
    this.util.title("VIP会员");
    if (this.status == 1) {
      this.getMemberInfo();
    }
  },
  methods: {
    getMemberInfo () {
      //获取用户会员信息
      this.$get("/app/admin/v1/member/memberInfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            if (res.data.length > 0) {
              this.memberType = res.data[0].memberLevel;
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    ckickBtn () {
      this.$router.push({
        path: "/vip/userMember",
      });
    }
  },
};
</script>

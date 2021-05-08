<style scoped>
.wrap {
  font-family: PingFangSC-Regular, PingFang SC;
  background: #ffffff;
  font-size: 0.12rem;
}
.member {
  margin-top: 0.7rem;
  text-align: center;
}
.member img {
  width: 1.15rem;
  height: 0.84rem;
  margin-bottom: 0.1rem;
}
.member p {
  color: #363636;
  font-size: 0.2rem;
  font-weight: 600;
  line-height: 0.32rem;
}
.ordinary {
  margin-top: 0.9rem;
  text-align: center;
}
.ordinary img {
  width: 1.2rem;
  height: 1.2rem;
}
.ordinary p {
  color: #999999;
  font-size: 0.16rem;
  line-height: 0.26rem;
}
</style>
<template>
  <div class="wrap">
    <div class="ordinary"
         v-if="selectCoupon==0">
      <img src="@/assets/img/charge_back_nomember.png"
           alt="">
      <p>已提交人工审核</p>
      <p>预计1-2个工作日完成</p>
    </div>
    <div class="member"
         v-else>
      <img src="@/assets/img/charge_back_member.png"
           alt="">
      <p>使用会员特权</p>
      <p>无理由退单成功</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectCoupon: 0,//0：非会员；1：会员
    }
  },
  created () {
    this.util.title("申请退单");
    this.selectCoupon = this.$route.query.selectCoupon;

  },
  methods: {
  },
}
</script>
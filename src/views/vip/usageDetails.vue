<style scoped>
.wrap {
  background: #f6f6f6;
}
.ticket_use {
  padding: 0.15rem 0.15rem;
}
.ticket_box {
  width: 100%;
  height: 1.06rem;
  background: #ffffff;
  border-radius: 0.08rem;
  margin-bottom: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.ticket_left {
  padding: 0 0.2rem 0 0.15rem;
  border-right: 0.01rem solid #f3f3f3;
  text-align: center;
  width: 32%;
}
.ticket_money {
  color: #999999;
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
  margin-left: 0.14rem;
  color: #999999;
  font-size: 0.12rem;
}
.ticket_mid p {
  line-height: 0.12rem;
  margin-bottom: 0.08rem;
}
.ticket_mid p:last-child {
  margin-bottom: 0;
}
.ticket_mid p:first-child {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: 600;
}
.img_box {
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-left: 0.1rem;
}
.img_used {
  width: 0.7rem;
}
/*  */
.no_data_box {
  text-align: center;
}
.no_date {
  width: 1.6rem;
  margin-top: 0.3rem;
}
.no_data_box p {
  color: #a3a3a3;
  font-size: 0.16rem;
  margin-top: 0.15rem;
}
</style>
<template>
  <div class="wrap">
    <div class="no_data_box"
         v-if="listInfo.length == 0">
      <img class="no_date"
           src="@/assets/img/vip/img_no_date.png"
           alt="" />
      <p>暂无使用明细</p>
    </div>
    <div class="ticket_use"
         v-else>
      <div class="ticket_box"
           v-for="item in listInfo"
           :key="item.id">
        <div class="ticket_left">
          <p class="ticket_money">
            <span>¥</span>
            <span>{{item.price}}</span>
          </p>
          <p class="ticket_tips"
             v-if="item.name=='专享充值券'">满{{item.conditions}}元可用</p>
          <p class="ticket_tips"
             v-if="item.name=='抢单券'|| item.name=='每日抢单券'">
            {{item.conditions==0?'任意可用':'满'+item.conditions+'元可用'}}
          </p>
          <p v-if="item.name=='无理由退单券'"
             class="ticket_tips">无理由退单</p>
        </div>
        <div class="ticket_mid">
          <p>{{item.name}}</p>
          <p>{{getNewTime(item.useTime)}}使用</p>
          <p>{{item.purpose}}</p>
        </div>
        <div class="img_box">
          <img class="img_used"
               src="@/assets/img/vip/img_used.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data () {
    return {
      listInfo: []
    };
  },
  created () {
    this.util.title("使用明细");
    this.getUseDetails();
  },
  methods: {
    getUseDetails () {
      this.$get("/app/admin/v1/member/couponUseInfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.listInfo = res.data;
            console.log(this.listInfo.length)
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getNewTime (date) {
      return moment(date).format('YYYY-MM-DD HH:mm')
    },
  },

};
</script>

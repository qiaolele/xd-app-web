<style scoped>
.wrap {
  font-family: PingFangSC-Regular, PingFang SC;
}
.cost {
  padding: 0 0.15rem;
}
.cost_list {
  width: 100%;
  height: 0.79rem;
  border-bottom: 0.01rem solid #f6f7f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list_left {
  display: flex;
  flex-direction: column;
}
.pay_name {
  color: #363636;
  font-size: 0.16rem;
  font-weight: 500;
}
.pay_time {
  font-size: 0.14rem;
  color: #999999;
}
.list_right {
  font-size: 0.2rem;
  color: #363636;
  font-weight: 500;
}
.list_right span {
  font-family: PingFangSC-Semibold, PingFang SC;
}
.list_right img {
  width: 0.08rem;
  height: 0.08rem;
}
.list_color {
  color: #ff5618;
}
.momey_top {
  width: 100%;
  height: 1.08rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top_dis {
  display: flex;
  align-items: center;
  color: #2f2f2f;
}
.top_dis img {
  width: 0.18rem;
  height: 0.15rem;
  margin-right: 0.04rem;
}
.money_txt {
  font-size: 0.16rem;
  font-weight: bold;
}
.has_money {
  font-size: 0.36rem;
  font-weight: 500;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.empty {
  width: 100%;
  height: 0.1rem;
  background: #f8f8f8;
}
.txt_fz {
  font-size: 0.34rem;
  font-weight: 500;
  margin-top: -0.01rem;
}
.gold_css {
  display: flex;
  align-items: center;
  color: #2f2f2f;
}
.no_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.9rem 0;
}
.no_data img {
  width: 1.2rem;
}
.no_data span {
  font-size: 0.16rem;
  color: #999999;
}
/* test */
.test2 {
  position: fixed;
  bottom: 0.5rem;
}
</style>
<template>
  <div class="wrap">
    <div class="no_data"
         v-if="list.length == 0">
      <img src="@/assets/img/img_no_date.png"
           alt="" />
      <span>暂无交易明细</span>
      <!-- <div class="test2"
           @click="toGrab">grab</div> -->
    </div>
    <div v-else>
      <div class="momey_top">
        <div class="top_dis">
          <img src="@/assets/img/icon_pay.png"
               alt="" />
          <span class="money_txt">账户余额</span>
        </div>
        <div class="gold_css">
          <p class="has_money">{{ leftGoldCount }}</p>
          <span class="txt_fz">币</span>
        </div>
      </div>
      <!-- <div class="test"
           @click="toGrab">grab</div> -->
      <div class="empty"></div>
      <div class="cost">
        <div class="cost_list"
             v-for="(item, index) in list"
             :key="index">
          <div class="list_left">
            <p class="pay_name">{{ item.remark }}</p>
            <p class="pay_time">{{ changeTime(item.gmtCreate) }}</p>
          </div>
          <div class="list_right"
               :class="{ list_color: item.goldCount > 0 }">
            <span>{{ item.goldCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      leftGoldCount: 0,
      list: [],
    };
  },
  created () {
    this.util.title("交易明细");
    this.getDetail();
  },
  methods: {
    getDetail () {
      let param = {
        productId: 1,
      };
      this.$get("/app/v1/user/costDetail").then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.leftGoldCount = res.data.goldCount;
          this.list = res.data.prepaidList;
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    changeTime (time) {
      let txt = time.split("T");
      return txt[0] + " " + txt[1];
    },
    // test
    toGrab () {
      this.$router.push({
        path: "/activity/orderGrabbing",
      });
    }
  },
};
</script>

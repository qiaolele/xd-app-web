<template>
  <div>
    <div class="no_data_box"
         v-if="arrList.length == 0">
      <img class="no_date"
           src="@/assets/img/vip/img_no_date.png"
           alt="" />
      <p>暂无此类优惠券</p>
    </div>
    <div v-else>
      <div class="ticket_box"
           v-for="item in arrList"
           :key="item.id">
        <div class="ticket_left">
          <p v-if="item.name == '无理由退单券'"
             class="charge_back">
            {{ item.purpose }}
          </p>
          <p v-else
             class="ticket_money">
            <span>¥</span>
            <span>{{ item.price }}</span>
          </p>
          <p class="ticket_tips"
             v-if="item.name == '抢单券'">
            {{
              item.conditions == 0
                ? "任意可用"
                : "满" + item.conditions + "元可用"
            }}
          </p>
          <p v-if="item.name == '专享充值券'"
             class="ticket_tips">
            满{{ item.conditions }}元可用
          </p>
          <p v-if="item.name == '无理由退单券'"
             class="ticket_tips">
            无理由退单
          </p>
        </div>
        <div class="ticket_mid">
          <p>{{ item.name }}</p>
          <p>{{ item.purpose }}</p>
          <p>有效期至{{ getNewTime(item.expirTime) }}</p>
        </div>
        <div class="ticket_right"
             @click="toUse(item)">去使用</div>
        <!-- <div class="ticket_num">2张</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["arrList", "type"],
  data () {
    return {};
  },
  methods: {
    getNewTime (str) {
      return str.slice(0, str.length - 3);
    },
    toUse (item) {
      console.log(item);
      console.log(this.type);
      if (this.type == 1) {
        this.$router.push({
          path: "/payCenterNew",
        });
        // try {
        //   window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=4&id=156'); //ios
        // } catch (err) {
        //   window.AppJs.toClientPath('product_manager_index/?Page=4&id=11'); //android
        // }
      } else if (this.type == 2) {//抢单
        try {
          window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=3&id=0'); //ios
        } catch (err) {
          window.AppJs.toClientPath('product_manager_index/?Page=3&id=0'); //android
        }
      } else if (this.type == 3) {//退单
        try {
          window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=3&id=1'); //ios
        } catch (err) {
          window.AppJs.toClientPath('product_manager_index/?Page=3&id=1'); //android
        }
      }
    },
  },
};
</script>

<style scoped>
/* 使用优惠券 */
.ticket_box {
  width: 100%;
  height: 1.06rem;
  background: #ffffff;
  box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  position: relative;
  padding-right: 0.1rem;
}
.ticket_left {
  padding: 0 0.15rem;
  border-right: 0.01rem solid #f3f3f3;
  text-align: center;
}
.charge_back {
  color: #ff5618;
  font-size: 0.24rem;
  font-weight: 600;
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
.ticket_right {
  width: 0.5rem;
  height: 0.22rem;
  background: #ff5618;
  border-radius: 0.11rem;
  text-align: center;
  line-height: 0.22rem;
  color: #ffffff;
  font-size: 0.12rem;
  position: absolute;
  right: 0.1rem;
  /* margin-left: 0.05rem; */
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
}
</style>

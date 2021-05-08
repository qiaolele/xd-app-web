<style scoped>
.wrap {
  background: #ffffff;
  font-family: PingFangSC-Regular, PingFang SC;
  padding-bottom: 0.1rem;
}
.top {
  width: 100%;
  height: 1.1rem;
  background: url('../../assets/img/weekly_list_bg.png') no-repeat center center;
  background-size: 100% 100%;
  padding-top: 0.3rem;
  padding-left: 0.15rem;
  position: fixed;
  top: -0.02rem;
  z-index: 1;
}
.top_img {
  width: 0.4rem;
  height: 0.4rem;
  border: 0.02rem solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
.top_box {
  display: flex;
  align-items: center;
}
.top_info {
  margin-left: 0.1rem;
}
.member_name {
  font-size: 0.2rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 0.2rem;
}
.member_time {
  font-size: 0.14rem;
  color: #ffffff;
  line-height: 0.14rem;
  margin-top: 0.06rem;
}
>>> .van-tab {
  font-size: 0.16rem;
  font-weight: 600;
  border-bottom: 0.01rem solid #f3f2f2;
  position: relative;
}
>>> .van-tabs__line {
  width: 0.24rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
}
>>> .van-tabs__wrap {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
  border-radius: 0.1rem 0.1rem 0 0;
}
>>> .van-tab__pane:last-child {
  position: absolute;
  top: 1.4rem;
  width: 100%;
}
.right_title {
  width: 0.25rem;
  position: absolute;
  right: 0.41rem;
  top: 0.11rem;
}
.order_list {
  margin-top: 1.4rem;
}
.list_box {
  width: 100%;
  height: 1.48rem;
  position: relative;
}
.bot_bg {
  width: 100%;
  height: 0.06rem;
  background: #f8f8f8;
  position: absolute;
  bottom: 0;
}
.no_date {
  text-align: center;
  margin-top: 0.3rem;
}
.no_date img {
  width: 1.2rem;
}
.no_date p {
  color: #999999;
  font-size: 0.16rem;
  margin-top: 0.1rem;
}
.info {
  width: 100%;
  padding: 0 0.15rem;
}
.info_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.19rem;
}
.name {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: 600;
  line-height: 0.16rem;
}
.money {
  color: #ff5618;
  font-size: 0.2rem;
  line-height: 0.2rem;
  font-weight: 600;
  font-family: DINAlternate-Bold, DINAlternate;
  margin-left: 0.2rem;
}
.money span {
  font-size: 0.16rem;
  color: #2f2f2f;
  line-height: 0.16rem;
}
.time {
  color: #aaaaaa;
  font-size: 0.14rem;
  line-height: 14px;
}
.info_mid {
  display: flex;
}
.tips {
  padding: 0.02rem;
  color: #ff5618;
  font-size: 0.14rem;
  line-height: 0.14rem;
  background: #ffeae3;
  border-radius: 0.02rem;
  margin-right: 0.05rem;
  margin-top: 0.25rem;
}
.info_bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.16rem;
}
.bot_left {
  display: flex;
  flex-direction: column;
}
.info_details {
  font-size: 0.13rem;
  color: #666666;
  line-height: 0.13rem;
  display: flex;
  align-items: center;
}
.info_details_top {
  margin-top: 0.1rem;
}
.info_icon {
  width: 0.14rem;
  margin-right: 0.04rem;
}
.grabbing_btn {
  width: 0.72rem;
  height: 0.3rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.15rem;
  color: #ffffff;
  font-size: 0.14rem;
  line-height: 0.3rem;
  text-align: center;
}
</style>

<template>
  <div class="wrap">
    <div class="top">
      <div class="top_box">
        <img class="top_img"
             src="@/assets/img/vip/head_icon.png"
             alt="">
        <div class="top_info">
          <p class="member_name">{{memberInfo.name}}</p>
          <p class="member_time">{{changeTime(memberInfo.expiryTime)}} 到期</p>
        </div>
      </div>
    </div>
    <div>
      <van-tabs v-model="active"
                title-active-color="#2F2F2F"
                title-inactive-color="#AAAAAA">
        <van-tab title="全部订单">
          <van-pull-refresh v-model="refreshing"
                            @refresh="onRefresh"
                            class="order_list">
            <van-list v-model="loading"
                      :finished="finished"
                      finished-text=""
                      @load="onLoad">
              <div v-if="list.length==0"
                   class="no_date">
                <img src="@/assets/img/vip/img_no_date.png"
                     alt="" />
                <p v-if="showList">暂无订单</p>
              </div>
              <div v-else>
                <div class="list_box"
                     v-for="(item,index) in list"
                     :key="index">
                  <div class="info">
                    <div class="info_top">
                      <div class="top_left">
                        <span class="name">{{item.realName}}</span>
                        <span class="money">
                          {{item.loanMoney}}{{item.loanMoneyName}}<span>元</span>
                        </span>
                        <span class="money">
                          {{item.loanTimeLimit}}<span>{{item.loanTimeName}}</span>
                        </span>
                      </div>
                      <div class="time"></div>
                    </div>
                    <div class="info_mid">
                      <div class="tips"
                           v-for="(txt,num) in item.tagUrl"
                           :key="num">{{txt}}</div>
                    </div>
                    <div class="info_bot">
                      <div class="bot_left">
                        <div class="info_details">
                          <img class="info_icon"
                               src="@/assets/img/details_address.png"
                               alt="">
                          <span>{{item.location}} | {{item.age}} | {{item.loanPurpose}}</span>
                        </div>
                        <div class="info_details info_details_top">
                          <img class="info_icon"
                               src="@/assets/img/details_income.png"
                               alt="">
                          <span>{{item.professIdentity}} | {{item.monthIncome}}</span>
                        </div>
                      </div>
                      <div class="grabbing_btn"
                           @click="userOrder(item.id)">抢单</div>
                    </div>
                  </div>
                  <div class="bot_bg"></div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab>
          <template #title>
            定位城市
          </template>
          <van-list v-model="cityLoading"
                    :finished="cityFinished"
                    finished-text=""
                    @load="cityOnLoad">
            <div class="list_box"
                 v-for="(item,index) in cityList"
                 :key="index">
              <div class="info">
                <div class="info_top">
                  <div class="top_left">
                    <span class="name">{{item.realName}}</span>
                    <span class="money">
                      {{item.loanMoney}}{{item.loanMoneyName}}<span>元</span>
                    </span>
                    <span class="money">
                      {{item.loanTimeLimit}}<span>{{item.loanTimeName}}</span>
                    </span>
                  </div>
                  <div class="time"></div>
                </div>
                <div class="info_mid">
                  <div class="tips"
                       v-for="(txt,num) in item.tagUrl"
                       :key="num">{{txt}}</div>
                </div>
                <div class="info_bot">
                  <div class="bot_left">
                    <div class="info_details">
                      <img class="info_icon"
                           src="@/assets/img/details_address.png"
                           alt="">
                      <span>{{item.location}} | {{item.age}} | {{item.loanPurpose}}</span>
                    </div>
                    <div class="info_details info_details_top">
                      <img class="info_icon"
                           src="@/assets/img/details_income.png"
                           alt="">
                      <span>{{item.professIdentity}} | {{item.monthIncome}}</span>
                    </div>
                  </div>
                  <div class="grabbing_btn"
                       @click="userOrder(item.id)">抢单</div>
                </div>
              </div>
              <div class="bot_bg"></div>
            </div>
            <div v-if="cityList.length==0"
                 class="no_date">
              <img src="@/assets/img/vip/img_no_date.png"
                   alt="" />
              <p>暂无订单</p>
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: ['memberInfo'],
  data () {
    return {
      time: 0,
      active: 0,//0全部订单 1定位城市
      page: 0,
      size: 10,
      list: [],
      cityPage: 0,
      citySize: 10,
      cityList: [],
      loading: false,
      cityLoading: false,
      finished: false,
      cityFinished: false,
      refreshing: false,
      showList: false,//请求是否完成
    }
  },
  created () {
    this.util.title("会员体验卡");
    this.getList();
    this.getCityList();
  },
  methods: {
    changeTime (time) {
      return time.split(' ')[0];
    },
    getList () {
      let param = {
        page: this.page,
        size: this.size,
        citystate: 0
      };
      this.$get("/app/v1/order/weekCardOrders", param).then((res) => {
        // console.log(res)
        this.showList = true;
        if (res.code == 200) {
          if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
          }
          this.loading = false;
          this.list = this.list.concat(res.data[0].OrderListDTOList);
          if (this.list.length >= res.data[0].total) {
            this.finished = true;
          }
        } else if (res.code == 201) {
          this.refreshing = false;
          this.finished = true;
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      })
    },
    getCityList () {
      let param = {
        page: this.cityPage,
        size: this.citySize,
        citystate: 1
      };
      this.$get("/app/v1/order/weekCardOrders", param).then((res) => {
        // console.log(res)
        if (res.code == 200) {
          this.cityLoading = false;
          this.cityList = this.cityList.concat(res.data[0].OrderListDTOList);
          if (this.cityList.length >= res.data[0].total) {
            this.cityFinished = true;
          }

        } else if (res.code == 201) {
          this.cityFinished = true;
        } else {
          this.util.toast({ msg: res.msg, type: "fail" });
        }
      })
    },
    userOrder (id) {
      console.log(id)
      try {
        window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=4&channel=week_card&type=true&id=' + id); //ios
      } catch (err) {
        window.AppJs.toClientPath('product_manager_index/?Page=4&channel=week_card&type=true&id=' + id); //android
      }
    },
    onLoad () {
      this.page++;
      this.getList();
    },
    cityOnLoad () {
      this.cityPage++;
      this.getCityList();
    },
    onRefresh () {
      this.finished = false;
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.page = 0;
      this.getList();
    }
  }
}
</script>
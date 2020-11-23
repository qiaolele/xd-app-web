<style scoped>
.wrap {
  background: #ffffff;
  font-family: PingFangSC-Regular, PingFang SC;
  padding-bottom: 0.1rem;
}
.top_time {
  width: 100%;
  height: 0.44rem;
  background: #fff0ee;
  padding: 0 0.15rem;
  color: #ea3122;
  font-size: 0.14rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
}
.left_txt {
  margin-right: 0.12rem;
}
.block {
  display: inline-flex;
  width: 0.23rem;
  height: 0.24rem;
  background: rgba(234, 49, 34, 0.1);
  border-radius: 0.04rem;
  color: #ea3122;
  font-size: 0.14rem;
  align-items: center;
  justify-content: center;
}
.colon {
  margin: 0 0.04rem;
  color: #ea3122;
  font-size: 0.12rem;
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
  top: 0.44rem;
  z-index: 1;
  width: 100%;
}
>>> .van-tab__pane:last-child {
  position: absolute;
  top: 0.88rem;
  width: 100%;
}
.right_title {
  width: 0.25rem;
  position: absolute;
  right: 0.41rem;
  top: 0.11rem;
}
.order_list {
  margin-top: 0.88rem;
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

/* 弹框 */
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
.toast_one_btn {
  width: 100%;
  height: 0.46rem;
  border-top: 0.01rem solid #f0f0f0;
  text-align: center;
  font-weight: 600;
  font-size: 0.16rem;
  color: #ff5618;
  line-height: 0.46rem;
}
.toast_img {
  width: 0.5rem;
  margin-top: 0.3rem;
}
.toast_txt {
  font-size: 0.18rem;
  color: #2f2f2f;
  margin-top: 0.2rem;
  font-weight: 600;
  color: #2f2f2f;
  line-height: 0.18rem;
}
.toast_new_tips {
  color: #3d3d3d;
  font-size: 0.16rem;
  text-align: center;
  margin: 0.15rem 0 0.22rem;
  padding: 0 0.15rem;
}
</style>

<template>
  <div class="wrap">
    <div class="top_time">
      <span class="left_txt">距离本场结束还剩</span>
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">
            <span>{{ timeData.minutes>=10?timeData.minutes.toString().substring(0,1):0}}</span>
            <span>{{ timeData.minutes>=10?timeData.minutes.toString().substring(1,2):timeData.minutes}}</span>
          </span>
          <span class="colon">分</span>
          <span class="block">
            <span>{{ timeData.seconds>=10?timeData.seconds.toString().substring(0,1):0 }}</span>
            <span>{{ timeData.seconds>=10?timeData.seconds.toString().substring(1,2):timeData.seconds }}</span>
          </span>
          <span class="colon">秒</span>
        </template>
      </van-count-down>
    </div>
    <div>
      <van-tabs v-model="active"
                title-active-color="#2F2F2F"
                title-inactive-color="#AAAAAA"
                @click="clickTitle"
                @disabled="onClickDisabled">
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
                      <div class="time">{{item.time}}</div>
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
                      <!-- timeToastShow=true -->
                    </div>
                  </div>
                  <div class="bot_bg"></div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab :disabled="disabled">
          <template #title>
            定位城市
            <img class="right_title"
                 src="@/assets/img/icon_member.png"
                 alt="">
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
                  <div class="time">{{item.time}}</div>
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
    <!-- 弹框 -->
    <van-overlay :show="toastShow"
                 @click="toastShow = false">
      <div class="wrapper_toast">
        <div @click.stop
             class="toast_box">
          <p class="toast_tips">仅会员才可筛选定位城市，您还不是会员，升级会员即享6大特权</p>
          <div class="toast_btns">
            <div @click="toastShow = false">取消</div>
            <div @click="becomeMember">开通会员</div>
          </div>
        </div>
      </div>
    </van-overlay>
    <!-- 弹框 -->
    <van-overlay :show="memberToastShow"
                 @click="memberToastShow = false">
      <div class="wrapper_toast">
        <div @click.stop
             class="toast_box">
          <p class="toast_tips">您的秒抢次数已用尽，请下个时间段再来</p>
          <div class="toast_one_btn"
               @click="memberToastShow = false">
            我知道了
          </div>
        </div>
      </div>
    </van-overlay>
    <!-- 弹框 -->
    <van-overlay :show="timeToastShow"
                 @click="timeToastShow = false">
      <div class="wrapper_toast">
        <div @click.stop
             class="toast_box">
          <img class="toast_img"
               src="@/assets/img/img_gah.png"
               alt="">
          <p class="toast_txt">秒抢次数已用尽</p>
          <p class="toast_new_tips">普通用户每个时间段仅有1次秒抢机会，升级会员可享每个时间段3次</p>
          <div class="toast_btns">
            <div @click="timeToastShow = false">取消</div>
            <div @click="becomeMember">开通会员</div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
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
      disabled: true,//是否禁用
      // isMember: true,//是否是会员
      toastShow: false,//非会员弹窗
      timeToastShow: false,//非会员次数用完
      memberToastShow: false,//会员次数到限制
      showList: false,//请求是否完成
    }
  },
  created () {
    this.util.title("免费秒抢活动");
    this.getTime();
    this.getList();
    this.getMemberInfo();
    this.getCityList();
  },
  methods: {
    getTime () {//倒计时
      this.$get("/app/v1/order/endCountdown").then((res) => {
        // console.log(res);
        if (res.code == 200) {
          if (res.data > 0) {
            this.time = res.data * 1000;
          } else {
            this.time = 0;
          }
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      })
    },
    getMemberInfo () {
      //获取用户会员信息
      this.$get("/app/admin/v1/member/memberInfo")
        .then((res) => {
          // console.log(res);
          if (res.code == 200) {
            if (res.data.length == 0 || res.data[0].state == 1) {//非会员
              // this.isMember = false;
              this.disabled = true;
            } else {//会员
              // this.isMember = true;
              this.disabled = false;
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    getList () {
      let param = {
        page: this.page,
        size: this.size,
        citystate: 0
      };
      this.$get("/app/v1/order/freeQueryOrders", param).then((res) => {
        console.log(res)
        this.showList = true;
        if (res.code == 200) {
          if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
          }
          this.loading = false;
          this.list = this.list.concat(res.data[0].OrderListDTOList);
          // res.data[0].OrderListDTOList.forEach((item) => {
          //   this.list.push(item);
          // });
          if (this.list.length >= res.data[0].total) {
            this.finished = true;
          }
        } else if (res.code == 201) {
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
      this.$get("/app/v1/order/freeQueryOrders", param).then((res) => {
        console.log(res)
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
      this.$get("/app/v1/order/reveivOrderJude")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            if (res.data == 0) {//跳转订单详情
              try {
                window.webkit.messageHandlers.toClientPath.postMessage('product_manager_index/?Page=4&channel=web&type=true&id=' + id); //ios
              } catch (err) {
                window.AppJs.toClientPath('product_manager_index/?Page=4&channel=web&type=true&id=' + id); //android
              }
            } else if (res.data == 1) {//非会员次数限制
              this.timeToastShow = true;
            } else if (res.data == 2) {//会员次数限制
              this.memberToastShow = true;
            } else if (res.data == 3) {
              this.util.toast({ msg: '本场抢单时间已结束', type: "fail" });
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
    onClickDisabled (name) {
      this.toastShow = true;
    },
    clickTitle (active) {
      console.log(active)
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

    },
    becomeMember () {//开通会员
      this.$router.push({
        path: "/vip/userMember",
      });

    }
  }
}
</script>
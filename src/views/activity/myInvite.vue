<style scoped>
.invite {
  background: #ffffff;
  font-family: PingFangSC-Regular, PingFang SC;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
}
.top_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.invite_top {
  display: flex;
  background: #f6f6f6;
}
.invite_title {
  width: 50%;
}
.invite_title_css {
  font-size: 0.14rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.invite_title_css span:first-child {
  margin-right: 0.1rem;
}
>>> .van-cell {
  color: #2f2f2f;
}
>>> .van-dropdown-menu__bar {
  background: #f6f6f6;
  box-shadow: none;
}
>>> .van-dropdown-menu__title {
  color: #2f2f2f;
}
>>> .van-dropdown-item__option--active {
  color: #ff5618;
}
>>> .van-dropdown-item__icon {
  color: #ff5618;
}
>>> .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
>>> .van-dropdown-menu__item {
  justify-content: left;
  margin-left: 0.07rem;
}

.invite_list {
  padding: 0 0.13rem;
  margin-top: 0.48rem;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem 0;
  border-bottom: 0.01rem solid #f8f8f8;
  margin-top: 0.03rem;
}
.list_left {
  display: flex;
  align-items: center;
}
.list_icon {
  width: 0.06rem;
  height: 0.08rem;
}
.list_phone {
  margin-left: 0.02rem;
  font-size: 0.15rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2f2f2f;
  display: inline-block;
  /* width: 1rem; */
}
.list_status {
  display: inline-block;
  padding: 0.01rem 0.02rem;
  transform: scale(0.8);
  font-weight: 400;
  font-size: 0.1rem;
  border-radius: 0.02rem;
  background: #fff4f4;
  color: #f02921;
}
.list_status_other {
  color: #ff8a1d;
  background: #fff3e9;
}
.list_state {
  font-size: 0.13rem;
  color: #aaaaaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0.48rem;
}
.list_time {
  font-size: 0.14rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #aaaaaa;
}

.no_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.9rem 0;
}
.no_data img {
  /* width: 36%; */
  width: 1.2rem;
}
.no_data span {
  font-size: 0.16rem;
  color: #999999;
}
>>> .van-dropdown-menu__title::after {
  border-color: transparent transparent currentColor currentColor;
}
</style>

<template>
  <div class="invite">
    <div class="top_box">
      <div class="invite_top">
        <div class="invite_title">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value"
                               :options="option"
                               @change="changeOption" />
          </van-dropdown-menu>
        </div>
        <div class="invite_title invite_title_css">
          <span>待认证: {{ preAuthNum }}位</span>
          <span>已成功: {{ successAuthNum }}位</span>
        </div>
      </div>
    </div>

    <div class="no_data"
         v-if="inviteList.length == 0">
      <img src="@/assets/img/img_no_date.png"
           alt="" />
      <span>暂无数据</span>
    </div>
    <div class="invite_list"
         v-else>
      <div class="list"
           v-for="(item, index) in inviteList"
           :key="index">
        <div class="list_left">
          <img class="list_icon"
               src="@/assets/img/invite_icon.png"
               alt="" />
          <div class="list_phone">{{ item.phone }}</div>
          <div class="list_status list_status_other"
               v-if="item.authStatus == 2">
            已完成
          </div>
          <div class="list_status"
               v-else>
            待认证
          </div>
        </div>
        <div class="list_state">{{ item.city }}</div>
        <div class="list_time">{{ changeTime(item.createTime) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 2,
      option: [
        { text: "全部邀请", value: 2 },
        { text: "本周邀请", value: 1 },
      ],
      inviteList: [],
      preAuthNum: 0, //待认证
      successAuthNum: 0, //已成功
    };
  },
  created () {
    this.util.title("我的邀请");
    this.getList(this.value);
  },
  methods: {
    changeOption () {
      console.log(this.value);
      this.getList(this.value);
    },
    getList (value) {
      let param = {
        listAll: value,
      };
      this.$get("/app/invitation/invitedList", param).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.inviteList = res.data;
          this.preAuthNum = this.inviteList.filter(
            (item) => item.authStatus != 2
          ).length;
          this.successAuthNum = this.inviteList.filter(
            (item) => item.authStatus == 2
          ).length;
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    changeTime (time) {
      let txt = time.split("T");
      return txt[0] + " " + txt[1];
    },
  },
};
</script>

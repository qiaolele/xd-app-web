<style scoped>
.common {
  background: #f6f7f8;
  position: relative;
}
.top_box {
  width: 100%;
  height: 1.94rem;
  /* background: linear-gradient(
    135deg,
    rgba(255, 156, 13, 1) 0%,
    rgba(255, 86, 24, 1) 100%
  ); */
}
.common_wrap {
  padding: 0 0.15rem;
  /* position: absolute;
  top: 0.2rem; */
  margin-top: -1.75rem;
}
.top_txt {
  background: rgba(255, 255, 255, 1);
  border-radius: 0.1rem;
  padding: 15px 10px;
}
.user_info {
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}
.user_info div {
  width: 0.03rem;
  height: 0.14rem;
  background: #ff5618;
}
.user_info span {
  color: #2f2f2f;
  font-size: 0.16rem;
  font-weight: bold;
  margin-left: 0.04rem;
}
.common_title {
  font-size: 0.16rem;
  color: #2f2f2f;
}
.common_txt {
  background: #f8f8f8;
  padding: 6px 10px;
  border-radius: 0.02rem;
}
.common_txt {
  font-size: 0.14rem;
  color: rgba(153, 153, 153, 1);
  line-height: 0.24rem;
  font-weight: 400;
}
.info_txt {
  font-size: 0.14rem;
  color: #999999;
  text-indent: 0.17rem;
  line-height: 0.24rem;
  font-weight: 400;
}
.problem_wrap {
  padding: 0 0.15rem;
  margin-top: 0.1rem;
  width: 100%;
  height: 4rem;
}
.problem_box {
  background: #fff;
  border-radius: 0.1rem;
  padding: 15px 10px;
}
.van-collapse-item__content {
  padding: 0.16rem 0;
}
>>> .van-cell {
  padding: 10px 0;
}
>>> .van-collapse-item__content {
  padding: 0;
}
</style>
<template>
  <div class="common">
    <div class="top_box"></div>
    <div class="common_wrap">
      <div class="top_txt">
        <div class="user_info">
          <div></div>
          <span>用户须知</span>
        </div>
        <p class="info_txt">
          为保障客户的财产安全，本APP已接入公安系统，如发现用户在本平台存在诈骗客户行为，本平台将自动向当地警方提交你的【个人认证信息】、【当前位置】、【手机设备IMEI】、【网络ip地址】、【通讯信息】等详细信息。
        </p>
        <p class="info_txt">
          遵纪守法是每个公民最基本的准则，法网恢恢，疏而不漏，对于违法分子我们将全力配合警方追查到底。
        </p>
      </div>
    </div>
    <div class="problem_wrap" v-if="problemList.length">
      <div class="problem_box">
        <div class="user_info">
          <div></div>
          <span>常见问题</span>
        </div>
        <van-collapse v-model="activeNames">
          <van-collapse-item
            v-for="(item, index) in problemList"
            :key="index"
            :name="index"
          >
            <template #title>
              <div class="common_title">
                {{ item.name }}
              </div>
            </template>
            <div class="common_txt">
              <span>{{ item.answer }}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <!-- test -->
    <!-- <div @click="toInvite">test</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [0],
      problemList: [],
    };
  },
  created() {
    this.util.title("使用指南");
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$get("/app/api/v1/helpCenter/getByHelpCenter").then((res) => {
        if (res.code == 200) {
          this.problemList = res.data;
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    toInvite() {
      this.$router.push({
        path: "/activity/inviteFriends",
      });
    },
  },
};
</script>

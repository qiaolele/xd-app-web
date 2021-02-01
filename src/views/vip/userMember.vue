<template>
  <div v-if="showPage">
    <member v-if="!isMember"
            @update-page="upadtePage"></member>
    <member-center v-else></member-center>
    <!-- 是否封号 -->
    <Prohibit :titleToast="titleToast"
              :titleTips="titleTips"></Prohibit>
  </div>
</template>

<script>
import Member from "./member";
import MemberCenter from "./memberCenter";
import Prohibit from '../../components/prohibit'

export default {
  components: {
    Member,
    MemberCenter,
    Prohibit
  },
  data () {
    return {
      titleToast: false,//封号弹窗
      titleTips: '',//封号信息
      isMember: false,
      showPage: false,
    };
  },
  created () {
    this.getMemberInfo();
  },
  methods: {
    upadtePage () {
      this.getMemberInfo();
    },
    getMemberInfo () {
      //获取用户会员信息
      this.$get("/app/admin/v1/member/memberInfo")
        .then((res) => {
          console.log(res);
          this.showPage = true;
          if (res.code == 200) {
            console.log(res.data.length);
            if (res.data.length == 0 || res.data[0].state == 1) {
              this.isMember = false;
            } else {
              this.isMember = true;
            }
          } else {
            // this.util.toast({ msg: res.msg, type: "fail" });
            this.titleTips = res.msg;
            this.titleToast = true;
          }
        })
        .catch((err) => { });
    },
  },
};
</script>

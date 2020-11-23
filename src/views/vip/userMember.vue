<template>
  <div v-if="showPage">
    <member v-if="!isMember"></member>
    <member-center v-else></member-center>
  </div>
</template>

<script>
import Member from "./member";
import MemberCenter from "./memberCenter";
export default {
  components: {
    Member,
    MemberCenter,
  },
  data () {
    return {
      isMember: false,
      showPage: false,
    };
  },
  created () {
    this.getMemberInfo();
  },
  methods: {
    getMemberInfo () {
      //获取用户会员信息
      this.$get("/app/admin/v1/member/memberInfo")
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            console.log(res.data.length);
            this.showPage = true;
            if (res.data.length == 0 || res.data[0].state == 1) {
              this.isMember = false;
            } else {
              this.isMember = true;
            }
          } else {
            this.util.toast({ msg: res.message, type: "fail" });
          }
        })
        .catch((err) => { });
    },
  },
};
</script>

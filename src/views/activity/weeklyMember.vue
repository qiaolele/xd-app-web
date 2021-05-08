<template>
  <div v-if="showPage">
    <BuyMember v-if="!isMember"></BuyMember>
    <WeeklyMemberList v-else
                      :memberInfo="memberInfo"></WeeklyMemberList>
  </div>
</template>

<script>
import BuyMember from "./buyMember";
import WeeklyMemberList from "./weeklyMemberList";
export default {
  components: {
    BuyMember,
    WeeklyMemberList,
  },
  data () {
    return {
      showPage: false,//页面是否加载完
      isMember: false,
      memberInfo: {},
      channel: "",
      udid: "",
      token: '',
    }
  },
  created () {
    this.channel = localStorage.getItem("channel");
    this.token = localStorage.getItem("token");
    this.udid =
      this.os == 1
        ? localStorage.getItem("androidId")
        : localStorage.getItem("udid");
    this.getMember();
  },
  methods: {
    getMember () {
      this.$get("/app/admin/v1/member/memberInfoState").then((res) => {
        // console.log(res);
        this.showPage = true;
        if (res.code == 200) {
          if (res.data.userInFo && res.data.userInFo.memberLevel == '周卡会员' && res.data.userInFo.state != 1) {
            this.isMember = true;
            this.memberInfo = res.data.userInFo;
            this.toCountPoint(1);
          } else {
            this.isMember = false;
            this.toCountPoint(0);
          }
        } else {
          this.util.toast({ msg: res.message, type: "fail" });
        }
      });
    },
    toCountPoint (status) {//埋点
      let param = {
        event_key: "h5_weekvip_view",
        app_market_channel: this.channel,
        udid: this.udid,
        status: status,
        user_id: this.token
      };
      this.$get("/app/api/v1/newEventTrace", param)
        .then((res) => {
          if (res.code == 200) {
          } else {
            this.util.toast({ msg: res.message });
          }
        })
        .catch((error) => { });
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
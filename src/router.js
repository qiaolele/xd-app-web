import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '*',
    //   redirect: '/'
    // },
    {
      path: "/",
      name: "payCenter",
      component: () => import("./views/payCenter"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/test"), //模板
    },
    {
      path: "/payCenter",
      name: "payCenter",
      component: () => import("./views/payCenter"), //充值中心
    },
    {
      path: "/rechargeCenter",
      name: "rechargeCenter",
      component: () => import("./views/rechargeCenter"), //充值中心--马甲包
    },
    {
      path: "/payCenterNew",
      name: "payCenterNew",
      component: () => import("./views/payCenterNew"), //新充值中心
    },
    {
      path: "/costDetail",
      name: "costDetail",
      component: () => import("./views/costDetail"), //交易明细
    },
    {
      path: "/commonProblem",
      name: "commonProblem",
      component: () => import("./views/commonProblem"), //常见问题
    },
    {
      path: "/chargeBack",
      name: "chargeBack",
      component: () => import("./views/chargeBack"), //退单通知
    },
    {
      path: "/activity/myInvite",
      name: "/activity/myInvite",
      component: () => import("./views/activity/myInvite"), //我的邀请
    },
    {
      path: "/activity/inviteFriends",
      name: "/activity/inviteFriends",
      component: () => import("./views/activity/inviteFriends"), //邀请好友
    },
    {
      path: "/vip/userMember",
      name: "vip/userMember",
      component: () => import("./views/vip/userMember"), //vip会员
    },
    {
      path: "/vip/vipDescription",
      name: "vip/vipDescription",
      component: () => import("./views/vip/vipDescription"), //会员权益说明
    },
    {
      path: "/vip/usageDetails",
      name: "vip/usageDetails",
      component: () => import("./views/vip/usageDetails"), //使用明细
    },
    {
      path: "/vip/becomeMember",
      name: "vip/becomeMember",
      component: () => import("./views/vip/becomeMember"), //会员购买成功与否
    },
    {
      path: "/activity/orderGrabbing",
      name: "/activity/orderGrabbing",
      component: () => import("./views/activity/orderGrabbing"), //免费秒抢活动
    },
    {
      path: "/activity/grabbingList",
      name: "/activity/grabbingList",
      component: () => import("./views/activity/grabbingList"), //免费秒抢列表
    },
  ],
});

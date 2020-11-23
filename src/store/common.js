import axios from "axios";
import { post, get } from "../libs/axios";
export default {
  namespaced: true,
  state: {
    userInfo: {},
    commonParams: {
      customer_id: localStorage.getItem("customerId"),
      udid: localStorage.getItem("udid"),
      app_version: localStorage.getItem("appVersion"),
      appMarket_channel: localStorage.getItem("appMarketChannel"),
      os: localStorage.getItem("os"),
      package_name: localStorage.getItem("packageName"),
      token: localStorage.getItem("token")
    },
    isLogin: false
  },
  mutations: {
    tabClick(state, payload) {
      state.activeTabName = payload.name;
    },
    updateIsLogin: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    updateUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions: {
    tabClick(context, payload) {
      context.commit("tabClick", payload);
    },
    async getUserInfo({ state, commit }) {
      commit("updateUserInfo", {});
      let res = await get("/app/user/v1/userInfo");
      if (res.code === 200) {
        commit("updateIsLogin", true);
        commit("updateUserInfo", res.data);
      } else if (res.code == 214 || res.code == 211) {
        commit("updateUserInfo", res.data);
        commit("updateIsLogin", false);
      }
      return res.data;
    },
    async checkLogin({ dispatch, commit }) {
      let res = await dispatch("getUserInfo");
      if (res.code === 200) {
        commit("updateIsLogin", true);
        commit("updateUserInfo", res);
      }
    }
  }
};

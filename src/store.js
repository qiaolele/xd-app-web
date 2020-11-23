import Vue from "vue";
import Vuex from "vuex";

// 子模块化
import common from "./store/common";

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * 各个模块的状态store管理
   */
  modules: {
    common,
  },
  state: {
    choosePayMoneyIndex: 1, //选择充值
  },
  getters: {},
  mutations: {
    choosePayMoneyIndex(state, data) {
      state.choosePayMoneyIndex = data;
    },
  },
  actions: {
    updateChoosePayMoneyIndex(context, data) {
      context.commit("choosePayMoneyIndex", data);
    },
  },
});

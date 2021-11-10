import { COUNT_INC } from "./mutation-types.js";
export default {
  namespaced: true,
  state() {
    return {
      count: 0,
    };
  },
  // 必须是同步
  mutations: {
    inc(state) {
      state.count++;
    },
    [COUNT_INC](state) {
      state.count++;
    },
    incBy(state, n) {
      state.count += n;
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    nCount(state) {
      return n => {
        return state.count * n;
      };
    },
  },
  actions: {
    inc({ commit }) {
      // context: commit 、 dispatch、state
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     commit("inc");
      //     resolve("123");
      //   }, 1000);
      // });
      setTimeout(() => {
        commit("inc");
      }, 1000);
    },
  },
};

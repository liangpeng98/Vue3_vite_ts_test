import { defineStore } from "pinia";
import type { StateTree } from "pinia";

export const useUserStore = defineStore<string, StateTree>("user", {
  state: () => ({
    userInfo: {
      username: "",
      password: "",
    },
  }),
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
  actions: {
    setUserInfo(data: object = {}) {
      this.userInfo = { ...data };
    },
  },
});

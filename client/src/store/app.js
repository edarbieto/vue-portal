import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    showLoading: false,
    showShopSidebar: false,
  }),
  actions: {
    changeShowLoading(value) {
      this.showLoading = value;
    },
    changeShowShopSidebar(value) {
      this.showShopSidebar = value;
    },
  },
});

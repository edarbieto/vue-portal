import { defineStore } from "pinia";
import router from "@/router"

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: localStorage.getItem("token"),
  }),
  actions: {
    login(email, password) {
      localStorage.setItem("token", JSON.stringify({ email }))
      this.token = { email }
      router.push("/")
    },
    logout() {
      localStorage.removeItem("token")
      this.token = null
      router.push("/auth/login")
    },
  },
});

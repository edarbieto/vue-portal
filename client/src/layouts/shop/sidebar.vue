<template>
  <v-navigation-drawer v-model="showShopSidebar">
    <v-list density="compact" nav>
      <v-list-item
        v-for="pl of portalLinks"
        :prepend-icon="pl.icon"
        :title="pl.title"
        :value="pl.value"
        :to="pl.to"
        exact
      >
      </v-list-item>
      <!-- <v-list-item title="Change Password"></v-list-item>
      <v-list-item title="Addresses"></v-list-item>
      <v-list-item title="Orders"></v-list-item>
      <v-list-item title="Assets"></v-list-item>
      <v-list-item title="Service Contracts"></v-list-item>
      <v-list-item title="Login Users"></v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app"

const app = useAppStore();
const { showShopSidebar } = storeToRefs(app);

const portalLinks = ref([
  {
    icon: "mdi-account",
    title: "Profile",
    value: "profile",
    to: "/portal/profile",
  },
  {
    icon: "mdi-form-textbox-password",
    title: "Change Password",
    value: "change-password",
    to: "/portal/change-password",
  },
  {
    icon: "mdi-map-marker",
    title: "Addresses",
    value: "addresses",
    to: "/portal/addresses",
  },
  {
    icon: "mdi-file-document",
    title: "Orders",
    value: "orders",
    to: "/portal/orders",
  },
  {
    icon: "mdi-package",
    title: "Assets",
    value: "assets",
    to: "/portal/assets",
  },
  {
    icon: "mdi-file-sign",
    title: "Service Contracts",
    value: "contracts",
    to: "/portal/contracts",
  },
  {
    icon: "mdi-account-group",
    title: "Login Users",
    value: "login-users",
    to: "/portal/login-users",
  },
])
</script>

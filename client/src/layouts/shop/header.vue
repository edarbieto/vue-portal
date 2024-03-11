<template>
  <v-app-bar flat color="primary" >
    <template v-if="route.path.startsWith('/portal')" v-slot:prepend>
      <v-app-bar-nav-icon @click="showShopSidebar = !showShopSidebar"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <router-link to="/" class="text-decoration-none text-white text-overline">
        OEC Computers
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-text-field
      class="mr-2"
      placeholder="Search ..."
      append-inner-icon="mdi-magnify"
      variant="solo"
      density="compact"
      hide-details
      style="max-width: 300px;"
      @click:append-inner=""
    ></v-text-field>
    <template v-for="gl of globalLinks">
      <router-link :to="gl.to" class="text-decoration-none text-white">
        <v-btn class="mr-2" size="small" :icon="gl.icon"></v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";

const app = useAppStore();
const route = useRoute();
const { showShopSidebar } = storeToRefs(app);

const globalLinks = ref([
  {
    to: "/portal/profile",
    icon: "mdi-account",
  },
  {
    to: "/cart",
    icon: "mdi-cart",
  },
  {
    to: "/favorites",
    icon: "mdi-heart",
  },
  {
    to: "/support",
    icon: "mdi-face-agent",
  },
  {
    to: "/auth/login",
    icon: "mdi-login",
  },
  {
    to: "/",
    icon: "mdi-logout",
  },
])
const showSidebarIcon = ref(false)

watch(() => route.path, () => {
  showShopSidebar.value = route.path.startsWith('/portal')
})
</script>

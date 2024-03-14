<template>
  <v-app-bar flat color="primary">
    <div class="w-100 d-flex flex-row justify-space-between position-relative">

    <div>
      <v-btn v-if="route.path.startsWith('/portal')" class="mr-2" size="small" icon="mdi-menu" @click="showShopSidebar = !showShopSidebar"></v-btn>
      <router-link to="/" :class="'text-decoration-none text-white text-overline' + (!route.path.startsWith('/portal') ? ' ml-5' : '')">
        OEC Computers
      </router-link>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="ml-2" size="small" icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-sheet class="pa-4 cat-menu">
          <template v-for="cli of categoryList" :key="cli.id">
            <router-link :to="'/category/' + cli.id" class="text-decoration-none text-black">
              <p class="text-subtitle-2 mb-1">{{ cli.title }}</p>
            </router-link>
            <template v-for="clic of cli.children">
              <router-link :to="'/category/' + cli.id + '-' + clic.id" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">{{ clic.title }}</p>
              </router-link>
            </template>
          </template>
        </v-sheet>
      </v-menu>
    </div>
    <div class="position-absolute w-100" style="max-width: 600px; left: 50%; transform: translateX(-50%);">
      <form @submit.prevent="doSearch">
        <v-text-field
        placeholder="Search ..."
        append-inner-icon="mdi-magnify"
        variant="solo"
        density="compact"
        class="w-100"
        hide-details
        v-model="textSearch"
        @click:append-inner="doSearch"
        clearable
        ></v-text-field>
      </form>
    </div>
    <div>
      <template v-for="gl of globalLinks">
        <router-link :to="gl.to" class="text-decoration-none text-white">
          <v-tooltip :text="gl.tooltip" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn class="mr-2" size="small" :icon="gl.icon" v-bind="props"></v-btn>
            </template>
          </v-tooltip>
        </router-link>
      </template>
      <v-tooltip :text="!token ? 'Login' : 'Logout'" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn class="mr-2" size="small" :icon="!token ? 'mdi-login' : 'mdi-logout'" @click="authClick" v-bind="props"></v-btn>
        </template>
      </v-tooltip>
    </div>

    </div>
  </v-app-bar>
  <v-fade-transition>
    <div v-show="textSearch" class="suggestion-box">
      <v-sheet class="mt-4 pa-4" rounded style="max-width: 600px; width: 100%;">
        <p>{{ textSearch }}</p>
      </v-sheet>
    </div>
  </v-fade-transition>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
import { useAuthStore } from "@/store/auth";
import router from "@/router";

const app = useAppStore();
const auth = useAuthStore();
const route = useRoute();
const { showShopSidebar } = storeToRefs(app);
const { token } = storeToRefs(auth);
const textSearch = ref(null)
const showSuggestionBox = ref(false)

const globalLinks = ref([
  {
    to: "/portal/profile",
    icon: "mdi-account",
    tooltip: "Account",
  },
  {
    to: "/cart",
    icon: "mdi-cart",
    tooltip: "Cart",
  },
  {
    to: "/favorites",
    icon: "mdi-heart",
    tooltip: "Favorites",
  },
  {
    to: "/support",
    icon: "mdi-face-agent",
    tooltip: "Support",
  },
  // {
  //   to: "/auth/login",
  //   icon: "mdi-login",
  // },
  // {
  //   to: "/",
  //   icon: "mdi-logout",
  // },
])
const categoryList = ref([
  {
    id: "electronics",
    title: "Electronics",
    children: [
      { id: "camera-photo", title: "Camera & Photo", },
      { id: "headphones", title: "Headphones", },
      { id: "television-video", title: "Television & Video", },
    ],
  },
  {
    id: "computers",
    title: "Computers",
    children: [
      { id: "monitors", title: "Monitors", },
      { id: "computers-tablets", title: "Computers & Tablets", },
      { id: "laptop-accessories", title: "Laptop Accessories", },
    ],
  },
  {
    id: "smart-home",
    title: "Smart Home",
    children: [
      { id: "smart-home-lighting", title: "Smart Home Lighting", },
      { id: "detectors-sensors", title: "Detectors and Sensors", },
      { id: "other-solutions", title: "Other Solutions", },
    ],
  },
])
const showCategoryMenu = ref(false)

watch(() => route.path, updateShowShopSidebar)

onMounted(updateShowShopSidebar)

function updateShowShopSidebar() {
  showShopSidebar.value = route.path.startsWith('/portal')
}

function authClick() {
  if (auth.token) {
    auth.logout()
  } else {
    auth.login('j.doe@oec.com')
  }
}

function doSearch() {
  const searchQuery = textSearch.value
  router.push("/search/" + searchQuery)
}
</script>
<style scoped>
.suggestion-box {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
  z-index: 10;
  /* padding: 1rem; */
  background-color: rgba(0, 0, 0, 0.4);
  top: 64px;
  /* bottom: 0; */
  width: 100%;
  height: 100%;
}
</style>

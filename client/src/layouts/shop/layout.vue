<template>
  <!-- <shop-header></shop-header> -->
  <!-- <shop-sidebar></shop-sidebar> -->
  <!-- <router-view></router-view> -->
  <!-- <shop-footer></shop-footer> -->
  <v-layout>
    <shop-header></shop-header>
    <shop-sidebar></shop-sidebar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <shop-footer></shop-footer>
  </v-layout>
</template>
<script setup>
import ShopHeader from "./header"
import ShopSidebar from "./sidebar"
import ShopFooter from "./footer"
</script>

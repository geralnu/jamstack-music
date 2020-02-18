<template>
  <header class="site-header">
    <div v-if="!loaded" class="loader"></div>
    <div v-if="dataLoaded && loaded" class="site-header-content">
      <h1 class="site-title">Your favourite Deezer tracks!</h1>
      <app-user-display :user="user" v-if="user" />
      <app-user-search  v-else/>
    </div>
  </header>
</template>

<script>

import AppUserSearch from "@/components/AppUserSearch";
import AppUserDisplay from "@/components/AppUserDisplay";

export default {
  name: "app-header",
  components: {
    AppUserDisplay,
    AppUserSearch
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    dataLoaded() {
      return this.$store.state.dataLoaded;
    },
    loaded() {
      return this.$store.state.searchLoaded;
    }
  }
};
</script>

<style>

</style>

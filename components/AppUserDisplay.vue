<template>
  <div class="header-id-display">
      <img class="user-image" :src="user.picture" alt="User image">
      <p class="user-name">{{ user.name }}</p>
      <a @click="changeUserName" class="switch-text">Switch accounts?</a>
    </div>
</template>

<script>
export default {

  name: "app-user-display",
  prop: ['user'],
  mnethods: {
    changeUserName() {
      const result = window.confirm("Are you sure, this will log you out.");
      if (result) this.$store.dispatch("user/removeUser");
      this.$store.commit('songs/SET_SONGS', [])
    }
  }
};
</script>

<style>

</style>

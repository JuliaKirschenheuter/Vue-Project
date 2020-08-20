<template>
  <div class="wrapper page container">
    <login-page v-if="!isAuthenticated"></login-page>
    <div v-else> {{user}} </div>
  </div>
</template>

<script>
import LoginPage from "@/views/LoginPage";
import { mapState, mapGetters } from 'vuex';
export default {
  name: "AdminArea",
  components: {LoginPage},

  computed: {
    ...mapState({
      user:  state => state.auth.user
    }),

    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated'
    })
  }


}
</script>

<style scoped>

</style>

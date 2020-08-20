<template>

    <form @submit.prevent="submit">
      <p>
        <input v-model="email" placeholder="email"/>
      </p>
      <p>
        <input v-model="password" placeholder="password" type="password"/>
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: "LoginPage",

  data() {
    return {
      email: 'demo@email',
      password: 'password'
    }
  },

  methods: {
    ...mapActions('auth', {
      login: 'login'
    }),

    submit() {
      this.login({email: this.email, password: this.password}).catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>

</style>

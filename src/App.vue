<template>
  <div id="app">
    <div class="wrapper bg-grey">
      <header class="header">
        <div>
          <h1>
            <router-link :to="{name: 'index'}">
              <img src="@/assets/logo.svg" alt="Meetups" />
            </router-link>
          </h1>
        </div>
        <nav>
          <router-link v-if="$route.meta.showBackToList" :to="{name: 'index'}">&larr; Вернуться к списку</router-link>
          <router-link :to="{name: 'admin-area'}">Вход для админа</router-link>
          <router-link :to="{name: 'new-meetup'}">Создать митап</router-link>
        </nav>
      </header>
      <main class="main">
        <router-view></router-view>
      </main>
      <footer class="footer">
        <div class="container">
          2020. learn JS
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
  };
</script>

<style></style>

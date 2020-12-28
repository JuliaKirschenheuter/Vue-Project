<template>
  <div id="app">
    <div class="wrapper bg-grey">
      <header class="header">
        <div>
          <h1>
            <a href="/">
              <img src="@/assets/logo.svg" alt="Meetups" />
            </a>
          </h1>
        </div>
        <nav>
          <a href="#">Вход</a>
          <a href="#">Регистрация</a>
          <a href="#">Создать митап</a>
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
